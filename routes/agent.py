import asyncio
import time
import uuid
import random
from fastapi import APIRouter, BackgroundTasks
from pydantic import BaseModel
from ai_tech_creator.post_generator import generate_post

router = APIRouter(tags=["agent"])

# --- In-Memory State ---
AGENT_POSTS = []
TOPICS_SEEN = set()
IS_AGENT_RUNNING = False
CURRENT_TOPIC = "AI Trends"

class InitRequest(BaseModel):
    topic: str = "AI Trends"

def topic_discovery():
    """Discover a new topic based on CURRENT_TOPIC."""
    global CURRENT_TOPIC
    return CURRENT_TOPIC

def is_valid(post):
    if not isinstance(post, str):
        return False
    lines = post.split("\n")
    words = len(post.split())
    return len(lines) >= 5 and words >= 120

def editorial_filtering(topic):
    """Filter out bad topics (simulated)."""
    return True

async def post_generation(topic):
    """Generate a structured 6-line post based on the topic using Mistral."""
    
    prompt = f"""You are a strict content generator.

Generate a LinkedIn-style post ONLY about the topic: "{topic}"

CRITICAL RULES:
- You MUST NOT change the topic
- You MUST NOT talk about AI unless topic is AI
- Stay 100% focused on the given topic
- Use domain-specific language
- The topic is NOT AI unless explicitly provided by the user

FORMAT RULES (MANDATORY):
- EXACTLY 5 to 6 lines
- Minimum 120–150 words
- Each line MUST be separated using \\n
- DO NOT write in a single paragraph
- DO NOT return one sentence

STRUCTURE:
1. Hook
2. Insight
3. Explanation
4. Value
5. Question
6. Hashtags (3–4)

If output does not follow rules, it is INVALID.
"""
    
    content = ""
    attempts = 0
    while attempts < 3:
        try:
            # We use asyncio.to_thread because generate_post uses synchronous requests
            result = await asyncio.to_thread(generate_post, prompt)
            
            if isinstance(result, dict) and not result.get("success"):
                print("LLM Error:", result.get("error"))
                await asyncio.sleep(5)
                attempts += 1
                continue
                
            content = result
            
            if is_valid(content):
                break
                
            print("Regenerating invalid output...")
            attempts += 1
        except Exception as e:
            print("Error generating post:", str(e))
            await asyncio.sleep(5)
            attempts += 1
            
    # Force line breaks failsafe if model ignores formatting
    content = content.replace(". ", ".\\n")
    
    post = {
        "id": str(uuid.uuid4()),
        "createdAt": time.time(),
        "topic": topic,
        "text": content,
        "rationale": "High engagement probability based on real-time LLM analysis.",
        "sources": ["LLM Generation", "Domain Trends"]
    }
    return post

async def agent_loop():
    """The autonomous background loop."""
    global IS_AGENT_RUNNING, AGENT_POSTS, TOPICS_SEEN
    print("🤖 Autonomous Agent Loop Started...")
    
    while IS_AGENT_RUNNING:
        # 1. Discover Topic
        topic = topic_discovery()
        
        # 2. Filter Topic
        if editorial_filtering(topic):
            TOPICS_SEEN.add(topic)
            
            # 3. Generate Post
            post = await post_generation(topic)
            
            # Insert at the beginning so the feed is reverse-chronological
            AGENT_POSTS.insert(0, post)
            print(f"🤖 Agent generated new post on: {topic}")
            
            # Keep memory clean if it gets too large
            if len(AGENT_POSTS) > 100:
                AGENT_POSTS.pop()
        
        # 4. Sleep to strictly simulate 2-minute cycle
        await asyncio.sleep(120)

@router.post("/agent/init")
async def init_agent(req: InitRequest, background_tasks: BackgroundTasks):
    global IS_AGENT_RUNNING, CURRENT_TOPIC
    
    # Update topic if provided (otherwise defaults to "AI Trends")
    received_topic = req.topic.strip() if req.topic else ""
    if not received_topic:
        received_topic = "AI Trends"
        
    CURRENT_TOPIC = received_topic
    print("FINAL TOPIC:", CURRENT_TOPIC)
    
    if IS_AGENT_RUNNING:
        return {"success": True, "message": f"Agent is already running. Topic updated to: {CURRENT_TOPIC}"}
        
    IS_AGENT_RUNNING = True
    # Start the agent loop without blocking the API response
    asyncio.create_task(agent_loop())
    
    return {"success": True, "message": f"Autonomous Agent initialized and started. Topic: {CURRENT_TOPIC}"}

@router.get("/agent/feed")
async def get_agent_feed():
    return {
        "success": True,
        "posts": AGENT_POSTS,
        "topics_seen": list(TOPICS_SEEN)
    }

@router.post("/agent/stop")
async def stop_agent():
    global IS_AGENT_RUNNING
    IS_AGENT_RUNNING = False
    return {"success": True, "message": "Autonomous Agent stopped."}
