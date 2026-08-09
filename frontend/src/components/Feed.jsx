import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { initAgent, fetchAgentFeed } from '../lib/api';
import PostCard from './PostCard';

export default function Feed() {
  const [agentId, setAgentId] = useState(null);
  const [isAgentRunning, setIsAgentRunning] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isInitializing, setIsInitializing] = useState(false);
  const [error, setError] = useState('');
  
  const handleInitAgent = async () => {
    try {
      setIsInitializing(true);
      setError('');
      const data = await initAgent();
      // Store a mock agentId (since backend doesn't provide one) to satisfy requirements
      setAgentId(data.agentId || 'ag-12345');
      setIsAgentRunning(true);
    } catch (err) {
      console.error(err);
      setError('❌ Failed to connect to backend. Check server.');
    } finally {
      setIsInitializing(false);
    }
  };

  useEffect(() => {
    let intervalId;
    
    if (isAgentRunning) {
      // Fetch immediately once running
      const fetchFeed = async () => {
        try {
          const data = await fetchAgentFeed(agentId);
          if (data && data.success && data.posts) {
            setPosts(prev => {
              const existingIds = new Set(prev.map(p => p.id));
              const newPosts = data.posts.filter(p => !existingIds.has(p.id));
              
              const merged = [...newPosts, ...prev];
              
              // Backend createdAt is a unix timestamp in seconds
              return merged.sort(
                (a, b) => new Date(b.createdAt * 1000) - new Date(a.createdAt * 1000)
              );
            });
          }
        } catch (err) {
          console.error("Failed to fetch agent feed:", err);
        }
      };
      
      fetchFeed();
      
      // Then poll every 60 seconds (60000ms) to prevent API exhaustion
      intervalId = setInterval(fetchFeed, 60000);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAgentRunning, agentId]);

  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="flex-1 overflow-y-auto custom-scrollbar pt-6 pb-20">
        
        {!isAgentRunning ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 text-center shadow-2xl"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6">
                <Sparkles className="w-10 h-10 text-white animate-pulse" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Autonomous AI Creator</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Initialize the autonomous AI to continuously discover topics, analyze trends, and publish premium content automatically.
              </p>
              
              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <button
                onClick={handleInitAgent}
                disabled={isInitializing}
                className="w-full py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] disabled:opacity-50 disabled:cursor-not-allowed border border-white/10"
              >
                {isInitializing ? "Initializing Core..." : "Initialize Agent"}
              </button>
            </motion.div>
          </div>
        ) : (
          <div className="w-full max-w-[800px] mx-auto py-10 px-4 flex flex-col gap-6">
            
            <div className="flex items-center justify-between mb-2 pb-4 border-b border-white/10">
              <h2 className="text-xl font-bold text-white tracking-wide">Live Autonomous Feed</h2>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                <Activity className="w-4 h-4 animate-pulse" />
                Agent Online
              </div>
            </div>
            
            <AnimatePresence mode="popLayout">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </AnimatePresence>
            
            {posts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center gap-4"
              >
                <div className="w-12 h-12 rounded-full border border-purple-500/30 bg-purple-600/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-slate-200 font-semibold text-lg mb-1">Agent is thinking...</h3>
                  <p className="text-slate-500 text-sm">Synthesizing trends and preparing the first post.</p>
                </div>
              </motion.div>
            )}
            
          </div>
        )}
        
      </div>
    </div>
  );
}
