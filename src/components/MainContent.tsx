import React from 'react';
import SubjectCard from './SubjectCard';
import { Calculator, Atom, Microscope, FlaskRound as Flask } from 'lucide-react';

const MainContent: React.FC = () => {
  const subjects = [
    {
      title: 'Mathematics',
      icon: <Calculator className="text-white" size={24} />,
      progress: 78,
      level: 12,
      xp: 2450,
      timeSpent: '45 hrs',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      isActive: true
    },
    {
      title: 'Physics',
      icon: <Atom className="text-white" size={24} />,
      progress: 65,
      level: 10,
      xp: 1890,
      timeSpent: '32 hrs',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      isActive: false
    },
    {
      title: 'Biology',
      icon: <Microscope className="text-white" size={24} />,
      progress: 82,
      level: 14,
      xp: 2780,
      timeSpent: '38 hrs',
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      isActive: false
    },
    {
      title: 'Chemistry',
      icon: <Flask className="text-white" size={24} />,
      progress: 59,
      level: 9,
      xp: 1650,
      timeSpent: '28 hrs',
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      isActive: false
    }
  ];

  return (
    <main className="flex-1 bg-[#E0E1DD] p-8">
      {/* Subject Cards */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-xl flex items-center justify-center shadow-lg">
            <Calculator className="text-white" size={20} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0D1B2A]">Your Learning Adventures</h2>
            <p className="text-[#415A77] font-medium">Choose your next quest and continue your journey!</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              title={subject.title}
              icon={subject.icon}
              progress={subject.progress}
              level={subject.level}
              xp={subject.xp}
              timeSpent={subject.timeSpent}
              color={subject.color}
              isActive={subject.isActive}
            />
          ))}
        </div>
      </div>

      {/* Continue Learning Section */}
      <div className="bg-gradient-to-br from-white to-[#E0E1DD] rounded-2xl p-8 shadow-2xl border border-[#778DA9]/20">
        <h3 className="text-2xl font-bold text-[#0D1B2A] mb-6 flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
            <Calculator className="text-white" size={16} />
          </div>
          <span>Continue Your Quest</span>
        </h3>
        <div className="flex items-center space-x-6 bg-gradient-to-r from-[#415A77] to-[#778DA9] p-6 rounded-xl text-white">
          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Calculator className="text-white" size={24} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-xl">Quadratic Adventures</h4>
            <p className="text-white/80 mb-3">Mathematics • Class 9 • Chapter 4</p>
            <div className="w-full bg-white/20 rounded-full h-3 mb-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full shadow-lg" style={{ width: '60%' }}></div>
            </div>
            <p className="text-sm text-white/70">60% Complete • 3 lessons remaining</p>
          </div>
          <div className="text-right">
            <button className="bg-white text-[#415A77] px-6 py-3 rounded-xl font-bold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Continue Quest
            </button>
            <div className="flex items-center justify-center space-x-1 mt-3">
              <span className="text-yellow-300">★★★</span>
              <span className="text-white/40">★★★</span>
            </div>
            <p className="text-xs text-white/60 mt-1">Level 3/6</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;