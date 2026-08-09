import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye, Target } from 'lucide-react';

export default function Hero({ onRunAgent, isInitializing, topic, setTopic }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-8 mb-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-14 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ff9f] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />

        {/* Left: Content */}
        <div className="z-10 w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            Autonomous <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9f] to-emerald-400">
              AI Content Creator
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
            AI-powered agent that discovers trends and creates engaging content automatically.
          </p>
          
          <div className="flex flex-col gap-4">
            {/* Topic Input Box */}
            <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-xl px-4 py-3 w-full max-w-sm focus-within:border-[#00ff9f]/50 focus-within:shadow-[0_0_15px_rgba(0,255,159,0.1)] transition-all">
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
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00ff9f] to-emerald-400 hover:from-[#00e68f] hover:to-emerald-500 text-slate-900 font-bold transition-all shadow-[0_0_20px_rgba(0,255,159,0.3)] hover:shadow-[0_0_30px_rgba(0,255,159,0.5)] disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
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
                <p className="loading-text text-sm font-medium text-[#00ff9f] mt-3">⚡ Generating post...</p>
              )}
            </div>
          </div>
        </div>

        {/* Right: Visual Element */}
        <div className="hidden md:flex z-10 w-1/3 justify-end items-center relative">
          <div className="relative w-40 h-40">
            {/* Concentric rings */}
            <div className="absolute inset-0 border border-[#00ff9f]/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-[#00ff9f]/40 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
            
            {/* Center glowing cube/icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-black rounded-2xl border-2 border-[#00ff9f] flex items-center justify-center shadow-[0_0_40px_rgba(0,255,159,0.5)] transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <span className="text-3xl font-black text-[#00ff9f] tracking-tighter drop-shadow-[0_0_10px_rgba(0,255,159,0.8)]">AI</span>
              </div>
            </div>
          </div>
        </div>
        
      </motion.div>
    </div>
  );
}
