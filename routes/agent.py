import asyncio
import time
import uuid
import random
from fastapi import APIRouter, BackgroundTasks

router = APIRouter(tags=["agent"])

# --- In-Memory State ---
AGENT_POSTS = []
TOPICS_SEEN = set()
IS_AGENT_RUNNING = False

# Mock topic generation dictionary for the agent
POTENTIAL_TOPICS = [
    "The Future of AGI",
    "FastAPI vs Node.js for AI startups",
    "Why fine-tuning is better than RAG",
    "Open Source LLMs catching up to GPT-4",
    "How glassmorphism improves SaaS UX",
    "React Server Components explained",
    "The death of the junior developer?",
    "Why you should use Cursor IDE",
    "Prompt Engineering is a fading skill",
    "Deploying AI models on Render vs Vercel"
]

def topic_discovery():
    """Discover a new topic that hasn't been seen before."""
    available_topics = [t for t in POTENTIAL_TOPICS if t not in TOPICS_SEEN]
    if not available_topics:
        # If we run out, simulate generating a novel combination
        return f"Advanced AI insights on {random.randint(1000, 9999)}"
    return random.choice(available_topics)

def editorial_filtering(topic):
    """Filter out bad topics (simulated)."""
    # For now, all topics pass the filter
    return True

def post_generation(topic):
    """Generate the actual post content based on the topic."""
    post = {
        "id": str(uuid.uuid4()),
        "createdAt": time.time(),
        "topic": topic,
        "text": f"🚀 Let's talk about {topic}. The industry is shifting rapidly. Are you prepared for the next wave of innovation? Thoughts?",
        "rationale": "High engagement probability based on recent Twitter/LinkedIn trends.",
        "sources": ["Simulated Web Search", "Twitter Trends"]
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
            post = post_generation(topic)
            
            # Insert at the beginning so the feed is reverse-chronological
            AGENT_POSTS.insert(0, post)
            print(f"🤖 Agent generated new post on: {topic}")
            
            # Keep memory clean if it gets too large
            if len(AGENT_POSTS) > 100:
                AGENT_POSTS.pop()
        
        # 4. Sleep to simulate time between posts (e.g. 15 seconds)
        await asyncio.sleep(15)

@router.post("/agent/init")
async def init_agent(background_tasks: BackgroundTasks):
    global IS_AGENT_RUNNING
    
    if IS_AGENT_RUNNING:
        return {"success": True, "message": "Agent is already running in the background."}
        
    IS_AGENT_RUNNING = True
    # Start the agent loop without blocking the API response
    asyncio.create_task(agent_loop())
    
    return {"success": True, "message": "Autonomous Agent initialized and started."}

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
