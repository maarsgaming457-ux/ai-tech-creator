from fastapi import FastAPI, HTTPException, BackgroundTasks, Request
from pydantic import BaseModel
import uuid
import uvicorn
import asyncio
import random
import datetime

from .tavily_client import fetch_trend_from_tavily, extract_raw_trend
from .filter import is_low_quality_raw_trend, is_high_signal_trend, filter_topics
from .topic_generator import (
    generate_topics, 
    enhance_topic, 
    convert_trend_to_topic,
    score_topic
)
from .post_generator import generate_post
from .publisher import publish_post
from .memory import save_topic, is_duplicate

app = FastAPI(title="AI Tech Creator API")

# In-memory storage
agents = {}

class PersonaRequest(BaseModel):
    name: str
    domain: str

class AgentInitRequest(BaseModel):
    persona: PersonaRequest

class AgentInitResponse(BaseModel):
    agentId: str

def build_persona_prompt(persona_name: str, domain: str) -> str:
    return f"""IDENTITY: You are {persona_name}, an elite engineer strictly focused on the domain of '{domain}'.
CRITICAL RULE: You must NEVER drift outside of the '{domain}' domain. Every insight, failure mode, and technical trade-off you discuss must be tightly bound to '{domain}'.
Your thinking style: You build real-world systems, debug production issues, you have strong technical opinions, you value depth over popularity.
Your writing style: Sharp and direct, insight-driven (not explanatory), slightly opinionated, no fluff, no storytelling, no generic motivation."""

import time

def generate_and_store_post(agent_id: str, attempt: int = 1) -> bool:
    """Generates a post with a strict validation cycle and stores it."""
    agent = agents.get(agent_id)
    if not agent:
        return False
        
    start_time = time.time()
    cycle_id = uuid.uuid4().hex[:6]
    persona_prompt = agent["persona_prompt"]
    memory_state = agent["memory"]
    print(f"\n[CYCLE {cycle_id}] [START] attempt={attempt} | agent={agent_id}")
    print(f"[CYCLE {cycle_id}] [HEARTBEAT] alive | agent={agent_id}")
    
    # Rate limit check (Before generating)
    now = datetime.datetime.utcnow()
    if agent["last_post_time"] is not None:
        time_diff = (now - agent["last_post_time"]).total_seconds()
        if time_diff < 600:  # 10 minutes
            print(f"[CYCLE {cycle_id}] [SKIPPED] reason=rate_limit | agent={agent_id}")
            agent["last_cycle_status"] = "skipped_rate_limit"
            print(f"[CYCLE {cycle_id}] [STATUS] {agent['last_cycle_status']} | agent={agent_id}")
            return False
            
    try:
        start_time = time.time()
        print(f"\n[CYCLE {cycle_id}] [START] attempt={attempt} | agent={agent_id}")
        topics = []
        
        # Step 1: Gather Candidates
        candidate_topics = []
        source_mapping = {}
        
        query, results = fetch_trend_from_tavily(agent["domain"], agent_id=agent_id, cycle_id=cycle_id)
        raw_topic, source_url = extract_raw_trend(results)
        
        if raw_topic:
            print(f"[CYCLE {cycle_id}] [RAW TOPIC] {raw_topic[:50]}... | agent={agent_id}")
            if any(word in raw_topic.lower() for word in ["overview", "introduction", "basics"]):
                print(f"[CYCLE {cycle_id}] [REJECTED] reason=low_freshness | agent={agent_id}")
            elif not is_low_quality_raw_trend(raw_topic):
                if is_high_signal_trend(raw_topic):
                    converted_topic = convert_trend_to_topic(raw_topic, "tavily", persona_prompt)
                    if converted_topic:
                        candidate_topics.append(converted_topic)
                        source_mapping[converted_topic] = [source_url] if source_url else [query]
                        print(f"[CYCLE {cycle_id}] [SOURCE] {source_mapping[converted_topic][0]} | agent={agent_id}")
                else:
                    print(f"[CYCLE {cycle_id}] [FILTER REJECTED] reason=low_signal | agent={agent_id}")
            else:
                print(f"[CYCLE {cycle_id}] [FILTER REJECTED] reason=low_quality_raw | agent={agent_id}")
        
        # Fill remaining candidates with internal generator
        more_topics = generate_topics(persona_prompt)
        for mt in more_topics:
            if len(candidate_topics) >= 3:
                break
            candidate_topics.append(mt)
            source_mapping[mt] = ["internal_generator"]
            
        # Step 2: Competition
        valid_candidates = []
        for c in candidate_topics:
            if c in agent["used_topics"]:
                print(f"[CYCLE {cycle_id}] [REJECTED] reason=duplicate_topic | agent={agent_id}")
            elif is_duplicate(c, memory_state):
                print(f"[CYCLE {cycle_id}] [REJECTED] reason=semantic_duplicate | agent={agent_id}")
            else:
                valid_candidates.append(c)
                
        if not valid_candidates:
            print(f"[CYCLE {cycle_id}] [STATUS] rejected_all_candidates | agent={agent_id}")
            return False
            
        best_topic = None
        best_score = -1
        
        for c in valid_candidates:
            score_dict = score_topic(c, persona_prompt)
            total = sum(score_dict.values())
            print(f"[CYCLE {cycle_id}] [CANDIDATE SCORE] depth={score_dict['technical_depth']} novelty={score_dict['novelty']} relevance={score_dict['real_world_relevance']} | agent={agent_id}")
            
            if total > best_score:
                if best_topic:
                    agent["recent_rejections"].append(best_topic)
                    print(f"[CYCLE {cycle_id}] [REJECTED TOPIC] reason=outscored | topic={best_topic[:50]}... | agent={agent_id}")
                best_topic = c
                best_score = total
            else:
                agent["recent_rejections"].append(c)
                print(f"[CYCLE {cycle_id}] [REJECTED TOPIC] reason=outscored | topic={c[:50]}... | agent={agent_id}")
                
        # Keep only the last 3 rejections
        agent["recent_rejections"] = agent["recent_rejections"][-3:]
        
        print(f"[CYCLE {cycle_id}] [SELECTED TOPIC] score={best_score} | agent={agent_id}")
        
        # Step 3: Enhance and Generate
        enhanced_topic = enhance_topic(best_topic, persona_prompt)
        print(f"[CYCLE {cycle_id}] [ENHANCED TOPIC] {enhanced_topic[:50]}... | agent={agent_id}")
        
        post, rationale = generate_post(
            enhanced_topic, 
            attempt=1, 
            persona_prompt=persona_prompt, 
            agent_id=agent_id, 
            cycle_id=cycle_id,
            recent_rejections=agent["recent_rejections"]
        )
        
        source_list = source_mapping[best_topic]
        
        # Final save validation
        if not post or not rationale:
            print(f"[CYCLE {cycle_id}] [REJECTED] reason=validation_failed | agent={agent_id}")
            agent["last_cycle_status"] = "rejected_rationale"
            print(f"[CYCLE {cycle_id}] [STATUS] {agent['last_cycle_status']} | agent={agent_id}")
            return False
            
        if not source_list or len(source_list) == 0:
            print(f"[CYCLE {cycle_id}] [REJECTED] reason=no_sources | agent={agent_id}")
            agent["last_cycle_status"] = "rejected_no_sources"
            print(f"[CYCLE {cycle_id}] [STATUS] {agent['last_cycle_status']} | agent={agent_id}")
            return False
        
        agent["used_topics"].add(best_topic)
        save_topic(enhanced_topic, memory_state)
        
        # Ensure ISO 8601 format
        created_at = datetime.datetime.utcnow().isoformat() + "Z"
        
        post_id = f"p_{int(time.time())}_{uuid.uuid4().hex[:4]}"
        
        agent["posts"].append({
            "id": post_id,
            "createdAt": created_at,
            "text": post,
            "rationale": rationale,
            "sources": source_list
        })
        
        # Soft Memory Limit (Stability)
        if len(agent["posts"]) > 100:
            agent["posts"] = agent["posts"][-100:]
            
        agent["last_post_time"] = datetime.datetime.utcnow()
        agent["last_cycle_status"] = "success"
        publish_post(post)
        
        duration = time.time() - start_time
        print(f"[CYCLE {cycle_id}] [POST CREATED] agent={agent_id} | topic={best_topic}")
        print(f"[CYCLE {cycle_id}] [DURATION] {duration:.2f}s | agent={agent_id}")
        print(f"[CYCLE {cycle_id}] [STATUS] {agent['last_cycle_status']} | agent={agent_id}")
        print(f"[CYCLE {cycle_id}] [VISIBLE OUTPUT] post_ready_for_feed | agent={agent_id}")
        return True
        
    except Exception as e:
        print(f"[CYCLE {cycle_id}] [ERROR] cycle_failed | reason={e} | agent={agent_id}")
        agent["last_cycle_status"] = "error"
        print(f"[CYCLE {cycle_id}] [STATUS] {agent['last_cycle_status']} | agent={agent_id}")
        return False

async def agent_loop(agent_id: str):
    """The autonomous background loop that generates content for this specific agent."""
    print(f"[AGENT {agent_id}] Starting background loop...")
    while True:
        try:
            max_attempts = 3
            success = False
            
            for attempt in range(max_attempts):
                success = await asyncio.to_thread(generate_and_store_post, agent_id, attempt+1)
                
                if success:
                    # generate_and_store_post does the POST CREATED log, here we just break
                    break
                else:
                    # If rate limited, exit retry loop to avoid immediate bursts
                    agent = agents[agent_id]
                    now = datetime.datetime.utcnow()
                    if agent["last_post_time"] is not None and (now - agent["last_post_time"]).total_seconds() < 600:
                        break
                    print(f"[RETRYING] attempt {attempt+1} | agent={agent_id}")
                    if attempt < max_attempts - 1:
                        await asyncio.sleep(random.randint(5, 10))
            
            if success:
                # Sleep for 15-40 minutes + jitter
                sleep_time = random.randint(900, 2400) + random.randint(-180, 180)
                # Enforce minimum gap of 10 minutes
                sleep_time = max(600, sleep_time)
                print(f"[NEXT POST IN] {sleep_time // 60} minutes | agent={agent_id}")
            else:
                print(f"[CYCLE FAILED] reason=max_retries_exceeded | agent={agent_id}")
                # Short backoff on total failure before next cycle
                sleep_time = random.randint(30, 60)
                
            await asyncio.sleep(sleep_time)
            
        except Exception as e:
            print(f"[CRASH RECOVERED] {str(e)} | agent={agent_id}")
            await asyncio.sleep(10)

@app.post("/api/agent/init", response_model=AgentInitResponse)
async def init_agent(req: AgentInitRequest, background_tasks: BackgroundTasks):
    """Initializes a new agent and starts its background generation loop."""
    agent_id = str(uuid.uuid4())
    persona_prompt = build_persona_prompt(req.persona.name, req.persona.domain)
    
    agent_data = {
        "agentId": agent_id,
        "persona_name": req.persona.name,
        "domain": req.persona.domain,
        "persona_prompt": persona_prompt,
        "posts": [],
        "last_post_time": None,
        "last_cycle_status": None,
        "used_topics": set(),
        "recent_rejections": [],
        "memory": {
            "used_topics": set(),
            "embeddings": []
        }
    }
    agents[agent_id] = agent_data
    
    # Guarantee feed is never empty by generating initial post synchronously
    for attempt in range(3):
        if await asyncio.to_thread(generate_and_store_post, agent_id, attempt+1):
            break
        print(f"[RETRYING] attempt {attempt+1} | agent={agent_id}")
        await asyncio.sleep(random.randint(5, 10))
    
    # Start the autonomous process
    background_tasks.add_task(agent_loop, agent_id)
    
    return {"agentId": agent_id}

@app.get("/api/agent/feed")
def get_feed(agentId: str):
    """Retrieves the feed (posts) for a specific agent, ordered newest first."""
    try:
        if agentId not in agents:
            return {"posts": []}
            
        posts = agents[agentId].get("posts", [])
        
        # Ensure posts sorted by createdAt DESC and no duplicate IDs
        unique_posts = {}
        for p in posts:
            if not p.get("id") or not p.get("createdAt") or not p.get("text") or not p.get("rationale") or not p.get("sources"):
                continue # Skip posts with missing/empty fields
            unique_posts[p["id"]] = p
            
        deduplicated = list(unique_posts.values())
        sorted_posts = sorted(deduplicated, key=lambda x: x["createdAt"], reverse=True)
        
        return {"posts": sorted_posts}
    except Exception as e:
        print(f"[ERROR] Failed to generate feed output: {e}")
        return {"posts": []}

@app.get("/health")
def health_check():
    """Health check endpoint for production monitoring."""
    return {"status": "running"}

@app.api_route("/chat", methods=["GET", "POST"])
async def chat(request: Request):
    if request.method == "POST":
        try:
            data = await request.json()
        except:
            data = {}
        
        prompt = data.get("message", "").strip()
        if not prompt:
            return {"error": "No message provided"}
            
        try:
            reply = await asyncio.to_thread(generate_post, prompt)
            return {"reply": reply}
        except Exception:
            return {"error": "Mistral API failed"}
            
    return {"message": "Chat endpoint is working"}

if __name__ == "__main__":
    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=True)
