# Elite Polish Implementation Plan

This plan upgrades the Autonomous AI Creator to simulate high-end engineering decision-making, satisfying all the requirements for evaluator impact.

## Proposed Changes

### 1. Topic Competition & Logging
- **`topic_generator.py`**
  #### [MODIFY] `topic_generator.py`
  - Implement a new LLM-based `score_candidates(topics)` function returning structured JSON with `technical_depth`, `novelty`, and `real_world_relevance` scores (1-5) for each candidate.
- **`api.py`**
  #### [MODIFY] `api.py`
  - In `generate_and_store_post`, instead of instantly grabbing the first valid topic, collect up to 3 candidates (from Tavily or Internal).
  - Feed candidates through the scoring function.
  - Log `[CYCLE <id>] [CANDIDATE X SCORE] ...` for each.
  - Pick the topic with the highest aggregate score. Log `[CYCLE <id>] [SELECTED TOPIC] score=...`.

### 2. Rejection Justification Memory
- **`api.py`**
  #### [MODIFY] `api.py`
  - Initialize `agent["recent_rejections"] = []`.
  - When candidates lose the scoring phase, log `[REJECTED TOPIC] reason=...` and store them in `recent_rejections` (keeping the last 3).
  - Pass `recent_rejections` down to `generate_post`.

### 3. Human-like Post Structure & Micro-Opinions
- **`post_generator.py`**
  #### [MODIFY] `post_generator.py`
  - Update `generate_post` prompts to enforce:
    - **Opening**: strong opinion / contrarian hook
    - **Middle**: technical breakdown / failure insight
    - **Closing**: takeaway or warning
  - Add explicit rule: "Include at least ONE micro-opinion (disagreement with common practice, criticism of typical mistakes, etc.)."

### 4. Time Awareness in Rationale
- **`post_generator.py`**
  #### [MODIFY] `post_generator.py`
  - Update rationale generation prompt. Pass `recent_rejections` context.
  - Require the rationale to explicitly answer "This is trending now because..." or "This matters now due to recent developments..."
  - Include "Other trending topics were ignored because..." referencing the recent rejections.

### 5. Source Priority Logic
- **`tavily_client.py`**
  #### [MODIFY] `tavily_client.py`
  - In `fetch_trend_from_tavily` or `extract_raw_trend`, inspect the returned URL strings.
  - Apply positive weighting to `github`, `arxiv`, `engineering`, `blog`, `tech`, `incident`.
  - Reject or down-weight `marketing`, `listicle`, `top-10`, `forbes`, generic news domains.

### 6. Final Output Quality Check
- **`post_generator.py`**
  #### [MODIFY] `post_generator.py`
  - Update `score_post` to explicitly check:
    1. Does it sound like a summary? (Reject if true)
    2. Does it lack a strong opinion? (Reject if true)
    3. Does it lack technical depth? (Reject if true)
- **`api.py`**
  #### [MODIFY] `api.py`
  - Use these strict output quality checks before calling the final save.

## Verification Plan
1. Check logs to ensure scores and candidates are visible (`[CANDIDATE X SCORE]`).
2. Verify `recent_rejections` are being stored and passed into rationales.
3. Verify post text follows the new Opening/Middle/Closing structure.
4. Watch Uvicorn logs to ensure no crashes during the new LLM scoring loops.
