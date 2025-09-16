//SubjectCard.tsx

import React from 'react';
import { BookOpen, Zap, Trophy, Clock } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  icon: React.ReactNode;
  progress: number;
  level: number;
  xp: number;
  timeSpent: string;
  color: string;
  isActive: boolean;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ 
  title, 
  icon, 
  progress, 
  level, 
  xp, 
  timeSpent, 
  color,
  isActive 
}) => {
  return (
    <div className={`
      bg-gradient-to-br from-white to-[#E0E1DD] rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer border border-[#778DA9]/20
      ${isActive ? 'ring-4 ring-blue-400 transform scale-105 shadow-blue-400/20' : 'hover:transform hover:-translate-y-2 hover:rotate-1'}
    `}>
      <div className="flex items-center justify-between mb-6">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${color}`}>
          {icon}
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2 text-sm font-bold text-[#415A77]">
            <Trophy size={16} className="text-yellow-500" />
            <span>Level {level}</span>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">{title}</h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center text-sm font-medium text-[#415A77] mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-[#778DA9]/20 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 h-3 rounded-full transition-all duration-500 shadow-lg" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm font-medium">
          <div className="flex items-center space-x-2 bg-orange-100 px-3 py-2 rounded-lg">
            <Zap size={16} className="text-orange-500" />
            <span className="text-orange-700">{xp} XP</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-100 px-3 py-2 rounded-lg">
            <Clock size={16} className="text-green-500" />
            <span className="text-green-700">{timeSpent}</span>
          </div>
        </div>

        <button className={`
          w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105
          ${isActive 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
            : 'bg-gradient-to-r from-[#415A77] to-[#778DA9] text-white hover:from-[#778DA9] hover:to-[#415A77]'
          }
        `}>
          {isActive ? 'Continue Adventure' : 'Start Quest'}
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;