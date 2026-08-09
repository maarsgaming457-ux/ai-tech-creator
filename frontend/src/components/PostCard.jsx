import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MoreVertical } from 'lucide-react';

// Helper for relative time (e.g. "2 minutes ago")
function getRelativeTime(timestampInSeconds) {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const secondsDifference = Math.round(Date.now() / 1000 - timestampInSeconds);
  
  if (secondsDifference < 60) return rtf.format(-secondsDifference, 'second');
  if (secondsDifference < 3600) return rtf.format(-Math.round(secondsDifference / 60), 'minute');
  if (secondsDifference < 86400) return rtf.format(-Math.round(secondsDifference / 3600), 'hour');
  return rtf.format(-Math.round(secondsDifference / 86400), 'day');
}

export default function PostCard({ post, regeneratePost, isRegenerating }) {
  const timeString = getRelativeTime(post.createdAt);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 relative overflow-hidden group hover:border-[#00ff9f]/30 hover:shadow-[0_0_15px_rgba(0,255,159,0.1)] transition-all"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#00ff9f]/10 border border-[#00ff9f]/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#00ff9f]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-white font-bold tracking-wide">AI Tech Creator</h3>
              <div className="px-2 py-0.5 bg-[#00ff9f]/10 border border-[#00ff9f]/20 rounded-md text-[#00ff9f] text-[10px] font-bold uppercase tracking-wider">
                AI Generated
              </div>
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {timeString}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button 
            className="p-2 text-slate-500 hover:text-[#00ff9f] transition-colors rounded-full hover:bg-[#00ff9f]/10 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => regeneratePost(post.topic)}
            disabled={isRegenerating}
            title="Regenerate this post"
          >
            <span className="sr-only">Regenerate</span>
            🔄
          </button>
          <button className="p-2 text-slate-500 hover:text-white transition-colors rounded-full hover:bg-white/5">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-4 text-slate-200 text-[15px] leading-relaxed">
        <div style={{ whiteSpace: "pre-line" }}>
          {post.post}
        </div>
      </div>

      {/* Dynamic Tags Mockup */}
      <div className="flex flex-wrap gap-2">
        {['#AI', '#Tech', '#Future', '#Automation'].slice(0, 2 + Math.floor(Math.random() * 3)).map((tag, idx) => (
          <span 
            key={idx}
            className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium hover:bg-[#00ff9f]/10 hover:text-[#00ff9f] transition-colors cursor-pointer border border-white/5 hover:border-[#00ff9f]/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
