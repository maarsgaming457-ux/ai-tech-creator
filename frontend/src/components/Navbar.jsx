import React from 'react'
import { Sparkles } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-border/40 mb-8">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight">AI Tech Creator</span>
        </div>
        
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </nav>
  )
}
