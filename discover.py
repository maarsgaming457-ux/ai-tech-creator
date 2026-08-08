import requests

base = "https://api.thebreeth.com"

endpoints = [
    "",
    "/v1",
    "/v1/models",
    "/v1/text",
    "/v1/ai",
    "/v1/generate",
    "/v1/chat",
    "/v1/completions",
    "/api",
    "/api/v1",
    "/generate"
]

for ep in endpoints:
    url = base + ep
    try:
        res = requests.get(url)
        print("TEST:", url)
        print("STATUS:", res.status_code)
        print("BODY:", res.text[:200])
        print("------")
    except Exception as e:
        print("ERROR:", e)