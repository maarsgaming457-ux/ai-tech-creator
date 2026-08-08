import os
import requests
import time
from dotenv import load_dotenv

load_dotenv()

last_call_time = 0

API_KEY = os.getenv("MISTRAL_API_KEY")

def generate_post(prompt):
    global last_call_time
    current_time = time.time()
    
    if current_time - last_call_time < 5:
        print("❌ BLOCKED: Too fast request")
        return {
            "success": False,
            "error": "Please wait 5 seconds before next request."
        }
        
    last_call_time = current_time
    
    print("✅ API CALLED ONCE")
    print("User triggered request")
    print("Time:", time.time())
    
    print("=== AI CALL START ===")
    print("API KEY:", API_KEY)
    print(f"DEBUG: Prompt length = {len(prompt)}")

    if not API_KEY:
        print("ERROR: Missing Mistral API Key in environment")
        raise Exception("Missing Mistral API Key")

    url = "https://api.mistral.ai/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "mistral-small-latest",
        "messages": [
            {"role": "user", "content": prompt}
        ]
    }

    response = None
    for attempt in range(2):
        try:
            response = requests.post(url, json=data, headers=headers, timeout=10)
            if response.status_code == 200:
                break
            if response.status_code == 429:
                print("⚠️ RATE LIMIT HIT → RETRYING...")
                time.sleep(5)
            else:
                break
        except Exception as e:
            if attempt == 1:
                import traceback
                print("ERROR during API request:", str(e))
                traceback.print_exc()
                raise e
            time.sleep(5)

    if response.status_code == 429:
        return {
            "success": False,
            "error": "Rate limit exceeded. Try again later."
        }
        
    if response.status_code != 200:
        print("ERROR: Mistral API failed with response:", response.text)
        raise Exception(f"Mistral API failed: {response.text}")

    print("RAW RESPONSE:", response.text)
    return response.json()["choices"][0]["message"]["content"]