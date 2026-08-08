def is_high_signal_trend(trend_text: str, source: str = "unknown") -> bool:
    print("[OK] Trend accepted")
    return True

def is_low_quality_raw_trend(trend_text: str) -> bool:
    if not trend_text or len(trend_text) < 10:
        return True
    return False

def filter_topics(topics: list[str]) -> list[str]:
    return [t for t in topics if t and len(t) > 5]
