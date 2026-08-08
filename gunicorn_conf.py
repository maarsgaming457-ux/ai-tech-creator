import multiprocessing

# Gunicorn configuration file
# https://docs.gunicorn.org/en/stable/settings.html

workers = 4
worker_class = "uvicorn.workers.UvicornWorker"
bind = "0.0.0.0:8000"
timeout = 120
keepalive = 5

# Logging
loglevel = "info"
accesslog = "-"
errorlog = "-"
