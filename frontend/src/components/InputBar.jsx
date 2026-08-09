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
    <div className="w-full max-w-3xl mx-auto p-4 relative z-10">
      <div className="relative bg-white/5 backdrop-blur-xl rounded-[30px] shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 focus-within:ring-2 focus-within:ring-purple-500/50 focus-within:border-purple-500/50 transition-all flex items-end overflow-hidden">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask AI Tech Creator..."
          disabled={isGenerating}
          rows={1}
          className="w-full max-h-[200px] bg-transparent border-none focus:ring-0 resize-none py-4 pl-6 pr-14 text-white placeholder:text-slate-400 disabled:opacity-50 custom-scrollbar leading-relaxed"
        />
        
        <button
          onClick={handleSend}
          disabled={isGenerating || !input.trim()}
          className="absolute right-2 bottom-2 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white disabled:from-slate-700 disabled:to-slate-700 disabled:text-slate-500 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
        >
          <Send className="w-4 h-4 translate-x-[-1px] translate-y-[1px]" />
        </button>
      </div>
      <div className="text-center text-xs text-slate-500 mt-3 font-medium tracking-wide">
        AI Tech Creator can make mistakes. Consider verifying important information.
      </div>
    </div>
  )
}
