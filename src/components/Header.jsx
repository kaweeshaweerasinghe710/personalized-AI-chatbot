import { useState } from 'react';
import { Eye, Code, Copy, ChevronDown, RotateCcw, X, Zap, Circle } from 'lucide-react';

export default function Header() {
  const [apiKey, setApiKey] = useState('');

  return (
    <div className="flex flex-col border-b border-[#1C212E] bg-nova-bg w-full">
      

      {/* Main App Header */}
       <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-4">
        {/* Logo Area */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-nova-accent text-[#0F1219] rounded-lg flex items-center justify-center font-bold text-xl rounded-tl-full rounded-br-full rounded-tr-sm rounded-bl-sm">
            N
          </div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-black text-nova-accent tracking-tight">NOVA</h1>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold border border-green-900 text-green-500 bg-green-950/30 uppercase tracking-widest">
              Personal AI
            </span>
          </div>
        </div>

        {/* Center - API Key Input */}
        <div className="flex-1 max-w-lg flex items-center space-x-3 w-full">
          <div className="relative flex-1 group">
            <input 
              type="password" 
              placeholder="Paste Anthropic API key → console.anthropic.com" 
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full bg-[#141822] border border-gray-700 text-gray-300 text-sm rounded-full px-4 py-2 outline-none focus:border-nova-accent focus:ring-1 focus:ring-nova-accent transition-all pl-4"
            />
          </div>
          <button className="bg-nova-accent hover:bg-[#15D3B8] text-[#0F1219] font-bold px-5 py-2 rounded-full text-sm transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(31,241,211,0.3)]">
            Activate AI
          </button>
        </div>

        {/* XP Badge */}
        <div className="flex items-center bg-[#1C212E] border border-gray-700 rounded-full px-3 py-1.5 space-x-2">
          <Circle size={10} className="fill-yellow-500 text-yellow-500" />
          <span className="text-yellow-500 font-bold text-sm">0 XP</span>
        </div>
      </div>

      {/* Sub Status Bar */}
      <div className="flex items-center justify-start px-5 py-2 text-xs text-gray-500 border-t border-[#1C212E] overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div className="flex items-center space-x-1.5 mr-6">
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          <span>AI offline — paste API key above</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <span className="text-gray-600 mr-1.5 text-[10px]">●</span>
            <span>Mood: <span className="text-gray-400">not set</span></span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 mr-1.5 text-[10px]">●</span>
            <span>Tasks: <span className="text-gray-400">0</span></span>
          </div>
          <div className="flex items-center text-orange-400/80">
            <span className="text-gray-600 mr-1.5 text-[10px]">●</span>
            <span>Streak: <span className="text-gray-400">0 days</span> <span className="ml-1 text-orange-500">🔥</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
