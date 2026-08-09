import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Import your modules
from routes import auth, background, upload
from routes.posts import router as posts_router
from routes.agent import router as agent_router
from services.db_service import init_db
from utils.rate_limit import RateLimiter

app = FastAPI(title="AI Tech Creator (Production Ready)")

# ✅ MUST be immediately after FastAPI()
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://ai-tech-creator.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# --------------------------------------------------------

# ✅ Rate limiter middleware (after CORS)
app.middleware("http")(RateLimiter(calls=20, period=60))

# Static files & templates
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Startup event
@app.on_event("startup")
def on_startup():
    print("🚀 Server starting...")
    init_db()

# Routers
app.include_router(auth.router)
app.include_router(posts_router, prefix="/api")
app.include_router(agent_router, prefix="/api")
app.include_router(background.router, prefix="/api")
app.include_router(upload.router, prefix="/api")

# Root route (serves frontend)
# Root route (debug test)
@app.get("/")
def root():
    return {"message": "Backend is running"}

# Health check
@app.get("/ping")
def ping():
    return {"status": "awake"}

# Debug test endpoint (IMPORTANT)
@app.post("/api/test")
async def test_api(data: dict):
    print("API HIT:", data)
    return {"response": f"You said: {data.get('series_topic')}"}

# Run server (Render compatible)
PORT = int(os.environ.get("PORT", 10000))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=PORT)