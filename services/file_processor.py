import fitz  # PyMuPDF

def process_txt(content: bytes) -> str:
    return content.decode("utf-8", errors="ignore")

def process_pdf(content: bytes) -> str:
    try:
        doc = fitz.open(stream=content, filetype="pdf")
        text = ""
        for page in doc:
            text += page.get_text()
        return text
    except Exception as e:
        raise Exception(f"Failed to process PDF: {e}")
