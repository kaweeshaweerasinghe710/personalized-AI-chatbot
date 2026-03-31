import { useState } from 'react';
import { Send, Image as ImageIcon, Mic, Paperclip } from 'lucide-react';

export default function ChatArea() {
  const [input, setInput] = useState('');

  const messages = [
    {
      id: 1,
      sender: 'user',
      avatar: '👱‍♀️',
      avatarBg: 'bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500',
      content: (
        <>
          <p className="mb-4 text-[#F8FAFC]">Good morning, <span className="font-bold">kawee! 👋</span></p>
          <p className="mb-4 text-[#F8FAFC] leading-relaxed">
            I'm <span className="font-bold tracking-wide">NOVA</span>, your personal AI assistant. I'm here to help you <span className="italic">chat</span> and much more.
          </p>
          <p className="text-[#F8FAFC]">Try the quick actions below, or just talk to me naturally!</p>
        </>
      ),
      time: '11:31',
      isNova: true
    },
    {
      id: 2,
      sender: 'nova',
      avatar: 'N',
      avatarBg: 'bg-nova-accent text-[#0F1219] font-bold',
      content: (
        <p className="text-[#F8FAFC]">Please paste your Anthropic API key at...</p>
      ),
      time: '11:32',
      isNova: true
    }
  ];

  return (
    <div className="flex flex-col h-full bg-[#0F1219] relative">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 custom-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className="flex max-w-3xl mx-auto w-full group">
            <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg ${msg.avatarBg} mt-1 mr-4 shadow-lg ${msg.isNova ? 'shadow-[0_0_15px_rgba(31,241,211,0.2)]' : ''}`}>
               {msg.avatar === '👱‍♀️' ? (
                  <div className="w-[36px] h-[36px] bg-[#1C212E] rounded-[10px] flex items-center justify-center">
                    <span className="text-xl">👱‍♀️</span>
                  </div>
               ) : msg.avatar}
            </div>
            
            <div className="flex-1 max-w-[80%]">
              <div className="bg-[#1C212E] rounded-2xl rounded-tl-sm p-4 md:p-6 shadow-sm border border-[#2A3143]">
                <div className="text-[15px]">{msg.content}</div>
              </div>
              <div className="text-[11px] text-gray-500 mt-2 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-gradient-to-t from-[#0F1219] via-[#0F1219] to-transparent pt-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-end bg-[#1C212E] rounded-2xl border border-gray-700 shadow-xl focus-within:border-nova-accent focus-within:ring-1 focus-within:ring-nova-accent transition-all p-2">
            
             {/* Left Actions */}
             <div className="flex items-center space-x-1 p-2 text-gray-400">
              <button className="p-2 hover:bg-gray-700 rounded-xl transition-colors hover:text-white">
                <Paperclip size={20} />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-xl transition-colors hover:text-white">
                <ImageIcon size={20} />
              </button>
            </div>

            {/* Input Field */}
            <textarea
              placeholder="Message NOVA..."
              className="flex-1 max-h-48 min-h-[44px] bg-transparent border-none focus:ring-0 text-white resize-none py-3 px-2 text-[15px] outline-none custom-scrollbar"
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  // Handle send
                }
              }}
            />

            {/* Right Actions */}
            <div className="flex items-center space-x-2 p-2">
               <button className="p-2 hover:bg-gray-700 rounded-xl transition-colors text-gray-400 hover:text-white">
                <Mic size={20} />
              </button>
              <button 
                className={`p-2 rounded-xl transition-colors flex items-center justify-center ${
                  input.trim().length > 0 
                  ? 'bg-nova-accent text-[#0F1219] shadow-[0_0_15px_rgba(31,241,211,0.4)]' 
                  : 'bg-gray-700/50 text-gray-500'
                }`}
                disabled={input.trim().length === 0}
              >
                <Send size={18} className={input.trim().length > 0 ? "ml-0.5" : ""} />
              </button>
            </div>
          </div>
          
          <div className="text-center mt-3 text-[11px] text-gray-500">
            NOVA can make mistakes. Consider verifying important information.
          </div>
        </div>
      </div>
    </div>
  );
}
