import asyncio
import time
import uuid
import random
from fastapi import APIRouter, BackgroundTasks
from pydantic import BaseModel
import re
from ai_tech_creator.post_generator import generate_post
from services.db_service import save_user_post

router = APIRouter(tags=["agent"])

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
    """Generate a structured 6-line post based on the topic using Mistral."""
    
    recent_texts = [p["post"] for p in AGENT_POSTS[:5]]
    avoidance_context = "\\n".join([f"- {text[:100]}..." for text in recent_texts]) if recent_texts else "None"
    
    chosen_style = random.choice(STYLES)
    chosen_hook = random.choice(HOOKS)
    chosen_platform = random.choice(PLATFORMS)
    
    prompt = f"""
You are a top-tier AI Viral Content Engine.
Your task is to write a scroll-stopping post for: {chosen_platform}
Topic: {topic}
Style: {chosen_style}
Hook Strategy: {chosen_hook}

CRITICAL INSTRUCTION TO PREVENT REPETITION:
You MUST NOT generate a post that sounds similar to these recently generated posts:
{avoidance_context}

PROCESS:
1. Brainstorm 3 distinct hooks based on the strategy.
2. Score each hook from 1-100 on viral potential.
3. Select the best hook.
4. Write the final content using that hook.

OUTPUT FORMAT:
You MUST wrap your brainstorming and scoring (Steps 1-3) inside <thinking>...</thinking> tags.
Then, output ONLY the final post text outside the tags.

CONTENT REQUIREMENTS:
- If {chosen_platform} is Twitter or Threads, format the content as a cohesive thread (multiple paragraphs).
- Otherwise, output exactly 3 to 6 meaningful body lines.
- Each line on a new line (use proper spacing for readability).
- Human-like tone (conversational, not robotic).
- Include 5 to 8 highly relevant hashtags at the very end.
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
    
    # Force line breaks failsafe if model ignores formatting
    content = content.replace(". ", ".\\n")
    
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
        
        # 4. Sleep for 2 hours (7200 seconds) for real SaaS scheduling
        await asyncio.sleep(7200)

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
    post = await post_generation(topic)
    return {
        "success": True,
        "post": post["post"],
        "topic": post["topic"]
    }
