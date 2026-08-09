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
  
  const contentText = post.post || post.content || "";
  const lines = contentText
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const shareLinkedIn = (text) => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const shareTwitter = (text) => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="bg-gradient-to-br from-[#0f172a] to-[#020617] p-5 rounded-xl shadow-xl border border-gray-800 w-full relative overflow-hidden group hover:-translate-y-[2px] transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/5 shadow-inner border border-white/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-white font-bold tracking-wide">AI Tech Creator</h3>
              <div className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-slate-300 text-[10px] font-bold uppercase tracking-wider">
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
            className="p-2 text-slate-500 hover:text-white transition-colors rounded-full hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
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

      <div className="bg-[#0f172a]/50 p-4 rounded-xl shadow-lg mb-4 space-y-2 text-[15px] leading-[1.8] text-gray-200">
        {lines.map((line, index) => (
          <p
            key={index}
            className={
              line.startsWith("#")
                ? "text-purple-400 font-semibold mt-3"
                : "flex items-start gap-2"
            }
          >
            {line}
          </p>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <button 
          onClick={() => copyToClipboard(contentText)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.6)] transition"
        >
          📋 Copy
        </button>
        <button 
          onClick={() => shareLinkedIn(contentText)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.6)] transition"
        >
          🔗 LinkedIn
        </button>
        <button 
          onClick={() => shareTwitter(contentText)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 hover:shadow-[0_0_10px_rgba(99,102,241,0.6)] transition"
        >
          🐦 Twitter
        </button>
      </div>

      {/* Dynamic Tags */}
      <div className="flex flex-wrap gap-2.5 mt-2">
        {post.tags?.map((tag, idx) => (
          <span 
            key={idx}
            className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium hover:bg-white/10 hover:text-white transition-colors cursor-pointer border border-white/5 hover:border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
