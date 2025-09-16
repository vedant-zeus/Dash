//UsernamePage.tsx


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

interface UsernamePageProps {
  onNext: () => void;
  onUpdateData: (data: { username: string }) => void;
  username: string;
}

const UsernamePage: React.FC<UsernamePageProps> = ({ onNext, onUpdateData, username }) => {
  const [inputUsername, setInputUsername] = useState(username);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!inputUsername.trim()) {
      setError('Username is required');
      return;
    }
    if (inputUsername.trim().length < 3) {
      setError('Username must be at least 3 characters');
      return;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(inputUsername.trim())) {
      setError('Username can only contain letters, numbers, and underscores');
      return;
    }

    setError('');
    onUpdateData({ username: inputUsername.trim() });
    onNext();
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
              <div className="w-12 h-12 bg-yinmn-blue rounded-full flex items-center justify-center">
                <User className="text-platinum" size={24} />
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-platinum mb-2">
              Choose your Username
            </h2>
            <p className="text-silver-lake font-body">
              Pick a unique username for your account
            </p>
          </motion.div>

          {/* Username Input */}
          <motion.div variants={itemVariants} className="mb-6">
            <label className="block text-platinum font-semibold mb-2 font-body">
              Username
            </label>
            <input
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              placeholder="Enter your preferred username"
              className={`w-full p-4 rounded-xl bg-platinum text-oxford-blue font-body
                         border-2 transition-all duration-300 focus:outline-none
                         ${error 
                           ? 'border-red-400 focus:border-red-500' 
                           : 'border-silver-lake focus:border-yinmn-blue hover:border-yinmn-blue'
                         }`}
            />
            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}
            <p className="text-silver-lake/70 text-sm mt-2">
              Only letters, numbers, and underscores allowed
            </p>
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

export default UsernamePage;