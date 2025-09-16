//SubjectChoicePage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Triangle, BarChart3, Atom, TestTube, Dna, Sigma } from 'lucide-react';

interface SubjectChoicePageProps {
  onNext: () => void;
  onUpdateData: (data: { subjects: string[] }) => void;
  selectedSubjects: string[];
}

const SubjectChoicePage: React.FC<SubjectChoicePageProps> = ({ 
  onNext, 
  onUpdateData, 
  selectedSubjects 
}) => {
  const handleSubjectToggle = (subject: string) => {
    const updatedSubjects = selectedSubjects.includes(subject)
      ? selectedSubjects.filter(s => s !== subject)
      : [...selectedSubjects, subject];
    
    onUpdateData({ subjects: updatedSubjects });
  };

  const handleContinue = () => {
    if (selectedSubjects.length > 0) {
      onNext();
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const subjects = [
    {
      id: 'Trigonometry',
      name: 'Trigonometry',
      icon: Triangle,
      color: 'from-purple-500 to-purple-700',
      description: 'Angles, triangles, and functions'
    },
    {
      id: 'Geometry', 
      name: 'Geometry',
      icon: BarChart3,
      color: 'from-blue-500 to-blue-700',
      description: 'Shapes, areas, and volumes'
    },
    {
      id: 'Algebra',
      name: 'Algebra',
      icon: Sigma,
      color: 'from-pink-500 to-pink-700',
      description: 'Equations, expressions, and variables'
    },
    {
      id: 'Physics',
      name: 'Physics',
      icon: Atom,
      color: 'from-green-500 to-green-700',
      description: 'Matter, energy, and motion'
    },
    {
      id: 'Chemistry',
      name: 'Chemistry',
      icon: TestTube,
      color: 'from-orange-500 to-orange-700',
      description: 'Elements, compounds, and reactions'
    },
    {
      id: 'Biology',
      name: 'Biology',
      icon: Dna,
      color: 'from-teal-500 to-teal-700',
      description: 'Life, organisms, and ecosystems'
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-full px-6">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        className="w-full max-w-2xl"
      >
        <div className="bg-oxford-blue p-8 rounded-2xl shadow-2xl border border-silver-lake/20">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold text-platinum mb-2">
              Which subject are you interested in?
            </h2>
            <p className="text-silver-lake font-body">
              Select one or more subjects you'd like to learn
            </p>
          </motion.div>

          {/* Subject Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          >
            {subjects.map((subject) => {
              const Icon = subject.icon;
              const isSelected = selectedSubjects.includes(subject.id);
              
              return (
                <motion.div
                  key={subject.id}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSubjectToggle(subject.id)}
                  className={`relative cursor-pointer p-6 rounded-xl border-2 transition-all duration-300
                             ${isSelected 
                               ? 'bg-yinmn-blue border-yinmn-blue shadow-lg' 
                               : 'bg-oxford-blue/50 border-silver-lake/30 hover:border-yinmn-blue hover:shadow-md'
                             }`}
                >
                  {/* Selection indicator */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute top-2 right-2 w-6 h-6 bg-platinum rounded-full flex items-center justify-center"
                    >
                      <div className="w-3 h-3 bg-yinmn-blue rounded-full"></div>
                    </motion.div>
                  )}

                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${subject.color} 
                                  flex items-center justify-center shadow-md`}>
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Subject info */}
                  <h3 className={`text-lg font-display font-bold mb-2 text-center
                                 ${isSelected ? 'text-platinum' : 'text-platinum'}`}>
                    {subject.name}
                  </h3>
                  
                  <p className={`text-sm text-center font-body
                               ${isSelected ? 'text-platinum/90' : 'text-silver-lake'}`}>
                    {subject.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Continue Button */}
          <motion.button
            variants={itemVariants}
            onClick={handleContinue}
            disabled={selectedSubjects.length === 0}
            className={`w-full py-4 rounded-xl text-lg font-semibold font-body shadow-lg
                       transition-all duration-300 transform
                       ${selectedSubjects.length > 0
                         ? 'bg-yinmn-blue text-platinum hover:bg-silver-lake hover:text-oxford-blue hover:shadow-xl hover:scale-105 active:scale-95'
                         : 'bg-silver-lake/20 text-silver-lake/50 cursor-not-allowed'
                       }`}
            whileHover={selectedSubjects.length > 0 ? { scale: 1.02 } : {}}
            whileTap={selectedSubjects.length > 0 ? { scale: 0.98 } : {}}
          >
            {selectedSubjects.length > 0 
              ? `Continue (${selectedSubjects.length} selected)` 
              : 'Select at least one subject'
            }
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SubjectChoicePage;
