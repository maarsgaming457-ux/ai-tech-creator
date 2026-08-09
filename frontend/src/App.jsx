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
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState("");

  // Initialize Theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Main Polling Loop
  useEffect(() => {
    let intervalId;
    
    if (isAgentRunning) {
      const fetchFeed = async () => {
        try {
          const result = await fetchAgentFeed(agentId);
          console.log("API RESPONSE:", result);
          
          if (!result || !result.success) {
            throw new Error("API returned failure");
          }
          
          const data = result.posts || [];
          
          setPosts(prev => {
            const existingIds = new Set(prev.map(p => p.id));
            
            const generateTags = (topicStr) => {
              const safeTopic = topicStr || "technology";
              return [
                `#${safeTopic.replace(/\\s+/g, '')}`,
                "#Innovation",
                "#Career",
                "#Technology"
              ];
            };
            
            // Validate data structure and prevent crashes
            const newPosts = data.map(p => ({
              ...p,
              id: p.id || `temp-${Date.now()}-${Math.random()}`,
              post: p.post || "⚠️ No content generated",
              topic: p.topic || "technology",
              tags: p.tags || generateTags(p.topic),
              createdAt: p.createdAt || (Date.now() / 1000)
            })).filter(p => !existingIds.has(p.id));
            
            const merged = [...newPosts, ...prev];
            
            return merged.sort(
              (a, b) => new Date(b.createdAt * 1000) - new Date(a.createdAt * 1000)
            ).slice(0, 50);
          });
        } catch (err) {
          console.error("FEED ERROR:", err);
        } finally {
          setLoading(false);
        }
      };
      
      fetchFeed(); // Immediate fetch
      
      // Poll every 60 seconds
      intervalId = setInterval(fetchFeed, 60000);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAgentRunning, agentId]);

  const handleRunAgent = async () => {
    try {
      setIsGenerating(true);
      const data = await initAgent(topic);
      setAgentId(data.agentId || 'ag-12345');
      setIsAgentRunning(true);
      setLoading(true);
    } catch (err) {
      console.error(err);
      alert('Failed to connect to backend. Check server.');
    } finally {
      setIsGenerating(false);
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
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
