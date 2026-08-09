import json
import re

log_file = r'C:\Users\maars\.gemini\antigravity\brain\03d017aa-033c-472d-9468-0fbed64dd790\.system_generated\logs\transcript_full.jsonl'
prompts = []
for line in open(log_file, 'r', encoding='utf-8'):
    try:
        data = json.loads(line)
        if data.get('type') == 'USER_INPUT':
            prompts.append(data['content'])
    except:
        pass

cleaned_prompts = []
for p in prompts:
    # extract content inside <USER_REQUEST>
    match = re.search(r'<USER_REQUEST>(.*?)</USER_REQUEST>', p, re.DOTALL)
    if match:
        text = match.group(1).strip()
        if len(text.split()) > 4:
            cleaned_prompts.append(text)
    else:
        if len(p.split()) > 4:
            cleaned_prompts.append(p.strip())

with open(r'c:\study files\ai tech creater\PROMPTS.md', 'w', encoding='utf-8') as f:
    f.write("# AI Usage Log – Prompts\n\n")
    f.write("## Project: AI Tech Creator\n\n")
    f.write("## Description:\nThis project was built using AI prompts across backend, frontend, debugging, and deployment.\n\n---\n\n")
    f.write("## Full List of Real Prompts Used\n\n")
    
    for i, p in enumerate(cleaned_prompts, 1):
        f.write(f"### Prompt {i}\n")
        f.write("```txt\n")
        f.write(p)
        f.write("\n```\n\n")
