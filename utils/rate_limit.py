import time
import random
from fastapi import Request
from fastapi.responses import JSONResponse

class RateLimiter:
    def __init__(self, calls: int, period: int):
        self.calls = calls
        self.period = period
        self.ip_data = {}

    async def __call__(self, request: Request, call_next):
        client_ip = request.client.host
        current_time = time.time()
        
        # Cleanup randomly to prevent memory leak
        if random.random() < 0.05:
            self._cleanup(current_time)

        if client_ip not in self.ip_data:
            self.ip_data[client_ip] = []
            
        self.ip_data[client_ip] = [t for t in self.ip_data[client_ip] if current_time - t < self.period]
        
        if len(self.ip_data[client_ip]) >= self.calls:
            return JSONResponse(status_code=429, content={
                "success": False,
                "data": {},
                "error": "Rate limit exceeded. Please try again later."
            })
            
        self.ip_data[client_ip].append(current_time)
        return await call_next(request)

    def _cleanup(self, current_time):
        keys_to_delete = []
        for ip, times in self.ip_data.items():
            valid_times = [t for t in times if current_time - t < self.period]
            if not valid_times:
                keys_to_delete.append(ip)
            else:
                self.ip_data[ip] = valid_times
        for ip in keys_to_delete:
            del self.ip_data[ip]
