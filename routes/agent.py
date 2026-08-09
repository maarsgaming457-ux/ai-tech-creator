import asyncio
import time
import uuid
import random
from fastapi import APIRouter, BackgroundTasks
from pydantic import BaseModel

router = APIRouter(tags=["agent"])

# --- In-Memory State ---
AGENT_POSTS = []
TOPICS_SEEN = set()
IS_AGENT_RUNNING = False
CURRENT_TOPIC = "AI Trends"

class InitRequest(BaseModel):
    topic: str = "AI Trends"

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
    """Discover a new topic based on CURRENT_TOPIC."""
    global CURRENT_TOPIC
    
    # Create slight variations to keep the feed fresh even on the same base topic
    variations = [
        f"The Future of {CURRENT_TOPIC}",
        f"Why {CURRENT_TOPIC} is shifting the industry",
        f"Unexpected trends in {CURRENT_TOPIC}",
        f"How developers are adopting {CURRENT_TOPIC}",
        f"The hidden reality of {CURRENT_TOPIC}",
        f"{CURRENT_TOPIC} and the next generation of SaaS",
        f"Mastering {CURRENT_TOPIC} in 2024"
    ]
    
    available = [t for t in variations if t not in TOPICS_SEEN]
    if not available:
        return f"{CURRENT_TOPIC} deep dive #{random.randint(100, 999)}"
        
    return random.choice(available)

def editorial_filtering(topic):
    """Filter out bad topics (simulated)."""
    # For now, all topics pass the filter
    return True

def post_generation(topic):
    """Generate a structured 6-line post based on the topic."""
    
    hooks = [
        f"Everything you thought you knew about {topic} is about to change. 🚀",
        f"The data is in, and {topic} is growing faster than anyone predicted. 📈",
        f"Are we looking at the end of traditional workflows with {topic}? 💡",
        f"I've been analyzing {topic} all week, and the results are staggering. 🔥"
    ]
    
    insights = [
        "What most people miss is how rapidly the underlying architecture is evolving.",
        "The real bottleneck isn't the technology itself, but how we adapt our systems.",
        "Early adopters are already seeing massive efficiency gains by leveraging this.",
        "We are shifting from manual configurations to entirely autonomous loops."
    ]
    
    explanations = [
        "This works by connecting real-time data streams directly into decision engines without human latency.",
        "By decentralizing the core logic, the system scales infinitely with minimal overhead.",
        "The underlying framework dynamically adjusts parameters based on live feedback loops.",
        "It effectively bridges the gap between raw data processing and intelligent output generation."
    ]
    
    trends = [
        "In the next 6 months, expect this to become the baseline standard for all SaaS products.",
        "Companies ignoring this shift will struggle to compete on speed and cost.",
        "This is no longer a fringe experiment; it's a core production requirement.",
        "We are entering an era where software writes itself and adapts on the fly."
    ]
    
    questions = [
        "How is your team preparing for this shift?",
        "What's your biggest concern with adopting this?",
        "Are you currently building with this in your stack?",
        "What do you think is the next logical step here?"
    ]
    
    hashtags = "#AI #Tech #SaaS #Innovation #Future"
    
    # Assemble the 6 lines
    lines = [
        random.choice(hooks),
        random.choice(insights),
        random.choice(explanations),
        random.choice(trends),
        random.choice(questions),
        hashtags
    ]
    
    content = "\n\n".join(lines)
    
    post = {
        "id": str(uuid.uuid4()),
        "createdAt": time.time(),
        "topic": topic,
        "text": content,
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
        
        # 4. Sleep to strictly simulate 2-minute cycle
        await asyncio.sleep(120)

@router.post("/agent/init")
async def init_agent(req: InitRequest, background_tasks: BackgroundTasks):
    global IS_AGENT_RUNNING, CURRENT_TOPIC
    
    # Update topic if provided (otherwise defaults to "AI Trends")
    if req.topic.strip():
        CURRENT_TOPIC = req.topic.strip()
    
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
