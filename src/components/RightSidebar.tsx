import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { supabase } from './SupabaseClient';

// Define types for our data
interface UserProfile {
  level: number;
  xp: number;
}

interface Badge {
  name: string;
  icon: string;
}

interface RoadmapItem {
  id: number;
  title: string;
  position: { top: string; left: string; };
  user_roadmap_progress: { status: string }[];
}

const RightSidebar: React.FC = () => {
  const [stats, setStats] = useState<UserProfile | null>(null);
  const [earnedBadges, setEarnedBadges] = useState<Badge[]>([]);
  const [roadmapItems, setRoadmapItems] = useState<RoadmapItem[]>([]);
  const [loading, setLoading] = useState(true);

  // This hardcoded list is used to render the full grid of all possible badges
  const allBadges = [
    { name: 'Math Wizard', icon: '🧙‍♂️' },
    { name: 'Problem Solver', icon: '🧩' },
    { name: 'Speed Demon', icon: '⚡' },
    { name: 'Perfectionist', icon: '💎' },
    { name: 'Explorer', icon: '🗺️' },
    { name: 'Champion', icon: '🏆' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userId = 'ba5ad2aa-a25a-4700-b77b-39862e34713c'; // The sample user ID
        
        const [statsResponse, badgesResponse, roadmapResponse] = await Promise.all([
          supabase.from('users').select('level, xp').eq('id', userId).single(),
          supabase.from('user_badges').select('badges(name, icon)').eq('user_id', userId),
          supabase.from('roadmap_items')
            .select(`
              id,
              title,
              position,
              user_roadmap_progress ( status )
            `)
            .eq('class_number', 9)
            .eq('user_roadmap_progress.user_id', userId)
        ]);

        if (statsResponse.error) throw statsResponse.error;
        if (badgesResponse.error) throw badgesResponse.error;
        if (roadmapResponse.error) throw roadmapResponse.error;

        if (statsResponse.data) setStats(statsResponse.data);
        if (badgesResponse.data) {
          const formattedBadges = badgesResponse.data.map((b: any) => b.badges);
          setEarnedBadges(formattedBadges);
        }
        if (roadmapResponse.data) setRoadmapItems(roadmapResponse.data);

      } catch (error) {
        console.error('Error fetching right sidebar data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-80 p-6 space-y-6">
      {/* Stats & Achievements Section */}
      <div className="bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] rounded-2xl p-6 shadow-2xl border border-[#415A77]">
        <h2 className="text-xl font-bold text-white mb-6">Adventure Stats</h2>
        {loading ? (
          <div className="text-white/80 text-center">Loading...</div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              <div className="bg-gradient-to-r from-[#415A77] to-[#778DA9] p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-bold">Level {stats?.level || 1}</span>
                  <span className="text-white/80 text-sm">{stats?.xp || 0} / 3000 XP</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full" style={{ width: `${((stats?.xp || 0) / 3000) * 100}%` }}></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-3">Badges Earned</h3>
              <div className="grid grid-cols-3 gap-2">
                {allBadges.map((badge, index) => {
                  const isEarned = earnedBadges.some(eb => eb.name === badge.name);
                  return (
                    <div key={index} className={`p-2 rounded-lg text-center transition-all duration-300 ${isEarned ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20 border border-yellow-400/30' : 'bg-[#0D1B2A] border border-[#1B263B] opacity-50'}`}>
                      <div className="text-lg mb-1">{badge.icon}</div>
                      <p className={`text-xs font-medium ${isEarned ? 'text-yellow-400' : 'text-[#778DA9]'}`}>{badge.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Game-Style Learning Path */}
      <div className="bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] rounded-2xl p-6 shadow-2xl border border-[#415A77]">
        <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={16} />
            </div>
            <h2 className="text-xl font-bold text-white">Class 9 Learning Journey</h2>
        </div>
        {/* THE FIX: Add overflow-hidden to the parent and a scaling div inside */}
        <div className="relative h-96 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 scale-[0.75]">
                {roadmapItems.map((item) => {
                    const status = item.user_roadmap_progress[0]?.status || 'locked';
                    const isCompleted = status === 'completed';
                    const isCurrent = status === 'current';

                    return (
                    <div
                        key={item.id}
                        className="absolute flex flex-col items-center cursor-pointer hover:scale-110 transition-transform duration-200"
                        style={{ ...(item.position || {}) }}
                    >
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold text-white border-3 relative z-10
                        ${isCompleted ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-500' : ''}
                        ${isCurrent ? 'bg-gradient-to-br from-blue-400 to-blue-600 border-blue-500 animate-pulse' : ''}
                        ${!isCompleted && !isCurrent ? 'bg-gradient-to-br from-gray-400 to-gray-600 border-gray-500' : ''}
                        `}>
                        {isCompleted ? '✓' : isCurrent ? item.id : '🔒'}
                        </div>
                        <div className="bg-[#0D1B2A]/90 border border-[#415A77] rounded-lg px-2 py-1 mt-2 backdrop-blur-sm">
                        <div className={`text-xs font-medium text-center max-w-20 leading-tight
                            ${isCompleted ? 'text-green-400' : ''}
                            ${isCurrent ? 'text-blue-400' : ''}
                            ${!isCompleted && !isCurrent ? 'text-gray-400' : ''}
                        `}>
                            {item.title}
                        </div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;