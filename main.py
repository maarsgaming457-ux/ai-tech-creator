import time
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from dotenv import load_dotenv
load_dotenv()
from routes import auth, posts, background, upload
from services.db_service import init_db
from utils.responses import error_response
from utils.rate_limit import RateLimiter

app = FastAPI(title="AI Tech Creator (Lightweight Free Tier)")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Lightweight Rate Limiting: 20 requests per minute
app.middleware("http")(RateLimiter(calls=20, period=60))



app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.on_event("startup")
def on_startup():
    init_db()

# Routers
app.include_router(auth.router)
app.include_router(posts.router, prefix="/api")
app.include_router(background.router, prefix="/api")
app.include_router(upload.router, prefix="/api")

@app.get("/")
async def serve_frontend(request: Request):
    print("Serving frontend index.html")
    return templates.TemplateResponse(request=request, name="index.html", context={"launch_mode": True})

@app.get("/ping")
def ping():
    return {"status": "awake"}

import os
PORT = int(os.environ.get("PORT", 10000))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=PORT)
