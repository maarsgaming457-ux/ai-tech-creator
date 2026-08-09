import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feed from './components/Feed';
import AgentPanel from './components/AgentPanel';
import { initAgent, fetchAgentFeed, stopAgent } from './lib/api';

function App() {
  const [agentId, setAgentId] = useState(null);
  const [isAgentRunning, setIsAgentRunning] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [countdown, setCountdown] = useState(45);

  // Initialize Theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Countdown and Fetch Loop
  useEffect(() => {
    let timer;
    if (isAgentRunning) {
      timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            // Time to fetch/generate
            fetchAgentFeed(agentId).then(result => {
              if (result && result.success && result.posts) {
                const data = result.posts || [];
                setPosts(currentPosts => {
                  const existingIds = new Set(currentPosts.map(p => p.id));
                  
                  const generateTags = (topicStr) => {
                    const safeTopic = topicStr || "technology";
                    return [
                      `#${safeTopic.replace(/\\s+/g, '')}`,
                      "#Innovation",
                      "#Career",
                      "#Technology"
                    ];
                  };
                  
                  const newPosts = data.map(p => ({
                    ...p,
                    id: p.id || `temp-${Date.now()}-${Math.random()}`,
                    post: p.post || "⚠️ No content generated",
                    topic: p.topic || "technology",
                    tags: p.tags || generateTags(p.topic),
                    createdAt: p.createdAt || (Date.now() / 1000)
                  })).filter(p => !existingIds.has(p.id));
                  
                  const merged = [...newPosts, ...currentPosts];
                  return merged.sort((a, b) => b.createdAt - a.createdAt).slice(0, 50);
                });
              }
            }).catch(err => console.error("FEED ERROR:", err));
            return 45; // reset countdown
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAgentRunning, agentId]);

  const generateImmediatePost = async (targetTopic) => {
    try {
      const API = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${API}/api/agent/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: targetTopic })
      });
      const data = await res.json();
      
      const generateTags = (topicStr) => {
        const safeTopic = topicStr || "technology";
        return [`#${safeTopic.replace(/\\s+/g, '')}`, "#Innovation", "#Career", "#Technology"];
      };

      const newPost = {
        id: `temp-${Date.now()}-${Math.random()}`,
        topic: data.topic,
        post: data.post,
        tags: generateTags(data.topic),
        createdAt: Date.now() / 1000
      };

      setPosts(prev => [newPost, ...prev]);
    } catch (error) {
      console.error("Immediate generation error:", error);
    }
  };

  const handleRunAgent = async () => {
    try {
      setIsGenerating(true);
      setLoading(true);
      const data = await initAgent(topic);
      setAgentId(data.agentId || 'ag-12345');
      
      // 1. Generate first post immediately
      await generateImmediatePost(topic);
      
      // 2. Start loop
      setCountdown(45);
      setIsAgentRunning(true);
    } catch (err) {
      console.error(err);
      alert('Failed to connect to backend. Check server.');
    } finally {
      setIsGenerating(false);
      setLoading(false);
    }
  };

  const regeneratePost = async (targetTopic) => {
    try {
      setIsGenerating(true);
      
      const API = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${API}/api/agent/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: targetTopic })
      });
      const data = await res.json();
      
      const generateTags = (topicStr) => {
        const safeTopic = topicStr || "technology";
        return [
          `#${safeTopic.replace(/\\s+/g, '')}`,
          "#Innovation",
          "#Career",
          "#Technology"
        ];
      };

      const newPost = {
        id: `temp-${Date.now()}-${Math.random()}`,
        topic: data.topic,
        post: data.post,
        tags: generateTags(data.topic),
        createdAt: Date.now() / 1000
      };

      setPosts(prev => [newPost, ...prev]);

    } catch (error) {
      console.error("Regenerate error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePauseAgent = async () => {
    try {
      await stopAgent();
      setIsAgentRunning(false);
    } catch (err) {
      console.error(err);
      setIsAgentRunning(false); // Optimistically stop
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 font-sans text-slate-100 selection:bg-white/10">
      <Navbar isAgentRunning={isAgentRunning} />
      
      <main className="w-full flex flex-col items-center px-4 pb-20">
        <Hero 
          onRunAgent={handleRunAgent} 
          isInitializing={isGenerating}
          topic={topic}
          setTopic={setTopic}
        />
        
        {/* Main Dashboard Layout */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Live Feed (Takes 8 columns on large screens) */}
          <div className="lg:col-span-8">
            <Feed 
              posts={posts} 
              loading={loading && isAgentRunning} 
              regeneratePost={regeneratePost}
              isRegenerating={isGenerating}
            />
          </div>
          
          {/* Right Column: Agent Control Panel (Takes 4 columns on large screens) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <AgentPanel 
                isAgentRunning={isAgentRunning} 
                onRunAgent={handleRunAgent}
                onPauseAgent={handlePauseAgent}
                postsTodayCount={posts.length}
                countdown={countdown}
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
