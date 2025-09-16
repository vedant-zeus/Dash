// MainContent.tsx
import React, { useState, useEffect } from 'react';
import SubjectCard from './SubjectCard';
import { Calculator, Atom, Microscope, FlaskRound as Flask, LucideProps } from 'lucide-react';
import { supabase } from './SupabaseClient';

const iconMap: { [key: string]: React.FC<LucideProps> } = {
  Calculator: Calculator,
  Atom: Atom,
  Microscope: Microscope,
  Flask: Flask,
};

interface SubjectData {
  progress: number;
  level: number;
  xp: number;
  timeSpent: string;
  subjects: {
    title: string;
    icon_name: string;
  };
}

const MainContent: React.FC = () => {
  const [subjects, setSubjects] = useState<SubjectData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjectData = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('user_progress')
          .select(`
            progress,
            level,
            xp,
            time_spent,
            subject_id:subjects ( title, icon_name ) 
          `)
          .eq('user_id', 'ba5ad2aa-a25a-4700-b77b-39862e34713c');

        if (error) throw error;
        
        if (data) {
          const formattedData = data.map(item => ({
            ...item,
            subjects: item.subject_id
          }));
          setSubjects(formattedData);
        }
      } catch (error) {
        console.error('Error fetching subject data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjectData();
  }, []);

  const colors = [
    'bg-gradient-to-r from-blue-500 to-blue-600',
    'bg-gradient-to-r from-purple-500 to-purple-600',
    'bg-gradient-to-r from-green-500 to-green-600',
    'bg-gradient-to-r from-red-500 to-red-600'
  ];

  return (
    <main className="flex-1 bg-[#E0E1DD] p-8">
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
        
        {loading ? (
          <div className="text-center p-10">Loading your subjects...</div>
        ) : (
          <div className="grid grid-cols-2 gap-8">
            {subjects.map((subject, index) => {
              const IconComponent = iconMap[subject.subjects.icon_name] || Calculator;
              return (
                <SubjectCard
                  key={index}
                  title={subject.subjects.title}
                  icon={<IconComponent className="text-white" size={24} />}
                  progress={subject.progress}
                  level={subject.level}
                  xp={subject.xp}
                  timeSpent={subject.timeSpent}
                  color={colors[index % colors.length]} 
                  isActive={false} 
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;