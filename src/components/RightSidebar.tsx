import React from 'react';
import { Trophy, Zap, Calendar, Award, MapPin } from 'lucide-react';

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

      {/* Game-Style Learning Path */}
      <div className="bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] rounded-2xl p-6 shadow-2xl border border-[#415A77] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 bg-blue-400 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-8 right-8 w-20 h-20 bg-green-400 rounded-full blur-xl opacity-30"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-yellow-400 rounded-full blur-xl opacity-30"></div>
        </div>

        <div className="flex items-center space-x-3 mb-6 relative z-10">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
            <MapPin className="text-white" size={16} />
          </div>
          <h2 className="text-xl font-bold text-white">Class 9 Learning Journey</h2>
        </div>

        {/* Game Map Container */}
        <div className="relative h-96 z-10">
          {/* Decorative Elements */}
          <div className="absolute top-12 left-12 text-yellow-400 text-sm opacity-60">✨</div>
          <div className="absolute top-24 right-10 text-pink-400 text-sm opacity-60">🌸</div>
          <div className="absolute bottom-16 left-16 text-green-400 text-base opacity-60">🌳</div>
          <div className="absolute top-36 right-8 text-yellow-400 text-sm opacity-60">⭐</div>
          <div className="absolute bottom-32 right-14 text-pink-400 text-sm opacity-60">🌺</div>
          <div className="absolute top-2 right-6 text-yellow-400 text-xl animate-bounce">🏆</div>

          
            

          {/* Level Nodes */}
          {roadmapItems.map((item, index) => {
            const positions = [
              { top: '340px', left: '30px' },   // Number Systems
              { top: '290px', left: '120px' },  // Polynomials  
              { top: '240px', left: '250px' },  // Coordinate Geometry
              { top: '200px', left: '180px' },  // Linear Equations
              { top: '150px', left: '80px' },   // Triangles
              { top: '100px', left: '200px' },  // Quadrilaterals
              { top: '50px', left: '120px' },   // Circles
              { top: '10px', left: '280px' },   // Surface Areas
            ];

            return (
              <div
                key={item.id}
                className="absolute flex flex-col items-center cursor-pointer hover:scale-110 transition-transform duration-200"
                style={{ top: positions[index].top, left: positions[index].left }}
              >
                <div className={`
                  w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold text-white border-3 relative z-10
                  ${item.completed 
                    ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-500 shadow-lg shadow-green-400/30' 
                    : item.current 
                      ? 'bg-gradient-to-br from-blue-400 to-blue-600 border-blue-500 shadow-lg shadow-blue-400/30 animate-pulse' 
                      : 'bg-gradient-to-br from-gray-400 to-gray-600 border-gray-500'
                  }
                `}>
                  {item.completed ? '✓' : item.current ? item.id : '🔒'}
                </div>
                
                <div className="bg-[#0D1B2A]/90 border border-[#415A77] rounded-lg px-2 py-1 mt-2 backdrop-blur-sm">
                  <div className={`text-xs font-medium text-center max-w-20 leading-tight
                    ${item.completed 
                      ? 'text-green-400' 
                      : item.current 
                        ? 'text-blue-400' 
                        : 'text-gray-400'
                    }
                  `}>
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Section */}
        <div className="mt-6 p-4 bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] rounded-xl border border-[#415A77] relative z-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#778DA9]">Course Progress</span>
            <span className="text-sm font-bold text-white">38%</span>
          </div>
          <div className="w-full bg-[#1B263B] rounded-full h-2 mb-2">
            <div className="bg-gradient-to-r from-[#22c55e] to-[#3b82f6] h-2 rounded-full transition-all duration-1000" style={{ width: '38%' }}></div>
          </div>
          <p className="text-xs text-[#778DA9] text-center">3 of 8 topics mastered</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;