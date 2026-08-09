import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ChatLayout from './components/ChatLayout'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [resetKey, setResetKey] = useState(0) // Used to force remount ChatLayout on New Chat

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleNewChat = () => {
    setResetKey(prev => prev + 1)
  }

  return (
    <div className="h-screen flex flex-row bg-[#0A0A0B] dark:bg-black transition-colors duration-300 overflow-hidden relative font-sans text-slate-900 dark:text-slate-100">
      {/* Background decorations for premium SaaS feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 dark:bg-purple-600/20 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} onNewChat={handleNewChat} />
      
      <main className="flex-grow overflow-hidden relative z-10 border-l border-white/5 bg-white/50 dark:bg-transparent backdrop-blur-3xl">
        <ChatLayout key={resetKey} />
      </main>
    </div>
  )
}

export default App
