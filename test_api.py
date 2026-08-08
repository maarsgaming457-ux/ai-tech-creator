import requests

url = "https://api.breeth.ai/v1/generate"  # keep this

headers = {
    "Authorization": "Bearer YOUR_REAL_API_KEY",  # replace this
    "Content-Type": "application/json"
}

data = {
    "prompt": "Hello"
}

res = requests.post(url, headers=headers, json=data)

print("STATUS:", res.status_code)
print("RESPONSE:", res.text)