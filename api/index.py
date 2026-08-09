from main import app

# Vercel handler
def handler(request, context=None):
    return app
