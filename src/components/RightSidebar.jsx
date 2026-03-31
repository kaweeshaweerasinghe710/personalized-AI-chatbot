import { Check, MessageCircle, Smile, Star } from 'lucide-react';

export default function RightSidebar() {
  const badges = [
    { name: 'First Chat', icon: MessageCircle, color: 'text-gray-400', active: true },
    { name: 'Taskmaster', icon: Check, color: 'text-green-400', active: true },
    { name: 'Mood Tracker', icon: Smile, color: 'text-yellow-400', active: true },
    { name: 'Level 5', icon: Star, color: 'text-amber-400', active: false },
  ];

  return (
    <div className="flex flex-col h-full bg-[#0B0E14] text-sm overflow-y-auto w-full">
      {/* Tasks Section */}
      <div className="p-6 border-b border-[#1C212E] min-h-[250px] flex flex-col">
        <h3 className="text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-4">Tasks</h3>
        
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-gray-500 text-sm mb-1">No tasks yet.</p>
          <p className="text-nova-accent/80 text-sm">Ask NOVA to add some!</p>
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="p-6 border-b border-[#1C212E] min-h-[250px] flex flex-col">
        <h3 className="text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-4">Suggestions for you</h3>
        
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-gray-500 text-sm mb-1 font-mono">Pick your interests</p>
          <p className="text-gray-500 text-sm font-mono">to see suggestions!</p>
        </div>
      </div>

      
    </div>
  );
}
