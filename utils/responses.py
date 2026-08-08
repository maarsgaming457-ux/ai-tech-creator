from fastapi.responses import JSONResponse

def success_response(data: dict = None, message: str = ""):
    return JSONResponse(status_code=200, content={
        "success": True,
        "data": data or {},
        "message": message
    })

def error_response(error_msg: str, status_code: int = 400):
    return JSONResponse(status_code=status_code, content={
        "success": False,
        "data": {},
        "error": error_msg
    })
