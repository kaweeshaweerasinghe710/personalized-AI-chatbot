import { useState } from 'react';
import { HelpCircle, Terminal, Command, Brain, Dumbbell, BookOpen, Palette } from 'lucide-react';

export default function LeftSidebar() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { name: 'Happy', emoji: '😄', color: 'text-yellow-400' },
    { name: 'Focused', emoji: '🎯', color: 'text-pink-500' },
    { name: 'Energetic', emoji: '⚡', color: 'text-orange-500' },
    { name: 'Tired', emoji: '💤', color: 'text-blue-400' },
    { name: 'Stressed', emoji: '🤯', color: 'text-red-500' },
    { name: 'Sad', emoji: '😔', color: 'text-purple-400' },
  ];

  const interests = [
    { name: 'Coding', icon: Terminal, color: 'text-blue-400' },
    { name: 'React', icon: Command, color: 'text-cyan-400' },
    { name: 'AI/ML', icon: Brain, color: 'text-pink-400' },
    { name: 'Fitness', icon: Dumbbell, color: 'text-yellow-500' },
    { name: 'Reading', icon: BookOpen, color: 'text-emerald-400' },
    { name: 'Design', icon: Palette, color: 'text-purple-400' },
  ];

  return (
    <div className="flex flex-col h-full bg-[#0B0E14] text-sm overflow-y-auto">
      {/* Profile Section */}
      <div className="p-6 border-b border-[#1C212E]">
        <h3 className="text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-4">Profile</h3>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-[2px]">
            <div className="w-full h-full bg-[#1C212E] rounded-[10px] flex items-center justify-center overflow-hidden">
               {/* Custom Avatar Placeholder */}
               <div className="text-3xl text-yellow-300 drop-shadow-md">👱‍♀️</div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-1">kawee</h2>
            <div className="flex items-center space-x-2 text-xs">
              
            </div>
          </div>
        </div>

        {/* XP Progress */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] font-medium text-gray-400">
            <span>XP</span>
            <span>0/100</span>
          </div>
          <div className="w-full h-1.5 bg-[#1C212E] rounded-full overflow-hidden">
            <div className="w-0 h-full bg-nova-accent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Mood Section */}
      <div className="p-6 border-b border-[#1C212E]">
        <h3 className="text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-4">Your Mood</h3>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {moods.map((mood) => (
            <button
              key={mood.name}
              onClick={() => setSelectedMood(mood.name)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200 ${
                selectedMood === mood.name 
                ? 'bg-[#1C212E] border-nova-accent shadow-[0_0_10px_rgba(31,241,211,0.15)]' 
                : 'bg-[#141822] border-transparent hover:border-gray-700 hover:bg-[#1A2130]'
              }`}
            >
              <span className="text-2xl mb-1">{mood.emoji}</span>
              <span className="text-[10px] font-medium text-gray-400">{mood.name}</span>
            </button>
          ))}
        </div>
        
        <button className="w-full flex items-center justify-center space-x-2 bg-[#141822] hover:bg-[#1C212E] border border-gray-800 rounded-xl py-3 transition-colors">
          <span className="text-xl">🤔</span>
          <span className="text-sm font-medium text-gray-400 hover:text-gray-200">Select how you feel</span>
        </button>
      </div>

      {/* Interests Section */}
      <div className="p-6">
        <h3 className="text-[11px] font-bold text-gray-500 tracking-widest uppercase mb-4">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <button 
              key={interest.name}
              className="flex items-center space-x-2 bg-[#141822] hover:bg-[#1C212E] border border-gray-800 rounded-full px-3 py-1.5 transition-colors group"
            >
              <interest.icon size={12} className={`${interest.color} group-hover:scale-110 transition-transform`} />
              <span className="text-xs font-medium text-gray-300 group-hover:text-white">{interest.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
