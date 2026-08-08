import React from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <Sun className="w-5 h-5 text-slate-300 hover:text-white" /> : <Moon className="w-5 h-5 text-slate-600 hover:text-slate-900" />}
    </button>
  )
}
