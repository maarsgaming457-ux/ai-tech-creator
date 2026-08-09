import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Loader2 } from 'lucide-react'
import MessageBubble from './MessageBubble'
import InputBar from './InputBar'
import { generatePost } from '../lib/api'

export default function ChatLayout() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [errorToast, setErrorToast] = useState(null)
  
  const scrollRef = useRef(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  // Auto-scroll when messages change or while generating
  useEffect(() => {
    scrollToBottom()
  }, [messages, isGenerating])

  const handleSend = async () => {
    if (isGenerating || !input.trim()) return

    const userPrompt = input.trim()
    
    // Add user message, removing isNew from previous messages
    setMessages(prev => prev.map(m => ({...m, isNew: false })).concat({ role: 'user', content: userPrompt }))
    setInput('')
    setIsGenerating(true)

    try {
      // In ChatGPT style, we just pass the prompt. We'll map it to the expected schema.
      const data = await generatePost(input);
      
      // The robust AI content extraction algorithm
      let aiContent = 
        data.response || 
        data.answer || 
        data.result || 
        data.message || 
        (typeof data === "string" ? data : JSON.stringify(data, null, 2));
      
      // Optional Improvement: prefix
      if (typeof aiContent === "string") {
        aiContent = aiContent.replace("Generated content for:", "🤖 AI:");
      }
      
      console.log("API FULL RESPONSE:", data);
      
      const botMsg = {
        role: "assistant",
        content: aiContent,
        isNew: true
      };
      
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("API ERROR:", error);
      let errMsg = error.message || "An unexpected error occurred";
      if (errMsg.includes("Rate limit") || errMsg.includes("429")) {
        errMsg = "⏳ Please wait a few seconds before generating again";
      }
      showError(errMsg);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `❌ Error: ${errMsg}`, isNew: true }
      ]);
    } finally {
      setIsGenerating(false);
    }
  }

  const showError = (msg) => {
    setErrorToast(msg)
    setTimeout(() => setErrorToast(null), 4000)
  }

  return (
    <div className="flex flex-col h-full relative">
      
      {/* Toast Error */}
      <AnimatePresence>
        {errorToast && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="absolute top-4 left-1/2 bg-destructive text-destructive-foreground px-6 py-3 rounded-full shadow-2xl z-50 text-sm font-medium"
          >
            {errorToast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrollable Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto custom-scrollbar scroll-smooth"
      >
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 gap-6 p-4">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/20"
            >
              <Sparkles className="w-10 h-10 text-primary" />
            </motion.div>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">How can I help you today?</h2>
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto py-8 px-4 flex flex-col gap-6">
            {messages.map((msg, idx) => (
              <MessageBubble key={idx} message={msg} />
            ))}
            
            {isGenerating && (
              <div className="flex gap-4 p-4 md:p-6 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                </div>
                <div className="flex items-center text-slate-500 text-sm font-medium gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Thinking...
                </div>
              </div>
            )}
            
            {/* Bottom padding to prevent last message from hiding behind input bar */}
            <div className="h-32"></div>
          </div>
        )}
      </div>

      {/* Sticky Input Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent dark:from-slate-950 dark:via-slate-950 pt-10 pb-4 px-4">
        <InputBar 
          input={input} 
          setInput={setInput} 
          isGenerating={isGenerating} 
          handleSend={handleSend} 
        />
      </div>
    </div>
  )
}
