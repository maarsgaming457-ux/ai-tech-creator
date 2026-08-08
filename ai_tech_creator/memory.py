_used_topics = set()

def save_topic(topic: str, memory_state: dict = None) -> None:
    """Saves a topic to the memory set."""
    used_topics = memory_state.get("used_topics") if memory_state else _used_topics
    used_topics.add(topic.strip().lower())

def is_duplicate(topic: str, memory_state: dict = None) -> bool:
    """Checks if a topic has already been used (exact match or string overlap)."""
    used_topics = memory_state.get("used_topics") if memory_state else _used_topics
        
    t_clean = topic.strip().lower()
    if t_clean in used_topics:
        return True
        
    stopwords = {"the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "is", "are", "how", "why", "what"}
    words_topic = set(w for w in t_clean.split() if w not in stopwords)
    recent_topics = list(used_topics)[-10:]
    
    for r_topic in recent_topics:
        words_r = set(w for w in r_topic.split() if w not in stopwords)
        if len(words_topic) > 0 and len(words_r) > 0:
            overlap = len(words_topic & words_r) / min(len(words_topic), len(words_r))
            if overlap > 0.6:
                return True
                
    return False
