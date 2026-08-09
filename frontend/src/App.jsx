import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ChatLayout from './components/ChatLayout'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [resetKey, setResetKey] = useState(0) // Used to force remount ChatLayout on New Chat

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const handleNewChat = () => {
    setResetKey(prev => prev + 1)
  }

  return (
    <div className="h-screen flex flex-row transition-colors duration-300 overflow-hidden relative font-sans text-slate-100">
      <Sidebar onNewChat={handleNewChat} />
      
      <main className="flex-grow overflow-hidden relative z-10 flex flex-col items-center">
        <ChatLayout key={resetKey} />
      </main>
    </div>
  )
}

export default App
