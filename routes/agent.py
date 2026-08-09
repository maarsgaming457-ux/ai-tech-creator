import os
import asyncio
import time
import uuid
import random
from fastapi import APIRouter, BackgroundTasks
from pydantic import BaseModel
import re
from ai_tech_creator.post_generator import generate_post
from services.db_service import save_user_post
from tavily import TavilyClient

router = APIRouter(tags=["agent"])

tavily = TavilyClient(api_key=os.getenv("TAVILY_API_KEY"))

# --- Cache ---
tavily_cache = {}

def get_latest_context(topic):
    try:
        response = tavily.search(
            query=topic,
            max_results=2,              # LIMIT results (cost saving)
            search_depth="basic",       # cheaper than advanced
            include_answer=True,        # short summary
            include_raw_content=False,  # avoid large data
            topic="news",               # focus on latest
            time_range="hour"           # latest events only
        )

        # Extract only useful text
        answer = response.get("answer", "")
        results = response.get("results", [])

        snippets = " ".join([r.get("content", "") for r in results])

        # FINAL SMALL CONTEXT
        context = f"{answer}\\n{snippets}"

        return context[:1000]  # HARD LIMIT (token control)

    except Exception as e:
        print("Tavily error:", e)
        return ""

def get_cached_context(topic):
    if topic in tavily_cache:
        return tavily_cache[topic]
    
    context = get_latest_context(topic)
    if not context:
        context = "General knowledge about the topic"
        
    tavily_cache[topic] = context
    return context

# --- In-Memory State ---
AGENT_POSTS = []
TOPICS_SEEN = set()
IS_AGENT_RUNNING = False
CURRENT_TOPIC = "technology"

STYLES = [
    "storytelling - A compelling personal or professional anecdote.",
    "opinion - A strong, contrarian opinion challenging the status quo.",
    "educational - A highly actionable, step-by-step 'how-to' guide or framework.",
    "motivational - An inspiring, mindset-shifting realization.",
    "prediction - A visionary, futuristic prediction about where the industry is heading."
]

HOOKS = [
    "Start with a controversial statement.",
    "Start with a shocking statistic or fact.",
    "Start with a raw, vulnerable admission.",
    "Start with a counter-intuitive piece of advice.",
    "Start with a direct question to the reader's pain points.",
    "Start with an 'I used to believe X, until Y' statement."
]

PLATFORMS = ['LinkedIn', 'Twitter', 'Instagram', 'Threads']

class InitRequest(BaseModel):
    topic: str = "technology"

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
    """Generate a structured post based on the topic using Mistral."""
    
    recent_texts = [p["post"] for p in AGENT_POSTS[:5]]
    avoidance_context = "\\n".join([f"- {text[:100]}..." for text in recent_texts]) if recent_texts else "None"
    
    chosen_style = random.choice(STYLES)
    chosen_hook = random.choice(HOOKS)
    chosen_platform = random.choice(PLATFORMS)
    tone = random.choice(["bold", "storytelling", "controversial", "minimal"])
    
    context = get_latest_context(topic) + f"\\nVariation seed: {random.randint(1,100000)}"
    
    prompt = f"""
You are a viral content creator for LinkedIn and social media.

========================================
🎯 GOAL
========================================
Generate HIGH-QUALITY viral posts with:
- 5 to 7 SHORT lines
- Each line separated properly (real newline, not \\n)
- Strong hook in first line
- Easy readable format
- Professional + engaging tone

========================================
🧠 CONTENT STRUCTURE (MANDATORY)
========================================
Line 1 → Hook (attention grabbing)
Line 2 → Insight / trend
Line 3 → Real-world relevance
Line 4 → Advice or takeaway
Line 5 → Future / opportunity
(Optional Line 6–7 → Bonus insight)

========================================
📌 FORMAT RULES (VERY IMPORTANT)
========================================
- DO NOT return single paragraph
- DO NOT use "\\n"
- Use REAL line breaks
- Each sentence MUST be on a new line
- Keep each line short (max 12–15 words)

========================================
LATEST REAL-WORLD INFORMATION
========================================
Use the following context to ensure the post is highly relevant and up-to-date:
{context}

========================================
CRITICAL INSTRUCTION TO PREVENT REPETITION
========================================
You MUST generate a COMPLETELY DIFFERENT post.
Use a new angle, new hook, new structure.

Strictly avoid:
- Similar opening line
- Same examples
- Same sentence patterns

If similar → REWRITE COMPLETELY.

Recently generated posts:
{avoidance_context}

========================================
🏷️ HASHTAGS
========================================
At the end, add 3–5 hashtags like:
#AI #Technology #Innovation #Career

========================================
📥 INPUT
========================================
Topic: {topic}
Platform: {chosen_platform}
Style: {chosen_style}
Hook Strategy: {chosen_hook}
Tone: {tone}

========================================
📤 OUTPUT EXAMPLE
========================================
AI is changing the world faster than ever.

Every industry is being reshaped by automation.
Skills are becoming more important than degrees.
Practical knowledge is the new currency.
Those who adapt will lead the future.
Those who don’t will struggle to survive.

#AI #Tech #Future

========================================
🚫 STRICT RULES
========================================
- Minimum 5 lines
- Maximum 7 lines
- Clean formatting only
- No paragraph block
- Output your reasoning inside <thinking>...</thinking> tags first.

========================================
OUTPUT ONLY THE FINAL POST (after the thinking block)
========================================
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
                # Force unique output check
                # Note: content contains <thinking> tags, so we strip them for the check
                clean_content = content
                if "<thinking>" in clean_content and "</thinking>" in clean_content:
                    clean_content = re.sub(r'<thinking>.*?</thinking>', '', clean_content, flags=re.DOTALL).strip()
                
                if clean_content in recent_texts:
                    print("Duplicate detected → regenerating...")
                    attempts += 1
                    continue
                
                break
                
            print("Regenerating invalid output...")
            attempts += 1
        except Exception as e:
            print("Error generating post:", str(e))
            await asyncio.sleep(5)
            attempts += 1
            
    content = content.strip() if content else ""
    
    # Strip <thinking> tags to get the final post
    if "<thinking>" in content and "</thinking>" in content:
        content = re.sub(r'<thinking>.*?</thinking>', '', content, flags=re.DOTALL).strip()
    
    # HANDLE EMPTY RESPONSE (IMPORTANT)
    if not content or len(content) < 20:
        content = f"""{topic.title()} is transforming industries at a rapid pace.
It plays a crucial role in innovation and real-world problem solving.
Students and professionals must focus on practical skills.
Hands-on projects are key to mastering this field.
The future of {topic} holds immense opportunities."""
        
    print("FINAL TOPIC:", topic)
    print("FINAL POST:", content)
    
    post_text = f"[{chosen_platform}]\\n\\n{content.strip()}"
    
    post = {
        "id": str(uuid.uuid4()),
        "createdAt": time.time(),
        "topic": str(topic),
        "post": post_text,
        "rationale": "High engagement probability based on real-time LLM analysis.",
        "sources": ["LLM Generation", "Domain Trends"]
    }
    
    # Save to database
    try:
        db_post = {
            "topic": str(topic),
            "post": post_text,
            "rationale": f"Style: {chosen_style} | Strategy: {chosen_hook}",
            "status": "PUBLISHED",
            "category": chosen_platform,
            "timestamp": time.time()
        }
        # Hardcoding user_id=1 for the autonomous agent global feed
        save_user_post(1, db_post)
    except Exception as e:
        print("Failed to save post to DB:", e)
        
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
        
        # 4. Sleep for 45 seconds
        await asyncio.sleep(45)

@router.post("/agent/init")
async def init_agent(req: InitRequest, background_tasks: BackgroundTasks):
    global IS_AGENT_RUNNING, CURRENT_TOPIC
    
    # Update topic if provided (otherwise defaults to "technology")
    received_topic = req.topic.strip() if req.topic else ""
    if not received_topic:
        received_topic = "technology"
        
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

@router.post("/agent/generate")
async def manual_generate(req: InitRequest):
    topic = req.topic.strip() if req.topic else "technology"
    
    # 1. AWAIT the generation instead of pushing it to the background
    # This prevents the placeholder issue
    post = await post_generation(topic)
    
    AGENT_POSTS.insert(0, post)
    if len(AGENT_POSTS) > 100:
        AGENT_POSTS.pop()
            
    # 2. Extract the actual content string from the post object
    content = post.get("post", "").strip()
    
    print("FINAL OUTPUT:", content)
    
    # 3. Return the exact payload expected by frontend (and support requested structure)
    return {
        "success": True,
        "post": content,
        "topic": topic,
        "content": content,
        "timestamp": post.get("createdAt")
    }
