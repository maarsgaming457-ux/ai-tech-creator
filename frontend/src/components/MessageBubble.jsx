import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { motion } from 'framer-motion'
import { Bot, User, Copy, Check } from 'lucide-react'
import clsx from 'clsx'

export default function MessageBubble({ message }) {
  const isAi = message.role === 'ai'
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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "flex gap-4 p-4 md:p-6 group rounded-lg",
        isAi ? "bg-slate-50 dark:bg-slate-800/30" : "bg-transparent"
      )}
    >
      <div className={clsx(
        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 border",
        isAi 
          ? "bg-primary/10 text-primary border-primary/20" 
          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
      )}>
        {isAi ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
      </div>
      
      <div className="flex-grow max-w-[calc(100%-3rem)]">
        <div className="font-semibold text-sm mb-1 text-slate-700 dark:text-slate-300">
          {isAi ? 'AI Tech Creator' : 'You'}
        </div>
        
        {isAi ? (
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {displayedContent + (isAi && message.isNew && displayedContent.length < message.content.length ? '...' : '')}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
            {message.content}
          </div>
        )}
      </div>

      {isAi && (
        <button 
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-2 h-fit rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500"
          title="Copy response"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      )}
    </motion.div>
  )
}
