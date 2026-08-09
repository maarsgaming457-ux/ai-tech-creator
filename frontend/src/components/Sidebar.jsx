import React from 'react'
import { Sparkles, MessageSquarePlus } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Sidebar({ darkMode, setDarkMode, onNewChat }) {
  return (
    <aside className="w-64 h-screen hidden md:flex flex-col bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-xl border-r border-border/40 z-20 shadow-xl">
      <div className="p-4 flex items-center justify-between border-b border-border/40">
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 p-2 rounded-lg">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400">
            AI Tech Creator
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        <button
          onClick={onNewChat}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all shadow-md shadow-primary/20"
        >
          <MessageSquarePlus className="w-4 h-4" />
          New Chat
        </button>

        {/* Future conversation history could go here */}
        <div className="mt-8">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">History</h3>
          <p className="text-sm text-slate-500 px-2 italic">No previous chats yet.</p>
        </div>
      </div>

      <div className="p-4 border-t border-border/40 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Settings</span>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </aside>
  )
}
