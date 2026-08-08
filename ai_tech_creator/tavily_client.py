import random
from tavily import TavilyClient
from .config import TAVILY_API_KEY

QUERIES = [
    "AI system failures in production",
    "LLM scaling issues real world",
    "machine learning deployment problems",
    "vector database limitations production",
    "AI agents reliability issues"
]

def generate_search_query(domain: str) -> str:
    """Fallback search query generation (LLM removed)."""
    return f"{domain} real-world engineering problems"

def fetch_trend_from_tavily(domain: str = None, agent_id: str = None, cycle_id: str = None):
    """Fetches high-quality engineering discussions using a hybrid Tavily Search."""
    if not TAVILY_API_KEY or TAVILY_API_KEY == "your_api_key_here":
        return None, None
        
    try:
        client = TavilyClient(api_key=TAVILY_API_KEY)
        
        if domain:
            if random.random() < 0.7:
                query_templates = [
                    f"{domain} failures in production",
                    f"{domain} scaling issues",
                    f"{domain} real-world engineering problems",
                    f"{domain} architecture bottlenecks",
                    f"{domain} deployment challenges"
                ]
                query = random.choice(query_templates)
            else:
                query = generate_search_query(domain)
        else:
            query = random.choice(QUERIES)
        
        response = client.search(
            query=query,
            search_depth="advanced",
            max_results=5
        )
        return query, response.get("results", [])
    except Exception:
        return None, []

def extract_raw_trend(results) -> tuple[str, str]:
    """Extracts a usable snippet and URL from Tavily search results."""
    if not results:
        return None, None
        
    def get_url_score(url):
        score = 0
        url_lower = url.lower()
        if any(term in url_lower for term in ["github", "arxiv", "engineering", "blog", "tech", "incident"]):
            score += 2
        if any(term in url_lower for term in ["marketing", "listicle", "top-10", "top10", "forbes", "news"]):
            score -= 5
        return score
        
    scored_results = sorted(results, key=lambda r: get_url_score(r.get("url", "")), reverse=True)
        
    for res in scored_results:
        content = res.get("content", "")
        url = res.get("url", "")
        
        if get_url_score(url) < 0:
            continue
            
        if len(content.split()) > 30:
            trimmed = content[:250].strip() + "..."
            return trimmed, url
            
    return None, None
