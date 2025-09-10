import React from 'react';
import { Trophy, Zap, Calendar, Award, Star, MapPin, CheckCircle, Circle, Lock } from 'lucide-react';

const RightSidebar: React.FC = () => {
  const roadmapItems = [
    { id: 1, title: 'Number Systems', completed: true, current: false },
    { id: 2, title: 'Polynomials', completed: true, current: false },
    { id: 3, title: 'Coordinate Geometry', completed: true, current: false },
    { id: 4, title: 'Linear Equations', completed: false, current: true },
    { id: 5, title: 'Triangles', completed: false, current: false },
    { id: 6, title: 'Quadrilaterals', completed: false, current: false },
    { id: 7, title: 'Circles', completed: false, current: false },
    { id: 8, title: 'Surface Areas', completed: false, current: false },
  ];

  const badges = [
    { name: 'Math Wizard', icon: '🧙‍♂️', earned: true },
    { name: 'Problem Solver', icon: '🧩', earned: true },
    { name: 'Speed Demon', icon: '⚡', earned: true },
    { name: 'Perfectionist', icon: '💎', earned: false },
    { name: 'Explorer', icon: '🗺️', earned: false },
    { name: 'Champion', icon: '🏆', earned: false },
  ];

  return (
    <div className="w-80 p-6 space-y-6">
      {/* Stats & Achievements */}
      <div className="bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] rounded-2xl p-6 shadow-2xl border border-[#415A77]">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
            <Trophy className="text-white" size={16} />
          </div>
          <h2 className="text-xl font-bold text-white">Adventure Stats</h2>
        </div>

        {/* Level & XP */}
        <div className="space-y-4 mb-6">
          <div className="bg-gradient-to-r from-[#415A77] to-[#778DA9] p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-bold">Level 12</span>
              <span className="text-white/80 text-sm">2450 / 3000 XP</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full" style={{ width: '82%' }}></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0D1B2A] p-3 rounded-xl border border-[#415A77]">
              <div className="flex items-center space-x-2 mb-1">
                <Calendar className="text-green-400" size={16} />
                <span className="text-white font-bold">7</span>
              </div>
              <p className="text-xs text-[#778DA9]">Day Streak</p>
            </div>
            <div className="bg-[#0D1B2A] p-3 rounded-xl border border-[#415A77]">
              <div className="flex items-center space-x-2 mb-1">
                <Zap className="text-orange-400" size={16} />
                <span className="text-white font-bold">23</span>
              </div>
              <p className="text-xs text-[#778DA9]">Achievements</p>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div>
          <h3 className="text-sm font-bold text-white mb-3 flex items-center space-x-2">
            <Award className="text-purple-400" size={16} />
            <span>Badges Earned</span>
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={`
                  p-2 rounded-lg text-center transition-all duration-300
                  ${badge.earned 
                    ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20 border border-yellow-400/30' 
                    : 'bg-[#0D1B2A] border border-[#1B263B] opacity-50'
                  }
                `}
              >
                <div className="text-lg mb-1">{badge.icon}</div>
                <p className={`text-xs font-medium ${badge.earned ? 'text-yellow-400' : 'text-[#778DA9]'}`}>
                  {badge.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Roadmap */}
      <div className="bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] rounded-2xl p-6 shadow-2xl border border-[#415A77]">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
            <MapPin className="text-white" size={16} />
          </div>
          <h2 className="text-xl font-bold text-white">Class 9 Roadmap</h2>
        </div>

        <div className="space-y-3">
          {roadmapItems.map((item, index) => (
            <div key={item.id} className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${item.completed 
                    ? 'bg-green-400 border-green-400' 
                    : item.current 
                      ? 'bg-blue-400 border-blue-400 animate-pulse' 
                      : 'bg-[#0D1B2A] border-[#415A77]'
                  }
                `}>
                  {item.completed ? (
                    <CheckCircle className="text-white" size={16} />
                  ) : item.current ? (
                    <Circle className="text-white" size={16} />
                  ) : (
                    <Lock className="text-[#778DA9]" size={14} />
                  )}
                </div>
                {index < roadmapItems.length - 1 && (
                  <div className={`
                    w-0.5 h-6 mt-1
                    ${item.completed ? 'bg-green-400' : 'bg-[#415A77]'}
                  `}></div>
                )}
              </div>
              
              <div className="flex-1">
                <h4 className={`
                  font-medium text-sm
                  ${item.completed 
                    ? 'text-green-400' 
                    : item.current 
                      ? 'text-blue-400' 
                      : 'text-[#778DA9]'
                  }
                `}>
                  {item.title}
                </h4>
                <p className="text-xs text-[#778DA9]">
                  {item.completed 
                    ? 'Completed' 
                    : item.current 
                      ? 'In Progress' 
                      : 'Locked'
                  }
                </p>
              </div>

              {item.completed && (
                <div className="flex space-x-1">
                  <Star className="text-yellow-400" size={12} />
                  <Star className="text-yellow-400" size={12} />
                  <Star className="text-yellow-400" size={12} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] rounded-xl border border-[#415A77]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#778DA9]">Course Progress</span>
            <span className="text-sm font-bold text-white">38%</span>
          </div>
          <div className="w-full bg-[#1B263B] rounded-full h-2">
            <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full" style={{ width: '38%' }}></div>
          </div>
          <p className="text-xs text-[#778DA9] mt-2 text-center">3 of 8 topics mastered</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;