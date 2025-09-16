//WelcomePage.tsx


import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Laptop } from 'lucide-react';

interface WelcomePageProps {
  onNext: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onNext }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-full px-6">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        className="w-full max-w-lg"
      >
        <div className="bg-oxford-blue p-8 md:p-12 rounded-2xl shadow-2xl border border-silver-lake/20">
          {/* Animated Student Avatar */}
          <motion.div 
            variants={itemVariants}
            className="relative mb-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-2 -right-6 text-yinmn-blue"
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  y: [0, -8, 0, 8, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <BookOpen size={24} />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-2 -left-6 text-silver-lake"
                animate={{ 
                  rotate: [0, -10, 0, 10, 0],
                  y: [0, 8, 0, -8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Laptop size={20} />
              </motion.div>
            </div>
          </motion.div>

          {/* Welcome text */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-platinum mb-3">
              Welcome to
            </h1>
            <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-yinmn-blue to-silver-lake bg-clip-text text-transparent mb-4">
              GyaanSagar
            </h2>
            <p className="text-lg text-silver-lake font-body">
              Your learning adventure begins here!
            </p>
          </motion.div>

          {/* Next button */}
          <motion.button
            variants={itemVariants}
            onClick={onNext}
            className="w-full bg-yinmn-blue text-platinum py-4 rounded-xl text-lg font-semibold font-body
                       hover:bg-silver-lake hover:text-oxford-blue transition-all duration-300 
                       shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomePage;