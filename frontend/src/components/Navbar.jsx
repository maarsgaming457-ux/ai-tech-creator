import React from 'react';
import { Sparkles, Plus, Activity } from 'lucide-react';

export default function Navbar({ isAgentRunning }) {
  return (
    <nav className="w-full bg-[#0a0a0a] border-b border-[#1f1f1f] px-6 py-4 flex items-center justify-between z-20 sticky top-0">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#1f1f1f] flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">AI Tech Creator</h1>
          <p className="text-xs text-slate-400">Autonomous AI Content Creator</p>
        </div>
      </div>

      {/* Center: Agent Status */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#1f1f1f]">
          <div className={`w-2 h-2 rounded-full ${isAgentRunning ? 'bg-[#00ff9f]' : 'bg-slate-500'} animate-pulse`} />
          <span className={`text-sm font-medium ${isAgentRunning ? 'text-white' : 'text-slate-400'}`}>
            {isAgentRunning ? 'Agent Online' : 'Agent Offline'}
          </span>
        </div>
      </div>

      {/* Right: New Post CTA */}
      <div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00ff9f] hover:bg-[#00e68f] text-slate-900 font-bold transition-all hover:scale-[1.02]">
          <Plus className="w-4 h-4" />
          <span>New Post</span>
        </button>
      </div>
    </nav>
  );
}
