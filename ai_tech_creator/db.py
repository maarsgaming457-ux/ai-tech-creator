import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
import os
import json
import time
import uuid
from datetime import datetime
import random

DB_FILE = 'app.db'

def get_db():
    conn = sqlite3.connect(DB_FILE, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            plan TEXT DEFAULT 'FREE',
            referral_code TEXT UNIQUE,
            streak INTEGER DEFAULT 0,
            last_active_date TEXT,
            niche TEXT DEFAULT 'Tech',
            experience TEXT DEFAULT 'Engineer',
            tone TEXT DEFAULT 'Professional',
            goal TEXT DEFAULT 'Growth',
            is_onboarded INTEGER DEFAULT 0
        )
    ''')
        
    conn.execute('''
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            topic TEXT,
            post_text TEXT,
            rationale TEXT,
            status TEXT,
            category TEXT,
            engagement_score TEXT,
            engagement_reason TEXT,
            timestamp REAL,
            post_state TEXT DEFAULT 'GENERATED', 
            scheduled_time REAL,
            simulated_likes INTEGER DEFAULT 0,
            simulated_comments INTEGER DEFAULT 0
        )
    ''')

    conn.execute('''
        CREATE TABLE IF NOT EXISTS feedbacks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            post_id INTEGER,
            is_useful INTEGER NOT NULL,
            comments TEXT,
            timestamp REAL
        )
    ''')
        
    conn.commit()
    conn.close()

def create_user(email, password, referral_code=None):
    conn = get_db()
    ref_code = str(uuid.uuid4())[:8]
    try:
        conn.execute('INSERT INTO users (email, password, plan, referral_code) VALUES (?, ?, ?, ?)', 
                     (email, generate_password_hash(password), 'FREE', ref_code))
        if referral_code:
            conn.execute("UPDATE users SET plan = 'PRO' WHERE referral_code = ?", (referral_code,))
        conn.commit()
        return True
    except sqlite3.IntegrityError:
        return False
    finally:
        conn.close()

def authenticate(email, password):
    conn = get_db()
    user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
    conn.close()
    if user and check_password_hash(user['password'], password):
        update_streak(user['id'])
        return user['id']
    return None

def update_streak(user_id):
    conn = get_db()
    user = conn.execute('SELECT streak, last_active_date FROM users WHERE id = ?', (user_id,)).fetchone()
    today_str = datetime.now().strftime("%Y-%m-%d")
    
    if user['last_active_date'] != today_str:
        streak = user['streak']
        if user['last_active_date']:
            last_date = datetime.strptime(user['last_active_date'], "%Y-%m-%d")
            if (datetime.now() - last_date).days == 1:
                streak += 1
            else:
                streak = 1 # reset
        else:
            streak = 1
            
        conn.execute('UPDATE users SET streak = ?, last_active_date = ? WHERE id = ?', (streak, today_str, user_id))
        conn.commit()
    conn.close()

def get_user_data(user_id):
    conn = get_db()
    user = conn.execute('SELECT * FROM users WHERE id = ?', (user_id,)).fetchone()
    
    start_of_day = time.time() - (time.time() % 86400)
    count = conn.execute('SELECT COUNT(*) as count FROM posts WHERE user_id = ? AND timestamp >= ?', (user_id, start_of_day)).fetchone()['count']
    total_posts = conn.execute('SELECT COUNT(*) as count FROM posts WHERE user_id = ?', (user_id,)).fetchone()['count']
    
    top_category_row = conn.execute('SELECT category, COUNT(*) as c FROM posts WHERE user_id = ? GROUP BY category ORDER BY c DESC LIMIT 1', (user_id,)).fetchone()
    top_category = top_category_row['category'] if top_category_row and top_category_row['category'] else "None"
    
    conn.close()
    
    plan = 'PRO'
    limit = float('inf')
    
    points = (total_posts * 10) + (user['streak'] * 50)
    if points < 100:
        level = "Beginner"
    elif points < 500:
        level = "Creator"
    else:
        level = "Influencer"
    
    return {
        "id": user['id'],
        "email": user['email'],
        "plan": plan,
        "posts_today": count,
        "total_posts": total_posts,
        "limit": limit,
        "remaining": "Unlimited",
        "can_generate": True,
        "referral_code": user['referral_code'],
        "streak": user['streak'],
        "top_category": top_category,
        "niche": user['niche'],
        "experience": user['experience'],
        "tone": user['tone'],
        "goal": user['goal'],
        "is_onboarded": bool(user['is_onboarded']),
        "points": points,
        "level": level
    }

def update_user_profile(user_id, niche, experience, tone, goal="Growth"):
    conn = get_db()
    conn.execute('UPDATE users SET niche = ?, experience = ?, tone = ?, goal = ? WHERE id = ?', (niche, experience, tone, goal, user_id))
    conn.commit()
    conn.close()

def mark_onboarded(user_id):
    conn = get_db()
    conn.execute('UPDATE users SET is_onboarded = 1 WHERE id = ?', (user_id,))
    conn.commit()
    conn.close()

def get_user_history(user_id):
    conn = get_db()
    posts = conn.execute('SELECT * FROM posts WHERE user_id = ? ORDER BY timestamp DESC LIMIT 10', (user_id,)).fetchall()
    conn.close()
    return [dict(p) for p in posts]

def get_best_topics(user_id):
    conn = get_db()
    posts = conn.execute('SELECT category, topic FROM posts WHERE user_id = ? AND post_state = "POSTED" ORDER BY simulated_likes DESC LIMIT 3', (user_id,)).fetchall()
    conn.close()
    return [{"category": p["category"], "topic": p["topic"]} for p in posts]

def save_user_post(user_id, post_data):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO posts (user_id, topic, post_text, rationale, status, category, engagement_score, engagement_reason, timestamp, post_state, scheduled_time, simulated_likes, simulated_comments)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (user_id, post_data['topic'], post_data['post'], post_data['rationale'], post_data['status'], post_data.get('category', ''), post_data.get('engagement_score', ''), post_data.get('engagement_reason', ''), post_data['timestamp'], post_data.get('post_state', 'GENERATED'), post_data.get('scheduled_time', None), 0, 0))
    post_id = cursor.lastrowid
    conn.commit()
    conn.close()
    post_data['id'] = post_id
    return post_id

def save_feedback(user_id, post_id, is_useful, comments):
    conn = get_db()
    conn.execute('INSERT INTO feedbacks (user_id, post_id, is_useful, comments, timestamp) VALUES (?, ?, ?, ?, ?)', (user_id, post_id, is_useful, comments, time.time()))
    conn.commit()
    conn.close()

def simulate_engagement_loop():
    while True:
        try:
            conn = get_db()
            current_time = time.time()
            pending_posts = conn.execute('SELECT id, engagement_score FROM posts WHERE post_state = "PENDING" AND scheduled_time <= ?', (current_time,)).fetchall()
            
            for post in pending_posts:
                score = post['engagement_score']
                if score == 'High':
                    likes = random.randint(100, 500)
                    comments = random.randint(20, 100)
                elif score == 'Medium':
                    likes = random.randint(20, 99)
                    comments = random.randint(5, 19)
                else:
                    likes = random.randint(0, 19)
                    comments = random.randint(0, 4)
                
                conn.execute('UPDATE posts SET post_state = "POSTED", simulated_likes = ?, simulated_comments = ? WHERE id = ?', (likes, comments, post['id']))
            
            conn.commit()
            conn.close()
        except Exception:
            pass
        time.sleep(10)
