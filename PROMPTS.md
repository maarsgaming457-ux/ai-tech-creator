# AI Usage Log – Prompts

## 📌 Project Name:
AI Tech Creator

## 📌 Description:
This project was built using AI-assisted development with multiple prompts for backend, frontend, UI, debugging, and deployment.

---

## 🚀 1. Backend Development Prompts

### Antigravity Prompt 1:
```txt
Act as a senior FastAPI + AI backend engineer.

Fix the issue where AI posts are not showing actual generated content,
and instead showing placeholder text like:
"Generating viral content on youtube..."

Ensure that:
✔ LLM generates real structured content (5–7 lines)
✔ That content is returned to frontend
✔ Placeholder text is completely removed
```

### Antigravity Prompt 2:
```txt
Act as a senior FastAPI + LangChain backend engineer.

The app is NOT returning LLM output.
It is still returning placeholder text:
"Generating viral content on youtube..."

Completely remove placeholder flow and ensure ONLY LLM output is used.
Search ENTIRE PROJECT for "Generating viral content" and DELETE EVERY occurrence.
Locate the function actually used by /generate endpoint, agent loop, scheduler.
```

### Antigravity Prompt 3:
```txt
Act as a senior Full Stack Engineer (FastAPI + React + Tailwind).

Fix 3 major issues in AI Tech Creator:
1. "\n" showing instead of new lines
2. Post formatting not clean (needs styling + emojis + hashtags)
3. Add Copy + LinkedIn + Twitter share buttons

Fix escaped newline "\\n" via content.replace("\\n", "\n")
```

### Antigravity Prompt 4:
```txt
Act as a senior Full Stack Engineer (FastAPI + React).

Fix newline rendering issue COMPLETELY and improve UI.
Backend is returning escaped string: "Hello\\nWorld"
Fix escaped newlines properly via `codecs.decode(content, "unicode_escape")`.
Remove headers like [Twitter].
```

### Antigravity Prompt 5:
```txt
Act as a senior Full Stack Engineer (FastAPI + React).

Fix text encoding issue causing broken characters like: donâ€™t, isnâ€™t, wonâ€™t.
Unicode characters are breaking after decoding.
Remove `codecs.decode(..., "unicode_escape")`.
Replace with safe cleaning using `content.encode("utf-8", "ignore").decode("utf-8")`.
```

### Antigravity Prompt 6:
```txt
Act as a senior Full Stack Engineer (FastAPI + React).

Fix Unicode encoding issue COMPLETELY and replace Twitter button with X.
Remove all manual encode/decode chains.
Add FastAPI middleware to force UTF-8: response.headers["Content-Type"] = "application/json; charset=utf-8".
```

---

## 🎨 2. Frontend & UI Prompts

### Antigravity Prompt 1:
```txt
Fix frontend text rendering issue.
Post content contains newline characters (\n) but UI displays everything in one line.
Find component where post text is rendered.
Apply CSS: white-space: pre-line;
Do NOT modify backend formatting.
```

### Antigravity Prompt 2:
```txt
Act as a senior Full Stack Engineer (FastAPI + React).
The newline issue is STILL not fully resolved.
DO NOT trust raw string rendering.
Split content by "\n", filter empty lines, and render with mapped <p> tags.
Highlight hashtags with purple-400 font-semibold.
Add premium UI styling with bg-[#0f172a] p-4 rounded-xl shadow-lg.
```

### Antigravity Prompt 3:
```txt
Act as a senior Full Stack Engineer (FastAPI + React).
Replace buttons with premium tailwind buttons:
Copy (gray gradient), LinkedIn (blue gradient), Twitter (pink/purple gradient).
Add hover glow via box-shadow 0 0 10px rgba(99,102,241,0.6).
Add gradient UI polish to Post card wrapper.
```

### Antigravity Prompt 4:
```txt
Act as a senior Full Stack Engineer (FastAPI + React).
Replace Twitter button with X (black theme).
Use simple background colors instead of gradients for premium buttons.
```

---

## 🧠 3. AI & Content Generation Prompts

### Antigravity Prompt 1:
```txt
Act as a viral content creator for LinkedIn and social media.

Generate HIGH-QUALITY viral posts with:
- 5 to 7 SHORT lines
- Each line separated properly (real newline, not \n)
- Strong hook in first line
- Easy readable format
- Professional + engaging tone

Line 1 → Hook
Line 2 → Insight / trend
Line 3 → Real-world relevance
Line 4 → Advice or takeaway
Line 5 → Future / opportunity
```

### Antigravity Prompt 2:
```txt
Force clean AI output:
Write a viral LinkedIn post about {topic}
STRICT RULES:
- 5 to 7 lines ONLY
- Each line MUST be on a real new line (no \n)
- Do NOT include [Twitter], [LinkedIn], or labels
- Do NOT include --- separators
- Use clean formatting
- Add emojis
- Add 4–5 hashtags at the end
```

---

## 🚀 4. Deployment & DevOps Prompts

### Antigravity Prompt 1:
```txt
Act as a senior React + Vercel deployment engineer.
Fix the Vercel build failure: Command "npm run build" exited with 1.
Check build error (SyntaxError, Module not found, CSS issue, JSX issue).
Fix common JSX and Tailwind CSS styling errors.
```

### Antigravity Prompt 2:
```txt
Act as a senior DevOps + Full Stack Engineer.
My deployed app on Vercel is showing: DNS_PROBE_FINISHED_NXDOMAIN.
Fix this issue completely and make the app live again.
Ensure project follows Vercel-compatible structure (/api/index.py).
Create or update vercel.json for Serverless routing.
Force redeploy.
```

### Antigravity Prompt 3:
```txt
Act as a senior DevOps + Full Stack Engineer.
My project is currently broken (Vercel shows DNS_PROBE_FINISHED_NXDOMAIN and site is down).
I want to immediately restore the last working version and make the app live again.
Git rollback (git reset --hard HEAD~2).
Remove vercel.json and revert api/index.py.
Force redeploy to Vercel.
```
