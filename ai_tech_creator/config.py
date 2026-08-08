from dotenv import load_dotenv
import os

load_dotenv()

BREETH_API_KEY = os.getenv("BREETH_API_KEY", "your_breeth_api_key")
BREETH_BASE_URL = "https://api.thebreeth.com/v1"
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")

PRIMARY_MODEL = "gpt-4o-mini"
FALLBACK_MODEL = "gpt-4o-mini"
MODEL_NAME = PRIMARY_MODEL

if not BREETH_API_KEY or BREETH_API_KEY == "your_breeth_api_key":
    print("[ERROR] BREETH_API_KEY is missing or invalid. Set it in .env")
else:
    print("KEY LOADED:", BREETH_API_KEY[:10])

SLEEP_INTERVAL = 300  # 5 minutes

PERSONA_PROMPT = """You are a senior AI engineer and system builder.
You have scaled systems to millions of users.
You talk about real-world engineering failures, hard lessons, and systems design.
You don't use hype words like "revolutionize" or "game changer".
You keep it practical, slightly cynical, and highly actionable.
"""
