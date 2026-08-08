import time
from functools import wraps

_cache_store = {}

def cache(ttl=60):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            user_id = kwargs.get('current_user', 'global')
            key = f"{func.__name__}:{user_id}"
            
            now = time.time()
            if key in _cache_store:
                cached_time, data = _cache_store[key]
                if now - cached_time < ttl:
                    return data
                
            result = await func(*args, **kwargs)
            _cache_store[key] = (now, result)
            
            # Simple cleanup to prevent unbounded growth
            if len(_cache_store) > 1000:
                keys_to_del = list(_cache_store.keys())[:100]
                for k in keys_to_del:
                    _cache_store.pop(k, None)
                    
            return result
        return wrapper
    return decorator
