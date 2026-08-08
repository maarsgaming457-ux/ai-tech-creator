from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.templating import Jinja2Templates
import os

app = FastAPI()

# paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# static
app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")

# templates
templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates"))

# ✅ FRONTEND ROUTE
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# favicon
@app.get("/favicon.ico")
async def favicon():
    return FileResponse(os.path.join(BASE_DIR, "static/favicon.ico"))