import os
import redis
from loguru import logger

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")

try:
    redis_client = redis.from_url(REDIS_URL, decode_responses=True)
    # Test connection
    redis_client.ping()
    logger.info("Connected to Redis successfully.")
except Exception as e:
    logger.warning(f"Failed to connect to Redis at {REDIS_URL}. Falling back to in-memory mode for caches. Error: {e}")
    redis_client = None
