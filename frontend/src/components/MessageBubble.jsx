import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { motion } from 'framer-motion'
import { Bot, User, Copy, Check } from 'lucide-react'
import clsx from 'clsx'

export default function MessageBubble({ message }) {
  const isAi = message.role === 'ai' || message.role === 'assistant'
  const [copied, setCopied] = useState(false)
  const [displayedContent, setDisplayedContent] = useState('')

  // Typing effect for the latest AI message
  useEffect(() => {
    if (isAi && message.isNew) {
      let i = 0
      setDisplayedContent('')
      const timer = setInterval(() => {
        setDisplayedContent((prev) => prev + message.content.charAt(i))
        i++
        if (i === message.content.length) {
          clearInterval(timer)
        }
      }, 10) // Fast typing effect
      return () => clearInterval(timer)
    } else {
      setDisplayedContent(message.content)
    }
  }, [message.content, isAi, message.isNew])

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, x: isAi ? -10 : 10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      className={clsx(
        "flex gap-4 p-5 group rounded-[20px] max-w-[85%]",
        isAi ? "bg-white/5 backdrop-blur-xl border border-white/10 self-start shadow-xl" : "bg-gradient-to-br from-blue-500 to-indigo-600 text-white self-end shadow-lg shadow-blue-500/20 flex-row-reverse"
      )}
    >
      <div className={clsx(
        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 border",
        isAi 
          ? "bg-purple-600/20 text-purple-400 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]" 
          : "bg-white/20 text-white border-white/20 shadow-sm"
      )}>
        {isAi ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
      </div>
      
      <div className={clsx("flex-grow overflow-hidden", isAi ? "text-left" : "text-right")}>
        <div className={clsx("font-semibold text-xs uppercase tracking-wider mb-1", isAi ? "text-slate-500 dark:text-slate-400" : "text-primary-foreground/80")}>
          {isAi ? 'AI Tech Creator' : 'You'}
        </div>
        
        {isAi ? (
          <div className="prose prose-invert prose-p:leading-relaxed prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 max-w-none text-slate-200">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {displayedContent + (isAi && message.isNew && displayedContent.length < message.content.length ? '...' : '')}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="text-white leading-relaxed whitespace-pre-wrap text-left inline-block">
            {message.content}
          </div>
        )}
      </div>

      {isAi && (
        <button 
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-2 h-fit rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500"
          title="Copy response"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      )}
    </motion.div>
  )
}
