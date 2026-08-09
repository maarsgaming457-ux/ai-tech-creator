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
      
      if (data.success === false) {
        throw new Error("API returned failure");
      }
      
      // The robust AI content extraction algorithm
      let aiContent = 
        data.message || 
        data.response || 
        data.answer || 
        data.result || 
        data.content ||
        (typeof data === "string" ? data : JSON.stringify(data, null, 2));
      
      // Optional Improvement: prefix
      if (typeof aiContent === "string") {
        aiContent = aiContent.replace("Generated content for:", "🤖 AI:");
      }
      
      console.log("API FULL RESPONSE:", data);
      console.log("AI TEXT:", aiContent);
      
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
          <div className="w-full max-w-[800px] mx-auto py-10 px-4 flex flex-col gap-6">
            {messages.map((msg, idx) => (
              <MessageBubble key={idx} message={msg} />
            ))}
            
            {isGenerating && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 p-5 group rounded-[20px] max-w-[85%] bg-white/5 backdrop-blur-xl border border-white/10 self-start shadow-xl"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 border bg-purple-600/20 text-purple-400 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div className="flex items-center text-slate-300 text-sm font-medium gap-2">
                  <span>AI is thinking</span>
                  <span className="flex gap-1">
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>.</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>.</motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>.</motion.span>
                  </span>
                </div>
              </motion.div>
            )}
            
            {/* Bottom padding to prevent last message from hiding behind input bar */}
            <div className="h-32"></div>
          </div>
        )}
      </div>

      {/* Sticky Input Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-12 pb-6 px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <InputBar 
            input={input} 
            setInput={setInput} 
            isGenerating={isGenerating} 
            handleSend={handleSend} 
          />
        </div>
      </div>
    </div>
  )
}
