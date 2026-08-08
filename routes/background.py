from fastapi import APIRouter, Depends, Request
from utils.security import get_current_user
from utils.responses import success_response, error_response
from services.background_worker import job_manager

router = APIRouter(tags=["background"])

@router.post("/auto/start")
# To enable auth again: add Depends(get_current_user)
async def start_auto(request: Request, current_user: int = 1):
    print("API HIT:", request.url.path)
    return error_response("Auto-Agent has been disabled on the Free Tier to save memory.", 403)

@router.post("/auto/stop")
# To enable auth again: add Depends(get_current_user)
async def stop_auto(request: Request, current_user: int = 1):
    print("API HIT:", request.url.path)
    return success_response(message="Agent stopped")

@router.get("/auto/status")
# To enable auth again: add Depends(get_current_user)
async def get_auto_status(request: Request, current_user: int = 1):
    print("API HIT:", request.url.path)
    status = job_manager.get_status(current_user)
    return success_response(status)
