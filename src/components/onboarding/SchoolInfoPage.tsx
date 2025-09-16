//SchoolInfoPage.tsx


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

interface SchoolInfoPageProps {
  onNext: () => void;
  onUpdateData: (data: { schoolName: string; class: string }) => void;
  data: { schoolName: string; class: string };
}

const SchoolInfoPage: React.FC<SchoolInfoPageProps> = ({ onNext, onUpdateData, data }) => {
  const [schoolName, setSchoolName] = useState(data.schoolName);
  const [selectedClass, setSelectedClass] = useState(data.class);
  const [errors, setErrors] = useState({ schoolName: '', class: '' });

  const classes = [
    'Class 6', 'Class 7', 'Class 8', 'Class 9', 
    'Class 10', 'Class 11', 'Class 12'
  ];

  const handleSubmit = () => {
    const newErrors = { schoolName: '', class: '' };
    
    if (!schoolName.trim()) {
      newErrors.schoolName = 'School name is required';
    }
    if (!selectedClass) {
      newErrors.class = 'Please select your class';
    }

    setErrors(newErrors);

    if (!newErrors.schoolName && !newErrors.class) {
      onUpdateData({ schoolName: schoolName.trim(), class: selectedClass });
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

  return (
    <div className="flex items-center justify-center min-h-full px-6">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        className="w-full max-w-md"
      >
        <div className="bg-oxford-blue p-8 rounded-2xl shadow-2xl border border-silver-lake/20">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <School className="text-yinmn-blue mr-2" size={28} />
              <GraduationCap className="text-silver-lake" size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold text-platinum mb-2">
              Add your School Name and Class
            </h2>
            <p className="text-silver-lake font-body">
              Tell us about your school and class
            </p>
          </motion.div>

          {/* School Name Input */}
          <motion.div variants={itemVariants} className="mb-6">
            <label className="block text-platinum font-semibold mb-2 font-body">
              School Name
            </label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="Enter your school name"
              className={`w-full p-4 rounded-xl bg-platinum text-oxford-blue font-body
                         border-2 transition-all duration-300 focus:outline-none
                         ${errors.schoolName 
                           ? 'border-red-400 focus:border-red-500' 
                           : 'border-silver-lake focus:border-yinmn-blue hover:border-yinmn-blue'
                         }`}
            />
            {errors.schoolName && (
              <p className="text-red-400 text-sm mt-2">{errors.schoolName}</p>
            )}
          </motion.div>

          {/* Class Dropdown */}
          <motion.div variants={itemVariants} className="mb-8">
            <label className="block text-platinum font-semibold mb-2 font-body">
              Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className={`w-full p-4 rounded-xl bg-platinum text-oxford-blue font-body
                         border-2 transition-all duration-300 focus:outline-none
                         ${errors.class 
                           ? 'border-red-400 focus:border-red-500' 
                           : 'border-silver-lake focus:border-yinmn-blue hover:border-yinmn-blue'
                         }`}
            >
              <option value="">Select your class</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
            {errors.class && (
              <p className="text-red-400 text-sm mt-2">{errors.class}</p>
            )}
          </motion.div>

          {/* Continue Button */}
          <motion.button
            variants={itemVariants}
            onClick={handleSubmit}
            className="w-full bg-yinmn-blue text-platinum py-4 rounded-xl text-lg font-semibold font-body
                       hover:bg-silver-lake hover:text-oxford-blue transition-all duration-300 
                       shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continue
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SchoolInfoPage;