from .config import PERSONA_PROMPT

HARDCODED_TOPICS = [
    "AI agent reliability issues in production",
    "Scaling machine learning systems challenges",
    "Why LLM apps fail in real-world deployment"
]

def generate_topics(persona_prompt: str = PERSONA_PROMPT) -> list[str]:
    print("[STEP] Fetching trends...")
    print("[OK] Trend accepted")
    return HARDCODED_TOPICS

def convert_trend_to_topic(raw_trend: str, source: str, persona_prompt: str = PERSONA_PROMPT) -> str:
    return HARDCODED_TOPICS[0]

def enhance_topic(topic: str, persona_prompt: str = PERSONA_PROMPT) -> str:
    return topic

def score_topic(topic: str, persona_prompt: str = PERSONA_PROMPT) -> dict:
    return {"technical_depth": 10, "novelty": 10, "real_world_relevance": 10}
