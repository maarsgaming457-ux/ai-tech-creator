import asyncio
from fastapi import APIRouter, Depends, UploadFile, File, Request
from utils.security import get_current_user
from utils.responses import success_response, error_response
from services.file_processor import process_txt, process_pdf
from ai_tech_creator.post_generator import generate_post
import filetype

router = APIRouter(tags=["upload"])

MAX_FILE_SIZE = 1 * 1024 * 1024  # 1 MB Limit for Free Tier

@router.post("/upload")
async def upload_file(
    request: Request,
    file: UploadFile = File(...), 
    # To enable auth again: add Depends(get_current_user)
    current_user: int = 1
):
    print("API HIT:", request.url.path)
    try:
        content = await file.read()
        
        if len(content) > MAX_FILE_SIZE:
            return error_response("File size exceeds the 1MB limit for free tier", 413)
            
        filename = file.filename.lower()
        extracted_text = ""
        
        kind = filetype.guess(content)
        mime_type = kind.mime if kind else None
        
        if filename.endswith(".txt") and (mime_type is None or mime_type.startswith("text/")):
            extracted_text = process_txt(content)
        elif mime_type == "application/pdf":
            try:
                extracted_text = await asyncio.wait_for(asyncio.to_thread(process_pdf, content), timeout=8.0)
            except asyncio.TimeoutError:
                return error_response("PDF processing timed out after 8 seconds.", 408)
        else:
            return error_response(f"Unsupported file type (MIME: {mime_type}). Only TXT and small PDFs allowed.", 415)
            
        if not extracted_text.strip():
            return error_response("No text could be extracted.", 400)
            
        try:
            summary = await asyncio.wait_for(
                asyncio.to_thread(generate_post, f"Summarize this:\n{extracted_text[:2000]}"),
                timeout=8.0
            )
            return success_response({"summary": summary, "filename": filename})
        except asyncio.TimeoutError:
            print("ERROR: AI Generation timed out.")
            return error_response("AI Generation timed out after 8 seconds.", 408)
            
    except Exception as e:
        import traceback
        print("ERROR:", str(e))
        traceback.print_exc()
        raise e
