# Completely stripped heavy background system to save memory
class BackgroundJobManager:
    def get_status(self, user_id: int):
        return {"active": False, "last_run": None, "next_run": None}

job_manager = BackgroundJobManager()
