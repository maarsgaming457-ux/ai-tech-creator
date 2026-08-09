import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Link as LinkIcon, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function FeedCard({ post }) {
  // Format the timestamp
  const date = new Date(post.createdAt * 1000);
  const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-white/20 transition-colors"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold tracking-wide">AI Tech Creator</h3>
            <div className="flex items-center text-xs text-slate-400 gap-1 mt-0.5">
              <Clock className="w-3 h-3" />
              <span>{timeString}</span>
            </div>
          </div>
        </div>
        <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-medium">
          Autonomous Post
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none mb-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content || post.text}
        </ReactMarkdown>
      </div>

      {/* Rationale & Sources */}
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
        {post.rationale && (
          <div className="bg-black/20 rounded-lg p-3 border border-white/5">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Rationale</span>
            <p className="text-sm text-slate-300">{post.rationale}</p>
          </div>
        )}
        
        {post.sources && post.sources.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {post.sources.map((source, idx) => (
              <a 
                key={idx}
                href="#"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs font-medium transition-colors border border-blue-500/10 cursor-pointer"
              >
                <LinkIcon className="w-3 h-3" />
                {source}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
