import React from 'react'
import { Sparkles, MessageSquarePlus } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Sidebar({ onNewChat }) {
  return (
    <aside className="w-[280px] h-screen hidden md:flex flex-col bg-white/5 backdrop-blur-xl border-r border-white/10 z-20 shadow-2xl">
      <div className="p-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-purple-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            AI Tech Creator
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        <button
          onClick={onNewChat}
          className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] border border-white/10"
        >
          <MessageSquarePlus className="w-5 h-5" />
          New Chat
        </button>

        {/* Future conversation history could go here */}
        <div className="mt-8">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">History</h3>
          <p className="text-sm text-slate-500 px-2 italic">No previous chats yet.</p>
        </div>
      </div>

      <div className="p-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
            U
          </div>
          User Setting
        </div>
      </div>
    </aside>
  )
}
