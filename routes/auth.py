from fastapi import APIRouter, Depends, HTTPException, status
from models.schemas import UserCreate, UserLogin, Token
from utils.security import create_access_token, get_current_user
from utils.responses import success_response, error_response
from services.db_service import create_user, authenticate

router = APIRouter(tags=["auth"])

@router.post("/signup")
async def signup(user: UserCreate):
    new_user = create_user(user.email, user.password)
    if not new_user:
        return error_response("Email already exists or invalid data", 400)
    
    access_token = create_access_token(data={"sub": str(new_user['id'])})
    return success_response({"access_token": access_token, "token_type": "bearer"}, "User created successfully")

@router.post("/login")
async def login(user: UserLogin):
    auth_user = authenticate(user.email, user.password)
    if not auth_user:
        return error_response("Incorrect email or password", 401)
        
    access_token = create_access_token(data={"sub": str(auth_user['id'])})
    return success_response({"access_token": access_token, "token_type": "bearer"}, "Login successful")

@router.get("/me")
async def read_users_me(current_user: int = Depends(get_current_user)):
    return success_response({"user_id": current_user})

@router.get("/logout", name="logout")
async def logout():
    from fastapi.responses import RedirectResponse
    print("Logout route hit. Redirecting to home.")
    response = RedirectResponse(url="/")
    return response
