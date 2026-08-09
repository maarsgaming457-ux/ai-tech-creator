import React from 'react';
import { Play, Pause, Cpu, ShieldCheck } from 'lucide-react';

export default function AgentPanel({ isAgentRunning, onRunAgent, onPauseAgent, postsTodayCount, countdown }) {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="glass-panel w-full rounded-2xl p-6">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center">
            <Cpu className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide">Agent Control</h2>
            <p className="text-xs text-slate-400">Manage your autonomous agent</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Status</span>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${isAgentRunning ? 'text-white' : 'text-slate-500'}`}>
                {isAgentRunning ? 'Online' : 'Offline'}
              </span>
              <div className={`w-2 h-2 rounded-full ${isAgentRunning ? 'bg-white animate-pulse' : 'bg-slate-600'}`} />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Mode</span>
            <span className="text-sm font-semibold text-white">Autonomous</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Next Run</span>
            <span className="text-sm font-semibold text-white">
              {isAgentRunning ? `00:00:${countdown.toString().padStart(2, '0')}` : '--:--:--'}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Posts Today</span>
            <span className="text-sm font-semibold text-white">{postsTodayCount || 0}</span>
          </div>
        </div>
        
        <div className="h-[1px] w-full bg-white/10 mb-6" />

        {/* Controls */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onRunAgent}
            disabled={isAgentRunning}
            className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-all ${
              isAgentRunning 
                ? 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5' 
                : 'bg-[#00ff9f] hover:bg-[#00e68f] text-slate-900'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Run Agent</span>
          </button>

          <button
            onClick={onPauseAgent}
            disabled={!isAgentRunning}
            className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-all border ${
              !isAgentRunning 
                ? 'bg-white/5 text-slate-600 cursor-not-allowed border-transparent' 
                : 'bg-transparent border-white/20 text-white hover:bg-white/5 hover:border-white/40'
            }`}
          >
            <Pause className="w-4 h-4 fill-current" />
            <span>Pause Agent</span>
          </button>
        </div>

      </div>

      {/* Footer text */}
      <div className="flex items-start gap-3 px-2">
        <ShieldCheck className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
        <p className="text-xs text-slate-500 leading-relaxed">
          Your agent is working 24/7 to keep your feed fresh and engaging.
        </p>
      </div>
    </div>
  );
}
