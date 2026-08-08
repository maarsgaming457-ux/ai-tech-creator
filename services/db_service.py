import sqlite3
import os
import time
import uuid
from datetime import datetime
from utils.security import get_password_hash, verify_password
import threading

DB_FILE = 'app.db'
db_lock = threading.Lock()

def get_db():
    conn = sqlite3.connect(DB_FILE, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with db_lock:
        conn = get_db()
        try:
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
        finally:
            conn.close()

def create_user(email, password, referral_code=None):
    with db_lock:
        conn = get_db()
        try:
            ref_code = str(uuid.uuid4())[:8]
            conn.execute('INSERT INTO users (email, password, plan, referral_code) VALUES (?, ?, ?, ?)', 
                         (email, get_password_hash(password), 'FREE', ref_code))
            if referral_code:
                conn.execute("UPDATE users SET plan = 'PRO' WHERE referral_code = ?", (referral_code,))
            conn.commit()
            
            user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
            return dict(user) if user else None
        except sqlite3.IntegrityError:
            return None
        finally:
            conn.close()

def authenticate(email, password):
    conn = get_db()
    try:
        user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
        if user and verify_password(password, user['password']):
            update_streak(user['id'])
            return dict(user)
        return None
    finally:
        conn.close()

def get_user_by_email(email):
    conn = get_db()
    try:
        user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
        return dict(user) if user else None
    finally:
        conn.close()

def update_streak(user_id):
    with db_lock:
        conn = get_db()
        try:
            user = conn.execute('SELECT streak, last_active_date FROM users WHERE id = ?', (user_id,)).fetchone()
            if not user: return
            today_str = datetime.now().strftime("%Y-%m-%d")
            
            if user['last_active_date'] != today_str:
                streak = user['streak']
                if user['last_active_date']:
                    last_date = datetime.strptime(user['last_active_date'], "%Y-%m-%d")
                    if (datetime.now() - last_date).days == 1:
                        streak += 1
                    else:
                        streak = 1
                else:
                    streak = 1
                    
                conn.execute('UPDATE users SET streak = ?, last_active_date = ? WHERE id = ?', (streak, today_str, user_id))
                conn.commit()
        finally:
            conn.close()

def get_user_data(user_id):
    conn = get_db()
    try:
        user = conn.execute('SELECT * FROM users WHERE id = ?', (user_id,)).fetchone()
        if not user: return None
        
        start_of_day = time.time() - (time.time() % 86400)
        count = conn.execute('SELECT COUNT(*) as count FROM posts WHERE user_id = ? AND timestamp >= ?', (user_id, start_of_day)).fetchone()['count']
        total_posts = conn.execute('SELECT COUNT(*) as count FROM posts WHERE user_id = ?', (user_id,)).fetchone()['count']
        
        top_category_row = conn.execute('SELECT category, COUNT(*) as c FROM posts WHERE user_id = ? GROUP BY category ORDER BY c DESC LIMIT 1', (user_id,)).fetchone()
        top_category = top_category_row['category'] if top_category_row and top_category_row['category'] else "None"
        
        points = (total_posts * 10) + (user['streak'] * 50)
        if points < 100: level = "Beginner"
        elif points < 500: level = "Creator"
        else: level = "Influencer"
        
        return {
            "id": user['id'],
            "email": user['email'],
            "plan": 'PRO',
            "posts_today": count,
            "total_posts": total_posts,
            "limit": float('inf'),
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
    finally:
        conn.close()

def update_user_profile(user_id, niche, experience, tone, goal="Growth"):
    with db_lock:
        conn = get_db()
        try:
            conn.execute('UPDATE users SET niche = ?, experience = ?, tone = ?, goal = ? WHERE id = ?', (niche, experience, tone, goal, user_id))
            conn.commit()
        finally:
            conn.close()

def mark_onboarded(user_id):
    with db_lock:
        conn = get_db()
        try:
            conn.execute('UPDATE users SET is_onboarded = 1 WHERE id = ?', (user_id,))
            conn.commit()
        finally:
            conn.close()

def get_user_history(user_id):
    conn = get_db()
    try:
        posts = conn.execute('SELECT * FROM posts WHERE user_id = ? ORDER BY timestamp DESC LIMIT 10', (user_id,)).fetchall()
        return [dict(p) for p in posts]
    finally:
        conn.close()

def save_user_post(user_id, post_data):
    with db_lock:
        conn = get_db()
        try:
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO posts (user_id, topic, post_text, rationale, status, category, engagement_score, engagement_reason, timestamp, post_state, scheduled_time, simulated_likes, simulated_comments)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (user_id, post_data['topic'], post_data['post'], post_data['rationale'], post_data['status'], post_data.get('category', ''), post_data.get('engagement_score', ''), post_data.get('engagement_reason', ''), post_data['timestamp'], post_data.get('post_state', 'GENERATED'), post_data.get('scheduled_time', None), 0, 0))
            post_id = cursor.lastrowid
            conn.commit()
            post_data['id'] = post_id
            return post_id
        finally:
            conn.close()

def save_feedback(user_id, post_id, is_useful, comments):
    with db_lock:
        conn = get_db()
        try:
            conn.execute('INSERT INTO feedbacks (user_id, post_id, is_useful, comments, timestamp) VALUES (?, ?, ?, ?, ?)', (user_id, post_id, is_useful, comments, time.time()))
            conn.commit()
        finally:
            conn.close()
