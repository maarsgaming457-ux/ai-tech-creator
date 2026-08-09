# AI Usage Log – Prompts

## Project: AI Tech Creator

## Description:
This project was built using AI prompts across backend, frontend, debugging, and deployment.

---

## Full List of Real Prompts Used

### Prompt 1
```txt
Build a complete autonomous system called **"AI Tech Creator"** that continuously generates and publishes high-quality engineering insights like a real senior developer.

---

## 🎯 OBJECTIVE

Create an AI agent that:

* Thinks like a real software/AI engineer
* Generates deep, non-obvious technical insights
* Rejects weak or generic topics
* Posts continuously at intervals
* Never produces shallow or beginner content

---

## 🧠 CORE PERSONA (VERY IMPORTANT)

The system must strictly follow this persona:

You are a senior AI engineer and system builder.

Your thinking style:

* You build real-world systems
* You debug production issues
* You have strong technical opinions
* You value depth over popularity

Your writing style:

* Sharp and direct
* Insight-driven (not explanatory)
* Slightly opinionated
* No fluff, no storytelling
* No generic motivation

You DO:

* Share hidden problems
* Explain trade-offs
* Talk like an engineer to engineers

You DO NOT:

* Write tutorials
* Explain basics
* Summarize content
* Use buzzwords without depth

Every output must feel like it came from someone with real experience.

---

## 🧩 SYSTEM ARCHITECTURE

Create a pipeline with the following components:

1. Topic Generator
2. Topic Filter (Rejection Logic)
3. Insight Post Generator
4. Publisher
5. Continuous Loop Controller

---

## 🔍 TOPIC GENERATION RULES

Generate only advanced, real-world topics.

Strict rules:

* No beginner topics
* No "what is", "introduction", "guide"
* Focus on failures, trade-offs, and production issues
* Must sound like real engineering thinking

Example topics:

* "Why most RAG systems fail in production"
* "The hidden cost of vector databases"
* "Why your AI app works locally but breaks in deployment"

Always generate 5 topics at a time.

---

## 🚫 TOPIC REJECTION LOGIC

Reject topics if:

* They contain: "introduction", "basics", "what is", "tutorial", "guide", "top 10"
* They are too short or vague
* They sound generic or educational

Only allow high-signal topics.

---

## ✍️ POST GENERATION RULES

For each valid topic, generate a short technical insight post.

Strict format:

1. Strong opening statement
2. Real insight or problem
3. Technical reasoning
4. Closing thought

Constraints:

* 8–12 lines max
* No emojis
* No hashtags
* No generic advice
* No summaries

Before writing:

* Think of a real-world failure
* Identify a hidden issue
* Highlight something most engineers miss

Tone:

* Analytical OR contrarian OR critical

---

## 🔁 CONTINUOUS POSTING LOGIC

The system must run continuously:

* Generate topics
* Filter them
* Generate posts
* Publish them
* Wait for a random interval (2 to 5 minutes)
* Repeat forever

---

## 🧠 MEMORY (ANTI-REPETITION)

Maintain a memory of previously used topics.

* Do not reuse topics
* Avoid similar phrasing
* Ensure diversity in insights

---

## 📤 PUBLISHING

Send generated posts to a publishing function.

This can be:

* Console output (for testing)
* API endpoint
* Social media integration (optional)

---

## ⚙️ IMPLEMENTATION REQUIREMENTS

* Use Python
* Modular functions for each component
* Clean and maintainable structure
* Include logging for debugging
* Handle errors gracefully

---

## 🧪 EXPECTED OUTPUT QUALITY

Example of correct output style:

"Most RAG systems don’t fail because of retrieval.

They fail because of context overload.

Everyone tries to push more documents into the system
without understanding how LLMs process information.

At scale, more context becomes noise.

The real challenge is ranking, not retrieval."

---

## ❌ FAILURE CONDITIONS (MUST AVOID)

* Generic posts
* Beginner explanations
* Repetitive ideas
* Long paragraphs
* Motivational or fluffy tone

---

## ✅ FINAL RESULT

The system should behave like:
A real engineer consistently sharing sharp, valuable technical insights — automatically and continuously.
```

### Prompt 2
```txt
Create a Python project called **AI Tech Creator**.

Requirements:

* Modular structure (separate files)
* Clean code
* Ready for future scaling

Project structure:

ai_tech_creator/

* main.py
* topic_generator.py
* filter.py
* post_generator.py
* publisher.py
* memory.py
* config.py

Each file should be created with basic boilerplate code.

Do NOT add complex logic yet.
Just create structure and simple placeholder functions.
```

### Prompt 3
```txt
Update the project to include a strong AI persona.

In config.py, define a constant PERSONA_PROMPT.

Persona rules:

* Senior AI engineer mindset
* Sharp, opinionated, no fluff
* No beginner explanations
* Focus on real-world systems and failures

Ensure all generation functions use this persona.

Do not implement full logic yet, just integrate persona usage.
```

### Prompt 4
```txt
Implement topic generation logic in topic_generator.py.

Requirements:

* Generate 5 topics at a time
* Topics must be advanced and production-focused
* Avoid beginner topics

Examples of good topics:

* Why most RAG systems fail in production
* Hidden scaling issues in LLM apps
* Why AI agents break in real-world use

Use an LLM prompt to generate topics.

Return topics as a list.
```

### Prompt 5
```txt
Implement post generation in post_generator.py.

Requirements:

* Input: topic
* Output: short insight post

Rules:

* 8–12 lines max
* Strong opening statement
* Include real insight (not explanation)
* No emojis
* No hashtags
* No generic advice

Before writing:

* Think of a real-world failure
* Highlight hidden issue
* Explain technical reasoning

Use PERSONA_PROMPT for style.

Return final post text.
```

### Prompt 6
```txt
Implement memory system in memory.py.

Requirements:

* Store used topics in a set
* Functions:

  * is_duplicate(topic)
  * save_topic(topic)

Ensure topics are not reused.
```

### Prompt 7
```txt
Implement publisher in publisher.py.

For now:

* Save posts to a file called posts.txt
* Append new posts
* Add separator between posts

Do NOT integrate APIs yet.
```

### Prompt 8
```txt
Implement main execution logic in main.py.

Flow:

1. Generate topics
2. Filter topics
3. Skip duplicates
4. Generate post
5. Publish post
6. Save topic

Add loop:

* Run continuously
* Wait random time between 30 to 90 minutes

Add logging (print statements).
```

### Prompt 9
```txt
Improve topic generation by adding enhancement step.

Create a function:
enhance_topic(topic)

It should:

* Make topic more specific
* Add engineering angle
* Add slight controversy or insight

Use LLM prompt to rewrite topics.

Integrate this into main flow before post generation.
```

### Prompt 10
```txt
Upgrade filter.py with strong rejection logic.

Enhance is_low_quality_topic(topic):

Add checks:

* Reject if topic contains:
  "introduction", "basics", "what is", "guide", "tutorial", "top", "benefits"
* Reject if topic length < 5 words
* Reject if topic does not contain technical keywords like:
  "system", "scaling", "latency", "failure", "architecture", "production"

Also:

* Add logging to print WHY topic was rejected

Return True for bad topics, False for good.
```

### Prompt 11
```txt
Upgrade post_generator.py to enforce deeper insights.

Modify prompt:

Before writing the post, force the model to:

* Think of a real-world failure scenario
* Identify a mistake engineers commonly make
* Explain why the obvious solution fails

Add rule:
If output sounds generic → regenerate once automatically

Ensure output always feels:

* specific
* technical
* slightly opinionated
```

### Prompt 12
```txt
Add style variation to post generation.

Create list:
STYLES = ["contrarian", "analytical", "critical"]

Randomly select one style per post.

Modify prompt:
"Write in a {style} tone"

Ensure:

* Contrarian → challenges common belief
* Analytical → deep breakdown
* Critical → highlights flaws
```

### Prompt 13
```txt
Upgrade post quality control by adding scoring system.

After generating a post:

Create function:
score_post(post)

Scoring rules:
+1 if contains strong opinion
+1 if mentions failure or mistake
+1 if includes technical reasoning
+1 if challenges common belief

If score < 3:

* Regenerate post once

Add logging:
[POST SCORE]: X/4

Goal:
Only high-quality, opinionated posts get published.
```

### Prompt 14
```txt
Upgrade memory system to prevent similar topics, not just exact duplicates.

Enhancements:

1. Store topics as embeddings (use LLM embedding model)

2. When new topic arrives:

* Compare with existing topics using similarity
* If similarity > 0.8 → treat as duplicate

3. Keep fallback:

* Also store raw text in set

4. Add logging:
   [SKIP] Similar topic detected

Goal:
Avoid repeating same idea in different wording.
```

### Prompt 15
```txt
Add human-like variation to generated posts.

Enhancements:

1. Occasionally:

* Use shorter sentences
* Add slight conversational tone

2. Randomly:

* Break structure (not always perfect format)

3. Add micro-variations:

* Sometimes 6–8 lines instead of 8–12
* Occasionally end with a strong punchline

4. Do NOT:

* Add emojis
* Add fluff

Goal:
Make posts feel like written by a real engineer, not a machine.
```

### Prompt 16
```txt
Upgrade the system to include real-world trend awareness.

Add external topic sources:

1. GitHub Trending:

* Extract trending AI/ML repositories
* Convert repo themes into topics

2. Hacker News:

* Extract top tech discussions
* Focus on engineering/system-related posts

3. Reddit:

* Use r/MachineLearning and r/programming
* Extract discussion topics (not memes)

---

## Processing Logic:

1. Collect raw topics from all sources
2. Clean and normalize them
3. Convert them into engineering-style topics using LLM
4. Pass them through existing filter + scoring system

---

## Fallback:

If external sources fail:

* Use internal LLM topic generator

---

## Logging:

Print:

* [SOURCE] GitHub / Reddit / HN
* [RAW TOPIC]
* [ENHANCED TOPIC]

---

## Goal:

The system should:

* Think like an engineer
* BUT react like a real human in the tech ecosystem

Avoid:

* Stale ideas
* Repetitive thinking
* Isolated AI-generated content
```

### Prompt 17
```txt
Improve trend source selection with weighted priority.

Implement weights:

* Hacker News: 0.5
* GitHub: 0.35
* Reddit: 0.15

Use weighted random selection instead of equal random.

Goal:
Prioritize high-quality engineering discussions while still allowing diversity.
```

### Prompt 18
```txt
Add trend quality filtering before LLM conversion.

Reject raw trends if:

* Too short (< 5 words)
* Not technical (no keywords like system, AI, scaling, architecture)
* Contains hype words (launch, release, cool, awesome)

Add logging:
[TREND REJECTED]

Goal:
Only high-signal engineering trends enter pipeline.
```

### Prompt 19
```txt
Upgrade trend filtering to hybrid (rule-based + LLM intelligence).

Enhancement:

1. Keep existing rule-based filter (fast rejection)

2. Add secondary LLM filter:
   Create function:
   is_high_signal_trend(raw_trend)

Prompt:
"Evaluate if this topic contains a deep engineering/system-level insight.

Reject if:

* purely news
* product launch
* superficial discussion

Accept only if:

* involves scaling, architecture, failure, or real-world trade-offs

Return: YES or NO"

3. Pipeline:

* Step 1: rule-based filter
* Step 2: LLM filter (only if passed step 1)

4. Logging:
   [LLM FILTER]: ACCEPTED / REJECTED

Goal:
Ensure only truly meaningful engineering discussions enter system.
```

### Prompt 20
```txt
Replace the existing trend scraping system with Tavily Search API for real-time topic discovery.

---

## 🎯 GOAL

Use Tavily to fetch high-quality, real-world AI/software engineering discussions instead of scraping GitHub, Reddit, or Hacker News.

---

## ⚙️ SETUP

1. Install dependency:
   pip install tavily-python

2. Add to config.py:
   TAVILY_API_KEY = "your_api_key_here"

---

## 🧩 IMPLEMENTATION

### 1. Create new module: tavily_client.py

Implement function:

fetch_trend_from_tavily()

Behavior:

* Initialize TavilyClient using API key
* Use search query focused on engineering problems

Use queries like:

* "AI system failures in production"
* "LLM scaling issues real world"
* "machine learning deployment problems"
* "vector database limitations production"
* "AI agents reliability issues"

Randomly pick one query per call.

Call Tavily API:

* search_depth = "advanced"
* max_results = 5

Return list of results.

---

### 2. Extract usable content

Create function:
extract_raw_trend(results)

Logic:

* Loop through results
* Pick first result with meaningful content (>30 words)
* Return trimmed content (200–300 chars)

If none found → return None

---

### 3. Integrate into main.py

Update pipeline:

1. Call fetch_trend_from_tavily()

2. Extract raw trend

3. If no result → fallback to generate_topics()

4. Apply existing filters:

   * is_low_quality_raw_trend()
   * is_high_signal_trend()

5. If rejected → fallback to generate_topics()

6. Convert trend:
   topic = convert_trend_to_topic(raw_trend, source="tavily")

7. Continue normal pipeline:

   * duplicate check
   * enhance topic
   * generate post
   * score post
   * publish

---

## 🧠 LOGGING

Add logs:

[TAVILY QUERY]: query
[RAW TREND]: content
[ENHANCED TOPIC]: topic

---

## ⚠️ RULES

* Do NOT remove fallback LLM topic generator
* Do NOT bypass filters
* Do NOT directly use Tavily output as post
* Always convert to engineering insight topic

---

## ✅ RESULT

System should:

* Use real-time web intelligence
* Stay focused on deep engineering insights
* Avoid noise and hype content
* Remain stable if API fails
```

### Prompt 21
```txt
Convert the project into a FastAPI-based service.

Requirements:

1. Install FastAPI and Uvicorn

2. Create new file: api.py

3. Implement endpoints:

POST /api/agent/init
GET /api/agent/feed

4. Use in-memory storage for now:

* agents dictionary
* posts list per agent

5. Agent structure:
   {
   agentId,
   persona,
   posts: [],
   memory
   }

6. Return JSON responses exactly as required

Do not implement background worker yet.
```

### Prompt 22
```txt
Implement POST /api/agent/init

Requirements:

1. Generate unique agentId (uuid)

2. Store:

* persona name
* domain
* empty posts list
* initialized memory

3. Start autonomous background process for this agent

Return:
{
"agentId": "<id>"
}
```

### Prompt 23
```txt
Create autonomous background worker per agent.

Requirements:

1. Run continuously (thread or async task)

2. Loop:

* Fetch trend using Tavily
* Apply trend filter
* Apply LLM filter
* Convert to topic
* Check memory
* Generate post
* Score post
* If valid → publish

3. Sleep between posts:

* Random 30–90 minutes

4. Store posts in agent.posts

5. NEVER require external trigger after init

Goal:
Agent runs independently after initialization.
```

### Prompt 24
```txt
Implement GET /api/agent/feed

Requirements:

1. Input: agentId

2. Return:

* All posts (latest first)
* Include:
  id
  createdAt (ISO format UTC)
  text
  rationale
  sources

3. If no posts:
   return { "posts": [] }

4. Do not regenerate posts here
   Only return stored posts
```

### Prompt 25
```txt
Enhance post generation to include rationale.

For every post, also generate:

1. Why topic was selected
2. Why it is relevant now
3. Why chosen over other topics

Store this as:
post["rationale"]

Also store:
post["sources"] (from Tavily results)

Ensure rationale is clear and specific, not generic.
```

### Prompt 26
```txt
Ensure each post follows structure:

{
"id": unique string,
"createdAt": ISO 8601 UTC timestamp,
"text": generated post,
"rationale": explanation,
"sources": [list of URLs]
}

Ensure:

* IDs are unique
* Timestamps are correct
* Order is newest first
```

### Prompt 27
```txt
Ensure persona consistency across all posts.

Use persona input:

* name
* domain

Modify prompts to:

* reflect persona identity
* maintain same tone
* maintain same interests

Example:
If domain = "AI Security"
→ focus on vulnerabilities, risks, failures

Do not drift across domains.
```

### Prompt 28
```txt
Upgrade the existing Autonomous AI Creator system to production-grade quality by implementing the following enhancements:

---

# 🔥 1. HYBRID TAVILY SEARCH STRATEGY

Goal: Balance efficiency, cost, and creativity in topic discovery.

Requirements:

1. Modify trend fetching logic to use a hybrid approach:

* 70% probability → use static queries
* 30% probability → use LLM-generated queries

2. Static queries should include:

* f"{domain} failures in production"
* f"{domain} scaling issues"
* f"{domain} real-world engineering problems"
* f"{domain} architecture bottlenecks"
* f"{domain} deployment challenges"

3. Implement LLM-based query generator:

Function:
generate_search_query(domain)

Prompt:
"Generate a highly specific real-world engineering search query related to {domain}. Focus on failures, production issues, bottlenecks, or scaling challenges."

4. Final selection logic:

if random.random() < 0.7:
query = random.choice(static_queries)
log "[SEARCH MODE] STATIC"
else:
query = generate_search_query(domain)
log "[SEARCH MODE] LLM"

5. Ensure domain is always included in the query.

---

# 🔥 2. RATIONALE QUALITY VALIDATION

Goal: Ensure rationale is deep, specific, and non-generic.

Requirements:

1. Create function:
   validate_rationale(rationale: str) -> bool

2. Reject rationale if:

* Length < 20 words
* Contains generic phrases like:
  "this is important", "this is relevant", "in today's world"
* Does not include:

  * specific reason for selection
  * real-world relevance (time/context)
  * comparison with other possible topics

3. Enforce structure:
   Rationale MUST explain:

* Why this topic was selected
* Why it is relevant now
* Why it was chosen over other topics

4. If validation fails:

* Regenerate rationale ONCE using LLM
* If still invalid → reject post

5. Modify generate_post() to return structured output:

{
"text": "...",
"rationale": "...",
"sources": [...]
}

6. Add logs:
   [RATIONALE REJECTED]
   [RATIONALE REGENERATED]

---

# 🔥 3. CONTROLLED POSTING FREQUENCY (48-HOUR SAFE)

Goal: Ensure consistent posting during evaluation.

Requirements:

1. Modify background loop sleep:

sleep_time = random.randint(900, 2400)  # 15–40 minutes

2. Add jitter:

sleep_time += random.randint(-120, 120)

3. Enforce:

* Minimum gap = 10 minutes
* No burst posting

4. Log:
   [NEXT POST IN X MINUTES]

5. Ensure:

* At least one post every ~40 minutes
* Continuous operation for 48 hours

---

# 🔥 4. IMMEDIATE FIRST POST AFTER INIT

Goal: Avoid empty feed during early evaluation.

Requirements:

1. In POST /api/agent/init:

After creating agent:

* Immediately call generate_and_store_post(agent)

2. Do NOT wait for background loop

3. Then start background worker

4. Log:
   [INITIAL POST GENERATED]

5. Guarantee:
   Feed is never empty after initialization

---

# 🔥 5. STRICT PERSONA CONSISTENCY

Goal: Prevent domain drift and enforce identity.

Requirements:

1. Use persona:

* name
* domain

2. Modify master prompt:

IDENTITY:
You are {name}, an expert strictly working in {domain}.

CRITICAL RULE:
You must NEVER generate content outside {domain}.

3. Enforce across:

* search queries
* topic generation
* topic enhancement
* post generation

4. Reject any topic not aligned with domain.

---

# 🔥 6. POST STRUCTURE ENFORCEMENT

Each post MUST follow:

{
"id": unique UUID,
"createdAt": ISO 8601 UTC timestamp,
"text": post content,
"rationale": validated explanation,
"sources": [valid URLs]
}

Requirements:

* Use uuid.uuid4() for id
* Use datetime.utcnow().isoformat() + "Z"
* Ensure sources are real URLs from Tavily
* Ensure posts are stored persistently in memory

---

# 🔥 7. FEED ENDPOINT GUARANTEE

GET /api/agent/feed must:

1. Accept agentId
2. Return:

{
"posts": [...]
}

3. Ensure:

* Reverse chronological order (latest first)
* No generation inside endpoint
* Only return stored posts

4. If no posts:

return { "posts": [] }

---

# 🔥 8. MEMORY + DUPLICATE PREVENTION

Requirements:

1. Store embeddings of previous topics

2. Before publishing:

* Compare similarity with past topics
* If too similar → reject

3. Maintain continuity:

* Avoid repeating same insight

---

# 🔥 9. FAILURE HANDLING (CRITICAL)

Ensure system NEVER stops.

If:

* Tavily fails → fallback to internal generator
* LLM fails → retry once
* Filter rejects → regenerate

System must always continue loop.

---

# 🔥 10. SYSTEM VALIDATION CHECKLIST

Continuously verify:

✔ First post generated instantly
✔ Feed returns correct JSON structure
✔ New posts appear over time
✔ Rationale is strong and specific
✔ Domain never drifts
✔ No duplicate ideas
✔ No crashes for 48 hours
✔ Logs show pipeline clearly

---

# 🔥 FINAL GOAL

The system must behave like:

* Autonomous AI persona
* Independent decision maker
* Real-time tech observer
* Consistent expert voice
* Continuous publisher

NO manual input after initialization.

---

# 🚀 END STATE

After implementation:

* Evaluator calls init ONCE
* Agent runs independently
* Feed updates over time
* Every post includes reasoning + sources
* System remains stable for 48 hours

This is a production-grade autonomous AI creator.
```

### Prompt 29
```txt
Enhance the autonomous agent's reliability by implementing a retry mechanism for post generation.

---

## 🎯 Goal

Ensure that each cycle of the autonomous loop produces a valid post whenever possible, reducing empty cycles caused by temporary failures (LLM errors, filtering rejection, API issues).

---

## 🔧 Requirements

### 1. Modify Post Generation Flow

Refactor the generation step inside the background loop to include a retry mechanism.

Create or update:

function:
generate_and_store_post(agent_id: str) -> bool

---

### 2. Implement Retry Logic

Inside the background loop, wrap the generation call with retry attempts:

Pseudo logic:

```
max_attempts = 3

for attempt in range(max_attempts):
    success = generate_and_store_post(agent_id)

    if success:
        log(f"[POST SUCCESS] attempt {attempt+1}")
        break
    else:
        log(f"[RETRYING] attempt {attempt+1}")
        sleep(5–10 seconds before retry)
```

---

### 3. Behavior Rules

* Maximum 3 attempts per cycle
* Each retry should:

  * Fetch a NEW topic (do not reuse same failed topic)
  * Re-run full pipeline (trend → filter → generate → validate → score)
* Add short delay between retries:

  * random.randint(5, 10) seconds

---

### 4. Failure Handling

If all 3 attempts fail:

```
log("[CYCLE FAILED] Skipping this cycle")
```

Then:

* Continue loop normally
* Do NOT crash or stop system

---

### 5. Integration with Sleep Logic

After retry loop:

* If success → normal sleep (15–40 min)
* If failed → short backoff (e.g., 30–60 seconds) before next cycle

---

### 6. Logging (Important)

Add clear logs:

* [POST SUCCESS] attempt X
* [RETRYING] attempt X
* [CYCLE FAILED]
* [NEXT POST IN X MINUTES]

---

### 7. Return Value Contract

generate_and_store_post must:

* Return True → if post successfully created and stored
* Return False → if rejected or failed

---

## 🚀 Final Outcome

After implementation:

* System becomes highly reliable
* Reduces empty publishing cycles
* Handles transient failures gracefully
* Improves consistency during 48-hour evaluation

This upgrade ensures near-continuous successful post generation under real-world conditions.
```

### Prompt 30
```txt
Enhance the Autonomous AI Creator system with production-grade logging and strict post rate control.

---

# 🎯 GOAL

1. Improve observability (debugging + evaluation clarity)
2. Prevent accidental burst posting
3. Make system behavior look like a real production system

---

# 🔧 1. ENHANCED LOGGING SYSTEM

Upgrade all logs to include contextual information.

---

## Requirements:

1. Modify all existing logs to include:

* agent_id
* attempt number (if applicable)
* topic (if available)

---

## Example Logs:

Replace:

log("[RETRYING] attempt 2")

With:

log(f"[RETRYING] attempt {attempt+1} | agent={agent_id}")

---

Replace:

log("[POST SUCCESS]")

With:

log(f"[POST SUCCESS] attempt {attempt+1} | agent={agent_id} | topic={topic}")

---

Add logs at key stages:

* [SEARCH MODE] STATIC / LLM
* [RAW TOPIC]
* [ENHANCED TOPIC]
* [FILTER REJECTED]
* [RATIONALE REJECTED]
* [RATIONALE REGENERATED]
* [POST CREATED]
* [NEXT POST IN X MINUTES]

---

## Goal:

Make logs:

* Human-readable
* Debug-friendly
* Evaluator-impressive

---

# 🔧 2. LAST POST TIME TRACKING

Add tracking for last successful post.

---

## Requirements:

1. When creating agent:

Initialize:

agent["last_post_time"] = None

---

2. After successful post creation:

agent["last_post_time"] = datetime.utcnow()

---

# 🔧 3. RATE LIMIT CONTROL (NO BURST POSTING)

---

## Requirements:

Before generating a new post:

```python
now = datetime.utcnow()

if agent["last_post_time"] is not None:
    time_diff = (now - agent["last_post_time"]).total_seconds()

    if time_diff < 600:  # 10 minutes
        log(f"[SKIPPED] Too soon to post | agent={agent_id}")
        return False
```

---

## Behavior:

* Prevents posting within 10 minutes of last post
* Ensures realistic publishing cadence
* Protects against rapid retries causing spam

---

# 🔧 4. INTEGRATION WITH RETRY LOOP

Important:

* Rate check must happen BEFORE generation
* If skipped → treat as "no attempt"
* Retry loop should continue with delay

---

# 🔧 5. LOG NEXT POST TIME

After successful post:

```python
sleep_time = random.randint(900, 2400) + random.randint(-120, 120)
sleep_time = max(600, sleep_time)

log(f"[NEXT POST IN] {sleep_time // 60} minutes | agent={agent_id}")
```

---

# 🔧 6. FINAL BEHAVIOR

After implementation:

* System logs clearly show full pipeline
* No rapid or duplicate posts
* Retry logic stays controlled
* Evaluator sees stable, realistic activity

---

# 🚀 OUTCOME

The system now behaves like a real production AI service:

* Observable
* Controlled
* Reliable
* Professional-grade

This is the final polish before submission.
```

### Prompt 31
```txt
Enhance the Autonomous AI Creator system with advanced production-grade observability features to achieve top-tier engineering quality.

---

# 🎯 GOAL

Upgrade logging to:

* Track each generation cycle clearly
* Provide precise rejection reasons
* Show real-world source attribution
* Improve debugging and evaluator visibility

---

# 🔧 1. CYCLE ID TRACKING (CRITICAL)

Add a unique identifier for every generation cycle.

---

## Requirements:

1. At the start of each generation attempt cycle:

```python
cycle_id = uuid.uuid4().hex[:6]
```

2. Log cycle start:

```python
log(f"[CYCLE {cycle_id}] START | agent={agent_id}")
```

3. Include cycle_id in ALL logs during that cycle.

---

## Example:

```python
log(f"[CYCLE {cycle_id}] [SEARCH MODE] LLM | agent={agent_id}")
log(f"[CYCLE {cycle_id}] [RAW TOPIC] {topic} | agent={agent_id}")
```

---

# 🔧 2. DETAILED REJECTION REASONS

Upgrade all rejection logs to include explicit reasoning.

---

## Requirements:

Replace generic logs with structured ones.

---

## Examples:

Instead of:

```python
log("[FILTER REJECTED]")
```

Use:

```python
log(f"[CYCLE {cycle_id}] [FILTER REJECTED] reason=low_signal | agent={agent_id}")
```

---

Instead of:

```python
log("[RATIONALE REJECTED]")
```

Use:

```python
log(f"[CYCLE {cycle_id}] [RATIONALE REJECTED] reason=generic_or_weak | agent={agent_id}")
```

---

Instead of:

```python
log("[SKIPPED]")
```

Use:

```python
log(f"[CYCLE {cycle_id}] [SKIPPED] reason=rate_limit | agent={agent_id}")
```

---

## Goal:

Every rejection must clearly explain:

* What failed
* Why it failed

---

# 🔧 3. SOURCE ATTRIBUTION LOGGING

Log the real-world source of every topic.

---

## Requirements:

1. After fetching from Tavily:

```python
log(f"[CYCLE {cycle_id}] [SOURCE] {url} | agent={agent_id}")
```

2. If multiple sources:

```python
for src in sources:
    log(f"[CYCLE {cycle_id}] [SOURCE] {src} | agent={agent_id}")
```

---

## Goal:

* Show real-world grounding
* Improve transparency
* Impress evaluators

---

# 🔧 4. ENHANCED SUCCESS LOG

Upgrade final success logs.

---

## Replace:

```python
log("[POST CREATED]")
```

---

## With:

```python
log(f"[CYCLE {cycle_id}] [POST CREATED] agent={agent_id} | topic={topic}")
```

---

```python
log(f"[CYCLE {cycle_id}] [POST SUCCESS] attempt={attempt+1} | agent={agent_id}")
```

---

# 🔧 5. CONSISTENT LOG FORMAT

All logs must follow this format:

```
[CYCLE <id>] [EVENT] details | agent=<agent_id>
```

---

# 🔧 6. OPTIONAL (ADVANCED)

Add timing metrics:

```python
start_time = time.time()

# after pipeline
duration = time.time() - start_time

log(f"[CYCLE {cycle_id}] [DURATION] {duration:.2f}s | agent={agent_id}")
```

---

# 🚀 FINAL OUTCOME

After implementation:

* Every pipeline execution is traceable
* Debugging becomes extremely easy
* Evaluators clearly see system intelligence
* Logs resemble real production infrastructure

---

# 🧠 RESULT

System now achieves:

* Enterprise-level observability
* Transparent reasoning flow
* Clean debugging structure
* Strong engineering impression

This is the final elite polish for your Autonomous AI Creator.
```

### Prompt 32
```txt
Prepare the Autonomous AI Creator for deployment and 48-hour continuous evaluation.

---

# 🎯 GOAL

Ensure the system runs reliably in a live environment without crashes or downtime.

---

# 🔧 1. SERVER STARTUP CONFIG

Use FastAPI with Uvicorn:

Command:
uvicorn api:app --host 0.0.0.0 --port 8000

Ensure:

* App starts without errors
* Background tasks initialize correctly

---

# 🔧 2. THREAD / ASYNC SAFETY

Ensure:

* Background agent_loop runs safely per agent
* No blocking calls inside async functions
* Use asyncio.sleep instead of time.sleep

---

# 🔧 3. MEMORY SAFETY

Ensure:

* agents dictionary persists during runtime
* No accidental overwrite
* Thread-safe access if needed

---

# 🔧 4. ERROR HANDLING WRAPPER

Wrap main loop:

try:
run_generation_cycle()
except Exception as e:
log(f"[CRASH RECOVERED] {str(e)}")
continue

---

# 🔧 5. API STABILITY

Ensure:

GET /api/agent/feed:

* Never crashes
* Always returns valid JSON

If agent not found:
return { "posts": [] }

---

# 🔧 6. HEALTH CHECK (OPTIONAL)

Add endpoint:

GET /health

Return:
{ "status": "running" }

---

# 🔧 7. LOG MONITORING

Ensure logs continuously show:

* Active cycles
* Post creation
* Retry behavior

---

# 🔧 8. LONG RUN TEST

Before submission:

* Run system for at least 1–2 hours
* Verify:

  * No crashes
  * Multiple posts generated
  * Logs active

---
```

### Prompt 33
```txt
Prepare and run the Autonomous AI Creator project end-to-end in a stable environment.

---

# 🎯 GOAL

Ensure the project:

* Runs without errors (locally + Antigravity)
* Starts FastAPI server correctly
* Background agent loop runs continuously
* Endpoints work as expected

---

# 🔧 1. PROJECT STRUCTURE VALIDATION

Ensure the project structure is correct:

* api.py (FastAPI entrypoint)
* main logic inside api.py or imported modules
* tavily_client.py
* topic_generator.py
* post_generator.py
* filter.py
* requirements.txt

Fix imports if needed.

---

# 🔧 2. FIX COMMON IMPORT ISSUES

Ensure:

* All modules are properly imported
* No relative import errors
* No missing dependencies

Example:

from tavily_client import fetch_trend_from_tavily
from post_generator import generate_post

---

# 🔧 3. REQUIREMENTS FILE

Ensure requirements.txt includes:

fastapi
uvicorn
requests
python-dotenv
openai (or google-generativeai if using Gemini)

---

# 🔧 4. ENVIRONMENT VARIABLES

Create .env file:

TAVILY_API_KEY=your_key
OPENAI_API_KEY=your_key

Load using:

from dotenv import load_dotenv
load_dotenv()

---

# 🔧 5. FIX ASYNC + LOOP EXECUTION

Ensure:

* agent_loop uses async
* Use asyncio.sleep NOT time.sleep
* BackgroundTasks or asyncio.create_task is used

Example:

async def agent_loop(agent_id):
while True:
try:
# generation logic
await asyncio.sleep(...)
except Exception:
continue

---

# 🔧 6. FASTAPI APP ENTRYPOINT

In api.py:

from fastapi import FastAPI

app = FastAPI()

Ensure endpoints:

POST /api/agent/init
GET /api/agent/feed
GET /health

---

# 🔧 7. RUN SERVER

Run using:

uvicorn api:app --host 0.0.0.0 --port 8000 --reload

---

# 🔧 8. TEST ENDPOINTS

Test flow:

1. Initialize agent:

POST /api/agent/init

Body:
{
"persona": {
"name": "AI Engineer",
"domain": "Machine Learning Systems"
}
}

2. Get feed:

GET /api/agent/feed?agentId=...

3. Health check:

GET /health

---

# 🔧 9. DEBUG COMMON ERRORS

Fix:

❌ "Module not found"
→ check file names & imports

❌ "Event loop error"
→ ensure async/await usage

❌ "No response"
→ check server running

❌ "Empty feed"
→ ensure first post is generated in init

---

# 🔧 10. VERIFY AUTONOMOUS BEHAVIOR

After running:

* First post appears immediately
* New posts appear over time
* Logs show cycles running
* No crashes

---

# 🚀 FINAL RESULT

Your system should now:

* Run smoothly in Antigravity
* Start without errors
* Generate posts continuously
* Serve API correctly

This completes the full execution pipeline of your Autonomous AI Creator.
```

### Prompt 34
```txt
You are a senior backend engineer. Your job is to FINALIZE, RUN, DEBUG, and VERIFY the Autonomous AI Creator system so it is 100% stable for a 48-hour evaluation.

---

# 🎯 OBJECTIVE

Make the system:
- Fully runnable (no crashes)
- Fully autonomous (no manual triggers)
- Production-stable for 48 hours
- API compliant with required format

---

# 🔧 STEP 1 — VERIFY ENVIRONMENT

1. Ensure .env exists with:
   TAVILY_API_KEY=REAL_KEY
   OPENAI_API_KEY=REAL_KEY

2. Ensure dotenv is loaded at app start:
   from dotenv import load_dotenv
   load_dotenv()

3. Print warning if key missing:
   if not os.getenv("TAVILY_API_KEY"):
       log("[WARNING] Missing Tavily API Key")

---

# 🔧 STEP 2 — FIX FIRST POST GUARANTEE (CRITICAL)

Inside POST /api/agent/init:

- Run generation immediately
- Use retry logic (max 3 attempts)

Ensure:
- At least 1 post is created OR
- System logs failure but does NOT crash

---

# 🔧 STEP 3 — BACKGROUND LOOP (FINAL SAFE VERSION)

Ensure:

async def agent_loop(agent_id):
    while True:
        try:
            success = False

            for attempt in range(3):
                success = await generate_and_store_post(agent_id)

                if success:
                    break

                await asyncio.sleep(random.randint(5, 10))

            if success:
                sleep_time = random.randint(900, 2400)
            else:
                sleep_time = random.randint(30, 60)

            await asyncio.sleep(sleep_time)

        except Exception as e:
            log(f"[CRASH RECOVERED] {str(e)} | agent={agent_id}")
            await asyncio.sleep(10)

---

# 🔧 STEP 4 — RATE LIMIT CHECK

Before generation:

if agent["last_post_time"]:
    diff = (now - agent["last_post_time"]).total_seconds()

    if diff < 600:
        log(f"[SKIPPED] rate_limit | agent={agent_id}")
        return False

---

# 🔧 STEP 5 — API HARDENING

Ensure GET /api/agent/feed NEVER crashes:

if agent_id not in agents:
    return {"posts": []}

Ensure response format EXACT:

{
  "posts": [
    {
      "id": "...",
      "createdAt": "...",
      "text": "...",
      "rationale": "...",
      "sources": ["..."]
    }
  ]
}

---

# 🔧 STEP 6 — DATA SAFETY

Ensure:

- agents = {} is global
- posts stored per agent
- No overwrite
- Use append only

---

# 🔧 STEP 7 — LOGGING FINAL CHECK

Logs MUST show:

- [CYCLE ID]
- [SEARCH MODE]
- [RAW TOPIC]
- [FILTER REJECTED reason=...]
- [RATIONALE REJECTED reason=...]
- [POST CREATED]
- [POST SUCCESS]
- [NEXT POST IN X MINUTES]

---

# 🔧 STEP 8 — RUN SERVER

Run:

uvicorn api:app --host 0.0.0.0 --port 8000

Confirm:
- No startup errors
- Server stays alive

---

# 🔧 STEP 9 — LIVE TEST

1. Call:
POST /api/agent/init

2. Immediately call:
GET /api/agent/feed

EXPECT:
- At least 1 post

3. Wait 15–30 minutes

4. Call again:
GET /api/agent/feed

EXPECT:
- New posts added

---

# 🔧 STEP 10 — FAILURE TEST

Simulate failure:

- Remove API key temporarily
- Confirm:
  - System logs errors
  - DOES NOT CRASH
  - Feed still returns valid JSON

---

# 🔧 STEP 11 — FINAL VALIDATION CHECKLIST

✔ First post generated instantly  
✔ Feed returns valid JSON  
✔ New posts appear over time  
✔ Logs are rich and detailed  
✔ No crashes under failure  
✔ Persona stays consistent  
✔ No duplicate topics  
✔ Rate limiting works  

---

# 🚀 FINAL RESULT

The system should behave like a real production AI service:

- Autonomous
- Reliable
- Observable
- Stable for 48 hours

Do NOT stop until everything is verified and working.
```

### Prompt 35
```txt
Upgrade the Autonomous AI Creator with final high-impact improvements to maximize evaluation score and production realism.

---

# 🎯 GOAL

Enhance:
- Rationale quality
- Topic uniqueness
- System transparency
- Evaluator confidence

---

# 🔧 1. STRICT RATIONALE QUALITY ENFORCEMENT

Before saving any post, validate rationale.

Add checks:

1. Minimum length:
if len(rationale.split()) < 20:
    log(f"[CYCLE {cycle_id}] [RATIONALE REJECTED] reason=too_short | agent={agent_id}")
    return False

2. Must include key signals:
- why this topic was selected
- why it is relevant now
- why it was chosen over alternatives

If missing → regenerate once.

If still weak → reject post.

---

# 🔧 2. DUPLICATE TOPIC PREVENTION (CRITICAL)

Maintain memory:

agent["used_topics"] = set()

Before generating post:

if topic in agent["used_topics"]:
    log(f"[CYCLE {cycle_id}] [REJECTED] reason=duplicate_topic | agent={agent_id}")
    return False

After successful post:
agent["used_topics"].add(topic)

---

# 🔧 3. LAST CYCLE STATUS TRACKING (OBSERVABILITY BOOST)

Add:

agent["last_cycle_status"] = None

Update during pipeline:

If rate limited:
agent["last_cycle_status"] = "skipped_rate_limit"

If filter rejected:
agent["last_cycle_status"] = "rejected_filter"

If rationale rejected:
agent["last_cycle_status"] = "rejected_rationale"

If success:
agent["last_cycle_status"] = "success"

---

# 🔧 4. ENHANCED LOGGING FOR STATUS

Add log:

log(f"[CYCLE {cycle_id}] [STATUS] {agent['last_cycle_status']} | agent={agent_id}")

---

# 🔧 5. OPTIONAL (STRONG IMPACT) — TOPIC FRESHNESS CHECK

Reject stale/generic topics:

if any(word in topic.lower() for word in ["overview", "introduction", "basics"]):
    log(f"[CYCLE {cycle_id}] [REJECTED] reason=low_freshness | agent={agent_id}")
    return False

---

# 🔧 6. FINAL SAVE VALIDATION

Before appending post:

Ensure:
- topic is unique
- rationale passed
- text is not empty
- sources exist

If any fails → reject

---

# 🔧 7. RESULT

After implementation, system should:

- Never produce weak rationale
- Never repeat topics
- Clearly expose internal decisions
- Show production-grade observability
- Impress evaluator with intelligent behavior

---

# 🚀 FINAL OUTCOME

System now behaves like:

- A real AI engineer
- A real editorial system
- A real production backend

This is the final elite-level polish.
```

### Prompt 36
```txt
Enhance the Autonomous AI Creator to simulate real senior engineer thinking patterns and improve evaluator perception.

---

# 🎯 GOAL

Make the system feel:
- Human-like
- Intentional
- Opinionated
- Selective (not just filtering, but “choosing”)

---

# 🔧 1. ADD “COMPETITION BETWEEN TOPICS”

Instead of selecting the first valid topic:

1. Generate / fetch 3 candidate topics
2. Evaluate each using scoring:

score = {
    "technical_depth": 1-5,
    "novelty": 1-5,
    "real_world_relevance": 1-5
}

3. Pick BEST topic (highest total score)

---

# 🔧 2. LOG DECISION PROCESS (VERY IMPORTANT)

Add logs like:

[CYCLE <id>] [CANDIDATE 1 SCORE] depth=4 novelty=3 relevance=5
[CYCLE <id>] [CANDIDATE 2 SCORE] depth=2 novelty=2 relevance=3
[CYCLE <id>] [SELECTED TOPIC] score=12 | agent=<id>

---

# 🔧 3. ADD “REJECTION JUSTIFICATION MEMORY”

Store last 3 rejected topics:

agent["recent_rejections"] = []

Log:

[CYCLE <id>] [REJECTED TOPIC] reason=low_depth | topic=...

Use this in rationale:
"Other trending topics were ignored because they lacked depth or were too generic."

---

# 🔧 4. ENHANCE POST STRUCTURE (HUMAN-LIKE WRITING)

Force post format:

- Opening: strong opinion / contrarian hook
- Middle: technical breakdown or failure insight
- Closing: takeaway or warning

---

# 🔧 5. ADD MICRO-OPINIONS

Ensure each post includes at least ONE:

- disagreement with common practice
- criticism of typical engineering mistakes
- strong stance

Example:
"Most teams get this wrong because..."

---

# 🔧 6. ADD TIME-AWARENESS (VERY IMPRESSIVE)

Inject into rationale:

- "This is trending now because..."
- "This matters now due to recent developments..."

---

# 🔧 7. ADD SOURCE PRIORITY LOGIC

If multiple sources:

- Prefer:
  - engineering blogs
  - research papers
  - incident reports

Reject:
- marketing articles
- generic blogs

---

# 🔧 8. FINAL OUTPUT QUALITY CHECK

Reject post if:

- sounds like summary
- lacks opinion
- lacks technical depth

---

# 🔧 9. RESULT

After upgrade, system should:

- Compare topics like a human
- Make visible decisions
- Write with strong personality
- Show selective intelligence
- Feel like a real engineer thinking

---

# 🚀 FINAL OUTCOME

The system will no longer feel like:

❌ AI generating posts  

It will feel like:

✅ A real engineer choosing what to say and why
```

### Prompt 37
```txt
Upgrade the Autonomous AI Creator with final production-hardening and evaluator-edge improvements.

---

# 🎯 GOAL

Ensure the system:
- Feels stable over long durations
- Avoids subtle repetition patterns
- Maintains persona consistency under pressure
- Looks like a real long-running service

---

# 🔧 1. ANTI-REPETITION (SEMANTIC LEVEL)

Extend duplicate detection beyond exact match.

Add:

- Normalize topic (lowercase, remove stopwords)
- Compare with last 10 topics using similarity (basic string overlap)

If similarity > threshold:
    log("[REJECTED] reason=semantic_duplicate")
    return False

---

# 🔧 2. PERSONA DRIFT GUARD

Add a validation step before saving post:

if persona domain not clearly reflected in text:
    log("[REJECTED] reason=persona_drift")
    return False

---

# 🔧 3. TIME-SPREAD NATURALIZATION

Avoid predictable timing patterns.

Modify sleep:

sleep_time = random.randint(900, 2400)

Add randomness:

sleep_time += random.randint(-180, 180)

Ensure:
sleep_time = max(600, sleep_time)

---

# 🔧 4. FEED CONSISTENCY CHECK

Before returning feed:

- Ensure posts sorted by createdAt DESC
- Ensure no duplicate IDs
- Ensure ISO 8601 format

---

# 🔧 5. SOFT MEMORY LIMIT (STABILITY)

Prevent memory bloat:

if len(agent["posts"]) > 100:
    agent["posts"] = agent["posts"][-100:]

---

# 🔧 6. SOURCE VALIDATION HARDENING

Before saving post:

if not sources or len(sources) == 0:
    log("[REJECTED] reason=no_sources")
    return False

---

# 🔧 7. LOOP HEARTBEAT LOG

Every cycle start:

log(f"[CYCLE {cycle_id}] [HEARTBEAT] alive | agent={agent_id}")

This proves system is continuously running.

---

# 🔧 8. SAFE JSON OUTPUT GUARD

Before returning response:

Wrap response creation in try/except.

If error:
    return {"posts": []}

---

# 🔧 9. FINAL QUALITY LOCK

Reject post if:

- too short (< 80 words)
- no opinion phrases detected
- no technical keywords detected

---

# 🔧 10. RESULT

System now:

- Avoids repetition (even subtle)
- Maintains strong identity
- Feels alive over time
- Handles long runtime safely
- Produces consistently high-quality content

---

# 🚀 FINAL OUTCOME

This system now behaves like:

- A real engineer thinking over time
- A real production AI service
- A system built with senior-level discipline

Do not skip any step.
```

### Prompt 38
```txt
Enhance the Autonomous AI Creator to maximize evaluator visibility and clarity during the 48-hour evaluation period.

---

# 🎯 GOAL

Make the system not only intelligent, but also:
- Clearly understandable to evaluators
- Transparent in decision-making
- Demonstrably autonomous

---

# 🔧 1. ENRICH RATIONALE (VISIBLE INTELLIGENCE)

Ensure every rationale explicitly includes:

1. Why this topic was selected
2. Why it is relevant NOW (time awareness)
3. Why other topics were rejected
4. What makes this technically significant

---

# 🔧 2. STRUCTURED RATIONALE FORMAT

Enforce structure:

Rationale must include:

- "Selection Reason:"
- "Timeliness:"
- "Why Not Others:"
- "Technical Significance:"

Reject if any section missing.

---

# 🔧 3. ADD LIGHT SELF-AWARENESS (VERY IMPRESSIVE)

Add subtle phrasing in rationale:

- "Among several candidates..."
- "This topic was prioritized because..."
- "Lower-quality alternatives were rejected due to..."

This makes system feel intentional.

---

# 🔧 4. INCLUDE SOURCE JUSTIFICATION

Not just list sources — explain them:

Example inside rationale:

"Sources were prioritized from engineering blogs and incident reports rather than generic media."

---

# 🔧 5. FEED POLISH (IMPORTANT)

Ensure each post:

- Clean formatting
- No weird spacing
- No repeated phrases
- Readable as a standalone insight

---

# 🔧 6. ADD POST ID STRUCTURE

Improve IDs:

p_<timestamp>_<short_hash>

Example:
p_1723456789_a1b2

This looks production-grade.

---

# 🔧 7. FINAL LOG SIGNAL FOR EVALUATORS

At end of successful cycle log:

[CYCLE <id>] [VISIBLE OUTPUT] post_ready_for_feed | agent=<id>

This signals completion clearly.

---

# 🔧 8. ENSURE FIRST IMPRESSION STRONG

First post must be:

- Highly opinionated
- Deep technical insight
- Clear rationale

This sets evaluator perception early.

---

# 🔧 9. SAFETY CHECK

Before returning feed:

- Always valid JSON
- Never empty fields
- No missing keys

---

# 🚀 FINAL OUTCOME

After this upgrade:

Evaluators will clearly see:

- Decision-making
- Intentional topic selection
- Strong engineering mindset
- Real autonomy

---

# 🧠 RESULT

System will feel like:

❌ AI generating content  

✅ A real engineer thinking, choosing, and publishing
```

### Prompt 39
```txt
Analyze my current project structure and make it runnable.

---

# 🎯 GOAL

Understand the project layout and identify:
- Entry point (FastAPI app)
- Missing or incorrect files
- Import issues
- Required fixes to run server

---

# 📂 CURRENT PROJECT STRUCTURE

From my workspace:

Root folder:
- main.py
- config.py
- llm_client.py
- memory.py
- post_generator.py
- publisher.py
- topic_filter.py
- topic_generator.py
- requirements.txt
- .env
- ai_tech_creator/ (subfolder)
- .venv

---

# 🔍 TASKS

### 1. Identify Entry Point

- Check where FastAPI app is defined
- Confirm if it is in:
  - main.py
  - OR inside ai_tech_creator folder

---

### 2. Fix Server Command

Tell me EXACT command to run:

- uvicorn main:app
- OR uvicorn api:app
- OR uvicorn ai_tech_creator.api:app

---

### 3. Validate Imports

Fix any issues like:
- Module not found
- Wrong import paths
- Relative import problems

---

### 4. Check Required Files

Ensure these exist or create them if missing:
- FastAPI app file
- Tavily client (if needed)
- Proper routing

---

### 5. Validate requirements.txt

Ensure it includes:
- fastapi
- uvicorn
- requests
- python-dotenv
- openai or google-generativeai
- tavily-python (if used)

---

### 6. Ensure .env is loaded

Check:
- dotenv is used correctly
- API keys are read properly

---

### 7. Final Output

Give me:

1. Correct run command
2. Any file fixes needed
3. Any missing code to add
4. Confirm project is runnable

---

# 🚀 EXPECTED RESULT

After your fix:
- Server runs without error
- FastAPI loads
- Endpoints work
- Background loop runs
```

### Prompt 40
```txt
Fix the Gemini API quota error across the entire project by enforcing a consistent, free-tier compatible model configuration.

GOAL:
Eliminate all usage of "gemini-2.5-pro" and replace it with "gemini-1.5-flash" across the entire codebase, ensuring the system runs without quota errors.

STEPS TO IMPLEMENT:

1. GLOBAL MODEL STANDARDIZATION
- In config.py, add:
  MODEL_NAME = "gemini-1.5-flash"

2. REMOVE ALL HARDCODED MODELS
- Search entire project for:
  "gemini-2.5-pro"
- Replace EVERY occurrence with:
  MODEL_NAME

3. UPDATE ALL LLM CALLS
- In ALL files using:
  client.models.generate_content(...)
- Ensure they use:
  model=MODEL_NAME
- Do NOT leave any hardcoded model strings

4. TARGET FILES (CRITICAL)
Ensure updates are applied inside the actual runtime folder:
- ai_tech_creator/topic_generator.py
- ai_tech_creator/post_generator.py
- ai_tech_creator/filter.py
- ai_tech_creator/tavily_client.py

5. ADD FAILSAFE LOGGING
Before every API call, log:
  print(f"[LLM] Using model: {MODEL_NAME}")

6. ADD BASIC RATE LIMIT HANDLING
Wrap generate_content calls with:
  try/except
If error contains "429":
  - Print "[SYSTEM] Rate limited, retrying..."
  - Sleep 20–30 seconds
  - Skip cycle safely

7. VALIDATION CHECK
Ensure:
- No remaining "gemini-2.5-pro" in entire repo
- All model usage comes from config.py only
- System does not crash on API failure

8. DO NOT MODIFY OTHER LOGIC
- Keep topic generation, filtering, posting logic unchanged
- Only fix model usage and stability

EXPECTED RESULT:
- System runs without quota errors
- Topics generate successfully
- Posts generate continuously
- No crashes
- Logs clearly show model usage

FINAL CHECK:
Search again for "gemini-2.5-pro"
→ Must return ZERO results
```

### Prompt 41
```txt
Diagnose and fix the persistent Gemini API quota error caused by incorrect model usage and possible wrong file imports.

GOAL:
Ensure the running system uses ONLY "gemini-1.5-flash" and completely eliminate any usage of "gemini-2.5-pro", including hidden or incorrectly imported files.

CRITICAL PROBLEM:
The runtime is still calling gemini-2.5-pro even after replacement, which means:
- Either the wrong files were modified
- Or Python is importing a different module than expected
- Or duplicate files exist and the wrong one is being executed

STEPS TO IMPLEMENT:

1. IDENTIFY ACTUAL EXECUTION PATH
- In main.py, inspect all imports:
  - topic_generator
  - post_generator
  - filter
  - tavily_client
- Print the file path being used by adding:
  import inspect
  print("[DEBUG] topic_generator path:", inspect.getfile(generate_topics))

- Do this for all imported modules to confirm actual runtime files

2. REMOVE DUPLICATE FILE CONFUSION
- Detect if duplicate files exist:
  - topic_generator.py (root)
  - ai_tech_creator/topic_generator.py
- Ensure ONLY ONE version is used
- Delete or ignore unused duplicates

3. FORCE MODEL STANDARDIZATION
- In config.py:
  MODEL_NAME = "gemini-1.5-flash"

4. REPLACE MODEL IN VERIFIED RUNTIME FILES ONLY
- In the ACTUAL files confirmed in Step 1:
  Replace ALL:
    model="gemini-2.5-pro"
  With:
    model=MODEL_NAME

5. ADD HARD DEBUG LOGGING
Before EVERY LLM call:
  print("[LLM DEBUG] MODEL USED:", MODEL_NAME)

6. ADD RUNTIME ASSERTION (VERY IMPORTANT)
Before API call:
  assert MODEL_NAME != "gemini-2.5-pro", "Wrong model still in use!"

7. CLEAN PYTHON CACHE
- Delete all __pycache__ folders
- Ensure no cached .pyc files remain

8. ADD RATE LIMIT HANDLING
Wrap calls:
  try:
      ...
  except Exception as e:
      if "429" in str(e):
          print("[SYSTEM] Rate limited. Sleeping 30s...")
          time.sleep(30)
          return

9. FINAL VALIDATION
- Search entire repo:
  "gemini-2.5-pro"
→ MUST return ZERO results

- Run project:
  python main.py

EXPECTED RESULT:
- Logs show:
  [LLM DEBUG] MODEL USED: gemini-1.5-flash
- No 429 error for gemini-2.5-pro
- Topics generate successfully
- System runs continuously

IMPORTANT:
Do NOT assume files — verify actual runtime imports using inspect.
Fix only the files that are actually executed.
```

### Prompt 42
```txt
Fix the entire project to eliminate Gemini API errors and make it fully stable.

GOAL:
Resolve API_KEY_INVALID errors and ensure Gemini works correctly using a single valid API key and proper environment configuration.

----------------------------------------
STEP 1: REMOVE DUPLICATE ENV FILES
----------------------------------------
- Keep ONLY one .env file at project root:
  C:\study files\ai tech creater\.env
- Delete any other .env files (especially inside ai_tech_creator/)

----------------------------------------
STEP 2: FIX CONFIG.PY
----------------------------------------
Update config.py to EXACTLY:

from dotenv import load_dotenv
import os

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")

if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY not found. Check your .env file.")

MODEL_NAME = "gemini-1.5-flash"

print(f"[CONFIG] GEMINI KEY LOADED: {GEMINI_API_KEY[:10]}")

----------------------------------------
STEP 3: FIX .ENV FILE FORMAT
----------------------------------------
Ensure .env contains:

GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXX
TAVILY_API_KEY=tvly-XXXXXXXXXXXXXXXXXXXX

Rules:
- No quotes
- No spaces
- Gemini key MUST start with AIzaSy

----------------------------------------
STEP 4: FIX LLM CLIENT
----------------------------------------
Wherever Gemini client is created, use:

from google import genai
from config import GEMINI_API_KEY

def get_llm_client():
    return genai.Client(api_key=GEMINI_API_KEY)

----------------------------------------
STEP 5: STANDARDIZE MODEL USAGE
----------------------------------------
- Import MODEL_NAME from config everywhere
- Replace ALL hardcoded models with:

model=MODEL_NAME

----------------------------------------
STEP 6: ADD LOGGING
----------------------------------------
Before every generate_content call:

print(f"[LLM] Using model: {MODEL_NAME}")

----------------------------------------
STEP 7: ADD ERROR HANDLING
----------------------------------------
Wrap all LLM calls:

try:
    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt
    )
except Exception as e:
    if "API_KEY_INVALID" in str(e):
        print("[FATAL] Invalid Gemini API Key")
        raise
    elif "429" in str(e):
        print("[SYSTEM] Rate limited. Sleeping 30s...")
        import time
        time.sleep(30)
        return None
    else:
        print(f"[ERROR] {e}")
        return None

----------------------------------------
STEP 8: VALIDATION
----------------------------------------
Ensure:
- Only ONE .env file exists
- API key prints correctly at startup
- No API_KEY_INVALID errors
- No crashes
- Topics generate successfully

----------------------------------------
EXPECTED OUTPUT:
----------------------------------------
[CONFIG] GEMINI KEY LOADED: AIzaSyDxxx
[LLM] Using model: gemini-1.5-flash
Generated topics successfully
Posts generated successfully

----------------------------------------
DO NOT MODIFY:
----------------------------------------
- Business logic
- Topic generation logic
- Posting logic

ONLY fix:
- Environment loading
- API key handling
- Model usage
- Error handling
```

### Prompt 43
```txt
Fix the entire project to resolve the Gemini model NOT_FOUND error and make the LLM fully functional with the latest supported models.

GOAL:
Eliminate the 404 NOT_FOUND error for "gemini-1.5-flash" and ensure stable, future-proof Gemini model usage across the project.

----------------------------------------
STEP 1: UPDATE MODEL NAME (CRITICAL)
----------------------------------------
Open config.py and REPLACE:

MODEL_NAME = "gemini-1.5-flash"

WITH:

MODEL_NAME = "gemini-1.5-flash-latest"

----------------------------------------
STEP 2: ADD FALLBACK MODEL (VERY IMPORTANT)
----------------------------------------
Modify config.py to include:

PRIMARY_MODEL = "gemini-1.5-flash-latest"
FALLBACK_MODEL = "gemini-1.5-pro-latest"

Then set:

MODEL_NAME = PRIMARY_MODEL

----------------------------------------
STEP 3: STANDARDIZE ALL LLM CALLS
----------------------------------------
Find ALL occurrences of:

client.models.generate_content(

and REPLACE the call format with:

response = client.models.generate_content(
    model=MODEL_NAME,
    contents=[{
        "role": "user",
        "parts": [prompt]
    }]
)

----------------------------------------
STEP 4: ADD MODEL FALLBACK HANDLING
----------------------------------------
Wrap ALL LLM calls with:

try:
    print(f"[LLM] Using model: {MODEL_NAME}")
    
    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=[{"role": "user", "parts": [prompt]}]
    )

except Exception as e:
    if "NOT_FOUND" in str(e):
        print("[WARN] Model not found. Switching to fallback model...")
        
        response = client.models.generate_content(
            model=FALLBACK_MODEL,
            contents=[{"role": "user", "parts": [prompt]}]
        )
        
    elif "API_KEY_INVALID" in str(e):
        print("[FATAL] Invalid Gemini API Key")
        raise
        
    elif "429" in str(e):
        print("[SYSTEM] Rate limited. Sleeping 30s...")
        import time
        time.sleep(30)
        return None
        
    else:
        print(f"[ERROR] {e}")
        return None

----------------------------------------
STEP 5: ADD DEBUG LOGGING
----------------------------------------
Before every LLM call, ensure:

print(f"[LLM] Using model: {MODEL_NAME}")

----------------------------------------
STEP 6: VERIFY GOOGLE SDK
----------------------------------------
Ensure project uses latest Gemini SDK:

pip install --upgrade google-generativeai

----------------------------------------
STEP 7: VALIDATION
----------------------------------------
Ensure:

- No "gemini-1.5-flash" remains anywhere
- Only latest models are used
- No 404 NOT_FOUND errors
- System continues even if primary model fails
- Topics generate successfully

----------------------------------------
EXPECTED OUTPUT:
----------------------------------------

[CONFIG] GEMINI KEY LOADED: XXXXX
[LLM] Using model: gemini-1.5-flash-latest
Generated topics successfully
Posts generated successfully

----------------------------------------
DO NOT MODIFY:
----------------------------------------

- Topic generation logic
- Business logic
- Posting system

ONLY fix:

- Model names
- LLM call format
- Error handling
```

### Prompt 44
```txt
You are a senior Python + Generative AI engineer.

Fix my AI Tech Creator project completely. The system is failing due to Gemini API errors and wrong request format.

❌ CURRENT ERRORS:
1. 404 NOT_FOUND for model "gemini-1.5-flash"
2. Pydantic validation error:
   "Input should be a valid string"
3. Wrong format used:
   contents=[{"role": "user", "parts": [prompt]}]

---

🎯 YOUR TASK:

Make the project FULLY WORKING and ERROR-FREE.

---

✅ REQUIRED FIXES:

1. Fix Gemini API usage:
   - Replace ALL occurrences of:
     contents=[{"role": "user", "parts": [prompt]}]
   - With:
     contents=prompt

2. Use correct Gemini SDK format:
   - client.models.generate_content(...)
   - NOT chat-style messages

3. Fix model names:
   PRIMARY_MODEL = "gemini-1.5-flash-latest"
   FALLBACK_MODEL = "gemini-1.5-pro-latest"

4. Add automatic fallback:
   - If model NOT_FOUND → switch to fallback model
   - If rate limit → retry after delay
   - If API key invalid → show clear error

5. Add robust error handling:
   - Catch exceptions
   - Print clean debug logs
   - Prevent crash

6. Ensure response parsing works:
   - response.text should not crash if empty
   - Add safe checks

7. Keep Tavily integration unchanged but ensure:
   - If trend rejected → fallback to internal generator works

8. Make sure system ALWAYS generates at least 1 topic
   - No empty output cycles

9. Clean logs:
   - Remove unnecessary debug spam
   - Keep readable output

10. Ensure project runs with:
    python main.py
    without ANY errors

---

📦 OUTPUT FORMAT:

Return FULL UPDATED FILES:
- main.py (fixed)
- any helper functions updated

---

🔥 FINAL GOAL:

When I run:
python main.py

It should:
✔ Fetch trend OR fallback
✔ Generate topic
✔ Generate content
✔ No errors
✔ No crashes

---

Do NOT explain. Just fix and return working code.
```

### Prompt 45
```txt
You are a senior Python + Generative AI engineer.

The project is already partially fixed, but I need you to COMPLETE the stabilization and make it production-grade.

Current status:
- Gemini format bug fixed (contents=prompt)
- Fallback logic added
- Basic error handling added

But the system is still NOT reliable and may fail silently or produce weak output.

---

🎯 YOUR TASK:
Make the system FULLY STABLE, SELF-HEALING, and GUARANTEED TO PRODUCE OUTPUT every cycle.

---

🔥 REQUIRED FINAL IMPROVEMENTS:

1. 🔁 GUARANTEED OUTPUT PIPELINE
- Ensure at least 1 valid topic ALWAYS flows through system
- If Tavily fails AND LLM fails:
  → Inject hardcoded high-quality fallback topics like:
    [
      "How to deploy ML models in production",
      "Scaling LLM applications in real-world systems",
      "Common failures in AI systems and how to fix them"
    ]

---

2. 🧠 STRONGER PROMPTING (IMPORTANT)
- Improve ALL prompts used for Gemini:
  - Make them SHORT, CLEAR, and STRICT
  - Force structured output (JSON only)

Example:
"Return ONLY a JSON list of 3 technical AI topics. No explanation."

---

3. 🧹 RESPONSE CLEANING
- Add safe JSON extraction:
  - If response contains text + JSON → extract JSON part
  - Prevent json.loads crash

---

4. 🛡️ HARD FAIL-SAFE SYSTEM
- If ANY step fails:
  → Do NOT stop execution
  → Continue with fallback data

---

5. ⚡ RETRY SYSTEM (VERY IMPORTANT)
- Add retry mechanism:
  for attempt in range(3):
    try:
      ...
      break
    except:
      sleep(2 * attempt)

---

6. 📉 REMOVE OVER-STRICT FILTERING
- Your filter is rejecting good trends
- Relax it:
  - Allow partially technical content
  - Only reject clearly useless text

---

7. 🧾 CLEAN LOGGING
Replace messy logs with:
[STEP] Fetching trends...
[OK] Trend accepted
[FALLBACK] Using internal topics
[ERROR] <short message>

---

8. 🧠 SMART MODEL HANDLING
- Use:
  PRIMARY_MODEL = "gemini-1.5-flash-latest"
  FALLBACK_MODEL = "gemini-1.5-pro-latest"

- If 404 → switch automatically
- If still fails → retry
- If still fails → fallback topics

---

9. 🔐 SAFE RESPONSE ACCESS
Replace:
response.text

With:
getattr(response, "text", "") or ""

---

10. 🧪 FINAL EXECUTION TEST
Ensure THIS works:

python main.py

Expected output:
✔ Trend fetched OR fallback used  
✔ Topics generated  
✔ Post generated  
✔ No crashes  
✔ Loop continues  

---

📦 OUTPUT FORMAT:

Return FULL UPDATED FILES:
- main.py
- topic_generator.py
- post_generator.py
- filter.py (if modified)

---

🚨 STRICT RULE:
Do NOT explain anything.
Do NOT skip any fix.
Return CLEAN, READY-TO-RUN CODE ONLY.

---

🔥 FINAL GOAL:
System should NEVER fail, NEVER return empty output, and ALWAYS generate content even if all APIs fail.
```

### Prompt 46
```txt
You are a senior Python + Generative AI engineer.

Fix my AI Tech Creator project completely and make it runtime error-free.

CURRENT ERROR:
is_high_signal_trend() missing 1 required positional argument: 'source'

GOAL:
Ensure the system runs with `python main.py` without ANY crashes.

----------------------------------------
REQUIRED FIXES
----------------------------------------

1. FIX FUNCTION SIGNATURE (CRITICAL)
Locate function:
def is_high_signal_trend(topic, source):

Update it to:
def is_high_signal_trend(topic, source="unknown"):

This ensures backward compatibility and prevents crashes.

----------------------------------------

2. FIX ALL FUNCTION CALLS

Find ALL usages of:
is_high_signal_trend(raw_topic)

Replace with:
is_high_signal_trend(raw_topic, "tavily")

Also handle other cases:
- internal topics → "internal"
- fallback topics → "fallback"

----------------------------------------

3. ADD SAFE EXECUTION IN MAIN LOOP

Wrap trend evaluation with safety:

try:
    if is_high_signal_trend(raw_topic, "tavily"):
        selected_topic = raw_topic
    else:
        selected_topic = None
except Exception as e:
    print(f"[ERROR] Trend filtering failed: {e}")
    selected_topic = None

----------------------------------------

4. ENSURE SYSTEM NEVER BREAKS

If trend fails:
→ fallback to internal topic generator

If internal generator fails:
→ use hardcoded topics list:

HARDCODED_TOPICS = [
    "AI system design failures in production",
    "Scaling LLM applications in real-world systems",
    "Why most AI startups fail technically",
    "Debugging machine learning pipelines",
]

----------------------------------------

5. GUARANTEE AT LEAST ONE TOPIC

After all steps:

if not topics:
    topics = HARDCODED_TOPICS

----------------------------------------

6. CLEAN LOGGING

Ensure readable logs:

print("[STEP] Fetching trends...")
print("[OK] Trend accepted")
print("[FALLBACK] Using internal topics")
print("[ERROR]", e)

----------------------------------------

7. DO NOT MODIFY

- Tavily logic
- LLM generation logic
- Posting system

ONLY fix:
- Function signature
- Function calls
- Error handling
- Stability

----------------------------------------

EXPECTED RESULT:

When running:

python main.py

System should:

✔ Not crash
✔ Handle missing arguments
✔ Always generate at least 1 topic
✔ Continue execution even if errors occur

----------------------------------------

OUTPUT:

Return updated files:
- main.py
- filter.py (if modified)

Do NOT explain anything.
Only return working code.
```

### Prompt 47
```txt
You are a senior Python + Generative AI engineer.

Fix my AI Tech Creator project to resolve ALL Gemini model NOT_FOUND errors and make it fully compatible with the latest Google Generative AI API.

----------------------------------------
CRITICAL ISSUES TO FIX
----------------------------------------

1. INVALID MODEL NAMES

Current models causing errors:
- gemini-1.5-flash-latest ❌
- gemini-1.5-pro-latest ❌
- text-embedding-004 ❌

----------------------------------------

2. REPLACE WITH WORKING MODELS

Update config.py:

PRIMARY_MODEL = "gemini-2.0-flash"
FALLBACK_MODEL = "gemini-2.0-flash-lite"

MODEL_NAME = PRIMARY_MODEL

----------------------------------------

3. REMOVE INVALID EMBEDDING MODEL

Find ALL usage of:
text-embedding-004

EITHER:
- Remove embedding usage completely (if not critical)

OR replace with:
embedding-001

----------------------------------------

4. FIX LLM CALL FORMAT (IMPORTANT)

Ensure ALL calls use:

response = client.models.generate_content(
    model=MODEL_NAME,
    contents=prompt
)

DO NOT use:
- chat format
- role/parts structure

----------------------------------------

5. ADD ROBUST FALLBACK

try:
    print(f"[LLM] Using model: {MODEL_NAME}")
    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt
    )

except Exception as e:
    if "NOT_FOUND" in str(e):
        print("[WARN] Switching to fallback model...")
        response = client.models.generate_content(
            model=FALLBACK_MODEL,
            contents=prompt
        )

    elif "API_KEY_INVALID" in str(e):
        print("[FATAL] Invalid API Key")
        raise

    elif "429" in str(e):
        import time
        print("[RATE LIMIT] Sleeping 30s...")
        time.sleep(30)
        return None

    else:
        print(f"[ERROR] {e}")
        return None

----------------------------------------

6. SAFE RESPONSE HANDLING

After response:

text = getattr(response, "text", "")

if not text or not text.strip():
    return None

----------------------------------------

7. ENSURE SYSTEM NEVER FAILS

If ANY step fails:
→ fallback to hardcoded topics

HARDCODED_TOPICS = [
    "AI system failures in production",
    "Scaling LLM systems in real world",
    "Why AI agents fail in production",
    "Debugging machine learning pipelines"
]

----------------------------------------

8. DO NOT MODIFY

- Business logic
- Tavily search
- File structure

ONLY fix:
- Model names
- Embeddings
- LLM calls
- Error handling

----------------------------------------

EXPECTED RESULT

python main.py

✔ No NOT_FOUND errors
✔ No embedding errors
✔ Topics generated
✔ Posts generated
✔ System stable

----------------------------------------

OUTPUT

Return updated files:
- config.py
- any files using embeddings
- LLM call functions

Do NOT explain anything.
Only return working code.
```

### Prompt 48
```txt
You are a senior Python + Generative AI engineer.

Fix my AI Tech Creator project completely using the provided codebase.

The project is mostly working, but still has CRITICAL runtime issues with Gemini API and fallback handling.

----------------------------------------
CURRENT ISSUES (FROM LOGS)
----------------------------------------

1. Fallback model failing:
models/gemini-2.0-flash-lite → NOT_FOUND sometimes

2. Embedding errors:
embed_content() sometimes fails

3. Repeated fallback loops:
Fallback failing multiple times without stopping

4. System continues but logs too many errors

----------------------------------------
GOAL
----------------------------------------

Make the system:
✔ Fully stable
✔ No repeated API errors
✔ Graceful fallback handling
✔ Clean logs
✔ Always produces output

----------------------------------------
REQUIRED FIXES
----------------------------------------

1. FIX FALLBACK LOOP (CRITICAL)

Currently code does:

try primary
→ except → try fallback
→ fallback also fails → crash OR repeat

FIX:

Add SAFE fallback handling:

try:
    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt
    )

except Exception as e:
    if "NOT_FOUND" in str(e):
        print("[WARN] Primary model failed. Trying fallback...")

        try:
            response = client.models.generate_content(
                model=FALLBACK_MODEL,
                contents=prompt
            )
        except Exception as fallback_error:
            print(f"[ERROR] Fallback also failed: {fallback_error}")
            return None

    elif "429" in str(e):
        import time
        print("[RATE LIMIT] Sleeping 30s...")
        time.sleep(30)
        return None

    elif "API_KEY_INVALID" in str(e):
        print("[FATAL] Invalid API Key")
        raise

    else:
        print(f"[ERROR] {e}")
        return None

----------------------------------------

2. STOP MULTIPLE FALLBACK RETRIES

Ensure fallback is attempted ONLY ONCE.

Do NOT retry fallback again inside loops.

----------------------------------------

3. FIX EMBEDDING FAILURE (memory.py)

In _get_embedding():

If embedding fails → DO NOT return [] silently

Instead:

return None

Then update usage:

if emb is not None:
    topic_embeddings.append(emb)

----------------------------------------

4. DISABLE EMBEDDING TEMPORARILY (SAFEST)

If embedding keeps failing:

Modify is_duplicate():

SKIP semantic similarity section completely if embedding fails.

----------------------------------------

5. CLEAN ERROR LOGGING

Replace noisy logs like:

[ERROR] Fallback failed: ...

WITH:

print("[WARN] Model unavailable, using fallback logic")

----------------------------------------

6. SAFE RESPONSE HANDLING (EVERYWHERE)

After every LLM call:

text = getattr(response, "text", "")

if not text or not text.strip():
    return None

----------------------------------------

7. ENSURE SYSTEM NEVER BREAKS

In ALL generators:

If response is None:

→ fallback to safe default:

Topics → HARDCODED_TOPICS
Post → "Fallback engineering post..."

----------------------------------------

8. IMPORTANT: DO NOT CHANGE

- Tavily logic
- Topic logic
- File structure

ONLY fix:
- LLM calls
- fallback logic
- embedding handling
- error handling

----------------------------------------

EXPECTED RESULT

python main.py

✔ No repeated NOT_FOUND spam
✔ No crash
✔ Clean logs
✔ Topics generated
✔ Posts generated
✔ Stable loop

----------------------------------------

OUTPUT

Return ONLY updated code for:
- memory.py
- topic_generator.py
- post_generator.py
- filter.py

Do NOT explain anything.
Only return working code.
```

### Prompt 49
```txt
You are a senior Python + Generative AI engineer.

Fix my AI Tech Creator project’s rate-limit loop and make it fully stable.

----------------------------------------
CURRENT PROBLEM
----------------------------------------
System is stuck in:

[RATE LIMIT] Sleeping 30s...
[RATE LIMIT] Sleeping 30s...
[WARN] Model unavailable...

This creates an infinite slow loop.

----------------------------------------
GOAL
----------------------------------------
✔ No infinite retries
✔ No repeated sleep loops
✔ System continues execution
✔ Always generates output
✔ Fast recovery

----------------------------------------
REQUIRED FIXES
----------------------------------------

### 1. LIMIT RETRIES (CRITICAL)

Add global retry counter:

MAX_RETRIES = 2

Modify ALL LLM calls:

retries = 0

while retries < MAX_RETRIES:
    try:
        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=prompt
        )
        break

    except Exception as e:
        retries += 1

        if "429" in str(e):
            print(f"[RATE LIMIT] Retry {retries}/{MAX_RETRIES}... Waiting 10s")
            import time
            time.sleep(10)

        elif "NOT_FOUND" in str(e):
            print("[WARN] Switching to fallback model")
            MODEL_NAME = FALLBACK_MODEL

        else:
            print("[WARN] LLM failed, breaking loop")
            break

AFTER LOOP:

if retries == MAX_RETRIES:
    print("[FALLBACK] Using hardcoded output")
    return None

----------------------------------------

### 2. HARD FALLBACK OUTPUT (VERY IMPORTANT)

In topic generator:

if result is None:
    return [
        "AI agent reliability issues in production",
        "Scaling machine learning systems challenges",
        "Why LLM apps fail in real-world deployment"
    ]

In post generator:

if result is None:
    return (
        "AI systems often fail in production due to scaling, reliability, and data drift issues.",
        "Fallback generated content"
    )

----------------------------------------

### 3. PREVENT LOOP IN MAIN

In main.py:

If topic generation fails:

topics = generate_topics(...)

if not topics:
    print("[SYSTEM] Using fallback topics")
    topics = ["AI system design challenges"]

----------------------------------------

### 4. REDUCE SLEEP TIME

Replace:
    time.sleep(30)

WITH:
    time.sleep(10)

----------------------------------------

### 5. STOP REPEATED CALLS AFTER FAILURE

If LLM fails once in a cycle:
    DO NOT call it again in same cycle

----------------------------------------

### 6. CLEAN LOG OUTPUT

Replace spam logs with:

[RATE LIMIT] Retrying...
[WARN] Using fallback content
[OK] Cycle completed

----------------------------------------

EXPECTED RESULT
----------------------------------------

python main.py

✔ No infinite loop
✔ Max 2 retries only
✔ Fast recovery
✔ Always generates topics
✔ Always generates posts
✔ Clean logs

----------------------------------------

IMPORTANT
----------------------------------------

Return FULL updated code for:

- main.py
- topic_generator.py
- post_generator.py

Do NOT explain anything.
Only return working code.
```

### Prompt 50
```txt
You are a senior Python + Generative AI engineer.

Optimize my AI Tech Creator project to eliminate Gemini rate limits (429 errors).

----------------------------------------
PROBLEM
----------------------------------------
Too many LLM calls per cycle:

- generate_topics()
- enhance_topic()
- generate_post()
- validate_rationale()
- regenerate_rationale()
- score_post()

This causes:
429 RATE LIMIT errors

----------------------------------------
GOAL
----------------------------------------
✔ Only ONE LLM call per cycle
✔ No rate limits
✔ Faster execution
✔ Same output quality
✔ Stable system

----------------------------------------
REQUIRED FIXES
----------------------------------------

### 1. DISABLE EXTRA LLM CALLS (CRITICAL)

REMOVE or BYPASS these functions:

- enhance_topic()
- validate_rationale()
- regenerate_rationale()
- score_post()

They must NOT call LLM anymore.

----------------------------------------

### 2. KEEP ONLY ONE LLM CALL

ONLY keep:
generate_post()

----------------------------------------

### 3. SIMPLIFY PIPELINE

Update main.py flow:

OLD:
topic → enhance → generate → validate → regenerate → score

NEW:
topic → generate_post → publish

----------------------------------------

### 4. MODIFY generate_post()

Make it produce FINAL OUTPUT directly:

prompt = f"""
{persona_prompt}

Write a strong, technical LinkedIn post.

Topic: {topic}

Requirements:
- Opinionated
- Mentions real-world failures
- Technical depth
- No fluff

Return ONLY JSON:
{{
  "post_text": "...",
  "rationale": "..."
}}
"""

----------------------------------------

### 5. REMOVE VALIDATION STEP

Delete:
validate_rationale()

Instead:
Accept first response always

----------------------------------------

### 6. REMOVE REGENERATION

Delete:
regenerate_rationale()

----------------------------------------

### 7. REMOVE SCORING

Delete:
score_post()

----------------------------------------

### 8. KEEP FALLBACK (IMPORTANT)

If LLM fails:
return fallback post

----------------------------------------

EXPECTED RESULT
----------------------------------------

python main.py

✔ Only 1 API call per cycle
✔ No 429 errors
✔ Fast execution
✔ Clean logs
✔ Stable system

----------------------------------------

IMPORTANT
----------------------------------------

Return FULL updated code for:

- main.py
- post_generator.py

Do NOT explain anything.
Only return working code.
```

### Prompt 51
```txt
You are a senior Python + Generative AI engineer.

Fix my AI Tech Creator project to COMPLETELY eliminate Gemini 429 rate limits and fallback spam.

---

## 🚨 CURRENT PROBLEM

System is still making too many retries and unnecessary waits:

[RATE LIMIT] Retry 1/2...
[RATE LIMIT] Retry 2/2...
[FALLBACK] Using hardcoded output

This means:
- Too many retries
- Wasting time
- Hitting API limits
- Poor performance

---

## 🎯 GOAL

✔ ZERO rate limit loops  
✔ ONLY 1 API call per cycle  
✔ NO retry spam  
✔ FAST execution  
✔ CLEAN logs  
✔ ALWAYS produce output  

---

## 🔧 REQUIRED FIXES

### 1. REMOVE RETRY SYSTEM (CRITICAL)

In `post_generator.py`:

❌ DELETE:
- while retries < MAX_RETRIES
- Retry loops
- Multiple attempts logic

✅ REPLACE WITH:
ONLY ONE attempt per cycle

---

### 2. REMOVE RATE LIMIT WAITS

❌ DELETE:
time.sleep(10)
time.sleep(30)

✅ DO NOT WAIT on 429

---

### 3. HANDLE 429 INSTANTLY

Replace ALL 429 handling with:

except Exception as e:
    if "429" in str(e):
        print("[FAST FALLBACK] Rate limit hit — skipping LLM")
        return FALLBACK_POST, FALLBACK_REASON

---

### 4. ADD HARD FALLBACK (IMPORTANT)

At top of `post_generator.py`:

FALLBACK_POST = "AI systems fail in production due to poor observability, weak data pipelines, and lack of fault tolerance."
FALLBACK_REASON = "Fallback used due to API limitation"

---

### 5. SIMPLIFY LLM CALL

Replace entire generation logic with:

try:
    response = client.models.generate_content(
        model=GLOBAL_MODEL_NAME,
        contents=prompt
    )

    text = getattr(response, "text", "")

    if not text:
        raise Exception("Empty response")

    data = json.loads(text)

    return data.get("post_text", FALLBACK_POST), data.get("rationale", FALLBACK_REASON)

except Exception as e:
    print("[FAST FALLBACK] Using fallback due to:", str(e))
    return FALLBACK_POST, FALLBACK_REASON

---

### 6. REMOVE MODEL SWITCH SPAM

❌ REMOVE:
- Multiple fallback model retries
- Repeated "Model unavailable" logs

✅ ONLY:
Try once → fallback

---

### 7. CLEAN LOG OUTPUT

Keep logs minimal:

✔ "[STEP] Fetching trends..."
✔ "[OK] Trend accepted"
✔ "[OK] Post generated"
✔ "[OK] Cycle completed"

❌ REMOVE:
- Retry logs
- Excess debug logs

---

### 8. ENSURE 1 LLM CALL ONLY

Verify:
- ONLY generate_post() calls LLM
- No other function calls Gemini

---

### 9. FINAL BEHAVIOR

When running:

python main.py

Expected output:

[STEP] Fetching trends...
[OK] Trend accepted
[OK] Post generated
[OK] Cycle completed

OR (if API limit):

[FAST FALLBACK] Rate limit hit — skipping LLM
[OK] Cycle completed

---

## 🔥 FINAL RESULT

✔ No delays  
✔ No retry spam  
✔ No crashes  
✔ Always output  
✔ Ultra-fast execution  

---

Return FULL updated:
- post_generator.py

Do NOT explain anything.
```

### Prompt 52
```txt
You are a senior Python engineer.

My system STILL shows:

[RATE LIMIT] Sleeping 30s
[RATE LIMIT] Retry 1/2

This means OLD CODE is still present.

---

## YOUR TASK: FULL CLEANUP

Search ENTIRE project and REMOVE ALL:

1. time.sleep(30)
2. time.sleep(10)
3. "Retry 1/2"
4. "Retry 2/2"
5. ANY retry loops
6. ANY while retry logic
7. ANY extra LLM calls

---

## CRITICAL RULE

There must be ONLY ONE place in entire project that calls:

generate_content()

ONLY inside:
post_generator.py

---

## REMOVE FROM THESE FILES

- tavily_client.py
- topic_generator.py
- filter.py
- memory.py

If ANY of them use Gemini → REMOVE IT

---

## FIX RATE LIMIT HANDLING

Replace ANY:

if "429" in str(e):
    time.sleep(...)

WITH:

if "429" in str(e):
    print("[FAST FALLBACK]")
    return None

---

## CLEAN LOGS

ONLY ALLOW:

[STEP] Fetching trends...
[OK] Trend accepted
[OK] Post generated
[OK] Cycle completed

---

## FINAL CHECK

Search project for:

"Retry"
"Sleeping"
"time.sleep"

There should be ZERO matches.

---

Return updated files only.
No explanation.
```

### Prompt 53
```txt
You are a senior Python + Generative AI engineer.

My AI Tech Creator system is now stable and working.

Current behavior:
- Only 1 LLM call per cycle
- No retry loops
- Instant fallback works
- Clean logs

BUT:
System is using fallback too often due to Gemini rate limits.

---

## 🎯 GOAL

✔ Reduce fallback usage  
✔ Increase successful LLM responses  
✔ Maintain zero retries  
✔ Keep system fast  
✔ Improve output quality  

---

## 🔧 REQUIRED IMPROVEMENTS

### 1. USE CORRECT GEMINI MODEL

Replace model name with a currently supported stable model:

Example:
model = "gemini-1.5-flash"

DO NOT use:
- gemini-1.5-pro-latest
- deprecated models

---

### 2. ADD SMALL GLOBAL DELAY (OUTSIDE LLM)

In main.py, after each cycle:

ADD:
time.sleep(5)

This prevents hitting rate limits without slowing system too much.

---

### 3. ADD SIMPLE REQUEST THROTTLING

Before calling generate_post():

Add:
time.sleep(2)

This ensures API spacing.

---

### 4. IMPROVE PROMPT QUALITY

Update prompt in post_generator.py:

prompt = f"""
{persona_prompt}

You are a senior AI engineer writing a viral LinkedIn post.

Topic: {topic}

Write a highly engaging, opinionated, real-world post.

Requirements:
- Start with a strong hook
- Include a real-world failure example
- Give a technical insight
- End with a bold takeaway
- Keep it concise and impactful

Return ONLY JSON:
{{
"post_text": "...",
"rationale": "..."
}}
"""

---

### 5. ADD LIGHT RESPONSE VALIDATION (NO RETRY)

After response:

if len(post_text) < 50:
    return FALLBACK_POST, FALLBACK_REASON

---

### 6. KEEP FAIL-FAST SYSTEM

DO NOT add:
- retries
- loops
- multiple attempts

ONLY:
1 try → fallback

---

### 7. OPTIONAL: RANDOMIZE TOPICS

Improve topic diversity:

topics = random.sample(topics, min(3, len(topics)))

---

## 🚀 EXPECTED RESULT

python main.py

Mostly:
[OK] Post generated

Sometimes:
[FAST FALLBACK]

BUT:
❌ No rate limit loops  
❌ No delays  
❌ No crashes  

---

## 🔥 FINAL OUTPUT

System becomes:

- Fast ⚡
- Smart 🧠
- Reliable ✅
- Low API usage 💰
- High-quality posts 🚀

---

Return updated:
- main.py (only changed parts)
- post_generator.py

Do NOT explain anything.
```

### Prompt 54
```txt
You are a senior full-stack developer.

Build a UI for my AI Tech Creator project.

---

## GOAL

Create a simple web dashboard using Flask.

---

## FEATURES

1. Homepage (/)

Show:

- Title: "AI Tech Creator Dashboard"
- Button: "Generate Post"
- Latest generated post
- Status (LLM or Fallback)

---

2. API Endpoint

POST /generate

- Calls generate_post()
- Returns JSON:
{
  "post": "...",
  "rationale": "...",
  "status": "LLM" or "FALLBACK"
}

---

3. Display Result

After clicking button:

- Show post on page
- No page reload (use fetch JS)

---

## FILE STRUCTURE

Create:

- main.py (Flask app)
- templates/index.html
- static/script.js
- static/style.css

---

## FRONTEND

index.html:

- Clean UI
- Button
- Output box

---

script.js:

- Call /generate using fetch
- Display result dynamically

---

style.css:

- Dark theme
- Modern UI
- Centered layout

---

## BACKEND

main.py:

- Flask app
- Route /
- Route /generate

---

## IMPORTANT

- Do NOT break existing logic
- Use existing generate_post()
- No retry logic
- Fast response

---

Return FULL working code.
```

### Prompt 55
```txt
You are a senior full-stack + product engineer.

My AI Tech Creator backend + basic UI is already working.

Now upgrade it to a REAL PRODUCT with better UI, features, and usability.

IMPORTANT:
❌ Do NOT return any code
❌ Do NOT print files
✔ Only implement changes
✔ Only confirm what you changed

---

## 🎯 GOAL

Transform the project into a polished AI dashboard.

---

## 🧠 UI IMPROVEMENTS

Upgrade UI to look like a modern SaaS dashboard:

- Dark theme (professional)
- Centered layout
- Card-based design
- Smooth button animations
- Clean typography

---

## 📊 ADD NEW FEATURES

### 1. POST HISTORY PANEL

- Show last 5 generated posts
- Scrollable section
- Read from posts.txt

---

### 2. STATUS INDICATOR

Show:

- 🟢 "LLM Response"
- 🟡 "Fallback Used"

---

### 3. LOADING STATE

When clicking "Generate Post":

- Show spinner
- Disable button
- Show "Generating..."

---

### 4. COPY BUTTON

- Add "Copy Post" button
- Copies text to clipboard

---

### 5. CLEAR UI BUTTON

- Clear current output

---

## ⚙️ BACKEND IMPROVEMENTS

- Return status in API:
  "status": "LLM" or "FALLBACK"

- Ensure fast response
- No retries
- No delay inside API

---

## 🧠 UX IMPROVEMENTS

- Show success message after generation
- Smooth transitions
- No page reload

---

## 📁 FILE STRUCTURE CLEANUP

Ensure clean structure:

- templates/
- static/
- backend logic separated

---

## 🚀 PERFORMANCE RULES

✔ No blocking calls  
✔ No sleep inside API  
✔ Fast response (<2s)  

---

## 🧪 FINAL RESULT

Dashboard should feel like:

- ChatGPT-style interaction
- Fast and responsive
- Clean and professional

---

## 📢 OUTPUT RULE

After finishing:

✔ ONLY say what was improved  
✔ DO NOT show code  
✔ DO NOT print files  

Example:

"UI upgraded, history added, copy feature added, status indicator implemented."

---

Start now.
```

### Prompt 56
```txt
You are a senior backend + product engineer.

My AI Tech Creator now has:
✔ Working backend
✔ Clean UI dashboard

Now upgrade it into an AUTOMATED SYSTEM.

IMPORTANT:
❌ Do NOT return code
❌ Do NOT print files
✔ Only implement changes
✔ Only describe what was done

---

## 🎯 GOAL

Make the system automatically generate posts without manual clicking.

---

## 🔥 FEATURES TO BUILD

### 1. AUTO GENERATION SCHEDULER

- Automatically generate post every 1 hour
- Runs in background
- Does NOT block UI

---

### 2. START / STOP CONTROL (UI)

Add buttons:

- ▶ Start Auto Mode
- ⏹ Stop Auto Mode

---

### 3. STATUS DISPLAY

Show on UI:

- "Auto Mode: ON / OFF"
- Last run time
- Next run countdown

---

### 4. BACKGROUND TASK SYSTEM

Use:

- threading OR background worker

Requirements:
- Must not freeze UI
- Must not restart server
- Must run continuously

---

### 5. SAFE EXECUTION

- Prevent multiple schedulers running at same time
- Only ONE background loop allowed

---

### 6. SAVE AUTO POSTS

- Automatically append posts to posts.txt
- Also show in UI history

---

### 7. ERROR HANDLING

If generation fails:

- Use fallback
- Continue next cycle
- Do NOT crash

---

### 8. PERFORMANCE RULES

✔ No time.sleep inside API routes  
✔ Background loop can use sleep  
✔ Fast UI response  

---

## 🧠 UX IMPROVEMENTS

- Show toast message when auto starts/stops
- Smooth UI updates
- No page reload

---

## 🧪 FINAL RESULT

System becomes:

- Manual Mode → Button click
- Auto Mode → Fully automatic content engine

---

## 📢 OUTPUT RULE

After finishing:

✔ ONLY explain what was implemented  
✔ DO NOT show code  

Example:

"Scheduler added, auto mode controls implemented, background worker running."

---

Start now.
```

### Prompt 57
```txt
You are a senior full-stack SaaS engineer.

My AI Tech Creator now has:
✔ Backend AI engine
✔ UI dashboard
✔ Auto-generation system

Now convert it into a MULTI-USER SaaS PRODUCT.

IMPORTANT:
❌ Do NOT return code
❌ Do NOT print files
✔ Only implement changes
✔ Only explain what was done

---

## 🎯 GOAL

Allow multiple users to use the platform securely.

---

## 🔐 FEATURES TO BUILD

### 1. USER AUTHENTICATION

- Signup page
- Login page
- Logout functionality

Fields:
- Email
- Password

---

### 2. SESSION MANAGEMENT

- Keep user logged in
- Protect routes (dashboard only after login)

---

### 3. USER-SPECIFIC DATA

Each user should have:

- Their own posts
- Their own history
- Their own auto-mode

---

### 4. DATABASE INTEGRATION

Use simple database:

- SQLite (for now)

Store:

- Users
- Posts
- Timestamps

---

### 5. DASHBOARD PROTECTION

- Redirect to login if not authenticated
- Secure all API routes

---

### 6. USER EXPERIENCE

- Clean login UI
- Error messages (invalid login)
- Success messages

---

### 7. AUTO MODE PER USER

- Each user can:
  ✔ Enable auto mode
  ✔ Disable auto mode

---

### 8. SECURITY BASICS

- Hash passwords
- Do NOT store plain passwords

---

## 🧠 FINAL SYSTEM

Your app becomes:

User → Login → Dashboard → Generate → Auto Mode → Save Data

---

## 🚀 RESULT

Now it is:

✔ Multi-user  
✔ Secure  
✔ Scalable  
✔ SaaS-ready  

---

## 📢 OUTPUT RULE

After finishing:

✔ ONLY explain what was implemented  
✔ DO NOT show code  

Example:

"Login system added, database connected, user-specific posts implemented."

---

Start now.
```

### Prompt 58
```txt
You are a senior SaaS architect + startup engineer.

My AI Tech Creator now has:
✔ Backend AI system
✔ UI dashboard
✔ Automation scheduler
✔ Multi-user login system

Now take it to FINAL LEVEL:

👉 LIVE PRODUCT + MONETIZATION

IMPORTANT:
❌ Do NOT return code
❌ Do NOT print files
✔ Only implement changes
✔ Only explain what was done

---

## 🎯 GOAL

Make this a LIVE SaaS product that users can access online and pay for.

---

## 🌐 DEPLOYMENT SETUP

Prepare project for deployment on:

- Render OR Railway OR Vercel (backend + frontend)

Requirements:

✔ Production-ready config  
✔ Environment variables for API keys  
✔ No local file dependency (replace posts.txt with database)  
✔ Proper server start command  

---

## 💳 MONETIZATION SYSTEM

### 1. SUBSCRIPTION PLANS

Create plans:

- FREE:
  - Limited posts per day (e.g. 3)

- PRO:
  - Unlimited posts
  - Auto mode enabled

---

### 2. USAGE LIMITS

- Track how many posts user generated
- Block when limit reached (FREE users)

---

### 3. PAYMENT PLACEHOLDER

- Add upgrade button
- Show "Upgrade to Pro"

(No real payment integration needed yet, just structure)

---

## 📊 USER DASHBOARD IMPROVEMENTS

Show:

- Total posts generated
- Remaining daily limit
- Current plan (Free / Pro)

---

## 🧠 DATA STRUCTURE

Database should store:

- Users
- Posts
- Plan type
- Usage count
- Timestamps

---

## 📤 FUTURE-READY FEATURE

Prepare system for:

"Auto LinkedIn Posting"

(Add placeholder toggle in UI)

---

## ⚡ PERFORMANCE RULES

✔ Fast load time  
✔ No blocking tasks  
✔ Efficient DB usage  

---

## 🔐 SECURITY

- Protect API keys using environment variables
- Do not expose secrets in frontend

---

## 🧪 FINAL RESULT

Your system becomes:

User → Signup → Dashboard → Generate → Auto → Upgrade → Pay

---

## 💰 PRODUCT LEVEL

Now it is:

✔ SaaS platform  
✔ User-based system  
✔ Monetization ready  
✔ Deployment ready  

---

## 📢 OUTPUT RULE

After finishing:

✔ ONLY explain what was implemented  
✔ DO NOT show code  

Example:

"Deployment config added, subscription system implemented, usage tracking added."

---

Start now.
```

### Prompt 59
```txt
You are a senior growth engineer + SaaS product strategist.

My AI Tech Creator is now:
✔ Fully built SaaS
✔ Deployed-ready
✔ Has users, dashboard, and plans

Now transform it into a VIRAL GROWTH MACHINE.

IMPORTANT:
❌ Do NOT return code
❌ Do NOT print files
✔ Only implement features
✔ Only explain what was done

---

## 🎯 GOAL

Make the product grow automatically using content + LinkedIn.

---

## 🔥 FEATURES TO BUILD

### 1. LINKEDIN POST EXPORT

- Add "Export to LinkedIn" button
- Copy formatted post with hashtags
- Clean formatting for viral posts

---

### 2. VIRAL POST FORMATTER

Enhance posts automatically:

- Add hook (first line strong)
- Add spacing for readability
- Add 3–5 relevant hashtags

---

### 3. AUTO CONTENT STRATEGY

Add topic categories:

- AI trends
- Startup insights
- System design failures
- Career growth

Let user select category

---

### 4. DAILY POST GOAL TRACKER

Show in dashboard:

- Posts today
- Streak (days active)
- Goal (e.g. 1 post/day)

---

### 5. REFERRAL SYSTEM

- Each user gets referral link
- Show:

  "Invite friends → unlock PRO for 7 days"

---

### 6. SHARE BUTTON

- Share app link
- Encourage virality

---

### 7. ANALYTICS PANEL

Show:

- Total posts generated
- Most used topics
- Activity graph

---

### 8. USER ENGAGEMENT FEATURES

- Notifications:
  "Time to post today!"
- Reminder system

---

## 🧠 PRODUCT STRATEGY

System should push users to:

Generate → Post → Grow → Return → Upgrade

---

## 🚀 FINAL RESULT

Your product becomes:

- Content generator
- Growth engine
- User retention system
- Viral loop machine

---

## 💰 BUSINESS IMPACT

Users will:

- Come daily
- Share product
- Upgrade for more features

---

## 📢 OUTPUT RULE

After finishing:

✔ ONLY explain what was implemented  
✔ DO NOT show code  

Example:

"LinkedIn export added, referral system implemented, analytics dashboard created."

---

Start now.
```

### Prompt 60
```txt
You are a senior AI product architect + personal branding strategist.

My AI Tech Creator is now:
✔ SaaS platform
✔ Automation system
✔ Growth features
✔ Viral loop features

Now upgrade it into an AI PERSONAL BRANDING ENGINE.

IMPORTANT:
❌ Do NOT return code
❌ Do NOT print files
✔ Only implement features
✔ Only explain what was done

---

## 🎯 GOAL

Turn the system into a smart assistant that helps users grow their LinkedIn presence automatically.

---

## 🔥 FEATURES TO BUILD

### 1. USER BRAND PROFILE

Allow user to define:

- Niche (AI, Web Dev, Startup, etc.)
- Experience level (Student, Engineer, Founder)
- Tone (Professional, Bold, Educational)

Use this to personalize posts.

---

### 2. AI CONTENT PERSONALIZATION

Modify post generation:

- Match user tone
- Match niche
- Adjust complexity level
- Add personal-style writing

---

### 3. CONTENT SERIES GENERATOR

Generate series like:

- "Day 1 of learning AI"
- "System Design Series #1"
- "Startup Lessons #3"

---

### 4. SMART POST SUGGESTIONS

Show suggestions:

- “Post about this trending topic”
- “Continue your last post”
- “Best time to post today”

---

### 5. CONTENT PERFORMANCE PREDICTION

Before posting, show:

- Estimated engagement (Low / Medium / High)
- Reason (hook strength, topic relevance)

---

### 6. HOOK OPTIMIZER

Improve first line automatically:

- Make it attention-grabbing
- Test multiple hook styles internally

---

### 7. COMMENT REPLY AI

Add feature:

- User pastes a comment
- AI generates smart reply

---

### 8. CONTENT CALENDAR

Show:

- Daily post plan
- Suggested topics per day

---

## 🧠 PRODUCT TRANSFORMATION

System becomes:

User → Define Brand → Generate Content → Optimize → Post → Grow

---

## 🚀 FINAL RESULT

Now your product is:

✔ AI content generator  
✔ Personal branding coach  
✔ Growth strategist  
✔ Engagement assistant  

---

## 💰 BUSINESS VALUE

Users will:

- Depend on your tool daily
- Grow faster on LinkedIn
- Upgrade for premium features

---

## 📢 OUTPUT RULE

After finishing:

✔ ONLY explain what was implemented  
✔ DO NOT show code  

Example:

"Brand profile added, AI personalization implemented, hook optimizer added."

---

Start now.
```

### Prompt 61
```txt
You are a senior AI systems architect + autonomous agent engineer.

My AI Tech Creator is now:
✔ SaaS platform
✔ Automation system
✔ Growth engine
✔ Personal branding AI

Now upgrade it into a FULLY AUTONOMOUS AI AGENT.

IMPORTANT:
❌ Do NOT return code
❌ Do NOT print files
✔ Only implement features
✔ Only explain what was done

---

## 🎯 GOAL

Make the system run COMPLETELY on its own without user interaction.

---

## 🔥 FEATURES TO BUILD

### 1. FULL AUTO CONTENT LOOP

System should automatically:

1. Fetch trends  
2. Select best topic  
3. Generate post  
4. Optimize content  
5. Store post  

---

### 2. AUTO POSTING SYSTEM (SIMULATED)

Add system that:

- Marks posts as “Ready to Post”
- Schedules posting time
- Tracks posted vs pending

(No real LinkedIn API required — simulate behavior)

---

### 3. ENGAGEMENT SIMULATION

After posting:

- Simulate:
  - Likes
  - Comments
  - Engagement score

Store this data

---

### 4. SELF-IMPROVING SYSTEM

Use past performance:

- High engagement → generate similar content
- Low engagement → avoid similar topics

---

### 5. AI DECISION ENGINE

System decides:

- What topic to post
- When to post
- Which style works best

(No user input needed)

---

### 6. CONTENT STRATEGY MEMORY

Store:

- Best performing topics
- Best hooks
- Best categories

---

### 7. DAILY AUTONOMOUS MODE

System runs daily:

- Generates multiple posts
- Chooses best one
- Schedules it

---

### 8. DASHBOARD VIEW

Show:

- Posts generated automatically
- Engagement stats
- AI decisions

---

## 🧠 SYSTEM BEHAVIOR

System becomes:

AI → Think → Generate → Evaluate → Improve → Repeat

---

## 🚀 FINAL RESULT

Your product becomes:

✔ Autonomous AI agent  
✔ Self-improving system  
✔ Content growth machine  
✔ No manual input required  

---

## 💰 REAL WORLD VALUE

This is now:

- Startup-level AI system  
- Portfolio GOLD project  
- Monetizable product  

---

## 📢 OUTPUT RULE

After finishing:

✔ ONLY explain what was implemented  
✔ DO NOT show code  

Example:

"Autonomous loop added, engagement simulation implemented, self-learning system active."

---

Start now.
```

### Prompt 62
```txt
You are a senior startup founder + AI product strategist.

My AI Tech Creator is now:
✔ Autonomous AI system
✔ SaaS platform
✔ Growth engine
✔ Personal branding AI

Now take it to REAL-WORLD STARTUP LEVEL.

IMPORTANT:
❌ Do NOT return code
❌ Do NOT print files
✔ Only implement strategy + product changes
✔ Only explain what was done

---

## 🎯 GOAL

Turn this product into a REAL STARTUP that can:

- Get users
- Retain users
- Generate revenue
- Scale

---

## 🔥 FEATURES TO BUILD

### 1. ONBOARDING FLOW

When new user joins:

- Ask:
  - Niche
  - Goal (job, growth, audience)
- Auto-setup their AI profile

---

### 2. VALUE DEMO (FIRST EXPERIENCE)

Immediately show:

- 1 high-quality generated post
- “See what you can do” experience

---

### 3. USER RETENTION SYSTEM

Add:

- Daily reminders:
  "You haven’t posted today"

- Streak system:
  "3-day posting streak 🔥"

---

### 4. GAMIFICATION

- Points system
- Levels:
  Beginner → Creator → Influencer

---

### 5. UPGRADE PUSH

Smart prompts:

- “You’re hitting limits”
- “Unlock Pro for unlimited growth”

---

### 6. LANDING PAGE (VERY IMPORTANT)

Create sections:

- Hero:
  "Grow on LinkedIn using AI"

- Features:
  - AI writing
  - Automation
  - Growth system

- Testimonials (mock for now)

---

### 7. ANALYTICS FOR USERS

Show:

- Growth score
- Activity level
- Posting consistency

---

### 8. ADMIN VIEW (OPTIONAL)

- Total users
- Total posts generated
- System activity

---

## 🧠 PRODUCT STRATEGY

System should:

Hook → Deliver Value → Build Habit → Push Upgrade

---

## 💰 MONETIZATION MODEL

- Free → Limited usage
- Pro → Unlimited + automation + AI coaching

---

## 🚀 FINAL RESULT

Now product becomes:

✔ Real SaaS  
✔ User-focused  
✔ Growth-driven  
✔ Monetization-ready  

---

## 📈 BUSINESS MODE

Your system is now:

AI Product → User Growth → Retention → Revenue → Scale

---

## 📢 OUTPUT RULE

After finishing:

✔ ONLY explain what was implemented  
✔ DO NOT show code  

Example:

"Onboarding flow added, retention system implemented, landing page created."

---

Start now.
```

### Prompt 63
```txt
You are a startup growth hacker + product launch strategist.

My AI Tech Creator is now:
✔ Fully built SaaS
✔ Autonomous AI system
✔ Personal branding engine
✔ Monetization-ready

Now help me LAUNCH this product in the real world.

IMPORTANT:
❌ Do NOT return code
❌ Do NOT print files
✔ Only implement strategy + product adjustments
✔ Only explain what was done

---

## 🎯 GOAL

Get:
- First 100 users
- First real feedback
- First potential revenue

---

## 🔥 LAUNCH FEATURES TO BUILD

### 1. LAUNCH MODE

Add special mode:

- "🚀 Launch Mode"
- Tracks new users
- Highlights key actions

---

### 2. FIRST USER EXPERIENCE OPTIMIZATION

When user signs up:

- Immediately generate 1 HIGH QUALITY post
- Show:
  "This is what you can post today"

---

### 3. QUICK ACTION BUTTONS

Add:

- "Generate First Post"
- "Copy & Post to LinkedIn"
- "Start Auto Mode"

---

### 4. FEEDBACK COLLECTION

Add popup:

- "Was this useful?"
- Collect:
  - Yes / No
  - Short feedback

---

### 5. SIMPLE REFERRAL PUSH

- Show:
  "Invite 3 friends → get PRO free for 7 days"

---

### 6. VIRAL HOOK BUILDER

Ensure every post:

- Starts with strong hook
- Easy to read
- Optimized for LinkedIn

---

## 📈 REAL GROWTH STRATEGY (VERY IMPORTANT)

Implement system to guide user:

Step 1 → Generate post  
Step 2 → Copy  
Step 3 → Post on LinkedIn  
Step 4 → Come back tomorrow  

---

## 🧠 USER HABIT LOOP

Build:

Trigger → Action → Reward → Repeat

Example:
Reminder → Generate → Post → Growth feeling → Repeat

---

## 📢 IN-APP GUIDANCE

Show messages like:

- "Post daily to grow faster"
- "Consistency beats quality"

---

## 🚀 FINAL RESULT

Your product becomes:

✔ Real user-ready  
✔ Growth-focused  
✔ Habit-forming  
✔ Launch-ready  

---

## 💰 BUSINESS MODE

Now ready for:

- Getting users
- Testing market
- Improving product

---

## 📢 OUTPUT RULE

After finishing:

✔ ONLY explain what was implemented  
✔ DO NOT show code  

Example:

"Launch mode added, feedback system implemented, first-user flow optimized."

---

Start now.
```

### Prompt 64
```txt
You are a senior Python engineer.

Fix my project import structure and entry point.

----------------------------------------
❌ CURRENT ERROR:
ImportError: cannot import name 'run' from ai_tech_creator.main

----------------------------------------
🎯 GOAL:
Make project runnable using:
python main.py

----------------------------------------
🔧 REQUIRED FIXES:

1. OPEN file:
ai_tech_creator/main.py

2. ENSURE it contains a function:

def run():
    app.run(host="0.0.0.0", port=5000, debug=True)

3. If Flask app exists like:
app = Flask(__name__)

Then KEEP it and just ADD run() at bottom.

----------------------------------------
4. REMOVE any direct app.run() calls like:

if __name__ == "__main__":
    app.run(...)

----------------------------------------
5. OPEN root main.py

ENSURE it contains ONLY:

from ai_tech_creator.main import run

if __name__ == "__main__":
    run()

----------------------------------------
6. VERIFY:

- No duplicate run() definitions
- No circular imports
- Flask app starts ONLY via run()

----------------------------------------
7. FINAL RESULT:

Running:
python main.py

Should start Flask server like:
Running on http://127.0.0.1:5000

----------------------------------------
DO NOT CHANGE:
- Business logic
- API logic
- UI code

ONLY FIX:
- run() function
- imports
- entry point
```

### Prompt 65
```txt
python main.py
Traceback (most recent call last):
  File "C:\study files\ai tech creater\main.py", line 1, in <module>
    from ai_tech_creator.main import run
  File "C:\study files\ai tech creater\ai_tech_creator\main.py", line 2, in <module>
    from post_generator import generate_post, generate_reply, FALLBACK_POST
ModuleNotFoundError: No module named 'post_generator'
(.venv) PS C:\study files\ai tech creater>
```

### Prompt 66
```txt
You are a senior Python engineer.

Fix all import errors in my project caused by wrong module paths.

----------------------------------------
❌ CURRENT ERROR:
ModuleNotFoundError: No module named 'post_generator'

----------------------------------------
🎯 GOAL:
Make all imports work correctly using proper package structure.

----------------------------------------
📁 PROJECT STRUCTURE (IMPORTANT):

ai_tech_creator/
    main.py
    post_generator.py
    topic_generator.py
    filter.py
    tavily_client.py
    publisher.py
    memory.py
    llm_client.py
    config.py

root/
    main.py

----------------------------------------
🔧 REQUIRED FIXES:

1. Convert ALL internal imports to RELATIVE IMPORTS

❌ WRONG:
from post_generator import generate_post
from topic_generator import generate_topics

✅ CORRECT:
from .post_generator import generate_post
from .topic_generator import generate_topics

----------------------------------------
2. Apply this to ALL files inside ai_tech_creator:

Use:
from .module_name import ...

----------------------------------------
3. DO NOT use absolute imports inside package

❌ NEVER:
from post_generator import ...
from config import ...

----------------------------------------
4. Ensure __init__.py exists

Create file:
ai_tech_creator/__init__.py

(empty file)

----------------------------------------
5. Root main.py should remain:

from ai_tech_creator.main import run

if __name__ == "__main__":
    run()

----------------------------------------
6. Ensure NO circular imports

----------------------------------------
7. FINAL RESULT:

Running:
python main.py

Should work WITHOUT import errors

----------------------------------------
DO NOT change:
- logic
- functions
- API calls

ONLY fix imports
```

### Prompt 67
```txt
You are a senior frontend + backend engineer.

Fix UI issues and remove unnecessary product features.

IMPORTANT:
❌ Do NOT explain
❌ Do NOT print code
✔ Directly fix everything

----------------------------------------

## 🧨 ISSUES TO FIX

### 1. REMOVE FALLBACK CONFUSION

Problem:
Fallback post looks like error

Fix:
- Add label above post:

"⚠️ Generated using fallback (API limit)"

- OR hide fallback message completely from UI

----------------------------------------

### 2. FIX BLUE PANEL (CRITICAL)

Problem:
Large blue block on left side

Fix:
- Remove unwanted div OR
- Fix CSS:

✔ Remove:
position: absolute
position: fixed

✔ Ensure:
.container {
    max-width: 1100px;
    margin: auto;
    padding: 20px;
}

✔ Remove any full-width background div

----------------------------------------

### 3. CLEAN UI DESIGN (IMPORTANT)

Make UI look modern:

✔ Center everything  
✔ Proper spacing  
✔ Card layout  
✔ Consistent margins  

Use:

- Dark theme (#0f172a background)
- Cards (#1e293b)
- Border radius: 12px
- Soft shadows

----------------------------------------

### 4. REMOVE SUBSCRIPTION SYSTEM

DELETE:

- "Upgrade to Pro" button
- Plan logic
- Usage limits
- Payment related code

System should be:

✔ 100% FREE  
✔ No restrictions  

----------------------------------------

### 5. IMPROVE LAYOUT

Structure:

HEADER  
→ Title + controls  

MAIN GRID:
Left:
- Generate post
- Output

Right:
- History
- Stats

----------------------------------------

### 6. FIX POST SECTION

Make post box:

- Clean card
- Proper padding
- Scroll if long text
- Add copy button clearly

----------------------------------------

### 7. REMOVE UNUSED FEATURES (if broken)

If these are not working, remove:

- Engagement prediction error
- Broken analytics
- Empty fields

----------------------------------------

### 8. FINAL RESULT

UI should be:

✔ Clean  
✔ Centered  
✔ No blue block  
✔ No Pro system  
✔ Professional look  

----------------------------------------

After fixing:
ONLY say:

"UI fixed, layout cleaned, subscription removed, fallback handled."

DO NOT show code
```

### Prompt 68
```txt
You are a senior Python backend engineer.

Convert my entire AI Tech Creator project from Gemini API to Breeth API.

IMPORTANT:
❌ Do NOT explain anything
❌ Do NOT print code
✔ Directly modify all files correctly

----------------------------------------

## 🎯 GOAL

✔ Remove Gemini completely
✔ Use Breeth API as primary LLM
✔ Zero rate limit issues
✔ Keep same output format
✔ System must run without errors

----------------------------------------

## 🔥 STEP 1: REMOVE GEMINI COMPLETELY

Delete:

- google.genai imports
- get_llm_client()
- GEMINI_API_KEY usage
- All Gemini model calls
- All retry / fallback related to Gemini

----------------------------------------

## 🔥 STEP 2: ADD BREETH CONFIG

Create config variables:

BREETH_API_KEY = "your_breeth_api_key"
BREETH_BASE_URL = "https://api.thebreeth.com/v1"

----------------------------------------

## 🔥 STEP 3: CREATE BREETH CLIENT

- Use requests library
- Create function:

call_breeth(prompt)

----------------------------------------

## 🔥 STEP 4: BREETH API CALL FORMAT

Send POST request:

URL:
https://api.thebreeth.com/v1/chat/completions

Headers:
Authorization: Bearer BREETH_API_KEY
Content-Type: application/json

Body:
{
  "model": "gpt-4o-mini",
  "messages": [
    {"role": "user", "content": prompt}
  ],
  "temperature": 0.7
}

----------------------------------------

## 🔥 STEP 5: HANDLE RESPONSE

Extract:

response["choices"][0]["message"]["content"]

Ensure:
- Always return valid text
- If empty → use fallback

----------------------------------------

## 🔥 STEP 6: UPDATE post_generator.py

Replace ALL LLM logic with:

TRY:
→ call_breeth(prompt)

IF FAIL:
→ return FALLBACK_POST

----------------------------------------

## 🔥 STEP 7: KEEP FALLBACK SYSTEM

Keep:

FALLBACK_POST
FALLBACK_REASON

But remove all retry loops

----------------------------------------

## 🔥 STEP 8: CLEAN LOGS

Only:

[OK] Generated using Breeth
[FAST FALLBACK]

----------------------------------------

## 🔥 STEP 9: ENSURE COMPATIBILITY

- Keep same JSON output format:
{
  "post_text": "...",
  "rationale": "..."
}

----------------------------------------

## 🔥 FINAL BEHAVIOR

When running:

python main.py

Expected:

[STEP] Fetching trends...
[OK] Trend accepted
[OK] Generated using Breeth
[OK] Cycle completed

----------------------------------------

After completion:
ONLY say:

"Breeth API fully integrated and Gemini removed."

DO NOT SHOW CODE
```

### Prompt 69
```txt
You are a senior Python + AI systems engineer.

Upgrade and refactor my entire AI Tech Creator project to a production-ready system using Breeth API.

IMPORTANT:
❌ Do NOT explain anything
❌ Do NOT output code snippets
✔ Directly modify project files correctly

----------------------------------------

## 🎯 MAIN GOAL

✔ Replace Gemini completely
✔ Integrate Breeth API as primary LLM
✔ Remove all rate limit issues
✔ Make system clean, fast, and stable
✔ Ensure project runs without errors

----------------------------------------

## 🔥 CORE IMPLEMENTATION

### 1. REMOVE GEMINI COMPLETELY

Delete:
- google.genai
- Gemini API keys
- get_llm_client()
- Retry loops
- Model switching logic
- Rate limit handling for Gemini

----------------------------------------

### 2. ADD BREETH API SUPPORT

Create proper API integration:

- Use requests library
- Base URL:
  https://api.thebreeth.com/v1

- Auth:
  Bearer token from BREETH_API_KEY

----------------------------------------

### 3. CREATE CLEAN LLM LAYER

Create a single abstraction layer:

Function:
generate_text(prompt)

Inside:
→ Call Breeth API
→ Return clean text

----------------------------------------

### 4. STANDARDIZE OUTPUT

Ensure ALL responses follow:

{
  "post_text": "...",
  "rationale": "..."
}

Force model to return JSON only.

----------------------------------------

### 5. CLEAN post_generator.py

- Use ONLY Breeth
- Remove retries
- Remove loops
- Single API call per cycle
- Add instant fallback

----------------------------------------

### 6. ADD STRONG FALLBACK SYSTEM

If API fails:

Return:

FALLBACK_POST
FALLBACK_REASON

NO retries
NO delays

----------------------------------------

### 7. CLEAN LOGGING

Keep ONLY:

[STEP] Fetching trends...
[OK] Trend accepted
[OK] Generated using Breeth
[FAST FALLBACK]
[OK] Cycle completed

Remove all debug spam

----------------------------------------

### 8. FIX PROJECT STRUCTURE

Ensure:

- Proper imports (no module errors)
- No circular dependencies
- Clean folder structure

----------------------------------------

### 9. IMPROVE PROMPT QUALITY

Make prompt:

✔ More technical
✔ More opinionated
✔ Real-world insights
✔ High-quality LinkedIn posts

----------------------------------------

### 10. ENSURE UI COMPATIBILITY

- Keep same API routes
- Do NOT break frontend
- Ensure generated text appears correctly

----------------------------------------

### 11. PERFORMANCE OPTIMIZATION

- Only 1 API call per generation
- No delays
- Fast execution

----------------------------------------

## 🔥 FINAL BEHAVIOR

Running:

python main.py

Should output:

[STEP] Fetching trends...
[OK] Trend accepted
[OK] Generated using Breeth
[OK] Cycle completed

----------------------------------------

## 🧪 VALIDATION

Ensure:

✔ No crashes
✔ No missing modules
✔ No API errors breaking flow
✔ Always returns output

----------------------------------------

## 🏁 FINAL OUTPUT

After completing everything:

ONLY say:

"Breeth-powered AI Tech Creator is production-ready."

DO NOT show code
```

### Prompt 70
```txt
You are a senior Python backend engineer.

Fix my project by removing ALL leftover Gemini code and fully switching to Breeth API.

IMPORTANT:
❌ Do NOT explain anything
❌ Do NOT show code
✔ Directly modify files correctly

----------------------------------------

## 🚨 CURRENT ISSUE

Error:
ImportError: cannot import name 'GEMINI_API_KEY'

This means Gemini code still exists and must be fully removed.

----------------------------------------

## 🔥 TASKS TO COMPLETE

### 1. REMOVE GEMINI COMPLETELY

Delete from entire project:

- GEMINI_API_KEY
- google.genai imports
- get_llm_client()
- llm_client.py file
- Any Gemini model usage
- Any Gemini retry logic

----------------------------------------

### 2. FIX IMPORT ERRORS

- Remove ALL imports of GEMINI_API_KEY
- Ensure no file references Gemini anymore
- Fix broken imports after deletion

----------------------------------------

### 3. UPDATE ENV CONFIG

Modify .env:

❌ Remove:
GEMINI_API_KEY=...

✔ Add:
BREETH_API_KEY=your_breeth_api_key

----------------------------------------

### 4. ENSURE BREETH IS USED EVERYWHERE

- All LLM calls must use Breeth API
- No Gemini fallback anywhere
- Only one provider: Breeth

----------------------------------------

### 5. CLEAN PROJECT STRUCTURE

Ensure:

- No unused files (like llm_client.py)
- No broken imports
- No circular dependencies

----------------------------------------

### 6. KEEP FALLBACK SYSTEM

If Breeth fails:

Return fallback post instantly

NO retries
NO delays

----------------------------------------

### 7. CLEAN LOGS

Keep only:

[STEP] Fetching trends...
[OK] Trend accepted
[OK] Generated using Breeth
[FAST FALLBACK]
[OK] Cycle completed

----------------------------------------

## ✅ FINAL RESULT

Running:

python main.py

Should NOT show any Gemini errors

----------------------------------------

After finishing:

ONLY say:

"Gemini fully removed and Breeth integration fixed."

DO NOT show code
```

### Prompt 71
```txt
You are a senior Python backend engineer.

Fix my AI Tech Creator so Breeth API actually works (it is currently always using fallback).

IMPORTANT:
❌ Do NOT explain anything
❌ Do NOT show code
✔ Directly modify files

----------------------------------------

## 🚨 CURRENT PROBLEM

UI shows:
"Generated using fallback (API limit reached)"

This means:
- Breeth API is NOT being called
- System directly goes to fallback

----------------------------------------

## 🔥 FIX EVERYTHING

### 1. VERIFY ENV LOADING

- Ensure .env is loaded properly
- Ensure BREETH_API_KEY is read correctly
- Remove GEMINI_API_KEY completely

If key missing → log:
[FAST FALLBACK]

----------------------------------------

### 2. FORCE BREETH USAGE

- Remove ANY Gemini logic
- Remove ANY old LLM client
- Ensure ONLY this flow:

generate_post() → generate_text() → Breeth API → return

----------------------------------------

### 3. FIX API CALL

Ensure correct request:

POST https://api.thebreeth.com/v1/chat/completions

Headers:
Authorization: Bearer BREETH_API_KEY
Content-Type: application/json

----------------------------------------

### 4. FIX RESPONSE PARSING

- Parse response correctly
- Extract generated text
- Convert to JSON format:

{
  "post_text": "...",
  "rationale": "..."
}

----------------------------------------

### 5. REMOVE FAKE ERROR MESSAGE

- Remove "API limit reached"
- That is old Gemini logic

----------------------------------------

### 6. ADD REAL SUCCESS LOG

When Breeth works:

[OK] Generated using Breeth

----------------------------------------

### 7. FALLBACK ONLY IF REAL ERROR

Fallback only if:
- API fails
- Timeout
- Invalid response

Log:
[FAST FALLBACK]

----------------------------------------

### 8. ENSURE ONLY 1 CALL

- No retries
- No loops
- No multiple providers

----------------------------------------

### 9. TEST FLOW

When clicking "Generate Viral Post":

✔ Breeth must be called  
✔ Real content generated  
✔ No fallback message  

----------------------------------------

## ✅ FINAL OUTPUT

After fixing:

ONLY say:

"Breeth API is now working and fallback issue resolved."
```

### Prompt 72
```txt
You are a senior Python backend engineer.

Fix my AI Tech Creator project where Breeth API is NOT working and system always uses fallback.

IMPORTANT:
❌ Do NOT explain anything
❌ Do NOT show code
✔ Directly modify files correctly

----------------------------------------

## 🚨 CURRENT PROBLEM

- UI shows: "Generated using fallback (API limit reached)"
- Breeth API is NOT being called
- System directly jumps to fallback
- Engagement analyzer shows error

----------------------------------------

## 🔥 TASKS TO FIX

### 1. FIX ENV LOADING

- Ensure .env is loaded using dotenv
- Ensure BREETH_API_KEY is correctly read
- Print/log error if key is missing

Remove completely:
GEMINI_API_KEY

----------------------------------------

### 2. REMOVE ALL GEMINI LOGIC

Delete completely:
- google.genai imports
- GEMINI_API_KEY references
- get_llm_client()
- llm_client.py
- Any retry logic
- Any "API limit reached" message

----------------------------------------

### 3. IMPLEMENT BREETH API CORRECTLY

Use:

POST https://api.thebreeth.com/v1/chat/completions

Headers:
Authorization: Bearer BREETH_API_KEY
Content-Type: application/json

Ensure:
- Exactly 1 API call per generation
- No retries
- No loops

----------------------------------------

### 4. FIX GENERATE FLOW

Correct flow:

generate_post()
→ generate_text()
→ call Breeth API
→ parse response
→ return structured JSON

----------------------------------------

### 5. FIX RESPONSE PARSING

Ensure response is extracted properly

Return strictly:

{
  "post_text": "...",
  "rationale": "..."
}

If parsing fails → trigger fallback

----------------------------------------

### 6. FIX FALLBACK SYSTEM

Fallback ONLY if:
- API error
- Timeout
- Invalid response

Fallback must return:
FALLBACK_POST
FALLBACK_REASON

Log:
[FAST FALLBACK]

----------------------------------------

### 7. REMOVE FAKE ERROR MESSAGE

Delete:
"API limit reached"

That is old Gemini logic

----------------------------------------

### 8. FIX LOGGING

Keep ONLY:

[STEP] Fetching trends...
[OK] Trend accepted
[OK] Generated using Breeth
[FAST FALLBACK]
[OK] Cycle completed

----------------------------------------

### 9. FIX ANALYZER INPUT

- Ensure analyzer receives valid post_text
- Remove dependency on Gemini output
- Handle fallback input properly

----------------------------------------

### 10. ENSURE UI WORKS

- Keep same API routes
- Ensure frontend gets:
  post_text + rationale
- Remove error display if success

----------------------------------------

## 🧪 FINAL TEST

Click "Generate Viral Post"

Expected:
✔ Breeth API is called
✔ Real content generated
✔ No fallback message
✔ Engagement shows properly

----------------------------------------

## ✅ FINAL OUTPUT

After finishing:

ONLY say:

"Breeth API fully fixed and system working without fallback."
```

### Prompt 73
```txt
You are a senior Python + API integration engineer.

Fix my AI Tech Creator project where Breeth API integration may still fail silently or fallback incorrectly.

IMPORTANT:
❌ Do NOT explain anything
❌ Do NOT show code
✔ Directly modify project files

----------------------------------------

## 🚨 CURRENT STATE

- Breeth integration added
- But system may still:
  - Fail silently
  - Always trigger fallback
  - Not parse response correctly
  - Not return valid JSON

----------------------------------------

## 🔥 TASKS

### 1. FORCE HARD FAILURE VISIBILITY

- If Breeth API fails:
  - Log exact error message
  - Log status code
  - Log response body

DO NOT silently fallback without logging

----------------------------------------

### 2. VALIDATE API KEY AT STARTUP

- On app start:
  - Check if BREETH_API_KEY exists
  - If missing → print clear error

----------------------------------------

### 3. STRICT RESPONSE VALIDATION

After API call:

- Ensure response contains text output
- Ensure content is not empty
- Ensure it can be converted to JSON

If invalid → fallback

----------------------------------------

### 4. FORCE JSON OUTPUT FROM MODEL

Modify prompt so model ALWAYS returns:

{
  "post_text": "...",
  "rationale": "..."
}

Reject any non-JSON output

----------------------------------------

### 5. ADD SAFE JSON PARSER

- If response is string:
  - Extract JSON safely
  - Handle malformed JSON
  - Prevent crashes

----------------------------------------

### 6. FIX FALLBACK LOGIC

Fallback ONLY when:

- API request fails
- Response invalid
- JSON parsing fails

Log:
[FAST FALLBACK]

----------------------------------------

### 7. ADD SUCCESS CONFIRMATION

When Breeth works:

Log EXACTLY:
[OK] Generated using Breeth

----------------------------------------

### 8. FIX ANALYZER PIPELINE

- Ensure analyzer gets:
  valid post_text
- If fallback → still analyze safely
- Remove dependency on old Gemini output

----------------------------------------

### 9. ENSURE END-TO-END FLOW

Button click →

generate_post()  
→ generate_text()  
→ Breeth API  
→ parse JSON  
→ send to frontend  

----------------------------------------

### 10. FINAL VALIDATION

Click "Generate Viral Post"

System must:

✔ Call Breeth API  
✔ Return real AI content  
✔ No fallback unless real error  
✔ No "API limit reached" anywhere  
✔ Engagement analyzer works  

----------------------------------------

## ✅ FINAL OUTPUT

After finishing:

ONLY say:

"Breeth execution pipeline stabilized and verified."
```

### Prompt 74
```txt
You are a senior Python debugging and API systems engineer.

My AI Tech Creator project is STILL not calling Breeth API and always using fallback.

You must find and FIX the root cause completely.

IMPORTANT:
❌ Do NOT explain
❌ Do NOT skip steps
✔ Modify files directly
✔ Ensure Breeth API is ACTUALLY CALLED

----------------------------------------

## 🚨 CRITICAL: ROOT CAUSE MODE

This is NOT a normal fix.

You must:
✔ Trace execution step-by-step
✔ Identify EXACT failure point
✔ Fix it completely

----------------------------------------

## 🔍 STEP 1: TRACE EXECUTION

Trace full flow:

main.py  
→ route  
→ generate_post()  
→ generate_text()  
→ API call  

Check:
- Is generate_text() even being called?
- Is API function executed?
- Is it exiting early?

----------------------------------------

## 🔍 STEP 2: ADD HARD DEBUG LOGS

Add logs:

Before API call:
[DEBUG] Calling Breeth API

After API call:
[DEBUG] Response received

If you DO NOT see these logs → function is not running

----------------------------------------

## 🔍 STEP 3: FIX FUNCTION CALL BREAK

Check for:

- Wrong import paths
- Function not linked
- Old Gemini function still used
- generate_text not connected

Fix so that:

generate_post() ALWAYS calls Breeth function

----------------------------------------

## 🔍 STEP 4: FIX API REQUEST FORMAT

Ensure correct request:

POST https://api.thebreeth.com/v1/chat/completions

Headers:
Authorization: Bearer BREETH_API_KEY
Content-Type: application/json

Body MUST include:
- model
- messages

----------------------------------------

## 🔍 STEP 5: FORCE RAW RESPONSE PRINT

Print FULL response:

[DEBUG RESPONSE]
<full JSON response>

----------------------------------------

## 🔍 STEP 6: BYPASS COMPLEX LOGIC

Temporarily:

- Remove abstraction layers
- Call Breeth API DIRECTLY inside generate_post()

NO middle layers

----------------------------------------

## 🔍 STEP 7: FIX ENV ISSUE

Ensure:

- .env file exists
- BREETH_API_KEY is correct
- No typo in variable name

----------------------------------------

## 🔍 STEP 8: REMOVE ALL SILENT FAILURES

Delete:

try/except that hides errors

Replace with:

- Proper logging
- Then fallback

----------------------------------------

## 🔍 STEP 9: VERIFY NETWORK CALL

Ensure:

- requests.post is actually executed
- No early return
- No condition skipping API

----------------------------------------

## 🔍 STEP 10: FINAL FLOW

When clicking button:

You MUST see:

[DEBUG] Calling Breeth API  
[DEBUG RESPONSE] {...}  
[OK] Generated using Breeth  

If not → fix until it works

----------------------------------------

## 🧪 FINAL RESULT

System MUST:

✔ Actually call Breeth API  
✔ Print response  
✔ Generate real AI output  
✔ NOT fallback unnecessarily  

----------------------------------------

## ✅ FINAL OUTPUT

After fixing:

ONLY say:

"Breeth API root issue identified and fixed."
```

### Prompt 75
```txt
You are a senior Python runtime debugging engineer.

The previous fixes were NOT actually working even though you said they were.

Now you must FIX AND VERIFY by tracing REAL execution.

IMPORTANT:
❌ Do NOT assume anything is working
❌ Do NOT just modify files
✔ You MUST verify execution flow logically
✔ You MUST ensure UI button triggers Breeth API call

----------------------------------------

## 🚨 REAL PROBLEM

- System STILL shows fallback
- Breeth API is NOT being called in real execution
- Your previous fix did NOT affect runtime

----------------------------------------

## 🔥 TASK (STRICT)

### 1. VERIFY ENTRYPOINT

Check which file is ACTUALLY running:

python main.py

Confirm:

- Which Flask app is running
- Which routes are active
- Which file contains the route for "Generate Viral Post"

----------------------------------------

### 2. TRACE BUTTON → BACKEND

Find:

Frontend button → API route

Example:
"/generate"
"/api/generate"

Then trace:

Route → function → generate_post()

----------------------------------------

### 3. CONFIRM CORRECT FILE USED

Ensure:

- Only ONE generate_post() exists
- No duplicate files
- No old Gemini version being imported

----------------------------------------

### 4. HARD LINK BREETH CALL

Inside the EXACT function used by route:

FORCE:

- Direct Breeth API call here
- No abstraction
- No other function

----------------------------------------

### 5. ADD VISIBLE PROOF

Add logs that MUST appear:

[REAL FLOW] Route hit  
[REAL FLOW] generate_post running  
[REAL FLOW] Calling Breeth API  

If these logs do not appear → you are fixing wrong file

----------------------------------------

### 6. REMOVE ALL OTHER PATHS

Delete:

- Old generate_post versions
- Gemini-based functions
- Unused modules

----------------------------------------

### 7. CONFIRM UI ROUTE RESPONSE

Ensure route returns:

{
  post_text: "...",
  rationale: "..."
}

----------------------------------------

### 8. FINAL VALIDATION (MANDATORY)

After fix:

Click button →

Terminal MUST show:

[REAL FLOW] Route hit  
[REAL FLOW] generate_post running  
[REAL FLOW] Calling Breeth API  
[OK] Generated using Breeth  

----------------------------------------

## ❗ VERY IMPORTANT

If logs are NOT showing:

👉 You are modifying WRONG file
👉 Find correct execution path and fix THAT

----------------------------------------

## ✅ FINAL OUTPUT

ONLY say:

"Execution path fixed and Breeth API now truly connected."
```

### Prompt 76
```txt
You are a senior Python runtime debugging engineer.

My system still shows fallback and Breeth API is not being called.

Now you must DEBUG the REAL execution path by adding visible logs and fixing the connection.

IMPORTANT:
❌ Do NOT explain anything
❌ Do NOT assume anything
✔ Modify ONLY the correct running files
✔ Add visible debug logs
✔ Ensure logs appear in terminal when button is clicked

----------------------------------------

## 🔥 TASK 1: IDENTIFY REAL ENTRYPOINT

- Find which file runs when:
  python main.py

- Confirm active Flask app
- Confirm active routes

----------------------------------------

## 🔥 TASK 2: TRACE BUTTON ROUTE

- Find which API route is triggered by "Generate Viral Post" button
- Example:
  /generate
  /api/generate

----------------------------------------

## 🔥 TASK 3: ADD HARD DEBUG LOGS

In the EXACT route function:

ADD:
print("🔥 ROUTE HIT")

----------------------------------------

Inside generate_post():

ADD:
print("🔥 GENERATE_POST RUNNING")

----------------------------------------

Just BEFORE Breeth API call:

ADD:
print("🔥 CALLING BREETH API")

----------------------------------------

## 🔥 TASK 4: ENSURE CONNECTION

- Route MUST call generate_post()
- generate_post MUST contain Breeth API call
- Remove any old Gemini function calls

----------------------------------------

## 🔥 TASK 5: REMOVE DUPLICATES

- Delete duplicate generate_post()
- Delete unused modules
- Ensure only ONE execution path exists

----------------------------------------

## 🔥 TASK 6: FORCE BREETH CALL IN REAL PATH

Inside the REAL function used by route:

- Directly call Breeth API here
- Do NOT use abstraction layers

----------------------------------------

## 🔥 TASK 7: FINAL FLOW

Click button →

Terminal MUST show:

🔥 ROUTE HIT  
🔥 GENERATE_POST RUNNING  
🔥 CALLING BREETH API  

If ANY log is missing → FIX until all appear

----------------------------------------

## 🔥 TASK 8: DO NOT TOUCH UI DESIGN

Only backend debugging

----------------------------------------

## ✅ FINAL OUTPUT

After fixing:

ONLY say:

"Runtime debug logs added and execution path corrected."
```

### Prompt 77
```txt
You are a senior Python verification engineer.

The system claims fixes are applied, but runtime behavior is still incorrect.

Now you must VERIFY, not just modify.

IMPORTANT:
❌ Do NOT just edit files
❌ Do NOT assume it works
✔ You MUST prove execution path is correct
✔ You MUST ensure logs actually trigger

----------------------------------------

## 🚨 VERIFICATION MODE

Your job is to CONFIRM:

Does clicking the UI button actually trigger backend logic?

----------------------------------------

## 🔥 STEP 1: FORCE UNIQUE LOGS

Add UNIQUE logs that cannot be mistaken:

print("✅ ROUTE CONFIRMED 123")
print("✅ GENERATE_POST CONFIRMED 456")
print("✅ BREETH CALL CONFIRMED 789")

----------------------------------------

## 🔥 STEP 2: PLACE LOGS CORRECTLY

- In route handler → "ROUTE CONFIRMED 123"
- In generate_post() → "GENERATE_POST CONFIRMED 456"
- Before API call → "BREETH CALL CONFIRMED 789"

----------------------------------------

## 🔥 STEP 3: RUN LOGICAL TRACE

Ensure:

Route → generate_post → API call

NO alternate path allowed

----------------------------------------

## 🔥 STEP 4: ELIMINATE FAKE PATHS

- Remove ALL unused files
- Remove ALL duplicate routes
- Remove ALL old generator functions

----------------------------------------

## 🔥 STEP 5: FORCE FAILURE IF NOT CONNECTED

If generate_post is NOT called:

- Raise error
- Do NOT silently continue

----------------------------------------

## 🔥 STEP 6: CONFIRM RESPONSE

Ensure route returns:

{
  post_text: "...",
  rationale: "..."
}

----------------------------------------

## 🔥 STEP 7: FINAL VERIFICATION CONDITION

When button is clicked:

Terminal MUST show EXACT:

✅ ROUTE CONFIRMED 123  
✅ GENERATE_POST CONFIRMED 456  
✅ BREETH CALL CONFIRMED 789  

----------------------------------------

## ❗ IF NOT SHOWING

Then:

👉 You are editing WRONG FILE
👉 Find correct execution file and fix there

----------------------------------------

## ✅ FINAL OUTPUT

ONLY say:

"Runtime verified — Breeth API execution confirmed."
```

### Prompt 78
```txt
You are a senior API integration engineer.

Fix Breeth API integration using correct endpoint and request format.

IMPORTANT:
❌ Do NOT explain anything
❌ Do NOT assume OpenAI format
✔ Follow Breeth API strictly
✔ Modify project files directly

----------------------------------------

## 🚨 CURRENT ERROR

API returns:

404 Not Found

Cause:
Wrong endpoint:
→ /v1/chat/completions ❌

----------------------------------------

## 🔥 TASK 1: FIX ENDPOINT

Replace:

/v1/chat/completions ❌

WITH:

/v1/generate ✔

(base URL stays same)

----------------------------------------

## 🔥 TASK 2: FIX REQUEST BODY

REMOVE completely:

messages: [...]

ADD:

prompt: "<full prompt text>"

----------------------------------------

## 🔥 TASK 3: FINAL REQUEST FORMAT

POST request:

URL:
https://api.thebreeth.com/v1/generate

Headers:
Authorization: Bearer BREETH_API_KEY
Content-Type: application/json

Body:
{
  "prompt": "<your full generated prompt>",
  "max_tokens": 300
}

----------------------------------------

## 🔥 TASK 4: RESPONSE HANDLING

Extract text from response:

response["output"]
OR
response["text"]

Convert into:

{
  "post_text": "...",
  "rationale": "..."
}

----------------------------------------

## 🔥 TASK 5: REMOVE OLD LOGIC

Delete:

- messages format
- chat/completions endpoint
- OpenAI-style code

----------------------------------------

## 🔥 TASK 6: KEEP LOGS

Keep:

[OK] Generated using Breeth
[FAST FALLBACK]

----------------------------------------

## 🔥 TASK 7: VALIDATION

When clicking button:

Terminal MUST show:

🔥 CALLING BREETH API
[OK] Generated using Breeth

NO 404 error
NO fallback

----------------------------------------

## ✅ FINAL OUTPUT

ONLY say:

"Breeth API fixed with correct endpoint and request format."
```

### Prompt 79
```txt
You are a senior full-stack debugging engineer.

Fix BOTH backend Breeth API failure AND frontend user data error.

IMPORTANT:
❌ Do NOT explain
❌ Do NOT assume API format
✔ Fix using actual runtime behavior
✔ Modify correct files only

----------------------------------------

## 🚨 ISSUE 1: BREETH API STILL FAILING

Logs show:
- API call happens
- But response triggers fallback

----------------------------------------

## 🔥 TASK 1: PRINT FULL RESPONSE STRUCTURE

Modify API call:

print("🔥 RAW RESPONSE:", response.text)

DO NOT parse yet

----------------------------------------

## 🔥 TASK 2: REMOVE HARDCODED FORMAT

REMOVE assumptions like:

response["output"]
response["text"]

Instead:

print full JSON and inspect actual keys

----------------------------------------

## 🔥 TASK 3: HANDLE ALL POSSIBLE FORMATS

After seeing response, extract dynamically:

IF response contains:
- "data"
- "result"
- "output"
- "text"
- "choices"

Extract whichever exists

----------------------------------------

## 🔥 TASK 4: REMOVE FALSE FAILURE

Currently fallback triggers even when API responds.

Fix:

Only fallback if:
- request fails (exception)
- OR response is empty

----------------------------------------

## 🔥 TASK 5: CONFIRM SUCCESS

Add:

print("✅ BREETH RESPONSE PARSED SUCCESS")

----------------------------------------

## 🚨 ISSUE 2: FRONTEND ERROR

Console shows:

Failed to load user data
script.js:136

----------------------------------------

## 🔥 TASK 6: FIX /user_data API

Find route:

/user_data

Fix it to ALWAYS return JSON:

return jsonify({
    "username": "User",
    "posts": []
})

NO empty response
NO crash

----------------------------------------

## 🔥 TASK 7: FIX FRONTEND FETCH

In script.js:

Wrap fetch in try/catch:

If error:
console.log("User data fallback")

Do NOT break UI

----------------------------------------

## 🔥 TASK 8: FINAL FLOW

When clicking button:

Terminal:
🔥 CALLING BREETH API
🔥 RAW RESPONSE: {...}
✅ BREETH RESPONSE PARSED SUCCESS
[OK] Generated using Breeth

Browser:
NO console errors

----------------------------------------

## ✅ FINAL OUTPUT

ONLY say:

"Backend and frontend fully fixed and verified."
```

### Prompt 80
```txt
You are a senior API reverse-engineering engineer.

Breeth API endpoint is STILL wrong.

We must FIND the correct working endpoint — not guess.

IMPORTANT:
❌ Do NOT assume endpoint
❌ Do NOT hardcode /v1/generate
❌ Do NOT stop until real response is received
✔ Discover working endpoint dynamically

----------------------------------------

## 🔥 TASK 1: TEST BASE URL

Send GET request:

https://api.thebreeth.com/

Print response:

print("BASE:", response.text)

----------------------------------------

## 🔥 TASK 2: TEST COMMON ENDPOINTS

Test ALL of these:

/v1
/v1/models
/v1/text
/v1/ai
/v1/generate
/v1/chat
/v1/completions

For each:

print:
[TESTING] /endpoint
status_code
response.text

----------------------------------------

## 🔥 TASK 3: IDENTIFY VALID ENDPOINT

Find endpoint where:

- status_code != 404
- response is NOT {"detail":"Not Found"}

----------------------------------------

## 🔥 TASK 4: USE THAT ENDPOINT

Replace API URL with working one

----------------------------------------

## 🔥 TASK 5: TEST MINIMAL REQUEST

Send simple body:

{
  "prompt": "Hello"
}

----------------------------------------

## 🔥 TASK 6: PRINT RAW RESPONSE

print("WORKING RESPONSE:", response.text)

----------------------------------------

## 🔥 TASK 7: CONNECT TO PROJECT

Use this working endpoint inside generate_post()

----------------------------------------

## 🔥 TASK 8: FINAL VALIDATION

When clicking button:

Terminal MUST show:

🔥 CALLING BREETH API
WORKING RESPONSE: {...}
[OK] Generated using Breeth

NO 404
NO fallback

----------------------------------------

## ✅ FINAL OUTPUT

ONLY say:

"Breeth endpoint discovered and working."
```

### Prompt 81
```txt
You are a senior API debugging engineer.

The previous step FAILED.

Breeth endpoint is STILL not working.

You MUST PROVE the endpoint works — not assume.

----------------------------------------

## ❌ CURRENT STATE

Response:
{"detail":"Not Found"}

Means:
Endpoint is INVALID

----------------------------------------

## 🔥 TASK 1: STOP GUESSING

DO NOT use:

/v1/generate
/v1/chat
/v1/completions

----------------------------------------

## 🔥 TASK 2: PRINT REAL TEST RESULTS

Write a temporary script:

for endpoint in [
    "",
    "/v1",
    "/v1/models",
    "/v1/text",
    "/v1/ai",
    "/v1/generate",
    "/v1/chat",
    "/v1/completions"
]:
    url = "https://api.thebreeth.com" + endpoint
    try:
        res = requests.get(url)
        print("TEST:", url)
        print("STATUS:", res.status_code)
        print("BODY:", res.text)
        print("------")
    except Exception as e:
        print("ERROR:", e)

----------------------------------------

## 🔥 TASK 3: REQUIRED PROOF

You MUST show output like:

TEST: https://api.thebreeth.com/XXXX
STATUS: 200
BODY: {...valid data...}

If ALL endpoints return 404:

👉 STOP
👉 API BASE URL is WRONG

----------------------------------------

## 🔥 TASK 4: IF ALL FAIL

Replace base URL completely.

Try alternatives:

https://breeth.ai/api
https://api.breeth.ai
https://breeth.com/api

----------------------------------------

## 🔥 TASK 5: ONLY AFTER SUCCESS

Use endpoint that returns:
✔ status 200
✔ real JSON

Then integrate into project

----------------------------------------

## 🔥 TASK 6: FINAL VALIDATION

Terminal MUST show:

🔥 CALLING BREETH API
STATUS: 200
REAL RESPONSE: {...}
[OK] Generated using Breeth

----------------------------------------

## ❗ RULE

If you cannot show STATUS 200:
👉 You FAILED
👉 Do NOT say fixed

----------------------------------------

## ✅ FINAL OUTPUT

ONLY say:

"Verified working endpoint: <FULL URL>"
```

### Prompt 82
```txt
You are a senior backend debugging engineer.

Fix Breeth API authentication issue.

IMPORTANT:
❌ Do NOT change endpoint
❌ Do NOT guess anything
✔ Use VERIFIED working endpoint
✔ Fix authentication ONLY

---

## 🔥 VERIFIED FACT

Endpoint WORKS:

https://api.thebreeth.com/v1/generate

Browser returns:
missing_authorization → means endpoint is correct

---

## 🔥 TASK 1: FIX HEADERS

Ensure EXACT headers:

headers = {
    "Authorization": "Bearer " + BREETH_API_KEY,
    "Content-Type": "application/json"
}

---

## 🔥 TASK 2: FIX API KEY LOADING

Find where API key is loaded.

Ensure:

BREETH_API_KEY = os.getenv("BREETH_API_KEY")

Add debug:

print("KEY LOADED:", BREETH_API_KEY[:10])

If None → environment not loaded → FIX IT

---

## 🔥 TASK 3: VERIFY .env

Ensure:

BREETH_API_KEY=ck_live_xxxxx

NO quotes
NO spaces

---

## 🔥 TASK 4: FORCE TEST CALL

Before integration, run:

res = requests.post(
    "https://api.thebreeth.com/v1/generate",
    headers=headers,
    json={"prompt": "Hello"}
)

print("STATUS:", res.status_code)
print("RAW:", res.text)

---

## 🔥 TASK 5: SUCCESS CONDITION

Must get:

STATUS: 200

NOT 401

---

## 🔥 TASK 6: CONNECT TO generate_post()

Replace ONLY API call logic

DO NOT change UI
DO NOT change routes

---

## 🔥 TASK 7: FINAL LOGS

When button clicked:

🔥 CALLING BREETH API
STATUS: 200
RAW: {...}
[OK] Generated using Breeth

---

## ❗ RULE

If status != 200:
→ Print FULL response
→ Do NOT fallback silently

---

## ✅ FINAL OUTPUT

ONLY say:

"Breeth authentication fixed and verified."
```

### Prompt 83
```txt
You are a senior full-stack QA and verification engineer.

Your job is NOT to modify blindly.
Your job is to TEST, VERIFY, and REPORT every part of the project.

IMPORTANT:
❌ Do NOT assume anything works
❌ Do NOT skip any feature
✔ Test like a real user + backend engineer
✔ Provide PROOF via logs and outputs

---

# 🚨 OBJECTIVE

Fully test the entire project:

- Frontend UI
- Backend APIs
- Breeth API integration
- File analyzer
- Chatbot
- All buttons and flows

---

# 🔥 STEP 1: START APPLICATION

Run backend server and frontend.

Confirm:
✔ Server starts without crash
✔ No import/module errors

Print:
"SERVER STARTED SUCCESSFULLY"

---

# 🔥 STEP 2: TEST ROUTES

List all routes:

- /
- /generate
- /analyze
- /chat
- /user_data

Test each using browser or API.

Confirm:
✔ Status 200
✔ No 404 / 500 errors

---

# 🔥 STEP 3: UI BUTTON TESTING

Click EVERY button:

For each button:

1. Click
2. Check network tab
3. Check terminal logs
4. Check response

Report:

Button → API called → Response → UI update

---

# 🔥 STEP 4: BREETH API TEST

Click "Generate Post"

Confirm logs:

🔥 CALLING BREETH API  
STATUS: 200  
RAW: {...}  
[OK] Generated using Breeth  

❗ If fallback triggers → FAIL

---

# 🔥 STEP 5: FILE ANALYZER TEST

Upload different file types:

- .txt
- .pdf
- .docx
- random file

Confirm:

✔ File accepted
✔ Processed correctly
✔ No crash

If ANY file fails → report exact error

---

# 🔥 STEP 6: CHATBOT TEST

Send multiple messages:

- Simple text
- Long text
- Empty input

Confirm:

✔ Response generated
✔ No UI break
✔ No console errors

---

# 🔥 STEP 7: USER DATA API

Test:

/user_data

Must return:

{
  "username": "User",
  "posts": []
}

NO errors
NO empty response

---

# 🔥 STEP 8: CONSOLE + TERMINAL CHECK

Ensure:

❌ No red errors in browser console  
❌ No Python exceptions  
❌ No silent failures  

---

# 🔥 STEP 9: EDGE CASE TESTING

Test:

- Empty inputs
- Large inputs
- Multiple rapid clicks
- Invalid files

---

# 🔥 STEP 10: FINAL REPORT

Provide structured report:

1. ✅ Working Features
2. ❌ Broken Features
3. ⚠️ Warnings
4. 🔥 Critical Bugs
5. 📊 Overall Status (Working / Partially Working / Broken)

---

# ❗ STRICT RULE

If ANY feature is not proven working with logs:

👉 Mark it as FAILED

---

# ✅ FINAL OUTPUT FORMAT

Return ONLY:

"FULL TEST REPORT:"
(with detailed breakdown)

DO NOT say "everything works" without proof
```

### Prompt 84
```txt
You are a senior backend fixing engineer.

The QA report shows REAL failures.
You must FIX them — not assume.

IMPORTANT:
❌ Do NOT say "fixed" without proof
❌ Do NOT ignore 404 errors
✔ Fix root causes only

---

# 🚨 ISSUE 1: BREETH API RETURNS 404

FACT:
Endpoint exists but POST is failing.

---

## 🔥 TASK 1: VERIFY METHOD

Test BOTH:

GET https://api.thebreeth.com/v1/generate
POST https://api.thebreeth.com/v1/generate

Print:

METHOD, STATUS, RESPONSE

---

## 🔥 TASK 2: FIX REQUEST FORMAT

Try variations:

1.
json={"prompt": "Hello"}

2.
json={
  "input": "Hello"
}

3.
json={
  "text": "Hello"
}

4.
json={
  "query": "Hello"
}

---

## 🔥 TASK 3: PRINT REAL RESPONSE

print("STATUS:", res.status_code)
print("RAW:", res.text)

---

## 🔥 TASK 4: SUCCESS CONDITION

Must get:

STATUS: 200

If still 404:

👉 Endpoint requires DIFFERENT PATH
👉 Try:

/v1/generate-text
/v1/complete
/v1/ai/generate
/v1/content

---

## 🔥 TASK 5: NO FALLBACK ALLOWED

If API fails:

RAISE ERROR

DO NOT fallback silently

---

# 🚨 ISSUE 2: /analyze ROUTE MISSING

---

## 🔥 TASK 6: CREATE /analyze

Accept file upload

Return:

{
  "summary": "File processed successfully"
}

---

# 🚨 ISSUE 3: /chat ROUTE MISSING

---

## 🔥 TASK 7: CREATE /chat

POST route:

input: message

Return:

{
  "reply": "Test response working"
}

---

# 🔥 TASK 8: VERIFY ROUTES

Ensure:

/analyze → 200
/chat → 200

---

# 🔥 TASK 9: FINAL TEST

Click all buttons

Confirm:

NO 404
NO fallback
NO crash

---

# ✅ FINAL OUTPUT

ONLY say:

"All critical issues fixed and verified with STATUS 200."
```

### Prompt 85
```txt
You are a senior API debugging engineer.

We now have REAL runtime proof:

GET /v1/generate → 401 (valid endpoint)
POST /v1/generate → 404 (invalid method)

---

# 🚨 CONCLUSION

Endpoint EXISTS but does NOT support POST.

---

# 🔥 TASK 1: FIND CORRECT POST ENDPOINT

Test ALL:

POST /v1/chat
POST /v1/completions
POST /v1/text
POST /v1/ai
POST /v1/messages

For each:

print:
URL
STATUS
RESPONSE

---

# 🔥 TASK 2: USE AUTH HEADER

headers = {
  "Authorization": "Bearer " + API_KEY,
  "Content-Type": "application/json"
}

---

# 🔥 TASK 3: TEST BODY FORMATS

Try:

1.
{"prompt": "Hello"}

2.
{"message": "Hello"}

3.
{"input": "Hello"}

4.
{
  "messages": [
    {"role": "user", "content": "Hello"}
  ]
}

---

# 🔥 TASK 4: SUCCESS CONDITION

Must get:

STATUS: 200
AND real response (NOT 404)

---

# 🔥 TASK 5: UPDATE PROJECT

Once working endpoint found:

Replace API call in generate_post()

---

# 🔥 TASK 6: REMOVE FAILING ENDPOINT

DELETE:
POST /v1/generate

---

# 🔥 TASK 7: FINAL VERIFICATION

When button clicked:

🔥 CALLING BREETH API
STATUS: 200
RAW: {...}
[OK] Generated using Breeth

---

# ❗ RULE

If STATUS != 200:
→ Continue testing
→ DO NOT stop

---

# ✅ FINAL OUTPUT

ONLY say:

"Correct Breeth POST endpoint discovered and integrated."
```

### Prompt 86
```txt
You are a senior backend engineer fixing a broken AI integration.

The current Breeth API is INVALID and must be REMOVED completely.

❌ DO NOT keep any Breeth code
❌ DO NOT fallback silently
✔ Replace with Mistral API properly

---

# 🔥 TASK 1: REMOVE BREETH

Delete:
- All Breeth API calls
- All breeth_test.py logic from main flow
- Any fallback using Breeth

---

# 🔥 TASK 2: INSTALL MISTRAL CLIENT

Use:

pip install mistralai

---

# 🔥 TASK 3: SET ENV VARIABLE

Use:

MISTRAL_API_KEY=your_real_key_here

Load using:

import os
API_KEY = os.getenv("MISTRAL_API_KEY")

If missing → raise error

---

# 🔥 TASK 4: IMPLEMENT GENERATE FUNCTION

Replace generate_post() with:

from mistralai import Mistral

def generate_post(prompt):
    if not API_KEY:
        raise Exception("Missing Mistral API Key")

    client = Mistral(api_key=API_KEY)

    response = client.chat.complete(
        model="mistral-small-latest",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    print("STATUS: 200")
    print("RAW:", response)

    return response.choices[0].message.content

---

# 🔥 TASK 5: FIX /chat ROUTE

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    message = data.get("message")

    if not message:
        return {"error": "No message"}, 400

    reply = generate_post(message)

    return {"reply": reply}

---

# 🔥 TASK 6: FIX /analyze ROUTE

@app.route("/analyze", methods=["POST"])
def analyze():
    if 'file' not in request.files:
        return {"error": "No file"}, 400

    file = request.files['file']

    content = file.read().decode("utf-8", errors="ignore")

    summary = generate_post("Summarize this:\n" + content[:2000])

    return {"summary": summary}

---

# 🔥 TASK 7: ADD STRICT LOGGING

Every AI call must print:

🔥 CALLING MISTRAL API
STATUS: 200
RAW RESPONSE: ...

---

# 🔥 TASK 8: ERROR HANDLING

If API fails:

raise Exception("Mistral API failed")

DO NOT fallback
DO NOT fake success

---

# 🔥 TASK 9: FINAL VERIFICATION

Test:

POST /chat → 200
POST /analyze → 200

No 404
No Breeth calls
Real AI response returned

---

# ✅ FINAL OUTPUT RULE

Only say:

"Mistral integration completed and verified with STATUS 200."
```

### Prompt 87
```txt
You are a senior Python backend engineer.

Fix my AI Tech Creator project by completely replacing the broken AI integration with Mistral API.

---

# 🔥 TASK 1: REMOVE OLD AI (CRITICAL)

Delete ALL code related to:
- Breeth API
- Google GenAI (google-genai)
- tavily
- any unused AI clients

Also remove from requirements.txt:
- google-genai
- tavily-python
- tiktoken (if present)

Keep only necessary dependencies.

---

# 🔥 TASK 2: INSTALL MISTRAL

Add to requirements.txt:

mistralai==1.2.0

---

# 🔥 TASK 3: FIX PROJECT STRUCTURE

Ensure structure:

ai_tech_creator/
│── __init__.py
│── main.py
│── post_generator.py
│── routes (if exists)

Root:
│── main.py (entry file)

---

# 🔥 TASK 4: FIX IMPORT ERRORS

Use proper imports:

Inside ai_tech_creator:
from .post_generator import generate_post

Root main.py:
from ai_tech_creator.main import run

---

# 🔥 TASK 5: IMPLEMENT MISTRAL CORRECTLY

In post_generator.py:

- Use correct SDK:

from mistralai.client import MistralClient
from mistralai.models.chat_completion import ChatMessage

- Load API key from environment:

import os
API_KEY = os.getenv("MISTRAL_API_KEY")

- If missing → raise Exception

- Implement:

def generate_post(prompt):
    print("🔥 CALLING MISTRAL API")

    client = MistralClient(api_key=API_KEY)

    response = client.chat(
        model="mistral-small-latest",
        messages=[
            ChatMessage(role="user", content=prompt)
        ]
    )

    print("STATUS: 200")
    print("RAW RESPONSE:", response)

    return response.choices[0].message.content

---

# 🔥 TASK 6: FIX FLASK ROUTES

/chat endpoint:

- Accept JSON { "message": "..." }
- Validate input
- Call generate_post()
- Return JSON { "reply": "..." }

/analyze endpoint:

- Accept uploaded file
- Read content
- Send first 2000 chars to AI
- Return summary

---

# 🔥 TASK 7: ERROR HANDLING

- If API fails → raise Exception
- Do NOT fallback
- Do NOT fake response

---

# 🔥 TASK 8: FIX RUN METHOD

In ai_tech_creator/main.py:

def run():
    app.run(host="0.0.0.0", port=5000, debug=True)

---

# 🔥 TASK 9: ENTRY FILE

Root main.py:

from ai_tech_creator.main import run

if __name__ == "__main__":
    run()

---

# 🔥 TASK 10: FINAL TEST

Ensure:

✔ python main.py runs without error  
✔ POST /chat returns 200  
✔ POST /analyze returns 200  
✔ Console logs show:

🔥 CALLING MISTRAL API  
STATUS: 200  
RAW RESPONSE: ...

---

# ❗ RULES

- Do NOT leave unused code
- Do NOT use deprecated Mistral imports
- Do NOT break existing UI
- Keep code clean and minimal

---

# ✅ OUTPUT

Return updated:
- requirements.txt
- post_generator.py
- main.py (both)
- routes (if modified)

Ensure project runs successfully.
```

### Prompt 88
```txt
Fix my Flask backend to properly handle the /chat API route and remove the 405 Method Not Allowed error.

Project structure:
- main.py (entry point)
- ai_tech_creator/
    - api.py
    - post_generator.py

Problem:
- When opening /chat in browser, I get "405 Method Not Allowed"
- The frontend sends POST requests to /chat
- Backend is not handling GET requests

Requirements:
1. Update Flask route to support both GET and POST:
   @app.route("/chat", methods=["GET", "POST"])

2. If method is POST:
   - Read JSON input (prompt)
   - Call generate_post(prompt)
   - Return JSON response

3. If method is GET:
   - Return simple JSON message:
     {"message": "Chat endpoint is working"}

4. Ensure proper imports:
   from flask import Flask, request, jsonify

5. Keep existing functionality intact (do not break working AI generation)

6. Clean, production-ready code

Output:
- Return only updated api.py file
- No explanations
```

### Prompt 89
```txt
You made a critical mistake in my backend code by mixing Flask and FastAPI frameworks together.

Current issues in the code:
1. The app is initialized using FastAPI:
   app = FastAPI(...)

2. But later Flask-style routes are used:
   @app.route("/chat", methods=["GET", "POST"])

3. Flask imports are also present:
   from flask import Flask, request, jsonify

This is WRONG and breaks the application architecture.

---

TASK: FIX THE BACKEND PROPERLY

You must convert everything to a PURE FastAPI application.

---

REQUIREMENTS:

1. REMOVE ALL FLASK USAGE:
   - Delete:
     from flask import Flask, request, jsonify
   - Remove any @app.route(...) usage

2. KEEP ONLY FASTAPI:
   - Use:
     from fastapi import FastAPI, Request

3. FIX THE /chat ENDPOINT:

Replace Flask route with correct FastAPI version:

- Endpoint path: /chat
- Must support BOTH GET and POST
- Use FastAPI style ONLY

Behavior:
- GET → return:
  {"message": "Chat endpoint is working"}

- POST →:
  - Read JSON body
  - Extract "message"
  - Call generate_post(message)
  - Return:
    {"reply": result}

4. DO NOT BREAK EXISTING SYSTEM:
   - Keep all agent logic intact
   - Keep generate_post working
   - Keep background tasks and API routes unchanged

5. CLEAN CODE:
   - Proper async usage
   - No mixed frameworks
   - No redundant imports

---

OUTPUT FORMAT:
- Return ONLY the updated api.py file
- No explanation
- No comments
```

### Prompt 90
```txt
Your previous fix was correct, but now improve the /chat endpoint to production level.

TASK:

1. Keep FastAPI implementation as it is
2. Add proper error handling in /chat endpoint
3. Prevent crashes if:
   - message is missing
   - API fails

REQUIREMENTS:

- If "message" is missing → return:
  {"error": "No message provided"}

- Wrap AI call in try/except:
  If error → return:
  {"error": "Mistral API failed"}

- Keep async structure:
  reply = await asyncio.to_thread(generate_post, prompt)

- Do NOT modify any other logic

OUTPUT:
Return only updated /chat function
```

### Prompt 91
```txt
You are a senior backend + DevOps engineer.

The project is a WORKING FastAPI-based AI app using Mistral API.
Your job is to CLEAN, FIX, and PREPARE it for PRODUCTION DEPLOYMENT.

---

🔥 STRICT RULES (VERY IMPORTANT):

❌ DO NOT change business logic  
❌ DO NOT modify generate_post()  
❌ DO NOT break existing endpoints  
❌ DO NOT rewrite working features  

✔ ONLY fix structure, warnings, deployment issues  
✔ ONLY improve stability and compatibility  

---

# TASK 1: CLEAN UNUSED IMPORTS

- Remove any unused imports (like `import uvicorn` if unused)
- Ensure no yellow warnings remain in VS Code

---

# TASK 2: FIX ENTRYPOINT (CRITICAL)

Create file at ROOT:

👉 api.py

Content:

from ai_tech_creator.main import app

This is required for deployment platforms.

---

# TASK 3: ENSURE APP OBJECT EXISTS

Inside:
ai_tech_creator/main.py

Make sure:

app = FastAPI()

AND it is globally accessible.

---

# TASK 4: VERIFY /chat ENDPOINT

Ensure:

@app.api_route("/chat", methods=["GET", "POST"])
async def chat(request: Request):

- If no message → return {"error": "No message provided"}
- Wrap AI call in try/except
- If failure → return {"error": "Mistral API failed"}

Use:

reply = await asyncio.to_thread(generate_post, prompt)

Do NOT change logic

---

# TASK 5: FIX REQUIREMENTS.TXT

Replace completely with:

fastapi
uvicorn
mistralai
python-dotenv
python-multipart

---

# TASK 6: FIX IMPORT ERRORS

- Convert broken relative imports if needed
- Ensure project runs as module
- No "ImportError" should occur

---

# TASK 7: REMOVE LOCAL-ONLY CODE

- Remove any code that only works locally
- Fix __main__ usage
- Ensure compatibility with deployment servers

---

# TASK 8: ADD START COMMAND SUPPORT

Ensure app runs with:

uvicorn api:app --host 0.0.0.0 --port 10000

---

# TASK 9: FINAL VALIDATION

After changes:

✔ No yellow warnings  
✔ No import errors  
✔ Server starts successfully  
✔ /chat works  
✔ Mistral API works  
✔ Ready for deployment  

---

# OUTPUT RULE

Only respond with:

"Project cleaned, fixed, and deployment-ready."
```

### Prompt 92
```txt
I want you to act as a professional QA engineer and full-stack developer.

I will provide you with my project files (backend + frontend). Your task is to carefully analyze and test the entire application like a real user and developer.

IMPORTANT RULES:
- Do NOT modify any files
- Do NOT rewrite code unless I ask
- Only analyze, test, and report
- Explain everything in simple and clear language

YOUR TASK:

1. FULL PROJECT UNDERSTANDING
- Explain what this project does
- Describe the purpose of each major file
- Explain backend (API) and frontend separately
- Describe how they are connected

2. FRONTEND ANALYSIS
- Go through the UI (HTML, CSS, JS)
- Explain what each section/button does
- Simulate user actions:
  - What happens when user clicks each button
  - What inputs are accepted
  - What outputs are shown
- Check if UI is responsive and logical

3. BACKEND ANALYSIS
- List all API endpoints
- Explain what each endpoint does
- Check request/response format
- Identify any missing or broken routes

4. FUNCTIONAL TESTING (VERY IMPORTANT)
- Simulate real usage step-by-step
- Test all features:
  - File upload (VERY IMPORTANT)
  - Chat / generation / processing
- Verify:
  - Does every feature actually work?
  - Are there any crashes or errors?

5. FILE UPLOAD TESTING (CRITICAL)
- The website claims it accepts ANY file type
- Test logically:
  - PDF
  - TXT
  - Images
  - Invalid files
- Tell:
  - Which types actually work
  - Which fail
  - Why they fail

6. ERROR & BUG DETECTION
- Identify all errors (frontend + backend)
- Explain in simple words:
  - What is wrong
  - Why it happens
- Do NOT fix — only explain

7. USER EXPERIENCE REVIEW
- Is the website easy to use?
- Any confusing parts?
- Any missing features?

8. FINAL REPORT
Give a clean structured report:
- What works ✅
- What doesn’t ❌
- What is partially working ⚠️
- Overall rating (out of 10)
- Summary in simple words

IMPORTANT:
- Think like a real user
- Be very detailed
- Do not skip anything
- Explain step-by-step what happens when interacting with the site

Take your time and analyze everything deeply.
```

### Prompt 93
```txt
I want you to act as a senior full-stack engineer and system architect.

I have a broken project where:
- Frontend (HTML/CSS/JS) was originally built for Flask
- Backend is now FastAPI
- Because of this, the frontend and backend are NOT connected
- Many API routes used in the frontend DO NOT exist in the backend
- The homepage ("/") is not served
- Static files (CSS/JS) are not loading properly
- File upload feature is claimed but NOT implemented
- The app is currently NOT usable from browser

IMPORTANT RULES:
- DO NOT give explanations only → GIVE COMPLETE FIX
- DO NOT partially fix → FIX EVERYTHING END-TO-END
- DO NOT skip any issue
- DO NOT change project idea
- Keep code clean and production-ready

YOUR TASK:

----------------------------------
1. FIX ARCHITECTURE
----------------------------------
- Convert the project into a proper FastAPI full-stack app
- Connect frontend + backend correctly
- Use Jinja2Templates properly
- Ensure index.html loads from FastAPI

----------------------------------
2. FIX ROUTING
----------------------------------
Create ALL missing routes used in frontend:

Required routes:
- GET "/" → serve index.html
- POST "/api/onboard"
- POST "/generate"
- POST "/api/reply"
- GET "/api/auto/status"
- POST "/api/auto/start"
- POST "/api/auto/stop"
- GET "/history"
- GET "/user_data"
- POST "/api/feedback"

Make them WORKING (not dummy)

----------------------------------
3. FIX STATIC FILES
----------------------------------
- Ensure CSS and JS load correctly
- Fix {{ url_for }} issues
- Make FastAPI serve static properly

----------------------------------
4. FIX FRONTEND (IMPORTANT)
----------------------------------
- Update fetch() URLs to match FastAPI routes
- Ensure buttons actually work
- Fix broken logic in script.js
- Handle API responses properly

----------------------------------
5. IMPLEMENT FILE UPLOAD (CRITICAL)
----------------------------------
- Add file upload input in frontend
- Support:
  - PDF
  - TXT
  - Images
- Create backend route:
  POST /upload
- Process files safely
- Return meaningful response

----------------------------------
6. FIX ERROR HANDLING
----------------------------------
- Prevent crashes
- Return proper JSON responses
- Handle missing inputs
- Fix infinite polling errors

----------------------------------
7. MAKE APP RUNNABLE
----------------------------------
Ensure project runs with:

uvicorn main:app --reload

AND:
- Homepage loads
- All buttons work
- No 404 errors
- No console errors

----------------------------------
8. PROJECT STRUCTURE (IMPORTANT)
----------------------------------
Give final correct structure like:

/project
 ├── main.py
 ├── templates/
 │    └── index.html
 ├── static/
 │    ├── style.css
 │    └── script.js

----------------------------------
9. FINAL OUTPUT FORMAT
----------------------------------
Give:

1. FULL corrected main.py
2. FIXED script.js
3. FIXED index.html (only necessary changes)
4. File upload implementation
5. Instructions to run

----------------------------------
10. EXTRA
----------------------------------
- Keep UI same
- Do not remove features
- Make everything production-ready
- Code should be clean and professional

Take your time and fix EVERYTHING properly.
```

### Prompt 94
```txt
You are a senior full-stack engineer, QA engineer, and DevOps expert.

I have already applied a major fix to my FastAPI + frontend project. Now your job is NOT to rebuild — your job is to VERIFY, DEBUG, and PERFECT the project.

IMPORTANT RULES:
- Do NOT rewrite everything
- Do NOT break working features
- Do NOT change business logic
- Only FIX remaining issues and ensure everything is working perfectly
- Think like a real user + production engineer

----------------------------------
YOUR TASK:
----------------------------------

1. FULL PROJECT VERIFICATION
- Carefully review backend (FastAPI) and frontend (HTML/CSS/JS)
- Check if everything is properly connected
- Confirm templates, static files, and routing are correct

2. END-TO-END FLOW TESTING
Simulate real user flow step-by-step:
- Open homepage (/)
- Check if UI loads (CSS + JS working)
- Click each button and explain what happens:
  - Generate post
  - Auto mode
  - Reply AI
  - File upload
- Verify API responses match frontend expectations

3. API VALIDATION
- List all endpoints
- Check:
  - Request format
  - Response format
  - Error handling
- Ensure NO endpoint returns 404 or crashes

4. FILE UPLOAD VALIDATION (CRITICAL)
Test logic for:
- TXT → should work
- PDF → check behavior
- Images → check behavior
- Invalid file → should return error

Clearly explain:
- What is real vs simulated
- Any limitations

5. ERROR DETECTION
Find ALL remaining issues:
- Broken UI elements
- Console errors
- Backend crashes
- Incorrect responses
- Performance issues

Explain:
- What is wrong
- Why it happens

6. CODE QUALITY CHECK
- Remove unused imports
- Check warnings
- Ensure clean structure
- Ensure production compatibility

7. DEPLOYMENT READINESS
Verify:
- Runs with:
  uvicorn main:app --reload
- No path issues
- No missing dependencies
- Works on deployment platforms (Render / Vercel backend / Railway)

8. FINAL QA REPORT
Give clear structured output:

✅ What works perfectly  
⚠️ What is partially working  
❌ What is still broken  

Then give:

⭐ Final rating (out of 10)  
📌 Simple summary (non-technical)

----------------------------------
OUTPUT RULE:
----------------------------------

- Be very detailed
- Think like real tester
- Explain user actions clearly
- Do NOT skip anything
```

### Prompt 95
```txt
You are a senior full-stack engineer, backend architect, security expert, and DevOps engineer.

I already have a WORKING FastAPI + frontend AI project.
Now your job is to UPGRADE it to a TRUE PRODUCTION-LEVEL SYSTEM (10/10 quality).

IMPORTANT RULES:
- DO NOT break existing working features
- DO NOT change business logic
- DO NOT remove UI features
- ONLY upgrade, improve, and harden the system
- Keep code clean, modular, and scalable
- Think like a real startup production system

----------------------------------
GOAL:
----------------------------------
Transform this project into:
✔ Scalable
✔ Secure
✔ Real (no fake features)
✔ Production deployable
✔ Multi-user ready

----------------------------------
TASK 1: REAL FILE PROCESSING (CRITICAL)
----------------------------------
Replace simulated logic with REAL implementations:

1. PDF Processing:
- Use PyMuPDF (fitz)
- Extract real text from PDF
- Handle large PDFs safely

2. Image Processing:
- Use pytesseract (OCR)
- Extract text from images

3. TXT:
- Keep current logic

4. Add:
- File size limit (e.g., 5MB)
- MIME type validation
- Safe file handling

----------------------------------
TASK 2: BACKGROUND JOB SYSTEM
----------------------------------
Fix Auto Mode (currently fake):

- Implement real background processing:
  Option A (Preferred): asyncio loop
  Option B: Celery + Redis (if possible)

Requirements:
- Auto agent actually generates posts periodically
- Update next_run and last_run correctly
- Run without blocking server
- Safe cancellation (stop endpoint)

----------------------------------
TASK 3: AUTHENTICATION SYSTEM
----------------------------------
Remove single user logic:

Replace:
USER_ID = 1 ❌

With:
- JWT Authentication
- Login / Signup endpoints
- Secure password hashing (bcrypt)

Add:
- /login
- /signup
- Protected routes using token

----------------------------------
TASK 4: DATABASE IMPROVEMENT
----------------------------------
- Ensure DB operations are safe
- Add error handling for DB failures
- Prevent crashes if DB unavailable
- Add basic indexing logic (if needed)

----------------------------------
TASK 5: SECURITY HARDENING (VERY IMPORTANT)
----------------------------------
Add:

1. Input validation (pydantic strict)
2. File upload security:
   - Limit size
   - Block dangerous types
3. Rate limiting (basic)
4. CORS configuration
5. Prevent API abuse

----------------------------------
TASK 6: API IMPROVEMENT
----------------------------------
- Use proper HTTP status codes:
  200, 400, 401, 500
- Standardize responses:
  {
    "success": true/false,
    "data": {},
    "error": ""
  }

----------------------------------
TASK 7: ERROR HANDLING
----------------------------------
- Global exception handler
- No raw error messages exposed
- Clean error responses

----------------------------------
TASK 8: PERFORMANCE OPTIMIZATION
----------------------------------
- Ensure all heavy tasks use:
  asyncio.to_thread()
- Avoid blocking FastAPI event loop

----------------------------------
TASK 9: PROJECT STRUCTURE (CLEAN ARCHITECTURE)
----------------------------------
Refactor into:

/project
 ├── main.py
 ├── routes/
 ├── services/
 ├── models/
 ├── utils/
 ├── templates/
 ├── static/

----------------------------------
TASK 10: DEPLOYMENT READY
----------------------------------
Ensure compatibility with:
- Render
- Railway
- Docker (optional)

Add:
- requirements.txt (clean)
- .env usage for API keys
- production start command

----------------------------------
TASK 11: FINAL OUTPUT
----------------------------------
Provide:

1. Updated main.py (clean)
2. New modules (auth, upload, background)
3. Updated upload logic (real)
4. JWT implementation
5. Background worker logic
6. Security improvements
7. requirements.txt
8. Step-by-step run instructions

----------------------------------
FINAL RULE:
----------------------------------
This must be a REAL production system — not demo code.

No fake implementations.
Everything must actually work.
```

### Prompt 96
```txt
You are a senior production-level full-stack engineer, backend architect, security expert, and DevOps engineer.

I already have a FULLY WORKING FastAPI + frontend AI application.
Your job is NOT to rebuild it.

Your job is to:
→ VERIFY
→ HARDEN
→ OPTIMIZE
→ SCALE
→ PERFECT

Convert it into a TRUE ENTERPRISE-GRADE SYSTEM (10/10).

----------------------------------
🚨 STRICT RULES (VERY IMPORTANT)
----------------------------------
- DO NOT break working features
- DO NOT remove UI functionality
- DO NOT change business logic
- DO NOT rewrite everything
- ONLY improve, secure, and optimize
- Maintain backward compatibility
- Keep code clean and modular

----------------------------------
🎯 FINAL GOAL
----------------------------------
Make the system:
✔ Fully real (no mock/simulated logic)
✔ Secure (production safe)
✔ Scalable (multi-user ready)
✔ Stable (no crashes)
✔ Performant
✔ Deployable on real infrastructure

----------------------------------
🔍 STEP 1: DEEP VERIFICATION
----------------------------------
- Re-check full frontend ↔ backend integration
- Ensure:
  • Templates render correctly
  • Static files load correctly
  • No broken routes
  • No console errors
- Confirm ALL endpoints match frontend expectations

----------------------------------
📂 STEP 2: REAL FILE PROCESSING (CRITICAL)
----------------------------------
Remove ANY fake logic and ensure REAL processing:

- TXT → keep working
- PDF → use PyMuPDF (fitz) for real extraction
- Images → use pytesseract OCR

Add:
- File size limit (5MB)
- MIME validation (NOT just extension)
- Safe file handling (no memory overflow)
- Proper error responses

----------------------------------
⚙️ STEP 3: BACKGROUND SYSTEM (REAL)
----------------------------------
Fix Auto Mode completely:

- Must run as real background task
- Use asyncio (preferred) or Celery
- Ensure:
  • Non-blocking execution
  • Accurate next_run / last_run
  • Safe stop mechanism
  • Multi-user support

----------------------------------
🔐 STEP 4: AUTHENTICATION SYSTEM
----------------------------------
Replace any single-user logic:

- Implement JWT authentication
- Add:
  • /signup
  • /login
- Use:
  • bcrypt password hashing
  • token-based protected routes
- Ensure frontend sends token correctly

----------------------------------
🗄️ STEP 5: DATABASE HARDENING
----------------------------------
- Ensure safe DB operations
- Add:
  • error handling
  • connection safety
  • fallback handling
- Prevent crashes if DB fails

----------------------------------
🛡️ STEP 6: SECURITY HARDENING
----------------------------------
Implement:

1. Strict Pydantic validation
2. File upload protection:
   - size limit
   - block dangerous files
3. Rate limiting (basic)
4. CORS restriction (no *)
5. Prevent API abuse

----------------------------------
📡 STEP 7: API STANDARDIZATION
----------------------------------
ALL responses must follow:

{
  "success": true/false,
  "data": {},
  "error": ""
}

Use proper status codes:
- 200 → success
- 400 → bad request
- 401 → unauthorized
- 500 → server error

----------------------------------
🚨 STEP 8: ERROR HANDLING
----------------------------------
- Add global exception handler
- Remove raw error leaks
- Return clean messages only
- Log internal errors safely

----------------------------------
⚡ STEP 9: PERFORMANCE OPTIMIZATION
----------------------------------
- Ensure ALL heavy tasks use:
  asyncio.to_thread()

- Prevent blocking FastAPI event loop
- Optimize repeated operations

----------------------------------
🏗️ STEP 10: CLEAN ARCHITECTURE
----------------------------------
Ensure structure like:

/project
 ├── main.py
 ├── routes/
 ├── services/
 ├── models/
 ├── utils/
 ├── templates/
 ├── static/

- No messy code
- Clear separation of concerns

----------------------------------
🚀 STEP 11: DEPLOYMENT READY
----------------------------------
Ensure:
- Works with:
  uvicorn main:app --workers 4

- Compatible with:
  • Render
  • Railway
  • Docker

Add:
- clean requirements.txt
- .env support (API keys, JWT secret)
- production start command

----------------------------------
📊 STEP 12: FINAL QA + REPORT
----------------------------------
After fixing:

Provide:

1. What improved
2. What risks were removed
3. Performance improvements
4. Security improvements
5. Final rating out of 10

----------------------------------
🔥 FINAL REQUIREMENT
----------------------------------
This must be:
→ REAL production system
→ NO fake implementations
→ NO shortcuts
→ NO broken features

Think like:
✔ Startup CTO
✔ Production engineer
✔ Security auditor
✔ QA tester

Deliver perfection.
```

### Prompt 97
```txt
You have already upgraded this system to near production level.

Now perform FINAL ENTERPRISE HARDENING.

Do NOT change existing logic. Only improve.

----------------------------------
FINAL CRITICAL IMPROVEMENTS
----------------------------------

1. FRONTEND SECURITY
- Implement token interceptor
- Handle token expiry (auto logout)
- Prevent token leaks

2. DATABASE UPGRADE
- Replace SQLite with PostgreSQL-ready config
- Add connection pooling

3. ADVANCED RATE LIMITING
- Add Redis-based rate limiter
- Per-user + per-IP limits

4. LOGGING SYSTEM
- Add structured logging (loguru or logging)
- Log all errors, requests, and background jobs

5. MONITORING
- Add request timing middleware
- Track slow endpoints
- Track error rates

6. FILE PROCESSING SAFETY
- Add timeout for OCR/PDF
- Prevent memory spikes
- Validate content strictly

7. CACHING
- Add Redis cache for repeated requests
- Cache expensive operations

8. DEPLOYMENT HARDENING
- Add Gunicorn config:
  workers = 4
  timeout = 120
- Add graceful shutdown
- Add retry logic

----------------------------------
FINAL TASK
----------------------------------
After implementing:

Give FINAL REPORT:
- What was added
- What risks are now eliminated
- Load handling capability
- Final production readiness

Target:
TRUE 10/10 ENTERPRISE SYSTEM
```

### Prompt 98
```txt
You are a senior production-level backend engineer, DevOps expert, and performance optimization specialist.

I already have a FULLY WORKING FastAPI + frontend AI project.

Your job is NOT to rebuild it.

Your job is to:
→ FIX all issues
→ OPTIMIZE for LOW RESOURCE SERVER
→ REMOVE crash risks
→ MAKE IT 100% STABLE on Render Free Plan (0.5 CPU, 512MB RAM)

----------------------------------
🚨 STRICT RULES
----------------------------------
- DO NOT break working features
- DO NOT change business logic
- DO NOT remove UI functionality
- ONLY optimize, simplify, and stabilize
- Keep backward compatibility
- Ensure ZERO runtime errors

----------------------------------
🎯 FINAL TARGET
----------------------------------
Make this system:
✔ Lightweight (works in 512MB RAM)
✔ Fast startup (after Render sleep)
✔ No crashes
✔ Safe file handling
✔ Clean production code
✔ Fully deployable

----------------------------------
🧠 STEP 1: MEMORY & CPU OPTIMIZATION
----------------------------------
- Limit thread usage:
  OMP_NUM_THREADS=1
  OPENBLAS_NUM_THREADS=1
  MKL_NUM_THREADS=1

- Ensure no hidden CPU overload
- Prevent memory spikes

----------------------------------
📂 STEP 2: FILE PROCESSING (SAFE MODE)
----------------------------------
- Keep ONLY:
  ✔ TXT
  ✔ Small PDF

- REMOVE:
  ❌ OCR (pytesseract)
  ❌ image processing
  ❌ large file parsing

- Add:
  - MAX_FILE_SIZE = 1MB
  - MIME type validation (NOT just extension)
  - Proper error handling

----------------------------------
⚙️ STEP 3: AI CALL SAFETY
----------------------------------
- Wrap ALL AI calls using:

  asyncio.wait_for(timeout=8)

- Use asyncio.to_thread() for blocking calls
- Prevent hanging requests

----------------------------------
🔁 STEP 4: REMOVE HEAVY BACKGROUND SYSTEM
----------------------------------
- REMOVE:
  ❌ infinite loops
  ❌ auto agents
  ❌ continuous background workers

- Keep ONLY:
  ✔ manual triggers

----------------------------------
🗄️ STEP 5: DATABASE OPTIMIZATION
----------------------------------
- Use SQLite (lightweight)
- Ensure safe connections
- Prevent locking issues

----------------------------------
🛡️ STEP 6: LIGHTWEIGHT RATE LIMITER
----------------------------------
- Implement simple in-memory limiter
- Limit: 20 requests per minute per IP
- NO Redis (too heavy)

----------------------------------
📦 STEP 7: REMOVE HEAVY DEPENDENCIES
----------------------------------
Remove:
- pytesseract
- redis
- celery

Keep dependencies minimal

----------------------------------
⚡ STEP 8: FAST STARTUP CONFIG
----------------------------------
- Use:
  uvicorn main:app --host 0.0.0.0 --port 10000

- DO NOT use multiple workers
- Ensure fast boot after sleep

----------------------------------
⏱️ STEP 9: HEALTH CHECK
----------------------------------
Add:

/ping endpoint

Return:
{ "status": "awake" }

----------------------------------
🛑 STEP 10: GLOBAL ERROR HANDLING
----------------------------------
- Catch ALL exceptions
- Return clean JSON:

{
  "success": false,
  "data": {},
  "error": "Server overloaded"
}

- Prevent crashes

----------------------------------
📊 STEP 11: PERFORMANCE SAFETY
----------------------------------
- Add timeout to heavy operations
- Avoid memory-heavy loops
- Avoid large in-memory data

----------------------------------
🚀 STEP 12: FINAL VALIDATION
----------------------------------
- Ensure:
  ✔ No crashes
  ✔ No blocking calls
  ✔ All routes working
  ✔ Frontend loads correctly
  ✔ File upload safe
  ✔ AI response stable

----------------------------------
📦 FINAL OUTPUT REQUIRED
----------------------------------
1. Updated safe code snippets
2. Clean requirements.txt
3. Final deployment command
4. List of removed heavy features
5. Final system rating

----------------------------------
🔥 FINAL RULE
----------------------------------
This must be a PERFECT Render Free version:
→ Stable
→ Lightweight
→ Error-free
→ Production clean

Think like:
✔ Performance engineer
✔ Low-resource optimization expert
✔ Production DevOps engineer

Deliver the BEST possible optimized system.
```

### Prompt 99
```txt
You are a senior backend + AI engineer.

I have a FastAPI-based AI web application project. The server is running, but I am getting this response in browser:

{"success": false, "data": {}, "error": "Server overloaded or unexpected error occurred."}

This means the backend is catching an exception and hiding the real error.

I want you to do a FULL DEEP DEBUG + FIX.

------------------------
YOUR TASK (VERY IMPORTANT)
------------------------

1. Analyze the ENTIRE project structure carefully:
   - main.py
   - routes/*
   - services/*
   - models/*
   - utils/*
   - templates/index.html
   - static files
   - .env
   - requirements.txt

2. Find ALL places where errors are being hidden like:
   try:
       ...
   except Exception:
       return {"success": False, ...}

👉 Replace them with proper debugging:
   except Exception as e:
       print("ERROR:", str(e))
       raise e

3. Fix environment variable usage:
   - Ensure dotenv is loaded:
       from dotenv import load_dotenv
       load_dotenv()

   - Ensure correct usage:
       os.getenv("MISTRAL_API_KEY")

   - Ensure API key is actually used in AI service

4. Fix AI integration (VERY IMPORTANT):
   - Check if using Mistral / OpenAI / any LLM
   - Validate:
       - API key is passed correctly
       - Model name is valid
       - Request format is correct
   - Add proper error logging for API failures

5. Add FULL LOGGING:
   - Print every step:
       - Request received
       - API call started
       - API response received
       - Error if failed

6. Fix file upload system:
   - Ensure all file types mentioned in UI are actually supported
   - Add validation + error handling

7. Optimize for LOW MEMORY (Render free plan):
   - Avoid loading large models locally
   - Use API instead of local inference
   - Limit file size
   - Avoid storing large objects in memory

8. Fix routes:
   - Ensure all endpoints return proper JSON
   - No silent failures
   - Proper status codes

9. Fix frontend-backend connection:
   - Ensure index.html calls correct API endpoints
   - Ensure correct URL paths

10. Add production-level improvements:
   - Proper error responses
   - Input validation
   - Clean structure
   - No crashes

------------------------
EXPECTED OUTPUT
------------------------

You must:

1. Show EXACT FIXED CODE (file by file if needed)
2. Clearly explain what was wrong
3. Ensure app runs without errors
4. Ensure API works properly
5. Ensure no "Server overloaded" fake error remains

------------------------
IMPORTANT RULES
------------------------

- DO NOT change project structure unnecessarily
- DO NOT remove features
- ONLY fix and improve
- Make it production-ready
- Ensure it works on:
    uvicorn main:app --reload

------------------------

Goal:
Make this project 100% working, error-free, and deployable on Render (512MB RAM).
```

### Prompt 100
```txt
You are a senior backend engineer, FastAPI expert, and AI systems architect.

I have a FastAPI-based AI web application. The backend server runs, but the frontend (Jinja2 template) is crashing with this error:

TypeError: cannot use 'tuple' as a dict key (unhashable type: 'dict')

This occurs when rendering:
templates.TemplateResponse("index.html", {"request": request, "launch_mode": True})

Your job is to perform a COMPLETE DEEP DEBUG AND FIX across the entire project.

--------------------------------------------------
🔥 PROJECT CONTEXT
--------------------------------------------------
- Backend: FastAPI
- Frontend: Jinja2 (templates/index.html)
- AI: Mistral API (external, no local model)
- Deployment target: Render (Free Plan)
    - 0.5 CPU
    - 512MB RAM
    - Sleep on inactivity

--------------------------------------------------
🔥 CRITICAL ERROR TO FIX
--------------------------------------------------
Frontend crash:
TypeError: cannot use 'tuple' as a dict key

This means:
👉 index.html contains invalid Jinja syntax
👉 Possibly using dict/tuple incorrectly inside {{ }}

--------------------------------------------------
🔥 YOUR TASKS (STRICT)
--------------------------------------------------

1. FULL PROJECT ANALYSIS
- Read all files:
    - main.py
    - templates/index.html
    - routes/*
    - services/*
    - utils/*
    - models/*
    - static/*
    - .env
    - requirements.txt

--------------------------------------------------

2. FIX JINJA TEMPLATE (VERY IMPORTANT)
- Find ALL invalid syntax like:
    {{ {...} }}
    {{ a, b }}
    {{ (something) }}
    nested dicts inside {{ }}

- Replace with correct usage:
    {{ variable }}
    {{ variable | tojson }}

- Ensure TemplateResponse works properly

--------------------------------------------------

3. FIX FRONTEND-BACKEND CONNECTION
- Ensure API endpoints used in JS are correct
- Fix fetch URLs if needed
- Ensure no broken paths

--------------------------------------------------

4. REMOVE SILENT ERRORS
Replace everywhere:
    except Exception:
        return {"success": False}

WITH:
    except Exception as e:
        import traceback
        print("ERROR:", str(e))
        traceback.print_exc()
        raise e

--------------------------------------------------

5. FIX ENV VARIABLES
- Add:
    from dotenv import load_dotenv
    load_dotenv()

- Ensure:
    os.getenv("MISTRAL_API_KEY")

- Validate key exists

--------------------------------------------------

6. FIX AI API CALL
- Validate:
    - URL = https://api.mistral.ai/v1/chat/completions
    - Correct headers
    - Correct JSON body

- Add logging:
    print("Calling AI...")
    print("Response:", response.text)

--------------------------------------------------

7. OPTIMIZE FOR RENDER (VERY IMPORTANT)
- No heavy memory usage
- No local models
- Limit file uploads (<=1MB)
- Avoid large objects in memory

--------------------------------------------------

8. FIX TEMPLATE LOADING
Ensure in main.py:
    templates = Jinja2Templates(directory="templates")

--------------------------------------------------

9. ADD DEBUG LOGGING
At every critical step:
- Request received
- AI call started
- AI response received
- Errors

--------------------------------------------------

10. ENSURE APP WORKS WITH:
    uvicorn main:app --reload

--------------------------------------------------

🔥 EXPECTED OUTPUT (MANDATORY)
--------------------------------------------------

You MUST provide:

1. FULL FIXED CODE (file by file if needed)
2. EXACT issue explanation
3. FIXED index.html
4. CONFIRM frontend loads successfully
5. CONFIRM API works
6. NO crashes
7. READY FOR RENDER DEPLOYMENT

--------------------------------------------------

⚠️ RULES
--------------------------------------------------
- DO NOT remove features
- DO NOT change structure unnecessarily
- ONLY fix and improve
- Keep it production-level
- Make it 100% working

--------------------------------------------------

GOAL:
Make this project fully working, error-free, frontend loading, backend stable, and deployable on Render free plan.
```

### Prompt 101
```txt
You are a senior FastAPI backend engineer and production debugging expert.

I have a FastAPI + Jinja2 web application. The backend is running, but the frontend crashes with this error:

starlette.routing.NoMatchFound: No route exists for name "logout"

--------------------------------------------------
🔥 CURRENT ISSUE
--------------------------------------------------

In templates/index.html:

<a href="{{ url_for('logout') }}">Logout</a>

But FastAPI does NOT have any route with:
name="logout"

So Jinja2 fails while rendering TemplateResponse and crashes the app.

--------------------------------------------------
🔥 YOUR TASK (STRICT)
--------------------------------------------------

1. FULL PROJECT ANALYSIS
- Read all files:
  - main.py
  - routes/*
  - templates/index.html
  - services/*
  - utils/*
  - models/*
  - static/*
  - .env
  - requirements.txt

--------------------------------------------------

2. FIX ROUTING ISSUE (CRITICAL)

You MUST do ONE of the following correctly:

OPTION A (Preferred):
- Create a proper logout route in routes/auth.py:

    @router.get("/logout", name="logout")

- Ensure router is included in main.py

OPTION B:
- Replace all {{ url_for('logout') }} with safe paths like:
    href="/logout"

--------------------------------------------------

3. FIX ALL url_for ERRORS

- Scan entire index.html
- Find ALL url_for(...) usage
- Ensure every route exists in backend
- If not, either:
    - create route
    OR
    - replace with static path

--------------------------------------------------

4. FIX TEMPLATE RENDERING

Ensure in main.py:

return templates.TemplateResponse(
    request=request,
    name="index.html",
    context={"launch_mode": True}
)

--------------------------------------------------

5. REMOVE SILENT FAILURES

Replace everywhere:

except Exception:
    return {"success": False}

WITH:

except Exception as e:
    import traceback
    print("ERROR:", str(e))
    traceback.print_exc()
    raise e

--------------------------------------------------

6. ADD DEBUG LOGGING

- Print:
    - Request received
    - Route hit
    - Template rendering start
    - Errors

--------------------------------------------------

7. ENSURE FRONTEND LOADS

- No Jinja crashes
- No missing routes
- No 500 error on "/"

--------------------------------------------------

8. RENDER OPTIMIZATION

- Keep lightweight
- No heavy memory usage
- No blocking calls
- Safe for 512MB RAM

--------------------------------------------------

🔥 EXPECTED OUTPUT
--------------------------------------------------

You MUST provide:

1. Fixed index.html (full file)
2. Fixed routes/auth.py (if needed)
3. Fixed main.py (if needed)
4. List of all broken url_for fixed
5. Explanation of issue
6. Confirmation that frontend loads successfully
7. No runtime crashes

--------------------------------------------------

⚠️ RULES
--------------------------------------------------

- DO NOT remove features
- DO NOT change structure unnecessarily
- ONLY fix and improve
- Keep production-level quality

--------------------------------------------------

GOAL:
Make the frontend render without errors, fix all routing issues, and make the project fully working and deployable on Render.
```

### Prompt 102
```txt
You are a senior FastAPI backend engineer, production debugger, and AI system architect.

I have a FastAPI + Jinja2 + Mistral AI project.

The backend server runs successfully, but the frontend and APIs are STILL NOT WORKING correctly.

I already fixed:
- TemplateResponse signature issue
- logout route issue
- server starts without crash

BUT runtime errors still exist.

--------------------------------------------------
🔥 YOUR TASK: FULL PROJECT DEBUG (NO SHORTCUTS)
--------------------------------------------------

You MUST deeply analyze ENTIRE project:

- main.py
- templates/index.html
- routes/*
- services/*
- utils/*
- models/*
- static/*
- .env
- requirements.txt

--------------------------------------------------
🔥 STEP 1 — FIND CURRENT ERROR (CRITICAL)
--------------------------------------------------

Read terminal logs carefully.

Find EXACT runtime error causing failure.

Examples:
- API not responding
- frontend buttons not working
- fetch failing
- wrong endpoint
- missing env
- JSON parsing error

PRINT:
- Exact error
- File
- Line number
- Root cause

--------------------------------------------------
🔥 STEP 2 — FIX FRONTEND NOT WORKING
--------------------------------------------------

Check index.html:

1. Verify ALL buttons:
   - What happens on click?
   - Which API endpoint is called?

2. Fix broken fetch calls:

BAD:
fetch("/generate")

GOOD:
fetch("/api/generate-post")

3. Ensure:
- method correct (POST/GET)
- headers correct
- body JSON correct

--------------------------------------------------
🔥 STEP 3 — FIX API ROUTES
--------------------------------------------------

Check all routes:

- Are routers included in main.py?
- Are prefixes correct?

Example fix:
app.include_router(post_router, prefix="/api")

Ensure frontend matches:
fetch("/api/generate-post")

--------------------------------------------------
🔥 STEP 4 — DEBUG AI CALL (VERY IMPORTANT)
--------------------------------------------------

Inside post_generator.py:

Add logs:

print("=== AI CALL START ===")
print("API KEY:", API_KEY)

Fix:

- Missing API key
- Wrong endpoint
- Bad JSON structure

Ensure:

url = "https://api.mistral.ai/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

timeout=10 added

--------------------------------------------------
🔥 STEP 5 — FIX ENV VARIABLES
--------------------------------------------------

Ensure:

from dotenv import load_dotenv
load_dotenv()

API_KEY = os.getenv("MISTRAL_API_KEY")

If missing → THROW ERROR (do not ignore)

--------------------------------------------------
🔥 STEP 6 — REMOVE ALL SILENT FAILURES
--------------------------------------------------

Replace everywhere:

except Exception:
    return {"success": False}

WITH:

except Exception as e:
    import traceback
    print("ERROR:", str(e))
    traceback.print_exc()
    raise e

--------------------------------------------------
🔥 STEP 7 — FIX STATIC + FRONTEND LOAD
--------------------------------------------------

Ensure:

app.mount("/static", StaticFiles(directory="static"), name="static")

Check:
- CSS loads?
- JS loads?
- Console errors in browser?

--------------------------------------------------
🔥 STEP 8 — TEST FULL USER FLOW
--------------------------------------------------

Simulate:

1. Open "/"
2. Page loads
3. Click button
4. API called
5. Response received
6. Output shown

Explain each step clearly.

--------------------------------------------------
🔥 STEP 9 — RENDER OPTIMIZATION
--------------------------------------------------

Ensure:

- No heavy processing
- No large file uploads (>1MB)
- No blocking loops
- Low RAM usage

--------------------------------------------------
🔥 STEP 10 — FINAL OUTPUT (MANDATORY)
--------------------------------------------------

You MUST provide:

1. Exact current error
2. Root cause
3. Fixed code (file by file)
4. Fixed frontend (index.html)
5. Fixed API routes
6. Verified working flow
7. Confirmation: NO errors
8. Ready for Render deployment

--------------------------------------------------
⚠️ RULES
--------------------------------------------------

- DO NOT skip analysis
- DO NOT guess
- DO NOT remove features
- ONLY fix real problems
- Keep production-level code

--------------------------------------------------
🎯 GOAL

Make project:
✔ Fully working
✔ Frontend interactive
✔ API working
✔ No errors
✔ Deployable on Render (512MB RAM)
```

### Prompt 103
```txt
You are a senior FastAPI + frontend debugging expert.

The project backend is running, but frontend + API still not working.

You must do FULL ROOT CAUSE DEBUG — NOT assumptions.

--------------------------------------------------
🔥 STEP 1 — TRACE FULL REQUEST FLOW
--------------------------------------------------

Track this exact flow:

Browser → JS fetch → API route → Service → Response → UI update

For EVERY button in index.html:

1. Identify:
   - Button
   - JS function
   - API endpoint called

2. Verify:
   - URL is correct
   - Matches backend route exactly

--------------------------------------------------
🔥 STEP 2 — FIX FRONTEND FETCH (CRITICAL)
--------------------------------------------------

Find ALL fetch calls.

Replace wrong ones:

❌ fetch("/generate")
❌ fetch("/upload")

WITH correct:

✅ fetch("/api/generate-post")
✅ fetch("/api/upload")
✅ fetch("/api/history")
✅ fetch("/api/user_data")

Ensure:

fetch("/api/generate-post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        category: selectedCategory,
        series_topic: topic
    })
})

--------------------------------------------------
🔥 STEP 3 — ADD FRONTEND DEBUG LOGS
--------------------------------------------------

Inside script.js:

Before fetch:
console.log("Calling API...");

After response:
console.log("Response:", data);

Catch error:
console.error("Frontend Error:", err);

--------------------------------------------------
🔥 STEP 4 — VERIFY BACKEND ROUTES
--------------------------------------------------

In main.py:

app.include_router(posts.router, prefix="/api")

In routes/posts.py:

@router.post("/generate-post")

Final URL MUST be:
👉 /api/generate-post

--------------------------------------------------
🔥 STEP 5 — DEBUG BACKEND EXECUTION
--------------------------------------------------

Inside generate route:

print("=== GENERATE API HIT ===")
print("Request:", req)

Before AI call:
print("Calling AI service...")

After response:
print("AI Response:", result)

--------------------------------------------------
🔥 STEP 6 — FIX AI FAILURE
--------------------------------------------------

In post_generator.py:

1. Ensure:
API_KEY = os.getenv("MISTRAL_API_KEY")

2. Add:
if not API_KEY:
    raise Exception("API KEY MISSING")

3. Fix request:

response = requests.post(
    url,
    json=data,
    headers=headers,
    timeout=10
)

4. Log full response:
print("RAW RESPONSE:", response.text)

--------------------------------------------------
🔥 STEP 7 — HANDLE RESPONSE CORRECTLY
--------------------------------------------------

Frontend must:

const res = await fetch(...)
const data = await res.json()

if (!data.success) {
    alert(data.error)
}

--------------------------------------------------
🔥 STEP 8 — FIX UI UPDATE
--------------------------------------------------

Ensure result is shown:

document.getElementById("output").innerText = data.data

--------------------------------------------------
🔥 STEP 9 — CHECK BROWSER CONSOLE (MANDATORY)
--------------------------------------------------

Fix ANY error like:
- Failed to fetch
- 404
- CORS
- JSON parse error

--------------------------------------------------
🔥 STEP 10 — FINAL TEST FLOW
--------------------------------------------------

Simulate:

1. Open homepage
2. Open DevTools (F12)
3. Click Generate
4. Observe:
   - Network tab → request sent?
   - Status 200 or error?
   - Response JSON?

--------------------------------------------------
🔥 OUTPUT REQUIRED
--------------------------------------------------

You MUST return:

1. Exact bug found
2. File + line causing it
3. Fixed code (only changed parts)
4. Working fetch code
5. Working route code
6. Confirm end-to-end working

--------------------------------------------------
🎯 GOAL

Make:
✔ Button click → API call
✔ API → AI call
✔ AI → response
✔ Response → UI

NO silent failure
NO 404
NO blank UI
```

### Prompt 104
```txt
You are a senior FastAPI backend engineer and authentication expert.

My FastAPI project is running, but ALL API requests are failing with:

401 Unauthorized
Frontend shows: "Session expired. Please log in again."

--------------------------------------------------
🔥 ROOT PROBLEM
--------------------------------------------------

Backend routes are using:

Depends(get_current_user)

But frontend is NOT sending any Authorization token.

So every request like:
- /api/history
- /api/user_data
- /api/auto/status
- /api/generate-post

is failing with 401 Unauthorized.

--------------------------------------------------
🔥 YOUR TASK (VERY IMPORTANT)
--------------------------------------------------

You must FIX this completely.

You have TWO responsibilities:

--------------------------------------------------
✅ STEP 1 — TEMPORARILY DISABLE AUTH (FOR TESTING)
--------------------------------------------------

Remove authentication dependency from ALL routes.

Find code like:

async def route(..., current_user: int = Depends(get_current_user)):

REPLACE WITH:

async def route(...):

Do this for ALL routes:
- generate-post
- history
- user_data
- auto/status
- upload
- reply
- feedback

This should completely REMOVE 401 errors.

--------------------------------------------------
✅ STEP 2 — KEEP CODE CLEAN (DO NOT BREAK STRUCTURE)
--------------------------------------------------

- DO NOT remove get_current_user function
- DO NOT delete auth files
- ONLY remove Depends() usage

--------------------------------------------------
✅ STEP 3 — VERIFY ROUTES WORK
--------------------------------------------------

After fix:

- /api/history → should return 200
- /api/user_data → should return 200
- /api/generate-post → should work

--------------------------------------------------
✅ STEP 4 — ADD DEBUG LOGGING
--------------------------------------------------

Inside each route add:

print("API HIT:", request.url.path)

--------------------------------------------------
✅ STEP 5 — ENSURE FRONTEND WORKS
--------------------------------------------------

Frontend should:
- No longer show "Session expired"
- Successfully call APIs
- Display responses

--------------------------------------------------
🔥 OPTIONAL (ADVANCED - DO NOT BREAK CURRENT FIX)
--------------------------------------------------

After fixing, ADD comments in code explaining:

# To enable auth again:
# add Depends(get_current_user)

--------------------------------------------------
🔥 OUTPUT REQUIRED
--------------------------------------------------

You MUST provide:

1. List of all files changed
2. Exact lines removed
3. Final corrected route code
4. Confirmation: NO 401 errors
5. Confirmation: frontend works

--------------------------------------------------
🎯 GOAL

Make project:
✔ No 401 errors
✔ No session expired popup
✔ APIs working
✔ Frontend fully functional

DO NOT skip steps.
DO NOT assume.
DO NOT break existing code.
```

### Prompt 105
```txt
You are a senior FastAPI + frontend performance + API rate-limit expert.

My project is an AI web app using FastAPI + JS frontend.
Currently facing CRITICAL issue:

❌ Too many API calls
❌ Rate limit exceeded (Mistral API)
❌ Multiple calls on single click
❌ No cooldown / retry logic
❌ Auto-agent may be triggering repeated calls

--------------------------------------------------
🎯 GOAL (VERY STRICT)
--------------------------------------------------

✔ ONE BUTTON CLICK → ONLY ONE API CALL
✔ NO duplicate requests
✔ NO background spam calls
✔ ADD cooldown + retry system
✔ PREVENT rate limit permanently
✔ MAKE SYSTEM PRODUCTION SAFE

--------------------------------------------------
🔥 STEP 1 — FIX FRONTEND (MOST IMPORTANT)
--------------------------------------------------

In `static/script.js`:

1. Prevent multiple clicks:

LET isGenerating = false;

async function generatePost() {

    if (isGenerating) {
        console.log("Blocked duplicate click");
        return;
    }

    isGenerating = true;

    const btn = document.getElementById("generateBtn");
    btn.disabled = true;

    try {
        console.log("Calling API ONCE...");

        const res = await fetch("/api/generate-post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                category: selectedCategory,
                series_topic: topic
            })
        });

        const data = await res.json();

        console.log("Response:", data);

        if (!data.success) {
            alert(data.error);
            return;
        }

        document.getElementById("output").innerText = data.data;

    } catch (err) {
        console.error("Frontend Error:", err);
    } finally {
        isGenerating = false;
        btn.disabled = false;
    }
}

--------------------------------------------------
🔥 STEP 2 — ADD GLOBAL API LOCK (VERY IMPORTANT)
--------------------------------------------------

Ensure NO other function calls `/api/generate-post`.

Search entire project:
❌ remove duplicate calls
❌ remove auto-trigger logic
❌ remove polling

Only manual button click should call API.

--------------------------------------------------
🔥 STEP 3 — FIX BACKEND RATE LIMIT PROTECTION
--------------------------------------------------

In `post_generator.py`:

ADD:

import time

last_call_time = 0

def generate_post(prompt):
    global last_call_time

    current_time = time.time()

    if current_time - last_call_time < 5:
        print("BLOCKED: Too many requests")
        return {
            "success": False,
            "error": "Please wait 5 seconds before next request."
        }

    last_call_time = current_time

--------------------------------------------------
🔥 STEP 4 — HANDLE 429 ERROR PROPERLY
--------------------------------------------------

AFTER API CALL:

if response.status_code == 429:
    print("RATE LIMIT HIT")

    return {
        "success": False,
        "error": "Rate limit exceeded. Wait 15 seconds."
    }

--------------------------------------------------
🔥 STEP 5 — ADD RETRY WITH DELAY (SMART FIX)
--------------------------------------------------

Replace API call with:

for attempt in range(2):
    response = requests.post(url, json=data, headers=headers, timeout=10)

    if response.status_code == 200:
        break

    if response.status_code == 429:
        print("Retrying after delay...")
        time.sleep(5)
    else:
        break

--------------------------------------------------
🔥 STEP 6 — DISABLE AUTO AGENT CALL SPAM
--------------------------------------------------

In auto mode routes:

Ensure:
❌ No loop calling API repeatedly
❌ No background scheduler calling generate-post

If exists:
LIMIT IT:

if already_running:
    return

--------------------------------------------------
🔥 STEP 7 — ADD LOGGING (MANDATORY)
--------------------------------------------------

Print logs:

print("API CALLED ONCE")
print("User triggered request")
print("Time:", time.time())

--------------------------------------------------
🔥 STEP 8 — FINAL VALIDATION
--------------------------------------------------

Ensure:

✔ Clicking button once → 1 request in Network tab
✔ No duplicate requests
✔ No auto calls
✔ No rate limit error
✔ UI updates correctly

--------------------------------------------------
🔥 OUTPUT REQUIRED
--------------------------------------------------

1. Show ALL places where duplicate calls were happening
2. Show FIXED frontend code
3. Show FIXED backend code
4. Confirm:
   ✔ Only one API call per click
   ✔ Rate limit fixed
   ✔ No spam calls
   ✔ System stable

--------------------------------------------------
🎯 FINAL GOAL
--------------------------------------------------

MAKE SYSTEM:

✔ STABLE
✔ RATE-LIMIT SAFE
✔ SINGLE-CALL PER CLICK
✔ PRODUCTION READY
✔ NO EXTRA API COST

DO NOT SKIP ANY STEP.
DO NOT ASSUME.
DO FULL ROOT FIX.
```

### Prompt 106
```txt
You are a senior FastAPI + frontend + system reliability engineer.

The project already has partial fixes, but still risks:
- Duplicate API calls
- Hidden background calls
- Rate limit errors (429)
- Multiple triggers from frontend + auto-agent

You must now do a FINAL HARDENING of the system.

--------------------------------------------------
🎯 FINAL GOAL (STRICT)
--------------------------------------------------

✔ ONE button click → EXACTLY ONE API call
✔ ZERO duplicate requests
✔ ZERO background spam
✔ FULL rate-limit protection
✔ SYSTEM MUST BE BULLETPROOF

--------------------------------------------------
🔥 STEP 1 — FIND ROOT DUPLICATE CALL SOURCES
--------------------------------------------------

Search ENTIRE project for:

- fetch("/api/generate-post")
- apiCall("/api/generate-post")
- auto triggers
- polling loops
- setInterval / setTimeout

👉 List ALL places calling the API

Ensure ONLY ONE place exists:
✔ triggerGeneration() / generatePost()

--------------------------------------------------
🔥 STEP 2 — FIX FRONTEND HARD LOCK (CRITICAL)
--------------------------------------------------

In `static/script.js`:

ADD GLOBAL LOCK:

let isGenerating = false;

UPDATE function:

async function generatePost() {

    if (isGenerating) {
        console.log("❌ Duplicate click blocked");
        return;
    }

    isGenerating = true;

    const btn = document.getElementById("generateBtn");
    btn.disabled = true;

    try {
        console.log("✅ API CALL STARTED (ONLY ONCE)");

        const res = await fetch("/api/generate-post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                category: selectedCategory,
                series_topic: topic
            })
        });

        const data = await res.json();

        console.log("API RESPONSE:", data);

        if (!data.success) {
            alert(data.error);
            return;
        }

        document.getElementById("output").innerText = data.data;

    } catch (err) {
        console.error("Frontend Error:", err);
    } finally {
        isGenerating = false;
        btn.disabled = false;
    }
}

--------------------------------------------------
🔥 STEP 3 — REMOVE AUTO SPAM (VERY IMPORTANT)
--------------------------------------------------

Find this bug (VERY CRITICAL):

if (data.active || true)

👉 REMOVE `|| true`

Correct:

if (data.active)

Also:

❌ Remove unnecessary polling
❌ Remove auto-trigger on page load
❌ Remove repeated history reload loops

--------------------------------------------------
🔥 STEP 4 — BACKEND GLOBAL RATE LIMIT LOCK
--------------------------------------------------

In `post_generator.py`:

ADD:

import time

last_call_time = 0

def generate_post(prompt):
    global last_call_time

    now = time.time()

    if now - last_call_time < 5:
        print("❌ BLOCKED: Too fast request")
        return {
            "success": False,
            "error": "Please wait 5 seconds before next request."
        }

    last_call_time = now

    print("✅ API CALLED ONCE")

--------------------------------------------------
🔥 STEP 5 — ADD SMART RETRY FOR 429
--------------------------------------------------

Replace API call:

response = None

for attempt in range(2):

    response = requests.post(url, json=data, headers=headers, timeout=10)

    if response.status_code == 200:
        break

    if response.status_code == 429:
        print("⚠️ RATE LIMIT HIT → RETRYING...")
        time.sleep(5)
    else:
        break

if response.status_code == 429:
    return {
        "success": False,
        "error": "Rate limit exceeded. Try again later."
    }

--------------------------------------------------
🔥 STEP 6 — PREVENT AUTO AGENT SPAM
--------------------------------------------------

In auto-agent routes:

Ensure:

if already_running:
    return {"status": "already running"}

NO loops calling generate_post repeatedly.

--------------------------------------------------
🔥 STEP 7 — ADD STRICT LOGGING
--------------------------------------------------

Add logs everywhere:

print("API HIT:", request.url.path)
print("REQUEST TIME:", time.time())

--------------------------------------------------
🔥 STEP 8 — FINAL VALIDATION (MANDATORY)
--------------------------------------------------

Test manually:

1. Open DevTools → Network tab
2. Click Generate button ONCE

✔ Only ONE request should appear
✔ No duplicate requests
✔ No repeated calls
✔ Response comes correctly
✔ UI updates correctly

--------------------------------------------------
🔥 OUTPUT REQUIRED
--------------------------------------------------

You MUST provide:

1. All duplicate call locations found
2. Exact lines removed
3. Final cleaned frontend code
4. Final backend code
5. Confirmation:

   ✔ 1 click = 1 API call
   ✔ No background calls
   ✔ No rate limit errors
   ✔ System stable

--------------------------------------------------
🎯 FINAL RESULT
--------------------------------------------------

SYSTEM MUST BE:

✔ STABLE
✔ COST SAFE
✔ RATE-LIMIT SAFE
✔ PRODUCTION READY
✔ ZERO DUPLICATE CALLS

DO NOT SKIP ANY STEP.
DO FULL HARDENING.
```

### Prompt 107
```txt
You are a frontend UX engineer.

IMPORTANT:
DO NOT change backend logic
DO NOT change API calls
DO NOT change rate limiting
ONLY improve how error message is displayed

--------------------------------------------------
🎯 GOAL
--------------------------------------------------

Current message:
"Rate limit exceeded. Please try again later."

This looks like an ERROR.

Convert it into a FRIENDLY STATUS message.

--------------------------------------------------
🔥 STEP 1 — INTERCEPT MESSAGE
--------------------------------------------------

In static/script.js

Find:

if (!data.success) {
    alert(data.error);
}

--------------------------------------------------
🔥 STEP 2 — REPLACE MESSAGE TEXT ONLY
--------------------------------------------------

Update to:

if (!data.success) {

    let msg = data.error || "Something went wrong";

    if (msg.includes("Rate limit")) {
        msg = "⏳ Please wait a few seconds before generating again";
    }

    showToast(msg);
    return;
}

--------------------------------------------------
🔥 STEP 3 — REMOVE ALERT (IMPORTANT)
--------------------------------------------------

Replace ALL alert() usage with showToast()

--------------------------------------------------
🔥 STEP 4 — ADD CLEAN TOAST UI
--------------------------------------------------

Add this function:

function showToast(message) {
    let toast = document.createElement("div");

    toast.innerText = message;
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#1e293b";
    toast.style.color = "#fff";
    toast.style.padding = "10px 16px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    toast.style.zIndex = "9999";
    toast.style.fontSize = "14px";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

--------------------------------------------------
🎯 FINAL RESULT
--------------------------------------------------

❌ Old:
Alert popup → "Rate limit exceeded"

✅ New:
Small toast → "⏳ Please wait a few seconds..."

✔ No scary error
✔ Clean UI
✔ Professional feel
✔ Backend unchanged

DO NOT MODIFY ANY OTHER LOGIC
```

### Prompt 108
```txt
You are a senior DevOps + FastAPI deployment engineer.

I have a working FastAPI project with frontend (HTML, CSS, JS) and backend (main.py).
It runs perfectly locally.

Your task is to PREPARE this project for deployment on Render (production-ready).

--------------------------------------------------
🎯 GOAL
--------------------------------------------------

✔ Deploy FastAPI app on Render successfully  
✔ Serve frontend + backend correctly  
✔ No runtime errors  
✔ Public URL works  
✔ Static + templates load correctly  

--------------------------------------------------
🔥 STEP 1 — VERIFY PROJECT STRUCTURE
--------------------------------------------------

Ensure project follows this structure:

- main.py
- requirements.txt
- static/
- templates/
- ai_tech_creator/ (backend modules)

Fix imports if needed.

--------------------------------------------------
🔥 STEP 2 — FIX FASTAPI ENTRYPOINT
--------------------------------------------------

In main.py ensure:

from fastapi import FastAPI
app = FastAPI()

Also ensure:

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=10000)

--------------------------------------------------
🔥 STEP 3 — SERVE STATIC + TEMPLATES
--------------------------------------------------

Add if missing:

from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

--------------------------------------------------
🔥 STEP 4 — FIX PORT FOR RENDER
--------------------------------------------------

IMPORTANT:

Replace any hardcoded port with:

import os
PORT = int(os.environ.get("PORT", 10000))

Use in uvicorn:

uvicorn main:app --host 0.0.0.0 --port PORT

--------------------------------------------------
🔥 STEP 5 — CREATE requirements.txt
--------------------------------------------------

Ensure file contains:

fastapi
uvicorn
jinja2
requests
python-dotenv

Add any missing dependencies automatically.

--------------------------------------------------
🔥 STEP 6 — CREATE render.yaml (MANDATORY)
--------------------------------------------------

Create file:

services:
  - type: web
    name: ai-tech-creator
    env: python
    plan: free
    buildCommand: "pip install -r requirements.txt"
    startCommand: "uvicorn main:app --host 0.0.0.0 --port 10000"

--------------------------------------------------
🔥 STEP 7 — ENV VARIABLES SUPPORT
--------------------------------------------------

If project uses API keys:

Load using:

import os
API_KEY = os.getenv("MISTRAL_API_KEY")

DO NOT hardcode keys.

--------------------------------------------------
🔥 STEP 8 — FIX COMMON DEPLOYMENT ERRORS
--------------------------------------------------

Ensure:

✔ No localhost URLs inside code  
✔ No absolute Windows paths  
✔ No missing imports  
✔ No blocking infinite loops  
✔ No auto background triggers  

--------------------------------------------------
🔥 STEP 9 — FINAL VALIDATION
--------------------------------------------------

Ensure:

✔ uvicorn main:app runs without error  
✔ Homepage loads  
✔ /api routes work  
✔ static files load  
✔ templates render  

--------------------------------------------------
🔥 OUTPUT REQUIRED
--------------------------------------------------

1. Final corrected main.py
2. Final requirements.txt
3. render.yaml file
4. List of all fixes applied
5. Confirmation: READY FOR RENDER DEPLOYMENT

--------------------------------------------------
🎯 FINAL RESULT
--------------------------------------------------

Project becomes:

✔ Deployable on Render  
✔ Public URL accessible  
✔ Backend + frontend working  
✔ No configuration errors  
✔ Production-ready  

DO NOT BREAK EXISTING LOGIC
ONLY PREPARE FOR DEPLOYMENT
```

### Prompt 109
```txt
Create a PREMIUM, production-grade frontend for my project "AI Tech Creator".

This should NOT look like a basic or student project.
It must look like a high-end SaaS product (similar to ChatGPT, Notion, Vercel, or Linear).

Tech Stack:
- React (Vite)
- Tailwind CSS
- Framer Motion (for animations)
- Axios (API calls)
- Lucide Icons

Design Requirements (VERY IMPORTANT):
- Ultra-modern UI with clean spacing and typography
- Glassmorphism + subtle gradients
- Smooth animations and transitions
- Dark mode by default (with toggle)
- Use professional font (Inter / Satoshi)
- Premium color palette (no random colors)
- Proper shadows, blur effects, hover states
- Fully responsive (mobile + desktop)

Layout:
1. Sticky Navbar
   - Logo: "AI Tech Creator"
   - Dark mode toggle
   - Minimal clean design

2. Hero Section
   - Big bold heading:
     "Build AI Apps Faster with AI Tech Creator"
   - Subheading
   - Call-to-action button with gradient

3. Main App Section (Core Feature)
   - ChatGPT-like interface
   - Left side: input panel
   - Right side: output panel
   - Or center chat UI (better)

4. Input Area:
   - Modern textarea with rounded edges
   - Send button with icon
   - Keyboard support (Enter to send)

5. Output Area:
   - Response shown in beautiful cards
   - Code blocks styled (dark theme)
   - Copy button
   - Loading animation (skeleton or spinner)

6. Features:
   - Call backend API:
     https://ai-tech-creator-1.onrender.com
   - Endpoint: POST /generate
   - Show loading state
   - Show error message if API fails

7. Components:
   - Navbar.jsx
   - ChatBox.jsx
   - MessageBubble.jsx
   - Loader.jsx
   - Footer.jsx

8. Animations:
   - Use Framer Motion for:
     - Page load fade-in
     - Message appearance
     - Button hover effects

9. Footer:
   - Minimal
   - "Built by Sumit Patel"

10. Extra Premium Touch:
   - Subtle background gradient or grid
   - Blur/glass cards
   - Smooth scroll
   - Micro-interactions

Project Structure:
- Proper folder structure
- Clean reusable components
- Maintainable code

Deployment:
- Must run with:
  npm install
  npm run dev
- Must be optimized for Vercel deployment

Output Required:
1. Full project code
2. File structure
3. Setup instructions
4. Vercel deployment steps

IMPORTANT:
- Do NOT generate a basic UI
- Do NOT use plain HTML styling
- It must look like a startup-level product
```

### Prompt 110
```txt
Upgrade my existing "AI Tech Creator" frontend into a COMPLETE, PREMIUM, PRODUCTION-READY AI SaaS application.

This should feel like a real startup product (ChatGPT / Vercel / Notion level).
DO NOT create a basic UI.

----------------------------------
TECH STACK:
- React (Vite)
- Tailwind CSS
- Framer Motion
- Axios
- Lucide Icons

----------------------------------
CORE GOAL:
Build a ChatGPT-like AI interface connected to my backend:
https://ai-tech-creator-1.onrender.com

----------------------------------
FEATURES TO IMPLEMENT:

1. CHATGPT-STYLE UI:
- Centered chat interface
- Messages (user + AI) styled differently
- Smooth animations when messages appear
- Auto scroll to latest message
- Typing effect for AI response

2. INPUT SYSTEM:
- Sticky bottom input bar (like ChatGPT)
- Rounded textarea with icon button
- Enter to send (Shift+Enter for new line)
- Disabled state while loading

3. API INTEGRATION:
- Endpoint: POST /generate
- Base URL: https://ai-tech-creator-1.onrender.com
- Use Axios
- Handle loading, success, and error states properly

4. PREMIUM UI DESIGN:
- Dark mode default + toggle
- Glassmorphism cards (blur + transparency)
- Gradient buttons (purple/blue modern palette)
- Smooth hover effects
- Clean typography (Inter font)
- Perfect spacing (like real SaaS)

5. ANIMATIONS (VERY IMPORTANT):
- Page load animation
- Message fade-in (Framer Motion)
- Button hover animation
- Typing indicator (dots animation)

6. COMPONENT STRUCTURE:
- Navbar.jsx
- ChatLayout.jsx
- MessageBubble.jsx
- InputBar.jsx
- Loader.jsx
- ThemeToggle.jsx
- Footer.jsx

7. NAVBAR:
- Logo: AI Tech Creator
- Minimal + sticky
- Theme toggle button

8. FOOTER:
- Minimal
- “Built by Sumit Patel”

9. BACKGROUND DESIGN:
- Subtle gradient or grid
- Slight blur overlay
- Premium feel (NOT plain white/black)

10. EXTRA FEATURES (IMPORTANT):
- Copy button for AI response
- Code block formatting
- Markdown rendering support
- Error toast notifications
- Loading skeleton (not basic spinner)

----------------------------------
PROJECT STRUCTURE:
- Clean folder structure
- Reusable components
- Maintainable code

----------------------------------
DEPLOYMENT:
- Must run:
  npm install
  npm run dev
- Must be optimized for Vercel deployment

----------------------------------
OUTPUT REQUIRED:
1. Full project code
2. Folder structure
3. Setup instructions
4. Vercel deployment steps

----------------------------------
STRICT RULES:
- Do NOT generate basic UI
- Do NOT use plain HTML styling
- UI must feel like a real SaaS product
- Focus on UX and polish
```

### Prompt 111
```txt
Use a single textarea input for the chat interface.

Map the input as follows:
- category: "general" (default value)
- series_topic: user input text

Do NOT create multiple input fields.
Keep the ChatGPT-style single input UX.

Ensure API request format:
{
  "category": "general",
  "series_topic": userMessage
}
```

### Prompt 112
```txt
Fix all frontend-backend integration errors in my project "AI Tech Creator".

Current issue:
- Axios request is failing with 404 error
- Endpoint used: /generate
- Backend is deployed at: https://ai-tech-creator-1.onrender.com
- Frontend is running on localhost:5173

Goals:
1. Automatically detect correct backend endpoint from FastAPI routes
2. Fix incorrect API URL in frontend
3. Ensure Axios is correctly configured
4. Ensure request body format is correct:
   {
     "category": "general",
     "series_topic": userMessage
   }

5. Add proper error handling:
   - Show error message in UI if request fails
   - Log detailed error in console

6. Add debugging logs:
   - Log API URL before request
   - Log request payload
   - Log response data

7. Handle CORS issues:
   - Ensure backend FastAPI has CORSMiddleware enabled
   - Allow frontend origin (localhost + Vercel)

8. Validate backend:
   - Check if endpoint exists
   - If not, update frontend to correct endpoint

9. Improve API service file:
   - Create a centralized api.js file
   - Use axios instance with baseURL:
     https://ai-tech-creator-1.onrender.com

10. Add fallback UI:
   - If API fails → show "Server not reachable"
   - If empty response → show "No response generated"

11. Ensure compatibility:
   - Works locally (localhost)
   - Works after Vercel deployment

Output:
- Fixed frontend API code
- Correct endpoint usage
- Updated api.js file
- Example request + response flow
- Any required backend fixes

IMPORTANT:
- Do NOT assume endpoint is /generate
- Detect actual endpoint from backend
- Fix everything end-to-end
```

### Prompt 113
```txt
Fix the CORS issue in my FastAPI backend deployed on Render.

Current problem:
- Frontend (localhost:5173) cannot call backend
- Error: "No 'Access-Control-Allow-Origin' header is present"
- Endpoint: https://ai-tech-creator-1.onrender.com/api/generate-post
- Browser blocks request due to CORS

Goals:
1. Add and configure CORSMiddleware properly in FastAPI
2. Allow requests from:
   - http://localhost:5173
   - https://*.vercel.app (for deployment)
3. Ensure POST, GET, OPTIONS methods are allowed
4. Allow all headers
5. Ensure preflight (OPTIONS) requests work correctly

Implementation requirements:
- Import CORSMiddleware from fastapi.middleware.cors
- Add middleware right after FastAPI() initialization
- Use clean, production-ready configuration

6. Validate backend:
   - Ensure endpoint /api/generate-post exists
   - Ensure it accepts JSON body:
     {
       "category": "general",
       "series_topic": string
     }

7. Add debugging:
   - Log incoming request data
   - Log when endpoint is hit

8. Temporary testing mode:
   - Option to allow all origins ("*") for quick debugging
   - Then switch back to restricted origins

9. Ensure compatibility:
   - Works on Render deployment
   - Works locally
   - Works with Vercel frontend

Output:
- Updated main.py (full working code)
- Correct CORS middleware block
- Example request test using curl or Postman
- Any fixes required in route definitions

IMPORTANT:
- Do not skip middleware placement
- Do not assume CORS is already configured
- Fix it fully so browser requests succeed without errors
```

### Prompt 114
```txt
Fix my FastAPI backend CORS issue completely and ensure deployment works on Render.

Current issue:
- Frontend: http://localhost:5173
- Backend: https://ai-tech-creator-1.onrender.com
- Error: No 'Access-Control-Allow-Origin' header present
- Browser blocks API request

Important:
Even after adding CORS, error still exists → means deployment or middleware placement is wrong.

Tasks:

1. Fix CORS properly in FastAPI:

- Import:
  from fastapi.middleware.cors import CORSMiddleware

- Ensure middleware is added immediately after:
  app = FastAPI()

- Use this EXACT config:

  app.add_middleware(
      CORSMiddleware,
      allow_origins=[
          "http://localhost:5173",
          "http://127.0.0.1:5173",
          "https://*.vercel.app"
      ],
      allow_credentials=True,
      allow_methods=["*"],
      allow_headers=["*"],
  )

2. Ensure middleware runs BEFORE any routes

3. Verify endpoint exists:
   @app.post("/api/generate-post")

4. Add debug logs:
   print("API HIT")

5. Fix deployment issues:
   - Ensure file is named correctly (main.py or app.py)
   - Ensure Render start command is correct:
     uvicorn main:app --host 0.0.0.0 --port 10000

6. Force redeploy:
   - Make a dummy change
   - Commit and push again

7. Add fallback test:
   Add temporary config:
   allow_origins=["*"]

8. Test using curl:

   curl -X POST https://ai-tech-creator-1.onrender.com/api/generate-post \
   -H "Content-Type: application/json" \
   -d '{"category":"general","series_topic":"test"}'

9. Ensure response headers include:
   Access-Control-Allow-Origin

10. If still failing:
   - Check if another file overrides app instance
   - Ensure no duplicate FastAPI() instances

Output:
- Final working main.py
- Correct deployment config
- Verified working API
```

### Prompt 115
```txt
Create a PREMIUM ChatGPT-style frontend for an AI SaaS app called "AI Tech Creator".

Requirements:

UI Design:
- Dark mode SaaS design (black + purple + gradient)
- Glassmorphism UI (blur, transparency, soft shadows)
- Modern typography (Inter or Poppins)
- Smooth animations (fade, typing effect, hover glow)
- Fully responsive (mobile + desktop)

Layout:
- Center chat interface like ChatGPT
- Sidebar with app name "AI Tech Creator"
- Single textarea input at bottom (like ChatGPT)
- Messages displayed in chat bubbles (user right, AI left)

Functionality:
- Single textarea input ONLY (no multiple inputs)
- On submit, send POST request to:
  https://ai-tech-creator.onrender.com/api/generate

Payload format:
{
  "category": "general",
  "series_topic": user input text
}

- Show loading animation while waiting
- Show AI response with typing effect
- Handle errors gracefully

Tech:
- React + Tailwind CSS
- Clean component structure
- Use fetch API
- Use environment variable for API URL

Extras:
- Add glowing send button
- Add subtle gradient background animation
- Add smooth scroll for chat
- Add copy response button

Make it look like a professional SaaS (NOT basic HTML).
```

### Prompt 116
```txt
Fix the FULL frontend-backend integration issues in my AI SaaS app (AI Tech Creator).

Current Problems:
1. CORS error:
   "No 'Access-Control-Allow-Origin' header is present"
2. API request failing from frontend (localhost:5173)
3. Wrong endpoint being used: /api/generate-post instead of /api/generate
4. Network error: Server not reachable

Backend:
- FastAPI deployed on Render
- Base URL: https://ai-tech-creator.onrender.com

Frontend:
- React + Vite
- Using environment variable: VITE_API_BASE_URL

-------------------------------------

REQUIREMENTS:

🔥 1. FIX BACKEND CORS (FastAPI)
- Add proper CORSMiddleware configuration
- Allow these origins:
  - http://localhost:5173
  - http://127.0.0.1:5173
  - production frontend (vercel domain placeholder)
- Use:
  allow_credentials = True
- DO NOT use wildcard "*" with credentials
- Ensure middleware is applied immediately after FastAPI() initialization

-------------------------------------

🔥 2. FIX API ROUTE USAGE
- Ensure correct endpoint is used:
  /api/generate (NOT /api/generate-post)
- Update frontend API calls accordingly

-------------------------------------

🔥 3. FIX FRONTEND API SERVICE (api.js)
- Use environment variable:
  const API_URL = import.meta.env.VITE_API_BASE_URL
- Use fetch (NOT axios)
- Proper POST request format:

{
  "category": "general",
  "series_topic": user input
}

- Add:
  - error handling
  - console logging for debugging
  - response validation

-------------------------------------

🔥 4. ADD PROPER ERROR HANDLING UI
- Show:
  - "Server not reachable"
  - "Something went wrong"
- Handle:
  - network errors
  - API errors
  - empty responses

-------------------------------------

🔥 5. ADD LOADING STATE
- Show typing loader (AI thinking...)
- Disable input while request is in progress

-------------------------------------

🔥 6. ENSURE CLEAN ARCHITECTURE
- Separate:
  - api.js (API logic)
  - ChatLayout.jsx (UI)
- Keep code modular and scalable

-------------------------------------

🔥 7. FINAL GOAL
- No CORS errors
- API request works from localhost
- Response shows in chat UI
- Clean, production-ready frontend

-------------------------------------

Return:
- Updated main.py (CORS fixed)
- Updated api.js
- Updated ChatLayout.jsx (API integration fixed)
- Clear explanation of changes
```

### Prompt 117
```txt
Fix the FINAL API integration bug in my AI SaaS app (AI Tech Creator).

Current Issue:
- Frontend is still calling the wrong endpoint:
  /api/generate-post ❌
- Correct endpoint should be:
  /api/generate ✅

Because of this:
- API requests are failing
- Showing CORS / Network error
- Backend is working but frontend is not connecting properly

-------------------------------------

REQUIREMENTS:

🔥 1. FIX FRONTEND API CALL
- Locate ALL occurrences of:
  /api/generate-post
- Replace with:
  /api/generate

- Update inside:
  src/lib/api.js
  and anywhere else used

-------------------------------------

🔥 2. VERIFY BACKEND ROUTE
- Ensure FastAPI route is defined as:

@router.post("/generate")

- Confirm it is included with prefix:
  /api

So final endpoint becomes:
https://ai-tech-creator.onrender.com/api/generate

-------------------------------------

🔥 3. ADD DEBUG LOGGING
- Log API URL before request
- Log payload sent
- Log response received
- Log errors clearly

Example:
console.log("[API REQUEST]", API_URL + "/api/generate");

-------------------------------------

🔥 4. ENSURE CLEAN FETCH IMPLEMENTATION

Use:

const res = await fetch(`${API_URL}/api/generate`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    category: "general",
    series_topic: userMessage
  })
});

-------------------------------------

🔥 5. HANDLE RESPONSE SAFELY
- If response not OK → throw error
- If JSON missing → show fallback message

-------------------------------------

🔥 6. FINAL RESULT
- No API errors
- No CORS issues
- Correct endpoint usage
- Response appears in chat UI

-------------------------------------

Return:
- Updated api.js
- Updated backend route if needed
- List of all changes made
```

### Prompt 118
```txt
Fix the backend routing issue in my FastAPI project (AI Tech Creator).

CURRENT PROBLEM:
- API endpoint https://ai-tech-creator.onrender.com/api/generate returns:
  404 Not Found
- Frontend is correctly calling /api/generate
- CORS is already fixed
- Backend is deployed on Render

ROOT CAUSE:
- The route is not properly registered or missing /api prefix

-------------------------------------

REQUIREMENTS:

🔥 1. VERIFY ROUTE FILE (routes/posts.py)

- Ensure APIRouter is used correctly
- Ensure endpoint is defined exactly as:

@router.post("/generate")

- Ensure function returns valid JSON response

-------------------------------------

🔥 2. FIX MAIN.PY (CRITICAL)

- Import router properly:
  from routes.posts import router as posts_router

- Ensure router is included EXACTLY like this:

app.include_router(posts_router, prefix="/api")

- This must be present, otherwise /api/generate will not exist

-------------------------------------

🔥 3. ENSURE APP STRUCTURE IS CLEAN

Project structure should be:

backend/
│── main.py
│── routes/
│   └── posts.py

-------------------------------------

🔥 4. ADD DEBUG ROUTE

Add this temporary route in main.py to verify backend is working:

@app.get("/")
def root():
    return {"message": "Backend is running"}

-------------------------------------

🔥 5. VERIFY FINAL ENDPOINT

After fix, endpoint must be:

https://ai-tech-creator.onrender.com/api/generate

-------------------------------------

🔥 6. EXPECTED RESULT

- Opening /api/generate in browser → "Method Not Allowed"
- No 404 error
- Frontend successfully receives response

-------------------------------------

RETURN:

- Full updated main.py
- Full updated routes/posts.py
- List of changes made
```

### Prompt 119
```txt
Fix and finalize my full-stack AI SaaS app (AI Tech Creator) so that frontend and backend integration works perfectly in production.

CURRENT ISSUES:
- CORS error: "No Access-Control-Allow-Origin header"
- API sometimes fails from localhost:5173
- Previously had 404 route issue (now fixed)
- Backend deployed on Render
- Frontend React + Vite

-------------------------------------

🔥 GOAL:
- No CORS errors
- API works from localhost and production
- Clean architecture
- Production-ready system
- Push final working code to GitHub

-------------------------------------

🔥 1. FIX BACKEND (FastAPI)

Update main.py with CORRECT order:

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.posts import router as posts_router

app = FastAPI()

# ✅ MUST be immediately after FastAPI()
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://ai-tech-creator-1.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Include router properly
app.include_router(posts_router, prefix="/api")

# ✅ Debug route
@app.get("/")
def root():
    return {"message": "Backend is running"}

-------------------------------------

🔥 2. FIX ROUTE FILE (routes/posts.py)

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class GenerateRequest(BaseModel):
    category: str
    series_topic: str

@router.post("/generate")
async def generate_post(data: GenerateRequest):
    return {
        "success": True,
        "message": f"Generated content for: {data.series_topic}",
        "category": data.category
    }

-------------------------------------

🔥 3. FIX FRONTEND API (src/lib/api.js)

- Use fetch (NOT axios)
- Use environment variable

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const generatePost = async (userMessage) => {
  try {
    console.log("[API REQUEST]", API_URL + "/api/generate");

    const res = await fetch(`${API_URL}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category: "general",
        series_topic: userMessage
      })
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    console.log("[API RESPONSE]", data);

    return data;
  } catch (error) {
    console.error("[API ERROR]", error);
    throw new Error("Server not reachable or CORS issue");
  }
};

-------------------------------------

🔥 4. FRONTEND UI FIX (ChatLayout.jsx)

- Add loading state
- Disable input while loading
- Show error messages
- Show response in chat

-------------------------------------

🔥 5. ENV FILE

Ensure:

VITE_API_BASE_URL=https://ai-tech-creator.onrender.com

-------------------------------------

🔥 6. FORCE CLEAN DEPLOY ON RENDER

IMPORTANT:
- Use "Clear build cache & Deploy"
- NOT normal deploy

-------------------------------------

🔥 7. VERIFY

Backend:
- / → returns {"message": "Backend is running"}
- /api/generate → Method Not Allowed

Frontend:
- API works
- No CORS error
- Response appears in UI

-------------------------------------

🔥 8. PUSH FINAL CODE TO GITHUB

Run:

git add .
git commit -m "final fix: cors + api integration working"
git push

-------------------------------------

🔥 FINAL RESULT:

- No CORS error
- No 404 error
- API works perfectly
- Production ready SaaS app

-------------------------------------

RETURN:

- Final updated main.py
- Final updated posts.py
- Final api.js
- Final ChatLayout.jsx changes
- Confirmation everything works
```

### Prompt 120
```txt
Fix and finalize my frontend chat system in my full-stack AI SaaS app (AI Tech Creator). The backend API is already working correctly and returning JSON like:

{
  "success": true,
  "message": "Generated content for: <user input>",
  "category": "general"
}

-------------------------------------

🔥 CURRENT ISSUE:
- API is working (confirmed in console)
- But UI is NOT displaying response
- It only shows "Generated successfully..." (hardcoded)
- Need to display real API response dynamically

-------------------------------------

🔥 GOAL:
- Show actual response from backend in chat UI
- Proper chat message structure (user + assistant)
- Clean UX like ChatGPT
- Handle loading + errors
- Production-ready frontend

-------------------------------------

🔥 TASKS TO DO:

1. FIX ChatLayout.jsx

- Implement proper state:
  - messages (array)
  - input (string)
  - loading (boolean)

- Replace existing send handler with:

const handleSend = async () => {
  if (!input.trim()) return;

  const userMsg = {
    role: "user",
    content: input
  };

  setMessages((prev) => [...prev, userMsg]);
  setInput("");
  setLoading(true);

  try {
    const res = await generatePost(input);

    const botMsg = {
      role: "assistant",
      content: res.message
    };

    setMessages((prev) => [...prev, botMsg]);

  } catch (error) {
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "❌ Error: Server not reachable" }
    ]);
  } finally {
    setLoading(false);
  }
};

-------------------------------------

2. FIX MESSAGE RENDERING

Replace message UI with:

{messages.map((msg, index) => (
  <div key={index} className={msg.role === "user" ? "user-msg" : "bot-msg"}>
    {msg.content}
  </div>
))}

-------------------------------------

3. REMOVE HARDCODED TEXT

- Delete:
  "Generated successfully..."
- Ensure ONLY API response is shown

-------------------------------------

4. ADD LOADING STATE UI

- Disable input while loading
- Show:
  "Thinking..." or spinner

-------------------------------------

5. OPTIONAL IMPROVEMENT

Replace response text:

res.message.replace("Generated content for:", "🤖 AI:")

-------------------------------------

6. VERIFY

- Send message → should display:
  "🤖 AI: tell me about ai agent"
- No console errors
- Works smoothly

-------------------------------------

7. FINAL STEP — PUSH TO GITHUB

Run:

git add .
git commit -m "fix: frontend chat UI + dynamic API response working"
git push

-------------------------------------

🔥 FINAL RESULT:

- Chat UI shows real AI response
- No fake/static text
- Smooth UX
- Fully working SaaS frontend

-------------------------------------

Return:
- Updated ChatLayout.jsx
- Confirm UI is working
- Confirm GitHub push completed
```

### Prompt 121
```txt
Deploy my frontend (React + Vite) for my full-stack AI SaaS app "AI Tech Creator" on Vercel with correct production configuration.

-------------------------------------

🔥 PROJECT STRUCTURE:

My project may have this structure:

ai-tech-creator/
├── backend/ (FastAPI on Render)
└── frontend/ (React + Vite app)

IMPORTANT:
- Only deploy the frontend
- Backend is already deployed on Render:
  https://ai-tech-creator.onrender.com

-------------------------------------

🔥 GOAL:

- Successfully deploy frontend on Vercel
- Correct root directory configuration
- Proper environment variable setup
- API calls working in production
- Auto-deploy enabled via GitHub

-------------------------------------

🔥 TASKS TO DO:

1. DETECT FRONTEND FOLDER

- Locate Vite app (must contain):
  - package.json
  - vite.config.js
  - index.html
  - src/

- If inside `/frontend`, use that as root

-------------------------------------

2. PREPARE FRONTEND FOR DEPLOYMENT

- Ensure package.json has:
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }

- Ensure no backend code is included

-------------------------------------

3. CONFIGURE API ENV VARIABLE

Create or verify `.env` file in frontend:

VITE_API_BASE_URL=https://ai-tech-creator.onrender.com

Ensure API calls use:
const API_URL = import.meta.env.VITE_API_BASE_URL;

-------------------------------------

4. PUSH CODE TO GITHUB

Run:

git add .
git commit -m "deploy: frontend ready for vercel"
git push

-------------------------------------

5. DEPLOY ON VERCEL

- Go to https://vercel.com
- Import GitHub repository

-------------------------------------

6. SET CORRECT BUILD SETTINGS

If frontend is inside subfolder:

Root Directory: frontend

Build settings:
- Framework: Vite
- Build Command: npm run build
- Output Directory: dist

-------------------------------------

7. ADD ENV VARIABLES IN VERCEL

Add:

Key: VITE_API_BASE_URL
Value: https://ai-tech-creator.onrender.com

-------------------------------------

8. DEPLOY PROJECT

- Click Deploy
- Wait for successful build

-------------------------------------

9. VERIFY DEPLOYMENT

- Open deployed URL
- Send API request from UI
- Check console:
  - API request hits Render backend
  - No CORS error
  - Response received

-------------------------------------

10. FIX COMMON ISSUES (AUTO HANDLE)

- If API fails → re-check env variable
- If blank page → fix build path
- If CORS error → backend issue (not frontend)
- If wrong folder deployed → correct root directory

-------------------------------------

🔥 FINAL RESULT:

- Frontend live on Vercel
- Connected to backend on Render
- API working in production
- Auto-deploy enabled on every git push

-------------------------------------

Return:

- Deployed Vercel URL
- Confirmation API is working
- Any fixes applied
```

### Prompt 122
```txt
Fix CORS issue in my FastAPI backend project.

Context:
- My frontend is deployed on Vercel at: https://ai-tech-creator.vercel.app
- My backend is deployed on Render
- Currently getting error: "blocked by CORS policy: No 'Access-Control-Allow-Origin' header"

Tasks:
1. Open main FastAPI backend file (main.py or backend/main.py).
2. Import CORSMiddleware:
   from fastapi.middleware.cors import CORSMiddleware

3. Add CORS middleware immediately after app = FastAPI():

   app.add_middleware(
       CORSMiddleware,
       allow_origins=[
           "https://ai-tech-creator.vercel.app",
           "http://localhost:5173"
       ],
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )

4. Ensure:
   - Middleware is added only once
   - No syntax errors
   - Proper indentation

5. Save the file.

6. Stage and commit changes:
   git add .
   git commit -m "fix: add CORS support for Vercel frontend"
   git push

7. If deployment config exists:
   - Ensure backend redeploy is triggered (Render)

Goal:
- Allow frontend (Vercel) to successfully call backend API
- Remove CORS error completely
- Ensure API endpoint /api/generate works from browser

Do not modify any business logic, only fix CORS configuration.
```

### Prompt 123
```txt
Fix frontend API response handling and display logic for my AI chat app.

Context:
- Frontend: React (Vite)
- Backend: FastAPI (working correctly now)
- API endpoint: /api/generate
- Issue: API returns data, but UI shows wrong/empty response
- Console shows: [API RESPONSE] Object

Goal:
- Properly extract and display AI response
- Handle multiple response formats safely
- Improve chat UX (no broken messages)

----------------------------------------

TASKS:

1. Locate API call in frontend
   (likely in App.jsx / chat.jsx / api.js)

   Find code like:
   const res = await fetch(...)
   const data = await res.json()

----------------------------------------

2. Add full debug logging:

   console.log("API FULL RESPONSE:", data)

----------------------------------------

3. Fix response extraction logic:

Replace any incorrect usage like:
   content: data

WITH robust handling:

   const aiText =
     data.response ||
     data.answer ||
     data.result ||
     data.message ||
     (typeof data === "string" ? data : JSON.stringify(data));

----------------------------------------

4. Update message state properly:

Replace:

   setMessages([...messages, { role: "ai", content: data }])

WITH:

   setMessages(prev => [
     ...prev,
     { role: "ai", content: aiText }
   ])

----------------------------------------

5. Add error handling (VERY IMPORTANT):

Wrap API call in try-catch:

   try {
     const res = await fetch(url, options)

     if (!res.ok) {
       throw new Error("API failed")
     }

     const data = await res.json()

     console.log("API FULL RESPONSE:", data)

     const aiText =
       data.response ||
       data.answer ||
       data.result ||
       data.message ||
       JSON.stringify(data)

     setMessages(prev => [
       ...prev,
       { role: "ai", content: aiText }
     ])

   } catch (error) {
     console.error("API ERROR:", error)

     setMessages(prev => [
       ...prev,
       {
         role: "ai",
         content: "❌ Error: Unable to get response from server"
       }
     ])
   }

----------------------------------------

6. Ensure:
- No direct mutation of state
- Always use functional setState
- No undefined content shown

----------------------------------------

7. Optional UX improvement:
Add loading state:

Before API call:
   setLoading(true)

After response:
   setLoading(false)

----------------------------------------

8. Save all files

----------------------------------------

9. Commit and push:

   git add .
   git commit -m "fix: proper API response handling and UI rendering"
   git push

----------------------------------------

IMPORTANT:
- Do NOT change backend
- Do NOT change API URL
- Only fix frontend response handling

----------------------------------------

EXPECTED RESULT:
- Chat displays actual AI response text
- No "Object" output
- No empty responses
- Stable UI with error handling
```

### Prompt 124
```txt
Fix frontend response extraction based on actual backend API structure.

Context:
- Backend response format:
  {
    "category": "general",
    "message": "Generated content for: ...",
    "success": true
  }

- Issue:
  Frontend is trying to read data.response which does not exist.
  Because of this, chat UI shows incorrect or empty output.

----------------------------------------

TASKS:

1. Locate API response handling in frontend (App.jsx / chat.jsx / api.js)

2. Find this incorrect code:

   data.response

----------------------------------------

3. Replace response extraction logic with correct field:

   const aiText =
     data.message ||   // ✅ MAIN FIX
     data.response ||
     data.answer ||
     data.result ||
     data.content ||
     (typeof data === "string" ? data : JSON.stringify(data));

----------------------------------------

4. Update message rendering:

Replace:

   content: data

OR

   content: data.response

WITH:

   content: aiText

----------------------------------------

5. Add debug logging:

   console.log("API FULL RESPONSE:", data)
   console.log("AI TEXT:", aiText)

----------------------------------------

6. Add safety check:

If (!data.success):
   show error message instead of response

Example:

   if (!data.success) {
     throw new Error("API returned failure")
   }

----------------------------------------

7. Ensure state update uses functional pattern:

   setMessages(prev => [
     ...prev,
     { role: "ai", content: aiText }
   ])

----------------------------------------

8. Save all files

----------------------------------------

9. Commit and push:

   git add .
   git commit -m "fix: correct API response mapping using message field"
   git push

----------------------------------------

EXPECTED RESULT:
- Chat displays actual generated content
- No "Object" issue
- No empty responses
- Stable UI
```

### Prompt 125
```txt
Upgrade my React (Vite) AI chat frontend to a premium, modern SaaS UI like ChatGPT or Perplexity.

Context:
- Existing app is working (API + chat)
- I want a premium, clean, futuristic UI
- Do NOT break existing functionality

----------------------------------------

TASKS:

1. Improve overall layout:

- Add full-screen gradient background:
  dark blue → purple → black
- Center chat area with max-width (700px–900px)
- Add smooth spacing and padding

----------------------------------------

2. Upgrade sidebar:

- Add modern sidebar with:
  - Logo / App name (AI Tech Creator)
  - "New Chat" button (rounded, glowing)
  - Chat history section (scrollable)
- Add hover effects and smooth transitions

----------------------------------------

3. Improve chat bubbles:

User message:
- Align right
- Blue gradient background
- Rounded corners (20px)
- Soft shadow

AI message:
- Align left
- Dark glass background (glassmorphism)
- Slight blur effect
- Border with low opacity

----------------------------------------

4. Add glassmorphism effect:

Use styles like:

backdrop-filter: blur(10px);
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.1);

----------------------------------------

5. Improve input box:

- Fixed at bottom
- Rounded pill shape
- Soft glow on focus
- Add send button icon (arrow)

----------------------------------------

6. Add typing indicator:

When loading:
Show:
"AI is thinking..." with animated dots

----------------------------------------

7. Add smooth animations:

- Fade-in for messages
- Slide-up effect
- Button hover animations

Use CSS transitions or framer-motion

----------------------------------------

8. Improve typography:

- Use font: Inter or Poppins
- Increase readability
- Proper spacing between lines

----------------------------------------

9. Add scrollbar styling:

- Thin scrollbar
- Smooth color

----------------------------------------

10. Make responsive:

- Mobile friendly
- Sidebar collapses on small screens

----------------------------------------

11. Clean code:

- Do not duplicate styles
- Use reusable components if possible

----------------------------------------

12. Keep API logic untouched

----------------------------------------

13. Install if needed:

npm install framer-motion

----------------------------------------

14. Commit changes:

git add .
git commit -m "feat: premium UI upgrade with modern chat design"
git push

----------------------------------------

EXPECTED RESULT:

- Premium UI like ChatGPT
- Smooth animations
- Clean modern look
- Better user experience
```

### Prompt 126
```txt
Build autonomous AI agent system in FastAPI.

Requirements:
- Create agent.py with:
  - init_agent
  - topic discovery
  - editorial filtering
  - memory (topics_seen)
  - post generation
- Create endpoints:
  POST /api/agent/init
  GET /api/agent/feed

- Ensure:
  - Posts generate over time (not all at once)
  - Each post has id, createdAt, text, rationale, sources
  - Memory prevents duplicate topics
  - Reverse chronological order

- Keep system lightweight (no DB required)
- Use in-memory storage

Commit and push all changes.
```

### Prompt 127
```txt
Convert frontend from chat UI to autonomous feed viewer.

Requirements:

1. Remove chat input UI
2. Add "Initialize Agent" button

3. When clicked:
   - Call POST /api/agent/init
   - Store agentId in state

4. After init:
   - Automatically poll:
     GET /api/agent/feed?agentId=...

   - Poll every 5 seconds

5. Display posts as feed cards:

Each post should show:
- Persona name
- Time (createdAt)
- Text (main content)
- Rationale (small text)
- Sources (clickable links)

6. Sort newest first

7. Add loading indicator:
   "Agent is thinking..."

8. UI Design:
- Premium dark theme
- Cards with glass effect
- Smooth animation when new post appears

9. Do NOT break backend

10. Commit and push:
git add .
git commit -m "feat: autonomous agent feed UI"
git push
```

### Prompt 128
```txt
Refactor React frontend into a production-ready Autonomous AI Feed Viewer.

STRICT REQUIREMENTS:

1. Remove ALL chat-related UI and logic completely.

2. Add main screen with:
   - Title: "Autonomous AI Creator"
   - Button: "Initialize Agent"

3. On button click:
   - Call POST /api/agent/init
   - Store agentId in React state
   - Disable button after click

4. After agentId is set:
   - Start polling GET /api/agent/feed?agentId=...
   - Poll every 5 seconds using setInterval
   - Cleanup interval on component unmount

5. Feed Logic:
   - Store posts in state
   - Prevent duplicates using post.id
   - Always sort by createdAt DESC (newest first)

6. Render UI:

For each post create a premium card:
- Persona name (top label)
- Time (formatted nicely)
- Main text (large)
- Rationale (smaller, subtle color)
- Sources as clickable links

7. Add loading state:
   - Before first post: show "Agent is thinking..."
   - While polling: subtle loader

8. UI DESIGN (IMPORTANT):
   - Dark gradient background (black → purple → blue)
   - Glassmorphism cards (blur + transparency)
   - Rounded corners (16px+)
   - Smooth fade/slide animation on new posts
   - Hover effects

9. State rules:
   - Use functional updates (setState(prev => ...))
   - Never mutate state directly

10. Error handling:
   - Show fallback UI if API fails
   - Do not crash app

11. Code quality:
   - Clean, modular components (Feed.jsx, PostCard.jsx)
   - Use useEffect properly
   - Avoid unnecessary re-renders

12. DO NOT MODIFY backend code.

13. After implementation:
   - Ensure UI works with real backend
   - Commit and push:

git add .
git commit -m "feat: production autonomous feed UI with polling and premium design"
git push
```

### Prompt 129
```txt
Fix frontend-backend connection issue (404 error) in my React + Vite + FastAPI project.

PROBLEM:
- Frontend deployed on Vercel
- Backend deployed on Render (separate URL)
- Current API calls use relative paths like:
  fetch("/api/agent/init")
- This causes 404 because Vercel tries to call its own domain

GOAL:
Make frontend correctly call external backend API using environment variables.

---

TASKS:

1. Create environment configuration:

Create `.env` file in frontend root:

VITE_API_URL=https://YOUR-BACKEND-URL.onrender.com

IMPORTANT:
- Replace YOUR-BACKEND-URL with actual backend URL
- Use VITE_ prefix (required by Vite)

---

2. Refactor ALL API calls:

Find all occurrences of:

fetch("/api/...")

Replace with:

const API = import.meta.env.VITE_API_URL;

fetch(`${API}/api/agent/init`, {...})

fetch(`${API}/api/agent/feed?agentId=${agentId}`)

---

3. Add robust error handling:

if (!res.ok) {
  throw new Error(`HTTP error! status: ${res.status}`);
}

console.log("API RESPONSE:", data);

---

4. Add fallback error UI:

If API fails:
- Show message:
  "❌ Failed to connect to backend. Check server."

---

5. Ensure NO hardcoded localhost URLs remain

Remove any:
- http://localhost:8000
- relative "/api"

---

6. Restart dev server after env changes:

npm run dev

---

7. Verify backend is accessible:

Open in browser:
https://YOUR-BACKEND-URL.onrender.com/docs

---

8. Fix backend CORS (VERY IMPORTANT):

In FastAPI backend, ensure:

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

---

9. Ensure endpoints exist:

POST /api/agent/init
GET /api/agent/feed

---

10. Deploy updated frontend:

git add .
git commit -m "fix: connect frontend to external backend using env variables"
git push

---

EXPECTED RESULT:

- No more 404 errors
- Initialize Agent works
- agentId returned correctly
- Feed polling works
- UI updates with posts

---

DO NOT:
- Change backend API structure
- Remove agentId logic
- Break existing UI
```

### Prompt 130
```txt
Fix FastAPI backend route mismatch causing 404 error.

Problem:
Frontend calls:
POST /api/agent/init

But backend returns 404.

Tasks:

1. Ensure endpoints exist EXACTLY as:

POST /api/agent/init
GET /api/agent/feed

2. If using APIRouter:
- Define routes as:
  /agent/init
  /agent/feed

- Then mount with:
  app.include_router(router, prefix="/api")

3. If not using router:
- Define directly with /api prefix

4. Verify in /docs:
Endpoints must show /api/agent/init

5. Commit and redeploy backend:

git add .
git commit -m "fix: align API routes with frontend (/api prefix)"
git push

Expected:
- No more 404
- Frontend connects successfully
```

### Prompt 131
```txt
Refactor frontend polling + feed update logic for production stability.

CONTEXT:
- React frontend (Vite)
- FastAPI backend working correctly
- Issues:
  1. Polling too frequent (API exhaustion)
  2. Feed not updating properly (duplicates / stale UI)

---

TASK 1: UPDATE POLLING INTERVAL

Locate polling logic (setInterval)

Replace:
setInterval(fetchFeed, 5000)

WITH:
setInterval(fetchFeed, 60000)

---

TASK 2: FIX FEED STATE UPDATE (CRITICAL)

Inside fetchFeed():

Replace any:
setPosts(data)

WITH:

setPosts(prev => {
  const existingIds = new Set(prev.map(p => p.id))

  const newPosts = data.filter(p => !existingIds.has(p.id))

  const merged = [...newPosts, ...prev]

  return merged.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )
})

---

TASK 3: FULL useEffect IMPLEMENTATION

useEffect(() => {
  if (!agentId) return

  const fetchFeed = async () => {
    try {
      const res = await fetch(`/api/agent/feed?agentId=${agentId}`)

      if (!res.ok) throw new Error("Fetch failed")

      const data = await res.json()

      console.log("FEED RESPONSE:", data)

      setPosts(prev => {
        const existingIds = new Set(prev.map(p => p.id))
        const newPosts = data.filter(p => !existingIds.has(p.id))

        const merged = [...newPosts, ...prev]

        return merged.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      })

    } catch (err) {
      console.error("FEED ERROR:", err)
    }
  }

  fetchFeed()

  const interval = setInterval(fetchFeed, 60000)

  return () => clearInterval(interval)
}, [agentId])

---

TASK 4: ENSURE CLEAN RENDER

posts.map(post => (
  <PostCard key={post.id} post={post} />
))

---

TASK 5: DO NOT

- Do NOT modify backend
- Do NOT mutate state
- Do NOT use push()

---

COMMIT:

git add .
git commit -m "fix: optimized polling + correct feed update logic"
git push
```

### Prompt 132
```txt
Create a high-quality, professional social media post for LinkedIn and Twitter about my project.

PROJECT DETAILS:
I built an "Autonomous AI Content Creator" — a full-stack AI system that automatically generates and publishes content based on trends.

FEATURES:
- AI-generated posts using trend analysis
- Autonomous agent that runs continuously
- Live updating feed UI
- Smart frontend polling (optimized to prevent API exhaustion)
- Duplicate-free real-time updates
- Clean, premium UI design

TECH STACK:
- Backend: FastAPI (Python)
- Frontend: React + Vite
- Deployment: Vercel (frontend) + Render (backend)

HIGHLIGHTS:
- Solved real-world issue of API overuse by optimizing polling (5s → 60s)
- Implemented efficient state management to avoid duplicate posts
- Built a scalable autonomous AI workflow
- Designed modern production-level UI

OUTPUT REQUIREMENTS:
1. Write a strong LinkedIn post (professional, slightly detailed, engaging)
2. Write a short Twitter (X) post (crisp, catchy, viral style)
3. Add relevant tech hashtags
4. Keep tone confident and builder-focused
5. Make it sound like a real project showcase (not generic AI text)

OPTIONAL:
- Add a hook in the first line to grab attention
- Mention learning outcomes and future improvements (LLM integration)

GOAL:
Make the post impressive enough to attract recruiters, developers, and AI enthusiasts.
```

### Prompt 133
```txt
Act as a senior full-stack engineer and fix, optimize, and upgrade my project for production-level quality.

PROJECT CONTEXT:
- Frontend: React (Vite)
- Backend: FastAPI (Python)
- Deployment: Vercel (frontend) + Render (backend)

GOAL:
Make the application production-ready, scalable, and stable with clean architecture and best practices.

---

TASKS:

1. FIX API ROUTES (CRITICAL)
- Ensure frontend and backend routes match exactly
- Endpoints must be:
  POST /api/agent/init
  GET /api/agent/feed
- If using APIRouter:
  define routes as:
    /agent/init
    /agent/feed
  and mount with:
    app.include_router(router, prefix="/api")
- Verify endpoints are visible in /docs

---

2. FIX FRONTEND POLLING (API OPTIMIZATION)
- Locate polling logic (setInterval)
- Replace aggressive polling (e.g., 5000ms)
  WITH:
    60000ms (1 minute)
- Ensure proper cleanup using clearInterval

---

3. FIX FEED STATE MANAGEMENT (NO DUPLICATES)
- Replace any direct state overwrite:
    setPosts(data)
- With safe update logic:

  setPosts(prev => {
    const existingIds = new Set(prev.map(p => p.id))
    const newPosts = data.filter(p => !existingIds.has(p.id))
    const merged = [...newPosts, ...prev]

    return merged.sort(
      (a, b) => new Date(b.createdAt * 1000) - new Date(a.createdAt * 1000)
    ).slice(0, 50)
  })

---

4. HANDLE TIMESTAMP FORMAT
- Backend uses UNIX timestamp (seconds)
- Convert properly in frontend:
  new Date(createdAt * 1000)

---

5. ENSURE CLEAN REACT RENDERING
- Use unique keys:
    <PostCard key={post.id} post={post} />
- Avoid state mutation (no push, no direct changes)

---

6. ERROR HANDLING + LOGGING
- Add try/catch in API calls
- Log meaningful errors in console
- Handle non-200 responses

---

7. PERFORMANCE & UX IMPROVEMENTS
- Prevent unnecessary re-renders
- Limit feed size (max 50 posts)
- Ensure smooth UI updates

---

8. DO NOT
- Do NOT modify backend logic unnecessarily
- Do NOT break existing working features
- Do NOT introduce unstable libraries

---

OUTPUT REQUIREMENTS:
- Provide updated, clean, production-ready code
- Maintain proper file structure
- Ensure no runtime errors
- Ensure compatibility with Vercel deployment

---

COMMIT:
git add .
git commit -m "fix: production-ready optimization (routes, polling, feed stability)"
git push
```

### Prompt 134
```txt
Act as a senior full-stack engineer and fix my frontend issue where posts are not rendering even though API is returning data.

PROJECT CONTEXT:
- Frontend: React (Vite)
- Backend: FastAPI (working correctly)
- Deployment: Vercel + Render
- Issue: API returns posts but UI is not displaying them

---

ROOT CAUSE:
Backend response format:
{
  success: true,
  posts: [...]
}

But frontend is incorrectly using:
setPosts(data)

Instead of:
setPosts(data.posts)

---

TASK 1: FIX FETCH LOGIC (CRITICAL)

Locate fetchFeed() and REPLACE with:

const fetchFeed = async () => {
  try {
    const res = await fetch(`/api/agent/feed?agentId=${agentId}`)

    if (!res.ok) throw new Error("Fetch failed")

    const result = await res.json()

    console.log("API RESPONSE:", result)

    if (!result.success) {
      throw new Error("API returned failure")
    }

    const data = result.posts || []

    setPosts(prev => {
      const existingIds = new Set(prev.map(p => p.id))

      const newPosts = data.filter(p => !existingIds.has(p.id))

      const merged = [...newPosts, ...prev]

      return merged
        .sort((a, b) => new Date(b.createdAt * 1000) - new Date(a.createdAt * 1000))
        .slice(0, 50)
    })

  } catch (err) {
    console.error("FEED ERROR:", err)
  }
}

---

TASK 2: ADD LOADING + EMPTY STATE

Add:

const [loading, setLoading] = useState(true)

Update fetch:

finally {
  setLoading(false)
}

---

TASK 3: FIX RENDERING

Replace render logic with:

{loading ? (
  <p>Loading feed...</p>
) : posts.length === 0 ? (
  <p>No posts available</p>
) : (
  posts.map(post => (
    <PostCard key={post.id} post={post} />
  ))
)}

---

TASK 4: VALIDATE DATA STRUCTURE

Ensure each post has:

{
  id: string,
  content: string,
  createdAt: number
}

If id missing → generate temporary unique id.

---

TASK 5: PREVENT CRASHES

- Add optional chaining where needed
- Avoid undefined access
- Ensure posts is always array

---

TASK 6: DEBUG SUPPORT

Add:

console.log("POSTS ARRAY:", data)

---

TASK 7: DO NOT

- Do NOT modify backend
- Do NOT break existing features
- Do NOT remove polling logic

---

TASK 8: FINAL CHECK

- Posts should render immediately
- No duplicates
- Latest post on top
- No console errors

---

COMMIT & PUSH:

git add .
git commit -m "fix: frontend post rendering issue (correct API handling + stable UI)"
git push

---

EXPECTED RESULT:

✅ Posts visible in UI  
✅ Feed updates correctly  
✅ No duplicates  
✅ Stable production behavior
```

### Prompt 135
```txt
Redesign my entire React frontend UI to match a clean futuristic AI SaaS dashboard exactly like a modern autonomous AI product.

IMPORTANT:
- Follow the reference design style: dark theme, neon green glow, glassmorphism, minimal layout
- Do NOT add unnecessary sections or overcomplicated dashboard elements
- Keep UI clean, fast, and focused on core functionality

----------------------------------

🎯 MAIN GOAL:
Create a futuristic AI product interface for "AI Tech Creator" with:

- Minimal layout
- Clean feed UI
- Agent control panel
- Smooth animations
- Premium SaaS look

----------------------------------

🧱 LAYOUT STRUCTURE (STRICT)

1. NAVBAR (TOP ONLY)
- Left: Logo "AI Tech Creator"
- Center/right: small badge → "Agent Online" (green dot)
- Right: "+ New Post" button (primary CTA)

NO extra links (remove About, Settings, etc.)

----------------------------------

2. HERO SECTION

- Big title:
  "Autonomous AI Content Creator"

- Subtitle:
  "AI agent that generates content automatically based on trends"

- Buttons:
  [⚡ Run Agent] (primary)
  [👁 View Feed] (secondary)

- Right side:
  futuristic glowing AI element (simple, not heavy)

----------------------------------

3. LIVE FEED (CORE FEATURE)

- Title: "Live Feed"
- Subtitle: "Real-time AI generated content"

Each post card MUST include:

- AI icon/avatar
- Label: "AI Generated"
- Timestamp (e.g., 2 min ago)
- Post content text
- Tags (#AI #Tech etc.)

STYLE:
- Glassmorphism (backdrop blur)
- Rounded corners
- Soft neon border glow
- Hover effect

DO NOT include:
- likes
- comments
- share buttons
- rationale text

----------------------------------

4. AGENT CONTROL PANEL (RIGHT SIDE)

Keep ONLY:

- Status: Online (green)
- Mode: Autonomous
- Next Run Timer
- Posts Today count

Buttons:
- ▶ Run Agent
- ⏸ Pause Agent

Remove:
- analytics
- charts
- unnecessary stats

----------------------------------

🎨 DESIGN SYSTEM

Theme:
- Background: #020617 (dark)
- Gradient: dark blue → black
- Accent: neon green (#00ff9f)

Cards:
- bg-white/5
- backdrop-blur-md
- border border-white/10
- rounded-xl

Buttons:
- Gradient green
- Glow shadow
- Slight scale on hover

----------------------------------

✨ EFFECTS

- Smooth fade-in animations
- Hover glow on cards
- Subtle transitions
- Clean spacing

Use:
- Tailwind CSS
- Framer Motion (for animations)

----------------------------------

🔧 FUNCTIONAL FIX (IMPORTANT)

Fix post rendering issue:

- Ensure API posts are correctly mapped
- Avoid duplicates
- Render immediately when fetched
- Use proper state handling

Example logic:

posts.map((post, index) => (
  <PostCard key={index} post={post} />
))

----------------------------------

📱 RESPONSIVENESS

- Mobile friendly
- Stack layout on small screens
- Feed full width on mobile

----------------------------------

📦 OUTPUT REQUIRED

- Updated React components
- Clean reusable components:
  Navbar.jsx
  Hero.jsx
  Feed.jsx
  PostCard.jsx
  AgentPanel.jsx

- No broken functionality
- Production-ready code

----------------------------------

FINAL RESULT:

A clean, futuristic AI SaaS interface focused on:
✔ Content generation
✔ Live feed
✔ Agent control

No clutter. No unnecessary features.
```

### Prompt 136
```txt
Build and fix my AI content generator web app with the following strict requirements:

========================
🔁 BACKEND LOGIC (VERY IMPORTANT)
========================
- The system must generate ONLY 1 post at a time
- It must generate exactly 1 post every 2 minutes (120 seconds)
- DO NOT generate multiple posts in a loop
- DO NOT batch generate posts
- Ensure no duplicate threads or repeated triggers
- Use a single background worker or scheduler (like APScheduler or setInterval equivalent)
- Prevent multiple executions using a global running flag

Correct behavior:
→ Wait 2 minutes
→ Generate 1 post
→ Save/display it
→ Repeat

========================
🧠 AI POST GENERATION
========================
- Each post must be 5–6 lines long (minimum 120 words)
- Must start with a strong hook
- Must provide value (explanation, insight, or trend)
- Must end with a question to engage users
- Tone: professional + slightly conversational
- Include 3–4 relevant hashtags

Example structure:
Hook line
Insight line
Explanation line
Trend/value line
Engagement question
Hashtags

========================
🎯 TOPIC CONTROL (FRONTEND + BACKEND)
========================
- Add an input field where user can enter topic
- Example topics: AI, Startups, Tech, SaaS, Productivity
- Send topic from frontend → backend API
- If no topic is given, use default: "AI Trends"

========================
🎨 UI / UX (FUTURISTIC STYLE)
========================
Redesign UI to look modern, clean, and futuristic like an AI SaaS product:

- Dark theme with gradient background (deep navy → black)
- Use glassmorphism cards (blur + transparency)
- Add soft glowing borders (green/teal accent)
- Smooth hover animations (scale + glow)
- Rounded corners (xl)
- Clean spacing and minimal layout

Color system:
- Primary: Neon Green / Teal (#00ff9f / #14b8a6)
- Background: #020617 to #0f172a gradient
- Text: white / muted gray

Components:
- Live Feed section (left)
- Agent Control panel (right)
- Topic input + Generate button on top
- Tag pills (#AI, #Tech etc.)
- Status indicator (green glowing dot "Agent Online")

Buttons:
- Gradient buttons (green → emerald)
- Hover glow effect
- Smooth transitions

========================
⚡ PERFORMANCE RULES
========================
- No duplicate posts
- No UI flicker
- Real-time update when new post arrives
- Stable production behavior

========================
🎯 FINAL OUTPUT EXPECTED
========================
- 1 high-quality post every 2 minutes
- Each post is detailed (5–6 lines)
- User can choose topic
- Clean futuristic UI
- No bugs, no duplication

Build this as production-ready code.
```

### Prompt 137
```txt
Fix my AI content generator so that it ALWAYS generates detailed multi-line posts instead of single-line outputs.

========================
🚨 CORE ISSUE
========================
- Currently posts are only 1 line
- This is incorrect
- Each post must be long, structured, and multi-line

========================
🧠 STRICT AI GENERATION RULES
========================
Update the prompt to STRICTLY enforce length:

Generate a LinkedIn-style post about the topic: "{topic}"

STRICT REQUIREMENTS:
- Write EXACTLY 5 to 6 lines (not 1 line)
- Minimum 120–150 words
- Each line should be meaningful (not short phrases)
- Use proper line breaks (\n)
- DO NOT compress into one paragraph
- DO NOT return a single sentence

STRUCTURE:
1. Hook (attention-grabbing first line)
2. Insight or trend explanation
3. Deeper explanation or example
4. Practical value or takeaway
5. Thought-provoking question
6. 3–4 hashtags

========================
❗ FORCE MULTI-LINE OUTPUT
========================
- Insert line breaks using "\n"
- Each sentence must be on a new line
- Example format:

🚀 Technology is evolving faster than ever.
Developers are now expected to adapt quickly to new paradigms.
Concepts like microservices and distributed systems are becoming essential.
Understanding system design is no longer optional.
How are you preparing for this shift?
#Tech #Engineering #Future

========================
⚙️ BACKEND FIX (IMPORTANT)
========================
- Do NOT trim response
- Do NOT use .split('.')[0]
- Do NOT limit tokens too low

Ensure:
max_tokens >= 200

========================
🖥️ FRONTEND FIX (CRITICAL)
========================
Ensure posts render full text:

Instead of:
<p>{post}</p>

Use:
<p style={{ whiteSpace: "pre-line" }}>{post}</p>

This ensures line breaks are visible.

========================
🚫 PREVENT SHORT OUTPUT
========================
- Reject response if length < 100 words
- Regenerate until valid

Example:
if len(post.split()) < 100:
    regenerate()

========================
✅ EXPECTED RESULT
========================
- Each post is 5–6 lines
- Clearly structured
- Visually multi-line in UI
- No more one-line posts
```

### Prompt 138
```txt
Fix and upgrade my AI content generator web app with strict production-level behavior.

========================
🚨 CORE PROBLEMS TO FIX
========================
1. App always generates AI-related posts even when user enters a different topic
2. Posts are only 1 line instead of 5–6 lines
3. Topic input is not properly connected from frontend to backend
4. UI is not rendering multi-line posts correctly

========================
🎯 TOPIC HANDLING (CRITICAL FIX)
========================
- The system MUST use the user-provided topic
- NEVER default to AI unless topic is empty
- If topic is empty → use "AI Trends"
- Otherwise ALWAYS use the exact user topic

Frontend:
- Send topic in API request body
- Example:
  body: JSON.stringify({ topic: userInput })

Backend:
- Receive topic using:
  topic = data.get("topic")

- Validate:
  if not topic or topic.strip() == "":
      topic = "AI Trends"

- Print debug log:
  print("Topic received:", topic)

========================
🧠 AI GENERATION (STRICT RULES)
========================
Use this prompt EXACTLY:

Generate a LinkedIn-style post STRICTLY about: "{topic}"

STRICT RULES:
- DO NOT change the topic
- DO NOT default to AI unless topic is AI
- Content must clearly reflect the given topic

FORMAT REQUIREMENTS:
- Write EXACTLY 5 to 6 lines
- Minimum 120–150 words
- Each line must be separated using \n
- DO NOT write in one paragraph
- DO NOT return a single sentence

STRUCTURE:
1. Hook (engaging first line)
2. Insight or trend
3. Explanation
4. Practical value
5. Question to engage audience
6. 3–4 hashtags relevant to topic

Example output format:
🚀 First line...
Second line...
Third line...
Fourth line...
What do you think?
#tag1 #tag2 #tag3

========================
🚫 PREVENT SHORT POSTS
========================
- If generated post has less than 100 words → regenerate
- Ensure max_tokens >= 200
- Do NOT trim response anywhere in code

========================
🖥️ FRONTEND RENDER FIX
========================
- Ensure multi-line posts display correctly

Replace:
<p>{post}</p>

With:
<p style={{ whiteSpace: "pre-line" }}>
  {post}
</p>

========================
🚫 REMOVE ALL HARDCODED AI LOGIC
========================
- Search entire codebase and REMOVE:
  "AI"
  "AI Trends"
  topic = "AI"

- Only use dynamic topic from user

========================
⚡ FINAL EXPECTED RESULT
========================
Input: "computer science engineering"
→ Output: Post about CS engineering (NOT AI)

Input: "agriculture"
→ Output: Farming/agriculture post

Input: empty
→ Output: AI Trends post

AND:
- Each post is 5–6 lines
- Multi-line formatting visible in UI
- No one-line posts
- No wrong topic

========================
🎯 BUILD QUALITY
========================
- Production-ready
- No bugs
- Clean architecture
- Stable behavior
```

### Prompt 139
```txt
Completely fix and harden my AI content generator so that ALL critical issues are permanently resolved.

========================
🚨 CRITICAL ISSUES TO ELIMINATE (FULL FIX REQUIRED)
========================
1. The system ignores user topic and always generates AI-related posts
2. Posts are only 1 line instead of structured 5–6 lines
3. Topic is not properly passed from frontend to backend
4. LLM sometimes ignores instructions and generates wrong format
5. UI does not properly render multi-line text
6. Model bias toward AI topic must be completely removed

ALL of these must be FIXED with strict enforcement logic.

========================
🎯 TOPIC HANDLING (STRICT ENFORCEMENT)
========================
- Always use the EXACT user input topic
- NEVER override topic internally
- NEVER default to AI unless input is empty

Backend logic:
topic = data.get("topic")

if not topic or topic.strip() == "":
    topic = "AI Trends"

print("FINAL TOPIC:", topic)

========================
🚫 REMOVE AI BIAS COMPLETELY
========================
- Remove ALL hardcoded AI references from codebase
- Do NOT include "AI" anywhere unless topic includes it
- Add explicit instruction:

"The topic is NOT AI unless explicitly provided by the user"

========================
🧠 STRICT LLM PROMPT (FORCED OUTPUT)
========================
Use this EXACT prompt:

You are a strict content generator.

Generate a LinkedIn-style post ONLY about the topic: "{topic}"

CRITICAL RULES:
- You MUST NOT change the topic
- You MUST NOT talk about AI unless topic is AI
- Stay 100% focused on the given topic
- Use domain-specific language

FORMAT RULES (MANDATORY):
- EXACTLY 5 to 6 lines
- Minimum 120–150 words
- Each line MUST be separated using \n
- DO NOT write in a single paragraph
- DO NOT return one sentence

STRUCTURE:
1. Hook
2. Insight
3. Explanation
4. Value
5. Question
6. Hashtags (3–4)

If output does not follow rules, it is INVALID.

========================
🔁 HARD VALIDATION + REGENERATION LOOP
========================
Validate output strictly:

def is_valid(post):
    lines = post.split("\n")
    words = len(post.split())
    return len(lines) >= 5 and words >= 120

Retry logic:

attempts = 0
while not is_valid(post) and attempts < 3:
    print("Regenerating invalid output...")
    post = generate_post()
    attempts += 1

========================
⚙️ FORCE LINE BREAKS (FAILSAFE)
========================
If model ignores formatting:

post = post.replace(". ", ".\n")

========================
🖥️ FRONTEND FIX (REQUIRED)
========================
Render multi-line text correctly:

<p style={{ whiteSpace: "pre-line" }}>
  {post}
</p>

========================
🔗 FRONTEND → BACKEND CONNECTION
========================
Ensure topic is sent:

fetch("/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ topic: topicInput })
})

========================
🚫 REMOVE BUG SOURCES
========================
Search and DELETE:
- topic = "AI"
- "AI Trends" (except fallback)
- Any mock or static generator
- Any loop generating multiple posts

========================
✅ FINAL EXPECTED RESULT
========================

Input: "computer science engineering"
→ Output: Post about CS engineering ONLY

Input: "agriculture"
→ Output: Farming/agriculture post ONLY

Input: empty
→ Output: AI Trends post

AND:
- 5–6 lines always
- 120+ words
- Multi-line UI rendering
- No AI bias
- No 1-line posts
- No wrong topic

========================
🎯 QUALITY STANDARD
========================
- Production-ready
- No bugs
- Deterministic behavior
- Clean architecture
```

### Prompt 140
```txt
Act as a senior DevOps + Git expert and push my full project to GitHub in a clean, production-ready way.

========================
🎯 GOAL
========================
- Push all latest fixes (LLM, topic handling, UI, validation)
- Ensure deployment triggers (Vercel + Render)
- Avoid pushing unnecessary files
- Maintain clean repo structure

========================
📦 STEP 1: CHECK GIT STATUS
========================
Run:
git status

- Ensure all modified files are visible
- Do NOT proceed if repo is not initialized

========================
📂 STEP 2: ADD FILES (CLEAN)
========================
Add all required files:
git add .

Ensure .gitignore excludes:
- node_modules/
- __pycache__/
- .env
- .venv/
- dist/
- build/

========================
📝 STEP 3: COMMIT (PROFESSIONAL MESSAGE)
========================
Use this commit message:

git commit -m "fix: production-ready LLM integration with strict topic control, multi-line post generation, and UI rendering fixes"

========================
🚀 STEP 4: PUSH TO GITHUB
========================
Push to main branch:

git push origin main

If branch not set:
git branch -M main
git push -u origin main

========================
🔄 STEP 5: VERIFY DEPLOYMENT
========================
- Vercel should auto-deploy frontend
- Render should auto-deploy backend

Wait 1–2 minutes

========================
🧪 STEP 6: TEST LIVE APP
========================
Test with:
- "computer science engineering"
- "agriculture"

Ensure:
✔ Topic works correctly
✔ 5–6 line posts
✔ No AI bias
✔ UI shows multi-line text

========================
🚨 ERROR HANDLING
========================
If push fails:
- Check remote origin:
  git remote -v

If needed:
git remote add origin <your-repo-url>

========================
✅ FINAL RESULT
========================
- Code safely pushed
- Repo clean and professional
- Live deployment updated
- App working in production
```

### Prompt 141
```txt
Act as a senior AI backend engineer and full-stack developer.

Fix my AI Tech Creator project completely so that:
- It ALWAYS generates valid posts
- It NEVER returns empty response
- It STRICTLY follows user topic (like CSE, agriculture, etc.)
- It RETURNS clean multi-line content (5–6 lines)
- It WORKS both locally and on deployed server (Render/Vercel)

========================================
🎯 ROOT PROBLEM TO FIX
========================================
Currently:
- API is returning empty object or empty string
- Frontend receives response but no content
- Topic is not reflected (CSE not showing)
- UI shows 0 lines

Fix this permanently.

========================================
🔧 BACKEND FIX (CRITICAL)
========================================

1. Ensure topic is received correctly:

topic = request.json.get("topic", "").strip()

If empty:
    topic = "technology"

----------------------------------------

2. Create STRICT PROMPT:

prompt = f"""
Generate a LinkedIn-style post STRICTLY about: {topic}

Rules:
- Must be about the given topic only
- No generic AI content
- 5 to 6 lines
- Each line on new line
- Simple and engaging language
- No hashtags
- No extra explanation
"""

----------------------------------------

3. CALL LLM PROPERLY

Depending on your model, extract correctly:

👉 OpenAI:
generated_text = response.choices[0].message.content

👉 HuggingFace:
generated_text = response[0]["generated_text"]

👉 LangChain:
generated_text = response.content

----------------------------------------

4. CLEAN RESPONSE

generated_text = generated_text.strip()

----------------------------------------

5. HANDLE EMPTY RESPONSE (IMPORTANT)

if not generated_text or len(generated_text) < 20:
    generated_text = f"{topic} is rapidly evolving in today's world.\nIt is creating new opportunities and innovations.\nStudents and professionals must stay updated.\nPractical skills are becoming more important.\nThe future of {topic} is very promising."

----------------------------------------

6. DEBUG LOG (MANDATORY)

print("TOPIC:", topic)
print("GENERATED:", generated_text)

----------------------------------------

7. RETURN PROPER JSON

return {
    "post": generated_text,
    "topic": topic
}

========================================
🌐 FRONTEND FIX (IMPORTANT)
========================================

1. FETCH CORRECTLY:

const res = await fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ topic })
});

const data = await res.json();

console.log("API RESPONSE:", data);

----------------------------------------

2. HANDLE RESPONSE SAFELY:

setPost(data.post || "⚠️ No content generated");

----------------------------------------

3. PRESERVE MULTI-LINE FORMAT:

<div style={{ whiteSpace: "pre-line" }}>
  {post}
</div>

----------------------------------------

4. HANDLE EMPTY CASE:

if (!data.post || data.post.trim() === "") {
  setPost("⚠️ Backend returned empty response");
}

========================================
🚨 COMMON ERRORS TO FIX
========================================

- Wrong response key (post vs text vs message)
- LLM returning undefined
- API key not working
- Missing topic in request
- Frontend not rendering multiline

========================================
✅ FINAL EXPECTED OUTPUT
========================================

Input:
"computer science engineering"

Output:

Computer Science Engineering is shaping the digital future.
It drives innovation in software, AI, and cybersecurity.
Students must focus on problem-solving and coding skills.
Real-world projects are key to mastering concepts.
The demand for skilled engineers is continuously growing.

========================================
🚀 FINAL GOAL
========================================

- Always generate valid post
- Always include topic
- Always multi-line output
- Never empty response
- Works in production

Fix everything cleanly and professionally.
```

### Prompt 142
```txt
Act as a senior full-stack engineer and debug my deployed AI app (Render backend + Vercel frontend).

========================================
🎯 OBJECTIVE
========================================
Fix the issue where:
- API response is logged as object
- UI shows empty post (0 lines)
- Topic is not displayed
- Backend claims success but frontend shows nothing

========================================
🔍 STEP 1: VERIFY REAL API RESPONSE
========================================

Modify frontend temporarily:

console.log("FULL API RESPONSE:", data);
console.log("POST FIELD:", data.post);

Goal:
→ Confirm if backend is actually sending "post"

========================================
🔧 STEP 2: FORCE CORRECT BACKEND RESPONSE
========================================

In backend (main.py / agent.py), REPLACE return with EXACT:

return {
    "post": str(generated_text).strip(),
    "topic": str(topic)
}

----------------------------------------

Add hard fallback BEFORE return:

if not generated_text or len(str(generated_text).strip()) < 20:
    generated_text = f"{topic} is rapidly evolving in today's world.\nIt is creating new opportunities and innovations.\nStudents and professionals must stay updated.\nPractical skills are becoming more important.\nThe future of {topic} is very promising."

----------------------------------------

Add debug logs:

print("FINAL TOPIC:", topic)
print("FINAL POST:", generated_text)

========================================
🌐 STEP 3: FIX FRONTEND (CRITICAL)
========================================

REPLACE any usage like:

post.content
post.text

WITH:

data.post

----------------------------------------

Correct code:

const data = await res.json();

console.log("API:", data);

setPost(data.post);

----------------------------------------

========================================
🎨 STEP 4: FIX RENDERING
========================================

Ensure multiline rendering:

<div style={{ whiteSpace: "pre-line" }}>
  {post}
</div>

========================================
🚨 STEP 5: FORCE REDEPLOY
========================================

1. Commit:
git add .
git commit -m "fix: correct API response mapping and frontend rendering"

2. Push:
git push origin main

3. Wait 2–3 minutes for:
- Render redeploy
- Vercel redeploy

========================================
🧪 STEP 6: FINAL TEST
========================================

Input:
"computer science engineering"

Console should show:
FULL API RESPONSE: { post: "..." }

UI should show:
5–6 lines of text

========================================
❗ ROOT CAUSE (EXPLAINED)
========================================

The issue is NOT AI generation.

The issue is:
→ Frontend reading wrong key (content/text instead of post)
→ OR backend not deployed

========================================
✅ FINAL RESULT
========================================

- Always non-empty response
- Topic always visible
- 5–6 lines displayed
- Works in production
```

### Prompt 143
```txt
Act as a senior full-stack engineer and upgrade my AI Tech Creator project to a more professional, production-level experience.

========================================
🎯 GOAL
========================================
Enhance the app with:
1. Dynamic topic-based tags
2. Higher-quality AI-generated content
3. Regenerate post feature
4. Proper loading state UX

Do NOT add monetization.

========================================
🧠 1. IMPROVE AI CONTENT QUALITY (BACKEND)
========================================

Replace the existing prompt with a stronger one:

prompt = f"""
Write a high-quality LinkedIn-style post about: {topic}

Requirements:
- Focus strictly on the topic
- 5 to 6 meaningful lines
- Each line on a new line
- Human-like tone (not robotic)
- Professional and engaging
- No hashtags
- No generic filler sentences
- Add real-world relevance if possible
"""

----------------------------------------

Improve fallback content:

if not content or len(content.strip()) < 20:
    content = f"""{topic.title()} is transforming industries at a rapid pace.
It plays a crucial role in innovation and real-world problem solving.
Students and professionals must focus on practical skills.
Hands-on projects are key to mastering this field.
The future of {topic} holds immense opportunities."""

----------------------------------------

Ensure final return:

return {
    "post": content.strip(),
    "topic": topic
}

========================================
🏷️ 2. DYNAMIC TAG GENERATION (FRONTEND)
========================================

Generate tags dynamically based on topic:

const generateTags = (topic) => {
  return [
    `#${topic.replace(/\s+/g, '')}`,
    "#Innovation",
    "#Career",
    "#Technology"
  ];
};

----------------------------------------

When setting posts:

setPosts([
  {
    id: Date.now(),
    topic: data.topic,
    post: data.post,
    tags: generateTags(data.topic)
  }
]);

----------------------------------------

Render tags:

{post.tags.map((tag, i) => (
  <span key={i} className="tag">{tag}</span>
))}

========================================
🔄
```

### Prompt 144
```txt
Act as a senior full-stack engineer and complete the remaining upgrades for my AI Tech Creator app.

Continue from previous implementation and add:

========================================
🔄 3. REGENERATE POST FEATURE
========================================

Goal:
Allow user to regenerate a new post using the SAME topic.

----------------------------------------

1. Add regenerate button in PostCard.jsx:

<button 
  className="regenerate-btn"
  onClick={() => regeneratePost(post.topic)}
>
  🔄 Regenerate
</button>

----------------------------------------

2. Implement regenerate function in App.jsx:

const regeneratePost = async (topic) => {
  try {
    setLoading(true);

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic })
    });

    const data = await res.json();

    setPosts([
      {
        id: Date.now(),
        topic: data.topic,
        post: data.post,
        tags: generateTags(data.topic)
      }
    ]);

  } catch (error) {
    console.error("Regenerate error:", error);
  } finally {
    setLoading(false);
  }
};

----------------------------------------

3. Pass regeneratePost as prop:

<PostCard post={post} regeneratePost={regeneratePost} />

----------------------------------------

4. Update PostCard to accept prop:

const PostCard = ({ post, regeneratePost }) => { ... }

========================================
⏳ 4. LOADING STATE UX IMPROVEMENT
========================================

Goal:
Improve user experience while content is generating.

----------------------------------------

1. Add loading state:

const [loading, setLoading] = useState(false);

----------------------------------------

2. Apply loading in BOTH actions:
- Run Agent
- Regenerate

Before API call:
setLoading(true);

After response:
setLoading(false);

----------------------------------------

3. Show loading indicator:

{loading && (
  <p className="loading-text">⚡ Generating post...</p>
)}

----------------------------------------

4. Disable buttons during loading:

<button onClick={runAgent} disabled={loading}>
  {loading ? "Generating..." : "Run Agent"}
</button>

----------------------------------------

<button 
  onClick={() => regeneratePost(post.topic)}
```

### Prompt 145
```txt
Act as a senior frontend engineer and UI/UX expert.

Your task is to refactor my existing AI Tech Creator web app UI by converting the current neon green theme into a clean, minimal black-and-white theme while preserving the entire layout, structure, and functionality.

========================================
🎯 GOAL
========================================
- Remove all neon green / glowing styles
- Convert UI into premium black, white, and gray theme
- Keep existing layout EXACTLY the same
- Keep all buttons (especially primary CTA) unchanged in color
- Do NOT modify functionality, API calls, or component logic

========================================
🎨 DESIGN RULES
========================================
- Background: pure dark (#0a0a0a)
- Cards: slightly lighter dark (#111111)
- Borders: subtle gray (#1f1f1f)
- Text: white (#ffffff)
- Secondary text: gray (#9ca3af)
- NO glow effects
- NO neon colors
- Use clean, minimal, professional styling (like Notion / Vercel)

========================================
⚠️ IMPORTANT REMOVALS
========================================
Remove ALL of the following:
- green borders
- green shadows / glow
- rgba
```

### Prompt 146
```txt
Act as a senior UI/UX engineer and refine the existing black-and-white theme for my AI Tech Creator app.

The base theme conversion is already complete. Now perform FINAL POLISH improvements.

========================================
🎯 GOAL
========================================
- Improve visual hierarchy
- Improve readability
- Add subtle depth (without glow)
- Make UI look like a top SaaS product (Vercel / Notion level)

========================================
🎨 IMPROVEMENTS REQUIRED
========================================

1. Typography:
- Increase post content readability
- Line-height: 1.6–1.7
- Slightly increase font size for content

2. Card Depth (VERY SUBTLE):
- Add soft shadow:
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
- Keep it minimal (NO glow)

3. Section Separation:
- Add subtle divider line between sections:
  border-bottom: 1px solid #1f1f1f;

4. Hover Interaction:
- Cards should slightly lift:
  transform: translateY(-2px);

5. Sidebar Improvement:
- Slight contrast from main background:
  background: #0f0f0f;
- Keep border subtle

6. Spacing Fix:
- Reduce unnecessary large gaps
- Maintain consistent padding

7. Tag Alignment:
- Ensure tags are evenly spaced
- Add small gap between tags

========================================
⚠️ STRICT RULES
========================================
- DO NOT add colors
- DO NOT reintroduce green
- DO NOT add glow effects
- Keep everything minimal

========================================
📦 OUTPUT
========================================
- Only CSS improvements
- Clean, production-ready code
```

### Prompt 147
```txt
Act as a senior frontend engineer + product designer from a top SaaS company.

Upgrade my existing AI Tech Creator UI to a PREMIUM, MODERN, ANIMATED SaaS interface.

DO NOT change:
- Layout structure
- Buttons (color, size, position)
- Backend or logic

ONLY upgrade UI/UX visuals.

========================================
🎯 GOAL
========================================
Make the app look like:
- Vercel Dashboard
- Linear App
- Stripe UI
- Modern AI SaaS tools

========================================
🎨 THEME (GLASSMORPHISM + DEPTH)
========================================

Use layered dark glass UI:

body {
  background: radial-gradient(circle at 20% 20%, #111 0%, #0a0a0a 60%, #000 100%);
}

.glass-card {
  background: rgba(255, 255, 255,
```

### Prompt 148
```txt
Act as a senior Python backend engineer.

I have a FastAPI project deployed on Render. I am getting this warning:
"The 'fitz' API is deprecated and will be removed in future. Use 'import pymupdf' instead."

Your task is to fix this across the entire project safely and professionally.

IMPORTANT RULE:
👉 Only change import, do not refactor logic.

Requirements:
1. Replace all occurrences of:
   import fitz
   with:
   import pymupdf as fitz

2. Do NOT break existing functionality:
   - Keep all existing code using fitz (like fitz.open, page.get_text, etc.)
   - Do not modify any logic, functions, or structure

3. Update dependencies:
   - Remove any reference to "fitz" in requirements.txt
   - Ensure "pymupdf" is added correctly

4. Ensure compatibility with production deployment:
   - Code must work on Render
   - No runtime errors

5. Clean up warnings:
   - After fix, there should be ZERO deprecation warnings

6. Bonus (without changing logic):
   - Add minimal safe error handling only if missing (optional)

Output format:
- Updated import lines only
- Updated requirements.txt
- Short explanation

Goal:
Make the backend warning-free, stable, and future-proof WITHOUT changing existing logic.
```

### Prompt 149
```txt
Act as a senior Python backend engineer.

I fixed "import fitz" but the warning still appears in production logs.

Your task is to completely eliminate this warning.

IMPORTANT RULE:
👉 Only change import, do not refactor logic.

Tasks:
1. Scan entire project for ANY usage of:
   - import fitz
   - from fitz import ...

2. Replace with:
   import pymupdf as fitz

3. Check requirements.txt:
   - Remove "fitz"
   - Ensure only "pymupdf" exists

4. Detect indirect dependency:
   - Identify if any installed library is importing fitz
   - Suggest fix if found

5. Ensure compatibility with Render deployment

6. Do NOT modify business logic

Output:
- Files where fitz was found
- Updated import lines
- Clean requirements.txt
- Root cause if warning persists
```

### Prompt 150
```txt
Act as a senior full-stack engineer (React + FastAPI).

Fix my AI agent behavior to make it production-level.

IMPORTANT:
Do NOT change UI design.
Do NOT break existing functionality.

========================================
TASKS
========================================

1. INSTANT FIRST POST
- When user clicks "Run Agent"
- Generate FIRST post immediately (no delay)
- Then start interval loop (45 sec)

2. FIX FEED DISAPPEARING
- Do NOT clear posts state
- Remove any setPosts([])
- Append new posts like:
  setPosts(prev => [newPost, ...prev])

3. ADD REAL COUNTDOWN TIMER
- Replace static "45 sec" with live countdown
- Countdown should decrease every second
- Reset to 45 after each post

4. KEEP POSTS STABLE
- No flicker
- No reload effect
- Maintain previous posts

5. IMPROVE CONTENT QUALITY
- Ensure posts include hashtags
- Professional formatting

========================================
OUTPUT
========================================

- Updated React logic (startAgent, state, timer)
- Fixed feed update logic
- Countdown implementation
- Backend prompt improvement
```

### Prompt 151
```txt
Act as a senior AI engineer and prompt engineer.

Fix my AI content generation system to ensure EVERY post is unique, engaging, and never repeated.

IMPORTANT:
Do NOT change UI or frontend logic.

========================================
TASKS
========================================

1. IMPROVE PROMPT
- Ensure output is always unique
- Add instruction to avoid repetition
- Add style variation (storytelling, opinion, etc.)

2. ADD RANDOMNESS
- Set temperature to 0.9
- Set top_p to 0.9

3. ADD MEMORY AVOIDANCE
- Store last 5 generated posts
- Pass them into prompt
- Instruct model to avoid repeating them

4. STYLE ROTATION
- Randomly choose style for each post

5. OUTPUT FORMAT
- Hook line
- 3–6 lines content
- Proper spacing
- Add 5–8 hashtags

========================================
GOAL
========================================

- Every post must feel fresh
- No duplicate content
- High-quality, viral-style output
```

### Prompt 152
```txt
Act as a senior AI engineer and viral content strategist.

Upgrade my AI content generator into a VIRAL CONTENT ENGINE.

IMPORTANT:
Do NOT change UI or frontend.
Focus only on backend AI generation.

========================================
TASKS
========================================

1. Replace prompt with viral-level prompt:
   - Strong hooks
   - Human tone
   - No repetition
   - High engagement

2. Add randomness:
   - temperature = 1.0
   - top_p = 0.95

3. Add memory system:
   - Store last 5 posts
   - Pass into prompt to avoid repetition

4. Add style rotation:
   - storytelling
   - opinion
   - educational
   - motivational
   - prediction

5. Add hook generator:
   - Random hook for each post

6. Ensure output format:
   - Hook
   - 3–6 lines
   - Proper spacing
   - 5–8 hashtags

========================================
GOAL
========================================

- Every post must feel viral
- No repetition ever
- Human-like writing
- Scroll-stopping content
```

### Prompt 153
```txt
Act as a senior AI SaaS architect and engineer.

Transform my AI Tech Creator into a FULL AI CONTENT PLATFORM.

IMPORTANT:
Do NOT change frontend design.
Only improve backend intelligence and features.

========================================
BUILD FEATURES
========================================

1. Multi-mode content:
   - LinkedIn
   - Twitter
   - Instagram
   - Threads

2. Viral content engine:
   - Strong hooks
   - Unique outputs
   - No repetition
   - Human-like writing

3. Memory system:
   - Store last 5 posts
   - Avoid repetition

4. Style rotation:
   - storytelling
   - opinion
   - educational
   - motivational
   - prediction

5. Hook generator:
   - Generate multiple hooks
   - Pick best using scoring

6. Viral scoring system:
   - Score content quality
   - Only output best content

7. Auto-post system:
   - Run every few hours
   - Generate content automatically

8. Database:
   - Store posts
   - Store timestamps
   - Store scores

9. Thread generator:
   - Multi-post content

========================================
GOAL
========================================

- Build a SaaS-level AI content system
- Every output must be unique
- Content must feel viral and human
- Fully automated posting system
```

### Prompt 154
```txt
You are a senior full-stack AI engineer.

TASK:
Redo the entire last implementation cleanly and correctly from scratch based on the last working commit.

STRICT INSTRUCTIONS:

1. DO NOT change project architecture.
2. DO NOT refactor logic or redesign anything.
3. ONLY fix, rebuild, and stabilize what was already implemented.
4. Ensure the app runs BOTH:
   - Locally
   - On Vercel production

---

CRITICAL FIXES TO APPLY:

1. FIX deprecated PyMuPDF warning:
   - Replace:
     import fitz
   - With:
     import pymupdf as fitz
   - DO NOT change any logic using fitz

2. FIX backend not loading on Vercel:
   - Ensure correct entry point exists:
     /api/index.py  (REQUIRED for Vercel)

3. CREATE /api/index.py with this structure:
   ------------------------------------------
   from main import app

   # Vercel handler
   def handler(request):
       return app
   ------------------------------------------

4. ENSURE Flask app in main.py is named EXACTLY:
   app = Flask(__name__)

5. FIX static + template paths:
   app = Flask(__name__, static_folder="static", template_folder="templates")

6. VERIFY:
   - index.html inside /templates
   - static files inside /static

7. FIX routing:
   - "/" route must return index.html
   - No broken endpoints

8. REMOVE any hardcoded localhost URLs:
   - Replace with relative paths or environment-safe URLs

9. VERIFY requirements.txt includes ALL dependencies:
   flask
   pymupdf
   langchain
   chromadb
   etc.

10. DO NOT modify business logic, only fix errors.

---

FINAL VALIDATION (MANDATORY):

✔ Runs locally without errors  
✔ No deprecated warnings  
✔ Vercel deployment loads UI (no black screen)  
✔ API endpoints respond correctly  
✔ No console errors in browser  
✔ No missing files or paths  

---

OUTPUT FORMAT:

Return ONLY:
1. Updated files (main.py, api/index.py, etc.)
2. requirements.txt (final)
3. Folder structure

DO NOT explain anything.
DO NOT skip any step.
DO NOT partially fix.

This is a FULL REBUILD of last working state with fixes.
```

### Prompt 155
```txt
You are a senior full-stack engineer.

TASK:
Fix newline issue where "\n" is displayed instead of actual line breaks in generated content.

STRICT RULES:
- DO NOT change business logic
- DO NOT change AI generation logic
- ONLY fix formatting/rendering

---

PROBLEM:
Backend returns content like:
"Line1\n\nLine2"

But frontend displays:
Line1\n\nLine2   ❌

Instead of:
Line1

Line2   ✅

---

FIX (FRONTEND):

1. FIND where content is rendered in UI

2. APPLY one of these fixes:

OPTION A (RECOMMENDED - React):
--------------------------------
<div style={{ whiteSpace: "pre-line" }}>
  {data.content}
</div>
--------------------------------

OPTION B:
--------------------------------
{data.content.split("\n").map((line, i) => (
  <p key={i}>{line}</p>
))}
--------------------------------

---

OPTION C (if using innerHTML):
--------------------------------
<div dangerouslySetInnerHTML={{
  __html: data.content.replace(/\n/g, "<br>")
}} />
--------------------------------

---

IMPORTANT:
- Do NOT modify backend response
- Keep "\n" in response (correct behavior)
- Fix only rendering

---

VALIDATION:

✔ "\n" converts to new line  
✔ Paragraph spacing works  
✔ Output looks like real formatted content  
✔ No raw "\n" visible  

---

OUTPUT:
Return only updated frontend component code.
Do not explain anything.
```

### Prompt 156
```txt
Act as a senior DevOps + Git expert.

TASK:
Commit and push the latest frontend fix (newline rendering fix) to GitHub properly.

========================================
🎯 GOAL
========================================
- Save latest working code
- Push to main branch
- Ensure deployment (Vercel / Render) updates

========================================
📁 STEPS
========================================

1. CHECK CHANGED FILES
Run:
git status

2. ADD ALL FILES
git add .

3. COMMIT WITH CLEAR MESSAGE
git commit -m "Fix: Proper newline rendering in posts (\\n → line breaks UI fix)"

4. PUSH TO MAIN BRANCH
git push origin main

========================================
🔁 IF BRANCH ISSUE COMES
========================================

Run:
git branch

If not on main:
git checkout main

Then:
git push origin main

========================================
🔐 IF AUTH ERROR COMES
========================================

Use:
git remote -v

If needed reset remote:
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

Then push again.

========================================
⚠️ IMPORTANT
========================================
- Do NOT delete any files
- Do NOT change logic
- Only push latest working UI fix
- Ensure commit succeeds

========================================
✅ OUTPUT
========================================
- Show commit success message
- Show push success message
- Confirm branch = main
```

### Prompt 157
```txt
Act as a senior frontend + AI content formatting expert.

TASK:
Upgrade post rendering to VIRAL FORMAT used in LinkedIn, Twitter, and AI SaaS tools.

DO NOT change:
- API logic
- Backend generation
- Existing layout

ONLY improve:
- Content formatting
- UI presentation

========================================
🎯 GOAL
========================================
Transform raw AI text into:

✔ Hook-based posts  
✔ Proper spacing  
✔ Clean paragraphs  
✔ Emojis structured  
✔ Readable + viral style  

========================================
🧠 STEP 1: FORMAT CONTENT (CORE LOGIC)
========================================

Create a function:

const formatPost = (text) => {
  if (!text) return "";

  return text
    .replace(/\\n\\n/g, "\n\n") // keep paragraphs
    .replace(/\\n/g, "\n")     // fix single lines
    .trim();
};

========================================
🧠 STEP 2: SPLIT INTO BLOCKS
========================================

const formatToBlocks = (text) => {
  return formatPost(text)
    .split("\n\n")
    .map(block => block.trim())
    .filter(Boolean);
};

========================================
🎨 STEP 3: RENDER VIRAL UI
========================================

In PostCard.jsx:

<div className="post-content">
  {formatToBlocks(post.post).map((block, index) => (
    <p key={index} className="post-line">
      {block}
    </p>
  ))}
</div>

========================================
💎 STEP 4: STYLE LIKE VIRAL POSTS
========================================

.post-content {
  line-height: 1.8;
  font-size: 16px;
  color: #ffffff;
}

.post-line {
  margin-bottom: 14px;
  font-weight: 400;
}

.post-line:first-child {
  font-weight: 700;
  font-size: 20px;
}

========================================
🔥 STEP 5: ADD HOOK HIGHLIGHT
========================================

Highlight first line (viral hook):

.post-line:first-child {
  color: #ffffff;
  letter-spacing: 0.5px;
}

========================================
✨ STEP 6: ADD COPY BUTTON
========================================

Add button:

<button onClick={() => copyPost(post.post)}>
  📋 Copy
</button>

Function:

const copyPost = (text) => {
  navigator.clipboard.writeText(text);
};

========================================
🚀 STEP 7: AUTO HASHTAGS FORMAT
========================================

Render hashtags separately:

<div className="hashtags">
  {post.tags.map((tag, i) => (
    <span key={i}>#{tag} </span>
  ))}
</div>

========================================
🎯 FINAL RESULT
========================================

Before ❌:
Text block messy

After ✅:

🔥 Hook line

Clean paragraph

Another insight

💡 Value

#AI #Tech #Startup

========================================
RULES
========================================
- No raw "\n"
- No long paragraphs
- Always spaced
- First line = hook
- Output should look social-media ready

========================================
OUTPUT
========================================
Return updated PostCard.jsx only.
No explanation.
```

### Prompt 158
```txt
Act as a senior AI engineer building a production-grade RAG pipeline.

TASK:
Integrate Tavily Search API into my AI Tech Creator app to fetch latest world data, then pass it to LLM for generating high-quality viral posts.

STRICT RULES:
- Minimize API usage (cost optimization)
- Fetch only SMALL + RELEVANT data
- Ensure LATEST information
- DO NOT flood tokens
- DO NOT break existing logic

========================================
🧠 STEP 1: ADD TAVILY CLIENT
========================================

Install:
pip install tavily-python

Code:

from tavily import TavilyClient

tavily = TavilyClient(api_key=os.getenv("TAVILY_API_KEY"))

========================================
🧠 STEP 2: OPTIMIZED SEARCH FUNCTION
========================================

def get_latest_context(topic):
    try:
        response = tavily.search(
            query=topic,
            max_results=3,              # LIMIT results (cost saving)
            search_depth="basic",       # cheaper than advanced
            include_answer=True,        # short summary
            include_raw_content=False,  # avoid large data
            topic="news",               # focus on latest
            time_range="day"            # latest events only
        )

        # Extract only useful text
        answer = response.get("answer", "")
        results = response.get("results", [])

        snippets = " ".join([r.get("content", "") for r in results])

        # FINAL SMALL CONTEXT
        context = f"{answer}\n{snippets}"

        return context[:1000]  # HARD LIMIT (token control)

    except Exception as e:
        print("Tavily error:", e)
        return ""

========================================
🧠 STEP 3: USE IN YOUR AGENT
========================================

Before LLM call:

context = get_latest_context(user_topic)

prompt = f"""
You are a viral content creator AI.

Use the latest real-world information below:

{context}

Now create a highly engaging, short, viral post about:
{user_topic}

Rules:
- Make it mind-blowing
- Use hook in first line
- Keep it concise
- Add insights
- Add hashtags
"""

========================================
⚡ STEP 4: MAKE IT COST EFFICIENT
========================================

IMPORTANT:

- max_results = 3 (not 10)
- search_depth = "basic"
- trim context to 1000 chars
- do NOT use raw_content
- avoid multiple calls per request

========================================
🔥 STEP 5: SMART CACHING (VERY IMPORTANT)
========================================

Add cache to avoid repeated API calls:

cache = {}

def get_cached_context(topic):
    if topic in cache:
        return cache[topic]

    context = get_latest_context(topic)
    cache[topic] = context
    return context

========================================
🚀 STEP 6: FALLBACK (NO API WASTE)
========================================

If Tavily fails:

if not context:
    context = "General knowledge about the topic"

========================================
🎯 FINAL RESULT
========================================

Flow:

User Topic
   ↓
Tavily (small, latest data)
   ↓
Filtered Context
   ↓
LLM (generate viral post)
   ↓
Frontend display

========================================
OUTPUT
========================================
Return only updated backend integration code.
No explanation.
```

### Prompt 159
```txt
Act as a senior AI engineer building a production-grade RAG pipeline.

TASK:
Integrate Tavily Search API into my AI Tech Creator app to fetch latest world data, then pass it to LLM for generating high-quality viral posts.

STRICT RULES:
- Minimize API usage (cost optimization)
- Fetch only SMALL + RELEVANT data
- Ensure LATEST information
- DO NOT flood tokens
- DO NOT break existing logic

========================================
🧠 STEP 1: ADD TAVILY CLIENT
========================================

Install:
pip install tavily-python

Code:

from tavily import TavilyClient

tavily = TavilyClient(api_key=os.getenv("TAVILY_API_KEY"))

========================================
🧠 STEP 2: OPTIMIZED SEARCH FUNCTION
========================================

def get_latest_context(topic):
    try:
        response = tavily.search(
            query=topic,
            max_results=3,              # LIMIT results (cost saving)
            search_depth="basic",       # cheaper than advanced
            include_answer=True,        # short summary
            include_raw_content=False,  # avoid large data
            topic="news",               # focus on latest
            time_range="day"            # latest events only
        )

        # Extract only useful text
        answer = response.get("answer", "")
        results = response.get("results", [])

        snippets = " ".join([r.get("content", "") for r in results])

        # FINAL SMALL CONTEXT
        context = f"{answer}\n{snippets}"

        return context[:1000]  # HARD LIMIT (token control)

    except Exception as e:
        print("Tavily error:", e)
        return ""

========================================
🧠 STEP 3: USE IN YOUR AGENT
========================================

Before LLM call:

context = get_latest_context(user_topic)

prompt = f"""
You are a viral content creator AI.

Use the latest real-world information below:

{context}

Now create a highly engaging, short, viral post about:
{user_topic}

Rules:
- Make it mind-blowing
- Use hook in first line
- Keep it concise
- Add insights
- Add hashtags
"""

========================================
⚡ STEP 4: MAKE IT COST EFFICIENT
========================================

IMPORTANT:

- max_results = 3 (not 10)
- search_depth = "basic"
- trim context to 1000 chars
- do NOT use raw_content
- avoid multiple calls per request

========================================
🔥 STEP 5: SMART CACHING (VERY IMPORTANT)
========================================

Add cache to avoid repeated API calls:

cache = {}

def get_cached_context(topic):
    if topic in cache:
        return cache[topic]

    context = get_latest_context(topic)
    cache[topic] = context
    return context

========================================
🚀 STEP 6: FALLBACK (NO API WASTE)
========================================

If Tavily fails:

if not context:
    context = "General knowledge about the topic"

========================================
🎯 FINAL RESULT
========================================

Flow:

User Topic
   ↓
Tavily (small, latest data)
   ↓
Filtered Context
   ↓
LLM (generate viral post)
   ↓
Frontend display

========================================
OUTPUT
========================================
Return only updated backend integration code.
No explanation.
```

### Prompt 160
```txt
Act as a senior AI backend engineer.

Fix repetition, slow response, formatting, and improve Tavily usage.

STRICT RULES:
- Do NOT break existing API structure
- Improve logic only
- Keep Tavily cost low
- Ensure different output EVERY time

========================================
🔥 1. FIX REPEATED OUTPUT (CRITICAL)
========================================

MODIFY cache logic:

Instead of:
context = get_cached_context(topic)

USE:

context = get_latest_context(topic)  # always fresh

AND add randomness:

context += f"\nVariation seed: {random.randint(1,100000)}"

----------------------------------------

========================================
⚡ 2. INSTANT FIRST RESPONSE (VERY IMPORTANT)
========================================

MODIFY manual_generate:

RETURN fast placeholder immediately:

return {
  "success": True,
  "post": f"🔥 Generating viral content on {topic}...",
  "topic": topic
}

AND run real generation in background:

asyncio.create_task(post_generation(topic))

----------------------------------------

========================================
🧠 3. STRONG ANTI-REPETITION PROMPT
========================================

REPLACE this:

"You MUST NOT generate a post that sounds similar..."

WITH:

"You MUST generate a COMPLETELY DIFFERENT post.
Use a new angle, new hook, new structure.

Strictly avoid:
- Similar opening line
- Same examples
- Same sentence patterns

If similar → REWRITE COMPLETELY."

----------------------------------------

========================================
🚀 4. REMOVE BAD LINE BREAK LOGIC
========================================

REMOVE THIS:

content = content.replace(". ", ".\n")

DO NOT TOUCH content formatting.

----------------------------------------

========================================
🔥 5. IMPROVE TAVILY QUALITY (SMART)
========================================

MODIFY:

time_range="day"

TO:

time_range="hour"

AND:

max_results=2

----------------------------------------

========================================
⚡ 6. ADD CONTENT VARIATION ENGINE
========================================

Before prompt:

tone = random.choice(["bold", "storytelling", "controversial", "minimal"])

Add in prompt:

"Tone: {tone}"

----------------------------------------

========================================
💥 7. FORCE UNIQUE OUTPUT CHECK
========================================

After generation:

if content in recent_texts:
    print("Duplicate detected → regenerating...")
    regenerate again

----------------------------------------

========================================
⏳ 8. FIX DELAY ISSUE
========================================

REDUCE sleep:

await asyncio.sleep(7200)

TO:

await asyncio.sleep(45)

----------------------------------------

========================================
🎯 RESULT AFTER FIX
========================================

✔ Instant response ⚡  
✔ Always new content 🔥  
✔ No repetition 🚫  
✔ Clean formatting ✅  
✔ Faster Tavily usage 💰  
✔ Better viral quality 🚀  

----------------------------------------

OUTPUT:
Return only updated modified functions:
- post_generation
- manual_generate
- get_latest_context
```

### Prompt 161
```txt
Act as a senior DevOps + Git engineer.

TASK:
Verify whether the latest backend changes (Tavily integration, repetition fix, formatting fix, async generation) are pushed to GitHub. If not, commit and push them properly.

========================================
🎯 GOAL
========================================
- Ensure all latest code is saved
- Ensure GitHub repo is fully updated
- Ensure deployment (Render/Vercel) triggers

========================================
🔍 STEP 1: CHECK GIT STATUS
========================================

Run:
git status

IF output contains:
"nothing to commit, working tree clean"

→ Code is already committed

ELSE:
→ There are uncommitted changes

========================================
📝 STEP 2: COMMIT CHANGES (IF NEEDED)
========================================

Run:

git add .

git commit -m "Final production fix: Tavily integration, anti-repetition engine, instant response, formatting fixes"

========================================
🚀 STEP 3: VERIFY BRANCH
========================================

Run:
git branch

IF not on main:
git checkout main

========================================
⬆️ STEP 4: PUSH TO GITHUB
========================================

Run:
git push origin main

========================================
🔐 STEP 5: HANDLE AUTH ERRORS
========================================

IF push fails:

Check remote:
git remote -v

Fix remote if needed:
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

Then retry:
git push origin main

========================================
🌐 STEP 6: VERIFY GITHUB UPDATE
========================================

- Open GitHub repo
- Confirm latest commit message exists
- Confirm updated files (agent.py, Tavily integration)

========================================
🚀 STEP 7: VERIFY DEPLOYMENT (RENDER)
========================================

- Go to Render dashboard
- Check "Deploy Logs"
- Confirm new build triggered
- Wait until status = LIVE

========================================
✅ SUCCESS CRITERIA
========================================

✔ Git status clean  
✔ Latest commit visible  
✔ GitHub updated  
✔ Deployment triggered  

========================================
OUTPUT
========================================

Return:
- git status result
- commit confirmation (if done)
- push confirmation
- branch name
- deployment status (if detected)
```

### Prompt 162
```txt
Act as a senior FastAPI backend engineer.

Fix the runtime error:

TypeError: cannot use 'tuple' as a dict key (unhashable type: 'dict')

This error occurs when rendering:
templates.TemplateResponse("index.html", {"request": request})

========================================
🎯 ROOT CAUSE
========================================
The Jinja2Templates object is incorrectly initialized.
The "directory" argument is not a string (likely dict or tuple).

========================================
🛠️ STEP 1: FIX TEMPLATE CONFIG
========================================

Find this line:

templates = Jinja2Templates(...)

REPLACE it with EXACTLY:

from fastapi.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates")

IMPORTANT:
- directory MUST be a string
- Do NOT pass dict, tuple, or list

========================================
📁 STEP 2: VERIFY PROJECT STRUCTURE
========================================

Ensure:

/project-root
  ├── main.py
  ├── templates/
        └── index.html

IF index.html is NOT inside templates folder:
→ Move it there

========================================
🧠 STEP 3: VERIFY ROUTE
========================================

Ensure this route exists:

from fastapi import Request

@app.get("/")
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

========================================
🚫 ALTERNATIVE CASE (IMPORTANT)
========================================

IF index.html is inside "static/" folder instead:

THEN replace route with:

from fastapi.responses import FileResponse

@app.get("/")
def root():
    return FileResponse("static/index.html")

========================================
🧹 STEP 4: REMOVE WRONG CODE
========================================

REMOVE any of these if present:

templates = Jinja2Templates(directory={"templates"})
templates = Jinja2Templates(directory=("templates", {}))
templates = Jinja2Templates(directory=["templates"])

========================================
✅ STEP 5: TEST LOCALLY
========================================

Run:
uvicorn main:app --reload

Open:
http://127.0.0.1:8000

Ensure:
- No crash
- index.html loads

========================================
🚀 STEP 6: COMMIT & PUSH
========================================

Run:

git add .
git commit -m "Fix Jinja2Templates directory issue and template rendering error"
git push origin main

========================================
🌐 STEP 7: VERIFY RENDER DEPLOY
========================================

- Go to Render dashboard
- Wait for new deploy
- Check logs → no error
- Open live URL

========================================
✅ SUCCESS CRITERIA
========================================

✔ No TypeError  
✔ index.html renders  
✔ FastAPI route works  
✔ Deployment successful  

========================================
OUTPUT
========================================

Return:
- Updated code snippet
- Confirmation of fix
- Git commit status
- Deployment status
```

### Prompt 163
```txt
Fix frontend text rendering issue.

Problem:
Post content contains newline characters (\n) but UI displays everything in one line.

Solution:

1. Find component where post text is rendered

2. Apply CSS:
white-space: pre-line;

Example:

.post-text {
  white-space: pre-line;
}

3. Ensure post is rendered inside this class

4. Do NOT modify backend formatting

5. Verify:
- Multi-line output appears correctly
- Each sentence on new line

6. Commit and push:

git add .
git commit -m "Fix multiline post rendering using CSS white-space pre-line"
git push origin main
```

### Prompt 164
```txt
Act as a senior React + Vercel deployment engineer.

Fix the Vercel build failure:

Error:
Command "npm run build" exited with 1

========================================
🎯 GOAL
========================================
Fix frontend build and make deployment successful.

========================================
🔍 STEP 1: CHECK BUILD ERROR
========================================

Open Vercel Logs tab.

Identify exact error:
- SyntaxError
- Module not found
- CSS issue
- JSX issue

========================================
🛠️ STEP 2: FIX COMMON ISSUES
========================================

1. JSX ERROR CHECK:
Ensure no invalid syntax like:

<div className="post-text">{post}</div>

✔ Correct JSX only

----------------------------------------

2. CSS FIX (IMPORTANT):

If using plain CSS:

.post-text {
  white-space: pre-line;
}

Ensure:
- File is imported correctly
- No syntax error

----------------------------------------

3. IF USING TAILWIND:

REPLACE:

className="post-text"

WITH:

className="whitespace-pre-line"

----------------------------------------

4. CHECK IMPORTS:

Ensure no missing imports like:

import "./styles.css"

----------------------------------------

5. CHECK FILE PATHS:

Ensure no broken imports:
- components/Post.jsx
- styles.css

----------------------------------------

6. REMOVE INVALID CODE:

Remove any:
- console.log inside JSX
- broken map functions
- undefined variables

========================================
🧪 STEP 3: TEST LOCALLY
========================================

Run:

npm install
npm run build

Ensure:
✔ No errors
✔ Build successful

========================================
🚀 STEP 4: COMMIT & PUSH
========================================

git add .
git commit -m "Fix Vercel build error (CSS + JSX fix)"
git push origin main

========================================
🌐 STEP 5: VERIFY DEPLOYMENT
========================================

- Vercel auto deploys
- Status should be: READY ✅

========================================
✅ SUCCESS CRITERIA
========================================

✔ Build passes  
✔ No syntax errors  
✔ UI loads correctly  
✔ Multi-line posts render properly  

========================================
OUTPUT
========================================

Return:
- Fixed file(s)
- Error found
- Build status
- Deployment status
```

### Prompt 165
```txt
Act as a viral content creator for LinkedIn and social media.

========================================
🎯 GOAL
========================================
Generate HIGH-QUALITY viral posts with:

- 5 to 7 SHORT lines
- Each line separated properly (real newline, not \n)
- Strong hook in first line
- Easy readable format
- Professional + engaging tone

========================================
🧠 CONTENT STRUCTURE (MANDATORY)
========================================

Line 1 → Hook (attention grabbing)
Line 2 → Insight / trend
Line 3 → Real-world relevance
Line 4 → Advice or takeaway
Line 5 → Future / opportunity
(Optional Line 6–7 → Bonus insight)

========================================
📌 FORMAT RULES (VERY IMPORTANT)
========================================

- DO NOT return single paragraph
- DO NOT use "\\n"
- Use REAL line breaks
- Each sentence MUST be on a new line
- Keep each line short (max 12–15 words)

========================================
🏷️ HASHTAGS
========================================

At the end, add 3–5 hashtags like:
#AI #Technology #Innovation #Career

========================================
📥 INPUT
========================================

Topic: {topic}

========================================
📤 OUTPUT EXAMPLE
========================================

AI is changing the world faster than ever.

Every industry is being reshaped by automation.
Skills are becoming more important than degrees.
Practical knowledge is the new currency.
Those who adapt will lead the future.
Those who don’t will struggle to survive.

#AI #Tech #Future

========================================
🚫 STRICT RULES
========================================

- Minimum 5 lines
- Maximum 7 lines
- Clean formatting only
- No paragraph block

========================================
OUTPUT ONLY THE FINAL POST
========================================
```

### Prompt 166
```txt
Act as a viral content creator for LinkedIn and social media.

========================================
🎯 GOAL
========================================
Generate HIGH-QUALITY viral posts with:

- 5 to 7 SHORT lines
- Each line separated properly (real newline, not \n)
- Strong hook in first line
- Easy readable format
- Professional + engaging tone

========================================
🧠 CONTENT STRUCTURE (MANDATORY)
========================================

Line 1 → Hook (attention grabbing)
Line 2 → Insight / trend
Line 3 → Real-world relevance
Line 4 → Advice or takeaway
Line 5 → Future / opportunity
(Optional Line 6–7 → Bonus insight)

========================================
📌 FORMAT RULES (VERY IMPORTANT)
========================================

- DO NOT return single paragraph
- DO NOT use "\\n"
- Use REAL line breaks
- Each sentence MUST be on a new line
- Keep each line short (max 12–15 words)

========================================
🏷️ HASHTAGS
========================================

At the end, add 3–5 hashtags like:
#AI #Technology #Innovation #Career

========================================
📥 INPUT
========================================

Topic: {topic}

========================================
📤 OUTPUT EXAMPLE
========================================

AI is changing the world faster than ever.

Every industry is being reshaped by automation.
Skills are becoming more important than degrees.
Practical knowledge is the new currency.
Those who adapt will lead the future.
Those who don’t will struggle to survive.

#AI #Tech #Future

========================================
🚫 STRICT RULES
========================================

- Minimum 5 lines
- Maximum 7 lines
- Clean formatting only
- No paragraph block

========================================
OUTPUT ONLY THE FINAL POST
========================================
```

### Prompt 167
```txt
Act as a senior FastAPI + AI backend engineer.

Fix the issue where AI posts are not showing actual generated content,
and instead showing placeholder text like:
"Generating viral content on youtube..."

========================================
🎯 GOAL
========================================

Ensure that:
✔ LLM generates real structured content (5–7 lines)
✔ That content is returned to frontend
✔ Placeholder text is completely removed

========================================
🔍 STEP 1: FIND ROOT ISSUE
========================================

Search in backend for:

"Generating viral content"

This is likely hardcoded like:

return {
    "content": f"Generating viral content on {topic}..."
}

❌ REMOVE THIS COMPLETELY

----------------------------------------

Also check:

- agent loop
- scheduler
- post creation function

========================================
🛠️ STEP 2: FIX LLM CALL
========================================

Ensure LLM is actually called:

post = llm.invoke(prompt)

OR

post = chain.invoke({"topic": topic})

----------------------------------------

Then extract text properly:

content = post.content if hasattr(post, "content") else str(post)

----------------------------------------

Then CLEAN it:

content = content.strip()

========================================
🧠 STEP 3: USE VIRAL PROMPT
========================================

Replace old prompt with:

prompt = f"""
Act as a viral LinkedIn content creator.

Write a post about: {topic}

Rules:
- 5 to 7 lines
- Each line MUST be on new line
- Short lines only
- No paragraph
- No \\n (use real newlines)
- Strong hook in first line

End with 3-5 hashtags.

Output only final post.
"""

========================================
📤 STEP 4: RETURN CORRECT DATA
========================================

Replace response with:

return {
    "content": content,
    "tags": extract_tags(content),
    "timestamp": datetime.utcnow().isoformat()
}

----------------------------------------

❌ DO NOT return placeholder text
❌ DO NOT override content later

========================================
🔄 STEP 5: CHECK AGENT LOOP
========================================

If using loop like:

while True:
    generate_post()

Ensure:

post = generate_post()

posts.append(post)

----------------------------------------

NOT:

posts.append("Generating...")

========================================
🧪 STEP 6: TEST LOCALLY
========================================

Run:

uvicorn main:app --reload

Call API:

/generate?topic=AI

----------------------------------------

Expected:

✔ 5–7 line formatted post
✔ No placeholder text

========================================
🚀 STEP 7: COMMIT & PUSH
========================================

git add .
git commit -m "Fix AI post generation (remove placeholder, return LLM output)"
git push origin main

========================================
🌐 STEP 8: VERIFY DEPLOYMENT
========================================

- Open Vercel app
- Click "Run Agent"

----------------------------------------

Expected:

✔ Real multi-line content
✔ Clean formatting
✔ Like previous working version

========================================
✅ SUCCESS CRITERIA
========================================

✔ No "Generating..." text  
✔ LLM content visible  
✔ 5–7 lines output  
✔ UI formatted properly  

========================================
OUTPUT
========================================

Return:
- Fixed backend function
- Where bug was
- Sample API response
- Deployment status
```

### Prompt 168
```txt
Act as a senior FastAPI + LangChain backend engineer.

The app is NOT returning LLM output.
It is still returning placeholder text:
"Generating viral content on youtube..."

This means the wrong function is being executed.

========================================
🎯 GOAL
========================================

Completely remove placeholder flow and ensure ONLY LLM output is used.

========================================
🚨 CRITICAL TASK (DO THIS FIRST)
========================================

Search ENTIRE PROJECT for:

"Generating viral content"

DELETE EVERY occurrence of this string.

----------------------------------------

Also search for:

return f"Generating viral content on {topic}"

DELETE IT.

========================================
🔍 STEP 1: FIND ACTIVE FUNCTION
========================================

Locate the function actually used by:

- /generate endpoint
- agent loop
- scheduler

Example:

@app.get("/generate")
def generate():
    ...

OR

def run_agent():
    ...

----------------------------------------

PRINT DEBUG:

print("FUNCTION CALLED")

to confirm correct function is running.

========================================
🛠️ STEP 2: FORCE LLM USAGE
========================================

Replace entire function with:

def generate_post(topic: str):

    prompt = f"""
Write a viral LinkedIn post about {topic}

Rules:
- 5 to 7 lines
- Each line on new line
- Short sentences
- No paragraph
- Strong hook

Add 3-5 hashtags at end.
"""

    response = llm.invoke(prompt)

    content = response.content if hasattr(response, "content") else str(response)

    return {
        "content": content.strip()
    }

========================================
🚫 STEP 3: REMOVE OLD FLOW
========================================

DELETE any:

- fallback text
- dummy posts
- static return values
- mock data

========================================
🔄 STEP 4: FIX AGENT LOOP
========================================

Ensure:

post = generate_post(topic)

posts.append(post)

----------------------------------------

NOT:

posts.append("Generating...")

========================================
🧪 STEP 5: DEBUG OUTPUT
========================================

Before return, add:

print("FINAL OUTPUT:", content)

Run locally and verify real content prints.

========================================
🚀 STEP 6: COMMIT CLEAN FIX
========================================

git add .
git commit -m "Remove placeholder and fix LLM post generation"
git push origin main

========================================
🌐 STEP 7: VERIFY
========================================

Click "Run Agent"

You MUST see:
✔ 5–7 lines post
✔ No placeholder text

========================================
✅ SUCCESS
========================================

✔ Real AI output
✔ Multi-line formatting
✔ Working feed

========================================
OUTPUT
========================================

Return:
- File where bug existed
- Fixed function
- Sample output
- Confirmation LLM is used
```

### Prompt 169
```txt
Act as a senior FastAPI + LangChain backend engineer.

The app is NOT returning LLM output.
It is still returning placeholder text:
"Generating viral content on youtube..."

This means the wrong function is being executed.

========================================
🎯 GOAL
========================================

Completely remove placeholder flow and ensure ONLY LLM output is used.

========================================
🚨 CRITICAL TASK (DO THIS FIRST)
========================================

Search ENTIRE PROJECT for:

"Generating viral content"

DELETE EVERY occurrence of this string.

----------------------------------------

Also search for:

return f"Generating viral content on {topic}"

DELETE IT.

========================================
🔍 STEP 1: FIND ACTIVE FUNCTION
========================================

Locate the function actually used by:

- /generate endpoint
- agent loop
- scheduler

Example:

@app.get("/generate")
def generate():
    ...

OR

def run_agent():
    ...

----------------------------------------

PRINT DEBUG:

print("FUNCTION CALLED")

to confirm correct function is running.

========================================
🛠️ STEP 2: FORCE LLM USAGE
========================================

Replace entire function with:

def generate_post(topic: str):

    prompt = f"""
Write a viral LinkedIn post about {topic}

Rules:
- 5 to 7 lines
- Each line on new line
- Short sentences
- No paragraph
- Strong hook

Add 3-5 hashtags at end.
"""

    response = llm.invoke(prompt)

    content = response.content if hasattr(response, "content") else str(response)

    return {
        "content": content.strip()
    }

========================================
🚫 STEP 3: REMOVE OLD FLOW
========================================

DELETE any:

- fallback text
- dummy posts
- static return values
- mock data

========================================
🔄 STEP 4: FIX AGENT LOOP
========================================

Ensure:

post = generate_post(topic)

posts.append(post)

----------------------------------------

NOT:

posts.append("Generating...")

========================================
🧪 STEP 5: DEBUG OUTPUT
========================================

Before return, add:

print("FINAL OUTPUT:", content)

Run locally and verify real content prints.

========================================
🚀 STEP 6: COMMIT CLEAN FIX
========================================

git add .
git commit -m "Remove placeholder and fix LLM post generation"
git push origin main

========================================
🌐 STEP 7: VERIFY
========================================

Click "Run Agent"

You MUST see:
✔ 5–7 lines post
✔ No placeholder text

========================================
✅ SUCCESS
========================================

✔ Real AI output
✔ Multi-line formatting
✔ Working feed

========================================
OUTPUT
========================================

Return:
- File where bug existed
- Fixed function
- Sample output
- Confirmation LLM is used
```

### Prompt 170
```txt
Act as a senior Full Stack Engineer (FastAPI + React + Tailwind).

Fix 3 major issues in AI Tech Creator:

1. "\n" showing instead of new lines
2. Post formatting not clean (needs styling + emojis + hashtags)
3. Add Copy + LinkedIn + Twitter share buttons

========================================
🎯 GOAL
========================================

✔ Proper multi-line formatted posts
✔ Clean UI like modern social feed
✔ Functional share buttons

========================================
🛠️ STEP 1: BACKEND FIX (CRITICAL)
========================================

Problem:
LLM output contains escaped newline "\\n"

Fix it:

After LLM response:

content = response.content if hasattr(response, "content") else str(response)

# FIX NEWLINES
content = content.replace("\\n", "\n")   # convert escaped → real newline
content = content.replace("\r", "").strip()

# REMOVE unwanted prefixes like [Twitter]
if content.startswith("["):
    content = content.split("]", 1)[-1].strip()

return {
    "content": content
}

----------------------------------------

🚫 DO NOT DO:
content.replace("\n", " ")

========================================
🧠 STEP 2: IMPROVE PROMPT (FORMAT + HASHTAGS)
========================================

Use this prompt:

prompt = f"""
Act as a viral LinkedIn content creator.

Write a post about {topic}

Rules:
- 5 to 7 lines
- Each line MUST be on a new line
- Add emoji at start of each line (optional but preferred)
- Short lines only
- No paragraph
- No \\n text
- Clean spacing

Add 4-6 relevant hashtags at end (new line)

Example:

🚀 AI is evolving faster than ever.

🔥 Industries are being reshaped daily.
📈 Skills matter more than degrees.
💡 Practical knowledge wins.

🌍 The future belongs to builders.

#AI #Technology #Innovation #Future

Return ONLY final post.
"""

========================================
🎨 STEP 3: FRONTEND FIX (SHOW NEWLINES)
========================================

In React component:

<div className="post-content">
  {post.content}
</div>

----------------------------------------

Add CSS:

.post-content {
  white-space: pre-line;   /* THIS FIXES NEWLINES */
  line-height: 1.7;
  font-size: 15px;
}

----------------------------------------

If using Tailwind:

className="whitespace-pre-line leading-relaxed"

========================================
🏷️ STEP 4: HASHTAG STYLING
========================================

Split hashtags:

const lines = post.content.split("\n");

Then detect hashtags:

{lines.map((line, i) => (
  <p key={i} className={line.startsWith("#") ? "text-purple-400 font-medium" : ""}>
    {line}
  </p>
))}

========================================
🔘 STEP 5: ADD ACTION BUTTONS
========================================

Add below each post:

<div className="flex gap-3 mt-4">

  <button onClick={() => copyToClipboard(post.content)}>
    📋 Copy
  </button>

  <button onClick={() => shareLinkedIn(post.content)}>
    🔗 LinkedIn
  </button>

  <button onClick={() => shareTwitter(post.content)}>
    🐦 Twitter
  </button>

</div>

----------------------------------------

Functions:

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function shareLinkedIn(text) {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function shareTwitter(text) {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

========================================
✨ STEP 6: UI POLISH
========================================

- Add spacing between lines
- Emojis at start of lines
- Hashtags in purple/blue
- Buttons styled with dark theme

========================================
🧪 STEP 7: TEST
========================================

Expected output:

🚀 YouTube will change forever.

🔥 Short content is dominating.
📉 Long videos are declining.
💡 Creators must adapt fast.

🌍 Future belongs to AI-native platforms.

#YouTube #AI #Content #Future

----------------------------------------

✔ No "\n" visible  
✔ Clean spacing  
✔ Styled hashtags  
✔ Buttons working  

========================================
🚀 STEP 8: COMMIT
========================================

git add .
git commit -m "Fix newline rendering + UI + share buttons"
git push origin main

========================================
✅ SUCCESS
========================================

✔ Proper newlines  
✔ Clean formatted posts  
✔ Hashtags styled  
✔ Copy + LinkedIn + Twitter working  

========================================
OUTPUT
========================================

Return:
- Updated backend code
- Updated frontend component
- Working buttons confirmation
```

### Prompt 171
```txt
Act as a senior Full Stack Engineer (FastAPI + React).

Fix newline rendering issue COMPLETELY and improve UI.

========================================
🚨 ROOT PROBLEM
========================================

Backend is returning escaped string:

"Hello\\nWorld"

Frontend shows:
Hello\nWorld

We need:
Hello
World

========================================
🛠️ STEP 1: BACKEND FIX (CRITICAL)
========================================

After LLM response:

content = response.content if hasattr(response, "content") else str(response)

----------------------------------------
🔥 FIX ESCAPED NEWLINES PROPERLY
----------------------------------------

import codecs

content = codecs.decode(content, "unicode_escape")

----------------------------------------
REMOVE unwanted tokens:
----------------------------------------

content = content.replace("\r", "").strip()

----------------------------------------
REMOVE headers like [Twitter]
----------------------------------------

if content.startswith("["):
    content = content.split("]", 1)[-1].strip()

----------------------------------------

return {
    "content": content
}

========================================
🎨 STEP 2: FRONTEND FIX (BEST METHOD)
========================================

DO NOT rely only on CSS.

----------------------------------------
Render with split:
----------------------------------------

const formattedText = post.content.split("\n");

<div className="post-content">
  {formattedText.map((line, index) => (
    <p key={index} className="mb-2">
      {line}
    </p>
  ))}
</div>

========================================
✨ STEP 3: BEAUTIFY POST (IMPORTANT)
========================================

Add styling:

.post-content p {
  line-height: 1.8;
  font-size: 15px;
  color: #e5e7eb;
}

----------------------------------------
Highlight hashtags:
----------------------------------------

{formattedText.map((line, index) => (
  <p key={index} className={line.startsWith("#") ? "text-purple-400 font-semibold" : "mb-2"}>
    {line}
  </p>
))}

========================================
🧠 STEP 4: FORCE CLEAN AI OUTPUT
========================================

Update prompt:

prompt = f"""
Write a viral LinkedIn post about {topic}

Rules:
- 5–7 lines
- Each line MUST be on new line
- NO \\n in output
- Use real line breaks
- Add emojis at start of lines
- Add 4-5 hashtags at end

Return ONLY final post.
"""

========================================
🔘 STEP 5: ADD ACTION BUTTONS
========================================

Add below post:

<div className="flex gap-3 mt-4">

<button onClick={() => navigator.clipboard.writeText(post.content)}>
📋 Copy
</button>

<button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(post.content)}`)}>
🔗 LinkedIn
</button>

<button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.content)}`)}>
🐦 Twitter
</button>

</div>

========================================
🧪 STEP 6: EXPECTED OUTPUT
========================================

🚀 YouTube will change forever.

🔥 Short content is dominating.
📉 Long videos are declining.
💡 Creators must adapt fast.

🌍 Future belongs to AI platforms.

#YouTube #AI #Content #Future

----------------------------------------

✔ NO \n visible  
✔ Proper spacing  
✔ Styled text  
✔ Hashtags colored  

========================================
🚀 STEP 7: COMMIT
========================================

git add .
git commit -m "Fix escaped newline + UI formatting"
git push origin main

========================================
✅ SUCCESS
========================================

✔ Clean posts  
✔ No \n  
✔ Professional UI  
✔ Share buttons working  

========================================
OUTPUT
========================================

Return:
- Backend fix code
- Frontend render code
- Sample output
```

### Prompt 172
```txt
Act as a senior Full Stack Engineer (FastAPI + React).

The newline issue is STILL not fully resolved.
Even after decoding, some escaped sequences like "\n" and prefixes like "[Twitter]" remain.

Fix this COMPLETELY and ensure production-level clean output + UI.

========================================
🎯 GOAL
========================================

✔ ZERO "\n" visible anywhere  
✔ Proper multiline rendering  
✔ Clean, beautiful social media style UI  
✔ No unwanted prefixes ([Twitter], ---, etc.)  

========================================
🛠️ STEP 1: HARD CLEAN BACKEND (FINAL FIX)
========================================

Replace your cleaning logic with THIS EXACT code:

import re
import codecs

content = response.content if hasattr(response, "content") else str(response)

# Step 1: Decode escaped characters
try:
    content = codecs.decode(content, "unicode_escape")
except:
    pass

# Step 2: Replace ANY remaining escaped \n manually
content = content.replace("\\n", "\n")

# Step 3: Remove unwanted prefixes like [Twitter], [LinkedIn]
content = re.sub(r"^\[.*?\]\s*", "", content)

# Step 4: Remove separators like ---
content = re.sub(r"^-{2,}", "", content)

# Step 5: Remove extra blank lines
content = re.sub(r"\n\s*\n", "\n\n", content)

# Step 6: Final cleanup
content = content.replace("\r", "").strip()

return {
    "content": content
}

========================================
🎨 STEP 2: FRONTEND (FORCE PERFECT RENDER)
========================================

DO NOT trust raw string rendering.

----------------------------------------

const lines = post.content
  .split("\n")
  .map(line => line.trim())
  .filter(line => line.length > 0);

----------------------------------------

Render:

<div className="space-y-2 text-[15px] leading-[1.8] text-gray-200">
  {lines.map((line, index) => (
    <p
      key={index}
      className={
        line.startsWith("#")
          ? "text-purple-400 font-semibold mt-3"
          : "flex items-start gap-2"
      }
    >
      {line}
    </p>
  ))}
</div>

========================================
✨ STEP 3: MAKE IT LOOK PREMIUM (IMPORTANT)
========================================

Enhance UI:

- Add emoji spacing
- Add padding between lines
- Highlight hashtags
- Add smooth spacing

Optional:

className="bg-[#0f172a] p-4 rounded-xl shadow-lg"

========================================
🧠 STEP 4: FORCE CLEAN AI OUTPUT (VERY IMPORTANT)
========================================

Update prompt STRICTLY:

prompt = f"""
Write a viral LinkedIn post about {topic}

STRICT RULES:
- 5 to 7 lines ONLY
- Each line MUST be on a real new line (no \\n)
- Do NOT include [Twitter], [LinkedIn], or labels
- Do NOT include --- separators
- Use clean formatting
- Add emojis
- Add 4–5 hashtags at the end

Return ONLY the final formatted post.
"""

========================================
🔘 STEP 5: ACTION BUTTONS (KEEP SAME)
========================================

✔ Copy
✔ LinkedIn share
✔ Twitter share

(Already implemented — no change needed)

========================================
🧪 STEP 6: FINAL OUTPUT SHOULD LOOK LIKE
========================================

🚀 YouTube is evolving faster than ever.

🔥 Short content is taking over.
📉 Long videos are losing attention.
💡 Creators must adapt quickly.

🌍 The future belongs to smart creators.

#YouTube #AI #Content #Future

----------------------------------------

✔ No \n anywhere  
✔ No [Twitter]  
✔ No ---  
✔ Clean spacing  
✔ Premium UI  

========================================
🚀 STEP 7: COMMIT
========================================

git add .
git commit -m "Final fix: remove escaped newline + clean UI"
git push origin main

========================================
✅ SUCCESS
========================================

✔ Clean posts  
✔ No formatting bugs  
✔ Production-ready UI  

========================================
OUTPUT
========================================

Return:
- Cleaned backend code
- Updated frontend render
- Final sample output
```

### Prompt 173
```txt
Act as a senior Full Stack Engineer (FastAPI + React).

Fix text encoding issue causing broken characters like:
donâ€™t, isnâ€™t, wonâ€™t

Also upgrade UI buttons to premium modern design.

========================================
🚨 ROOT PROBLEM
========================================

Unicode characters (’, “, —) are breaking after decoding.

Reason:
Using codecs.decode(..., "unicode_escape") is corrupting UTF-8 text.

========================================
🛠️ STEP 1: BACKEND FIX (REMOVE WRONG DECODING)
========================================

❌ REMOVE THIS COMPLETELY:
content = codecs.decode(content, "unicode_escape")

----------------------------------------

✅ REPLACE WITH SAFE CLEANING:

import re

content = response.content if hasattr(response, "content") else str(response)

# Fix escaped newlines ONLY
content = content.replace("\\n", "\n")

# Remove unwanted prefixes
content = re.sub(r"^\[.*?\]\s*", "", content)

# Remove separators like ---
content = re.sub(r"-{2,}", "", content)

# Fix encoding issues manually
content = content.encode("utf-8", "ignore").decode("utf-8")

# Clean spacing
content = re.sub(r"\n\s*\n", "\n\n", content)

content = content.strip()

return {
    "content": content
}

========================================
🎨 STEP 2: FRONTEND (KEEP SAME BUT IMPROVE)
========================================

const lines = post.content
  .split("\n")
  .map(line => line.trim())
  .filter(line => line.length > 0);

========================================
✨ STEP 3: PREMIUM BUTTON DESIGN
========================================

Replace buttons with THIS:

<div className="flex gap-3 mt-4">

<button className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:scale-105 transition">
📋 Copy
</button>

<button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:scale-105 transition">
🔗 LinkedIn
</button>

<button className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition">
🐦 Twitter
</button>

</div>

----------------------------------------
Add hover glow:
----------------------------------------

button:hover {
  box-shadow: 0 0 10px rgba(99,102,241,0.6);
}

========================================
✨ STEP 4: EXTRA UI POLISH
========================================

Post card:

className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-5 rounded-xl shadow-xl border border-gray-800"

========================================
🧪 FINAL OUTPUT SHOULD LOOK LIKE
========================================

YouTube just hit 2 billion users.

90% of people consume but only 1% create.

The gap between watchers and builders is where wealth is built.

Every viral video started as someone’s ignored first upload.

The algorithm doesn’t care about your degree — it rewards consistency.

Your future self won’t remember what you watched — but what you built.

#YouTube #CreatorEconomy #Growth #AI

----------------------------------------

✔ No boxes  
✔ Clean text  
✔ Proper quotes  
✔ Premium UI  
✔ Smooth buttons  

========================================
🚀 COMMIT
========================================

git add .
git commit -m "Fix encoding issue + premium UI buttons"
git push origin main
```

### Prompt 174
```txt
Act as a senior Full Stack Engineer (FastAPI + React).

Fix Unicode encoding issue COMPLETELY and replace Twitter button with X (black theme).

========================================
🚨 ROOT PROBLEM
========================================

Text like:
donâ€™t, isnâ€™t, YouTubeâ€™s

This means UTF-8 text is being incorrectly decoded.

Main mistake:
Using wrong decoding (unicode_escape / manual encoding)

========================================
🛠️ STEP 1: BACKEND FIX (CRITICAL)
========================================

REMOVE ANY OF THESE IF PRESENT:
- codecs.decode(...)
- .encode().decode() chains

----------------------------------------

✅ USE CLEAN SAFE VERSION:

import re

content = response.content if hasattr(response, "content") else str(response)

# Fix ONLY escaped newlines
content = content.replace("\\n", "\n")

# Remove prefixes like [Twitter]
content = re.sub(r"^\[.*?\]\s*", "", content)

# Remove --- separators
content = re.sub(r"-{2,}", "", content)

# Normalize unicode safely
content = content.strip()

return {
    "content": content
}

----------------------------------------

⚠️ IMPORTANT:
DO NOT use:
- unicode_escape
- latin-1 decoding
- manual utf-8 encode/decode

Let FastAPI return UTF-8 naturally.

========================================
🛠️ STEP 2: FASTAPI RESPONSE FIX
========================================

Ensure correct encoding:

from fastapi.responses import JSONResponse

return JSONResponse(
    content={"content": content},
    media_type="application/json"
)

----------------------------------------

Also verify:

app = FastAPI()

# Add this if needed
@app.middleware("http")
async def force_utf8(request, call_next):
    response = await call_next(request)
    response.headers["Content-Type"] = "application/json; charset=utf-8"
    return response

========================================
🎨 STEP 3: FRONTEND FIX (IMPORTANT)
========================================

Ensure fetch is correct:

const res = await fetch("/api/...");
const data = await res.json();

----------------------------------------

Render safely:

const lines = data.content
  .split("\n")
  .map(line => line.trim())
  .filter(Boolean);

========================================
❌ DO NOT DO THIS:
========================================

- decodeURIComponent()
- atob()
- manual decoding

========================================
🎨 STEP 4: REPLACE TWITTER → X BUTTON (BLACK PREMIUM)
========================================

Replace Twitter button with:

<button
  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.content)}`)}
  className="px-4 py-2 rounded-lg bg-black text-white flex items-center gap-2 hover:scale-105 transition shadow-lg"
>
  ✖ X
</button>

----------------------------------------

OR ICON STYLE:

<button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition">
  𝕏 Share
</button>

========================================
✨ STEP 5: PREMIUM BUTTON DESIGN (ALL)
========================================

<div className="flex gap-3 mt-4">

<button className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition shadow">
📋 Copy
</button>

<button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition shadow">
🔗 LinkedIn
</button>

<button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition shadow">
𝕏 Share
</button>

</div>

========================================
✨ STEP 6: FINAL UI POLISH
========================================

Post card:

className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-5 rounded-xl shadow-xl border border-gray-800"

========================================
🧪 EXPECTED OUTPUT
========================================

What if YouTube’s biggest creators struggle tomorrow?

The algorithm is shifting away from ads.

Sponsorships will dominate unless you're in top 0.1%.

Short-form content will replace long-form budgets.

Start building outside platforms now.

#YouTube #CreatorEconomy #Growth

----------------------------------------

✔ No â€™  
✔ No boxes  
✔ Clean quotes  
✔ Premium buttons  
✔ X instead of Twitter  

========================================
🚀 COMMIT
========================================

git add .
git commit -m "Fix UTF-8 encoding + replace Twitter with X"
git push origin main
```

### Prompt 175
```txt
Act as a senior Full Stack Engineer.

The UTF-8 issue STILL exists even after cleanup.
Characters like ’ are showing as â€™.

This means encoding corruption is happening BEFORE rendering.

Fix this at ROOT LEVEL permanently.

========================================
🚨 ROOT CAUSE
========================================

This issue happens when:
UTF-8 text is interpreted as Latin-1 (ISO-8859-1)

Example:
’ (UTF-8) → â€™ (wrong decoding)

========================================
🛠️ STEP 1: FORCE UTF-8 NORMALIZATION (FINAL FIX)
========================================

Add this function in backend:

def fix_encoding(text: str) -> str:
    try:
        return text.encode('latin1').decode('utf-8')
    except:
        return text

----------------------------------------

Now APPLY it:

content = response.content if hasattr(response, "content") else str(response)

# Fix encoding FIRST
content = fix_encoding(content)

# Then clean
content = content.replace("\\n", "\n")

import re
content = re.sub(r"^\[.*?\]\s*", "", content)
content = re.sub(r"-{2,}", "", content)

content = content.strip()

return {"content": content}

========================================
🛠️ STEP 2: VERIFY LLM OUTPUT (VERY IMPORTANT)
========================================

Ensure LLM is NOT returning bytes.

If using LangChain / OpenAI:

content = str(response.content)

NOT:
response.content.decode()

========================================
🛠️ STEP 3: FRONTEND SAFETY (EXTRA PROTECTION)
========================================

Add fallback fix in React:

const fixEncoding = (text) => {
  try {
    return decodeURIComponent(escape(text));
  } catch {
    return text;
  }
};

const safeContent = fixEncoding(data.content);

const lines = safeContent
  .split("\n")
  .map(line => line.trim())
  .filter(Boolean);

========================================
🎨 STEP 4: PREMIUM BUTTON DESIGN (FINAL)
========================================

<div className="flex gap-3 mt-4">

<button className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:scale-105 transition shadow-lg">
📋 Copy
</button>

<button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:scale-105 transition shadow-lg">
🔗 LinkedIn
</button>

<button className="px-4 py-2 rounded-xl bg-black text-white border border-gray-700 hover:bg-gray-900 hover:scale-105 transition shadow-lg">
𝕏 Share
</button>

</div>

========================================
🧪 FINAL OUTPUT MUST BE
========================================

YouTube’s biggest creators are at risk.

The algorithm is shifting away from ads.

Sponsorships will dominate unless you're top 0.1%.

Short-form content is replacing long-form budgets.

Start building outside platforms now.

#YouTube #CreatorEconomy #Growth

----------------------------------------

✔ No â€™  
✔ No encoding issues  
✔ Perfect quotes  
✔ Clean UI  
✔ Premium buttons  

========================================
🚀 COMMIT
========================================

git add .
git commit -m "FINAL FIX: UTF-8 encoding resolved completely"
git push origin main
```

### Prompt 176
```txt
Act as a senior DevOps + Full Stack Engineer.

My deployed app on Vercel is showing:

DNS_PROBE_FINISHED_NXDOMAIN

This means the domain is not resolving and the site is completely down.

Fix this issue completely and make the app live again.

========================================
🚨 ROOT PROBLEM
========================================

The domain:
ai-tech-creator.vercel.app

is not reachable.

Possible reasons:
- Deployment failed
- Project deleted or renamed
- Wrong routing configuration
- Missing vercel.json
- Backend entrypoint issue

========================================
🛠️ STEP 1: VERIFY PROJECT STRUCTURE
========================================

Ensure project follows Vercel-compatible structure:

/api/index.py   ← FastAPI entrypoint (IMPORTANT)
/frontend/      ← React app (if separate)

OR if using backend folder:

/backend/main.py

========================================
🛠️ STEP 2: FIX VERCEL CONFIG
========================================

Create or update vercel.json:

{
  "routes": [
    {
      "src": "/(.*)",
      "dest": "backend/main.py"
    }
  ]
}

OR for serverless:

{
  "functions": {
    "api/index.py": {
      "runtime": "python3.11"
    }
  }
}

========================================
🛠️ STEP 3: FIX FASTAPI ENTRYPOINT
========================================

Ensure file exists:

backend/main.py

and contains:

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"status": "ok"}

========================================
🛠️ STEP 4: CHECK REQUIREMENTS
========================================

requirements.txt must include:

fastapi
uvicorn

========================================
🛠️ STEP 5: FORCE REDEPLOY
========================================

Run:

git add .
git commit -m "Fix deployment issue"
git push origin main

========================================
🛠️ STEP 6: VERCEL DASHBOARD FIX
========================================

- Go to Vercel Dashboard
- Open project
- Click "Redeploy"
- Check build logs

If project missing → recreate project from GitHub

========================================
🛠️ STEP 7: VERIFY LIVE URL
========================================

Use latest deployment URL like:

https://ai-tech-creator-xyz.vercel.app

NOT old cached domain

========================================
🧪 EXPECTED RESULT
========================================

✔ App loads successfully  
✔ No DNS error  
✔ API working  
✔ Frontend visible  

========================================
OUTPUT
========================================

Return:
- Fixed project structure
- vercel.json file
- Working deployment URL
- Any errors found in logs
```

### Prompt 177
```txt
Act as a senior DevOps + Full Stack Engineer.

My project is currently broken (Vercel shows DNS_PROBE_FINISHED_NXDOMAIN and site is down).

I do NOT want debugging right now.
I want to immediately restore the last working version and make the app live again.

========================================
🎯 GOAL
========================================

✔ Rollback last 2 commits  
✔ Restore last stable working code  
✔ Redeploy successfully on Vercel  
✔ Get working live URL  

========================================
🛠️ STEP 1: GIT ROLLBACK (CRITICAL)
========================================

Run:

git reset --hard HEAD~2
git push origin main --force

This will remove the last 2 broken commits.

========================================
🛠️ STEP 2: VERIFY PROJECT STRUCTURE
========================================

Ensure project returns to previous working structure.

Do NOT keep any newly added:
- vercel.json (if it was causing issues)
- api/index.py changes (if incorrect)
- encoding fixes using codecs or latin1

Restore original structure that was working before.

========================================
🛠️ STEP 3: CLEAN VERCEL CONFIG
========================================

If vercel.json exists and is incorrect → REMOVE it.

Only keep minimal working setup.

========================================
🛠️ STEP 4: FORCE REDEPLOY
========================================

After rollback, trigger deployment:

- Push changes (already done above)
- Go to Vercel Dashboard
- Click Redeploy

========================================
🛠️ STEP 5: VERIFY DEPLOYMENT
========================================

Ensure:
- Build completes successfully
- No Python/route errors
- Domain is assigned again

========================================
🧪 EXPECTED RESULT
========================================

✔ Site opens normally  
✔ No DNS error  
✔ Previous UI restored  
✔ API working  

========================================
OUTPUT
========================================

Return:
- Current commit status
- Confirmation rollback successful
- Working deployment URL
- Any remaining errors (if any)
```

### Prompt 178
```txt
Act as a senior AI Engineer + Technical Writer.

I want to create a PROMPTS.md file for my project submission.

This file must contain ALL prompts I used while building my project (AI Tech Creator).

========================================
🎯 GOAL
========================================

✔ Create a professional PROMPTS.md file  
✔ Collect all prompts used in development  
✔ Format them cleanly for hackathon submission  
✔ Save file in project root  

========================================
📁 FILE TO CREATE
========================================

Create file:

PROMPTS.md

========================================
🧠 CONTENT STRUCTURE
========================================

# AI Usage Log – Prompts

## 📌 Project Name:
AI Tech Creator

## 📌 Description:
This project was built using AI-assisted development with multiple prompts for backend, frontend, UI, debugging, and deployment.

---

## 🚀 1. Backend Development Prompts

(Add all prompts used for FastAPI, APIs, encoding fixes, etc)

Format:
### Prompt 1:
```txt
<actual prompt here>
```

### Prompt 179
```txt
i have to post that in website see third field
```

### Prompt 180
```txt
change the name of the prompt as antigravity prompt
```

### Prompt 181
```txt
give all prompts not 4-5 prompt
```

### Prompt 182
```txt
Act as a senior AI Engineer + Repo Automation Agent.

You are NOT allowed to generate dummy prompts.

You MUST extract the REAL prompts used in this project from:
- Chat history
- Code comments
- Git commit messages
- Backend logic (prompt templates)
- Frontend logic (content generation)

========================================
🚨 STRICT INSTRUCTION
========================================

❌ DO NOT create fake prompts  
❌ DO NOT write placeholders like "<actual prompt>"  
❌ DO NOT summarize  

✅ ONLY extract REAL prompts used during development  

If prompts are not found → search deeper in code and history.

========================================
🎯 TASK
========================================

1. Collect ALL prompts used in:
   - Backend (FastAPI, content generation)
   - Frontend (UI instructions, formatting)
   - Debugging (UTF-8 fix, newline fix)
   - Deployment (Vercel, DNS fix)
   - AI agent system prompt

2. Clean and format them

3. Create file:

PROMPTS.md

========================================
📁 FILE FORMAT
========================================

# AI Usage Log – Prompts

## Project: AI Tech Creator

## Description:
This project was built using AI prompts across backend, frontend, debugging, and deployment.

---

## Backend Prompts

### Prompt 1
```txt
<REAL PROMPT HERE>
```

