import requests
import random
import datetime

USER_AGENT = "AITechCreatorBot/1.0"

def get_hn_trend() -> str:
    try:
        resp = requests.get("https://hacker-news.firebaseio.com/v0/topstories.json", timeout=10)
        if resp.status_code == 200:
            top_ids = resp.json()[:30]
            if not top_ids: return ""
            story_id = random.choice(top_ids)
            detail_resp = requests.get(f"https://hacker-news.firebaseio.com/v0/item/{story_id}.json", timeout=10)
            if detail_resp.status_code == 200:
                data = detail_resp.json()
                if data and 'title' in data:
                    return data['title']
    except Exception as e:
        print(f"[ERROR] Hacker News fetch failed: {e}")
    return ""

def get_github_trend() -> str:
    try:
        date_7_days_ago = (datetime.datetime.now() - datetime.timedelta(days=7)).strftime("%Y-%m-%d")
        url = f"https://api.github.com/search/repositories?q=created:>{date_7_days_ago}+topic:ai+topic:machine-learning&sort=stars&order=desc"
        headers = {"Accept": "application/vnd.github.v3+json"}
        resp = requests.get(url, headers=headers, timeout=10)
        if resp.status_code == 200:
            items = resp.json().get("items", [])
            if items:
                repo = random.choice(items[:10])
                desc = repo.get("description") or "No description"
                return f"{repo['name']}: {desc}"
    except Exception as e:
        print(f"[ERROR] GitHub fetch failed: {e}")
    return ""

def get_reddit_trend() -> str:
    subreddits = ["MachineLearning", "programming", "softwarearchitecture"]
    sub = random.choice(subreddits)
    try:
        url = f"https://www.reddit.com/r/{sub}/top.json?limit=15&t=day"
        headers = {"User-Agent": USER_AGENT}
        resp = requests.get(url, headers=headers, timeout=10)
        if resp.status_code == 200:
            children = resp.json().get("data", {}).get("children", [])
            if children:
                post = random.choice(children)
                return f"r/{sub}: {post['data'].get('title', '')}"
    except Exception as e:
        print(f"[ERROR] Reddit fetch failed: {e}")
    return ""

def get_random_raw_trend() -> dict:
    """Attempts to fetch a raw topic from a real-world source using weighted priority."""
    sources = [
        ("Hacker News", get_hn_trend, 0.50),
        ("GitHub Trending", get_github_trend, 0.35),
        ("Reddit", get_reddit_trend, 0.15)
    ]
    
    # Select one source based on weights
    selected = random.choices(sources, weights=[s[2] for s in sources], k=1)[0]
    source_name = selected[0]
    func = selected[1]
    
    raw_topic = func()
    if raw_topic:
        return {"source": source_name, "raw_topic": raw_topic.strip()}
            
    return None
