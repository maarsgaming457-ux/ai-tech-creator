import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye, Target } from 'lucide-react';

export default function Hero({ onRunAgent, isInitializing, topic, setTopic }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-8 mb-8 pb-8 border-b border-[#1f1f1f]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card relative overflow-hidden rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Background glow effects - Removed for minimal theme */}

        {/* Left: Content */}
        <div className="z-10 w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            Autonomous <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
              AI Content Creator
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
            AI-powered agent that discovers trends and creates engaging content automatically.
          </p>
          
          <div className="flex flex-col gap-4">
            {/* Topic Input Box */}
            <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-xl px-4 py-3 w-full max-w-sm focus-within:border-white/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] transition-all">
              <Target className="w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Topic (e.g. AI Trends, SaaS)"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="bg-transparent border-none outline-none text-white placeholder-slate-500 w-full font-medium"
              />
            </div>
            
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onRunAgent}
                  disabled={isInitializing}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00ff9f] to-emerald-400 hover:from-[#00e68f] hover:to-emerald-500 text-slate-900 font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
                >
                  <Zap className="w-5 h-5" />
                  <span>{isInitializing ? 'Generating...' : 'Run Agent'}</span>
                </button>
              
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all hover:border-white/20"
                >
                  <Eye className="w-5 h-5 text-slate-300" />
                  <span>View Feed</span>
                </button>
              </div>
              {isInitializing && (
                <p className="loading-text text-sm font-medium text-slate-400 mt-3">⚡ Generating post...</p>
              )}
            </div>
          </div>
        </div>

        {/* Right: Visual Element */}
        <div className="hidden md:flex z-10 w-1/3 justify-end items-center relative">
          <div className="relative w-40 h-40">
            {/* Orbiting Rings */}
            <div className="absolute inset-[-40px] border border-white/10 rounded-full animate-[spin_12s_linear_infinite]" style={{ transform: "rotateX(70deg)" }}></div>
            <div className="absolute inset-[-20px] border border-white/5 rounded-full animate-[spin_10s_linear_infinite_reverse]" style={{ transform: "rotateY(60deg)" }}></div>
            
            {/* Small Floating Stars */}
            <div className="absolute -top-4 -left-4 animate-pulse">
              <div className="w-2 h-2 bg-white/60 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            </div>
            <div className="absolute bottom-4 -right-8 animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]"></div>
            </div>
            
            {/* 3D Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] rounded-[2rem] border border-white/20 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),_0_15px_35px_rgba(0,0,0,0.8)] transform hover:scale-105 hover:-rotate-3 transition-transform duration-500">
                <svg className="w-16 h-16 text-slate-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
      </motion.div>
    </div>
  );
}
