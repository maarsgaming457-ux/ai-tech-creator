import React from 'react';
import { Activity, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PostCard from './PostCard';

export default function Feed({ posts, loading, regeneratePost, isRegenerating }) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-2 pb-4 border-b border-white/10">
        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center">
          <Activity className="w-4 h-4 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white tracking-wide">Live Feed</h2>
          <p className="text-xs text-slate-400">Real-time AI generated content</p>
        </div>
      </div>
      
      {loading ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card flex flex-col items-center justify-center py-20 text-center gap-4 rounded-2xl"
        >
          <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-slate-400 animate-pulse" />
          </div>
          <div>
            <h3 className="text-slate-200 font-semibold text-lg mb-1">Loading feed...</h3>
            <p className="text-slate-500 text-sm">Synthesizing trends and preparing posts.</p>
          </div>
        </motion.div>
      ) : posts.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card flex flex-col items-center justify-center py-20 text-center gap-4 rounded-2xl"
        >
          <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex items-center justify-center">
            <Activity className="w-6 h-6 text-slate-500" />
          </div>
          <div>
            <h3 className="text-slate-200 font-semibold text-lg mb-1">No posts available</h3>
            <p className="text-slate-500 text-sm">Agent is standing by.</p>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence mode="popLayout">
          {posts.map(post => (
            <PostCard 
              key={post.id} 
              post={post} 
              regeneratePost={regeneratePost}
              isRegenerating={isRegenerating}
            />
          ))}
        </AnimatePresence>
      )}
    </div>
  );
}
