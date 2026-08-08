# publisher.py

import datetime

def publish_post(post_content: str) -> None:
    """Publishes a post by appending it to posts.txt with a separator."""
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    with open("posts.txt", "a", encoding="utf-8") as f:
        f.write(f"--- POST @ {timestamp} ---\n")
        f.write(post_content + "\n")
        f.write("=" * 40 + "\n\n")
        
    print("Post successfully appended to posts.txt")
