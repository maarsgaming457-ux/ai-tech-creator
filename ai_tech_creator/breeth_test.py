import requests

API_KEY = "YOUR_ck_live_key"

headers = {
    "Authorization": "Bearer " + API_KEY,
    "Content-Type": "application/json"
}

endpoints = [
    "/v1/chat",
    "/v1/completions",
    "/v1/text",
    "/v1/ai",
    "/v1/messages"
]

bodies = [
    {"prompt": "Hello"},
    {"message": "Hello"},
    {"input": "Hello"},
    {
        "messages": [
            {"role": "user", "content": "Hello"}
        ]
    }
]

base = "https://api.thebreeth.com"

for ep in endpoints:
    for body in bodies:
        url = base + ep
        try:
            res = requests.post(url, headers=headers, json=body, timeout=10)
            print("\nTEST:", url)
            print("BODY:", body)
            print("STATUS:", res.status_code)
            print("RESPONSE:", res.text)
            print("------")
        except Exception as e:
            print("ERROR:", e)