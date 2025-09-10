import React from 'react';
import { Lock, CheckCircle, Star } from 'lucide-react';

interface Class {
  id: number;
  name: string;
  isActive: boolean;
  isLocked: boolean;
}

const Sidebar: React.FC = () => {
  const classes: Class[] = [
    { id: 6, name: 'Class 6', isActive: false, isLocked: true },
    { id: 7, name: 'Class 7', isActive: false, isLocked: true },
    { id: 8, name: 'Class 8', isActive: false, isLocked: true },
    { id: 9, name: 'Class 9', isActive: true, isLocked: false },
    { id: 10, name: 'Class 10', isActive: false, isLocked: true },
    { id: 11, name: 'Class 11', isActive: false, isLocked: true },
    { id: 12, name: 'Class 12', isActive: false, isLocked: true },
  ];

  return (
    <div className="w-80 p-6">
      <div className="bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] rounded-2xl p-6 shadow-2xl border border-[#415A77]">
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-lg flex items-center justify-center">
              <Star className="text-white" size={16} />
            </div>
            <h2 className="text-xl font-bold text-white">Learning Quest</h2>
          </div>
          <p className="text-sm text-[#778DA9]">Choose your adventure path!</p>
        </div>

        <nav className="space-y-3">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className={`
                flex items-center justify-between p-4 rounded-xl transition-all duration-300 transform hover:scale-105
                ${classItem.isActive 
                  ? 'bg-gradient-to-r from-[#415A77] to-[#778DA9] text-white shadow-xl border-2 border-[#778DA9]' 
                  : classItem.isLocked 
                    ? 'bg-[#0D1B2A] text-[#778DA9] cursor-not-allowed opacity-50 border border-[#1B263B]'
                    : 'bg-[#0D1B2A] text-[#778DA9] hover:bg-[#415A77] hover:text-white cursor-pointer border border-[#1B263B] hover:border-[#415A77]'
                }
              `}
            >
              <div className="flex items-center space-x-4">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shadow-lg
                  ${classItem.isActive 
                    ? 'bg-white text-[#415A77]' 
                    : classItem.isLocked
                      ? 'bg-[#1B263B] text-[#778DA9]'
                      : 'bg-[#415A77] text-white'
                  }
                `}>
                  {classItem.id}
                </div>
                <div>
                  <span className="font-bold text-lg">{classItem.name}</span>
                  {classItem.isActive && (
                    <p className="text-xs text-white/80">Current Adventure</p>
                  )}
                  {classItem.isLocked && (
                    <p className="text-xs text-[#778DA9]">Locked Quest</p>
                  )}
                </div>
              </div>
              
              <div>
                {classItem.isActive ? (
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={14} />
                  </div>
                ) : classItem.isLocked ? (
                  <div className="w-6 h-6 bg-[#1B263B] rounded-full flex items-center justify-center">
                    <Lock className="text-[#778DA9]" size={14} />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-8 p-5 bg-gradient-to-r from-[#0D1B2A] to-[#1B263B] rounded-xl border border-[#415A77]">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
            <Star className="text-yellow-400" size={18} />
            <span>Quest Progress</span>
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#778DA9]">Overall Journey</span>
              <span className="text-white font-bold">75%</span>
            </div>
            <div className="w-full bg-[#1B263B] rounded-full h-3 shadow-inner">
              <div className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 h-3 rounded-full shadow-lg" style={{ width: '75%' }}></div>
            </div>
            <p className="text-xs text-[#778DA9] text-center">Keep exploring to unlock new adventures!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;