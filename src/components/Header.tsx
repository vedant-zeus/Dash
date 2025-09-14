import React, { useState } from 'react';
import { ChevronDown, User, Trophy, Zap, Calendar, Settings, BookOpen } from 'lucide-react';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white px-8 py-6 shadow-2xl border-b-2 border-[#415A77]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
           <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center animate-pulse">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#778DA9] to-[#E0E1DD] bg-clip-text text-transparent">
                Gyaan Sagar
              </span>
            </div>
            <div>
              
              
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4 text-sm">
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-3 bg-[#1B263B] px-4 py-3 rounded-xl hover:bg-[#415A77] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center shadow-md">
                <User size={18} />
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-medium text-white">Praveen Kumar</p>
                <p className="text-xs text-[#778DA9]">Grade 9</p>
              </div>
              <ChevronDown size={16} className={`transform transition-transform text-[#778DA9] ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-72 bg-[#1B263B] rounded-xl shadow-2xl z-50 border border-[#415A77] overflow-hidden">
                <div className="p-6 border-b border-[#415A77] bg-gradient-to-r from-[#1B263B] to-[#0D1B2A]">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#415A77] to-[#778DA9] rounded-full flex items-center justify-center shadow-lg">
                      <User size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Praveen Kumar</h3>
                      <p className="text-sm text-[#778DA9]">Grade 9</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-[#0D1B2A] p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <Trophy className="text-yellow-400" size={16} />
                        <span className="text-white font-medium">Level 12</span>
                      </div>
                      <p className="text-xs text-[#778DA9]">Adventure Rank</p>
                    </div>
                    <div className="bg-[#0D1B2A] p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <Zap className="text-orange-400" size={16} />
                        <span className="text-white font-medium">2450 XP</span>
                      </div>
                      <p className="text-xs text-[#778DA9]">Experience</p>
                    </div>
                    <div className="bg-[#0D1B2A] p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <Calendar className="text-green-400" size={16} />
                        <span className="text-white font-medium">7 days</span>
                      </div>
                      <p className="text-xs text-[#778DA9]">Study Streak</p>
                    </div>
                    <div className="bg-[#0D1B2A] p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></span>
                        <span className="text-white font-medium">Bronze</span>
                      </div>
                      <p className="text-xs text-[#778DA9]">Rank</p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-[#415A77] transition-colors text-left">
                    <User size={18} className="text-[#778DA9]" />
                    <a href = "http://localhost:5176/" className="text-white hover:text-blue-400 transition-colors">View Profile</a>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-[#415A77] transition-colors text-left">
                    <Settings size={18} className="text-[#778DA9]" />
                    <span className="text-white">Settings</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;