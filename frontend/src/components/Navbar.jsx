import React from 'react';
import { Sparkles, Plus, Activity } from 'lucide-react';

export default function Navbar({ isAgentRunning }) {
  return (
    <nav className="w-full bg-[#020617] border-b border-white/10 px-6 py-4 flex items-center justify-between z-20 sticky top-0">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff9f]/20 to-transparent border border-[#00ff9f]/30 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-[#00ff9f]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">AI Tech Creator</h1>
          <p className="text-xs text-slate-400">Autonomous AI Content Creator</p>
        </div>
      </div>

      {/* Center: Agent Status */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
          <div className={`w-2 h-2 rounded-full ${isAgentRunning ? 'bg-[#00ff9f] shadow-[0_0_10px_rgba(0,255,159,0.8)]' : 'bg-slate-500'} animate-pulse`} />
          <span className={`text-sm font-medium ${isAgentRunning ? 'text-[#00ff9f]' : 'text-slate-400'}`}>
            {isAgentRunning ? 'Agent Online' : 'Agent Offline'}
          </span>
        </div>
      </div>

      {/* Right: New Post CTA */}
      <div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00ff9f] hover:bg-[#00e68f] text-slate-900 font-bold transition-all hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] hover:scale-[1.02]">
          <Plus className="w-4 h-4" />
          <span>New Post</span>
        </button>
      </div>
    </nav>
  );
}
