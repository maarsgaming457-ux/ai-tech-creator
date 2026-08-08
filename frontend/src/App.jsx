import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ChatLayout from './components/ChatLayout'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden relative">
      {/* Background decorations for premium feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 dark:bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="flex-grow overflow-hidden">
          <ChatLayout />
        </main>
      </div>
    </div>
  )
}

export default App
