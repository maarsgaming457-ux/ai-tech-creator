import React, { useRef, useEffect } from 'react'
import { Send } from 'lucide-react'

export default function InputBar({ input, setInput, isGenerating, handleSend }) {
  const textareaRef = useRef(null)

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }, [input])

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 relative">
      <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-primary/50 transition-all flex items-end overflow-hidden">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask AI Tech Creator..."
          disabled={isGenerating}
          rows={1}
          className="w-full max-h-[200px] bg-transparent border-none focus:ring-0 resize-none py-4 pl-4 pr-12 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 disabled:opacity-50 custom-scrollbar"
        />
        
        <button
          onClick={handleSend}
          disabled={isGenerating || !input.trim()}
          className="absolute right-2 bottom-2 p-2 rounded-xl bg-primary hover:bg-primary/90 text-white disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:text-slate-500 transition-colors shadow-sm"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      <div className="text-center text-xs text-slate-500 mt-2">
        AI Tech Creator can make mistakes. Consider verifying important information.
      </div>
    </div>
  )
}
