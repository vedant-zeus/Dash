import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, Eye, EyeOff } from 'lucide-react';
import { supabase } from '../SupabaseClient'; // Adjust path if needed

interface AuthPageProps {
  userData: {
    username: string;
    schoolName: string;
    class: string;
    subjects: string[];
  };
}

const AuthPage: React.FC<AuthPageProps> = ({ userData }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = { email: '', password: '', confirmPassword: '' };
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password && (isLogin || !newErrors.confirmPassword);
  };

  const handleSubmit = async () => {
    setAuthError('');
    setSuccessMessage('');
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        setSuccessMessage('Login successful! Redirecting...');
        // Redirection will be handled by our onAuthStateChange listener
      } else {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              username: userData.username,
              school_name: userData.schoolName,
              class: userData.class,
            },
          },
        });
        if (error) throw error;
        setSuccessMessage('Success! Please check your email for a confirmation link.');
      }
    } catch (error: any) {
      setAuthError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }},
  };
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 }},
  };

  return (
    <div className="flex items-center justify-center min-h-full px-6">
      <motion.div variants={cardVariants} initial="initial" animate="animate" className="w-full max-w-md">
        <div className="bg-oxford-blue p-8 rounded-2xl shadow-2xl border border-silver-lake/20">
          
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-yinmn-blue rounded-full flex items-center justify-center">
                {isLogin ? <LogIn className="text-platinum" size={24} /> : <UserPlus className="text-platinum" size={24} />}
              </div>
            </div>
            <h2 className="text-3xl font-display font-bold text-platinum mb-2">
              {isLogin ? 'Login to GyaanSagar' : 'Create Account'}
            </h2>
            <p className="text-silver-lake font-body">{isLogin ? 'Welcome back!' : 'Join the learning community'}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex mb-6 bg-rich-black rounded-xl p-1">
            <button onClick={() => setIsLogin(true)} className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${isLogin ? 'bg-yinmn-blue text-platinum shadow-md' : 'text-silver-lake hover:text-platinum'}`}>Login</button>
            <button onClick={() => setIsLogin(false)} className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${!isLogin ? 'bg-yinmn-blue text-platinum shadow-md' : 'text-silver-lake hover:text-platinum'}`}>Sign Up</button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <label className="block text-platinum font-semibold mb-2 font-body">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} placeholder="Enter your email" className={`w-full p-4 rounded-xl bg-platinum text-oxford-blue font-body border-2 transition-all duration-300 focus:outline-none ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-silver-lake focus:border-yinmn-blue hover:border-yinmn-blue'}`}/>
              {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
            </div>
            
            <div className="mb-4">
                <label className="block text-platinum font-semibold mb-2 font-body">Password</label>
                <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} value={formData.password} onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} placeholder="Enter your password" className={`w-full p-4 pr-12 rounded-xl bg-platinum text-oxford-blue font-body border-2 transition-all duration-300 focus:outline-none ${errors.password ? 'border-red-400 focus:border-red-500' : 'border-silver-lake focus:border-yinmn-blue hover:border-yinmn-blue'}`}/>
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-oxford-blue hover:text-yinmn-blue transition-colors">{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
                </div>
                {errors.password && <p className="text-red-400 text-sm mt-2">{errors.password}</p>}
            </div>

            {!isLogin && (
              <div className="mb-6">
                <label className="block text-platinum font-semibold mb-2 font-body">Confirm Password</label>
                <div className="relative">
                    <input type={showConfirmPassword ? 'text' : 'password'} value={formData.confirmPassword} onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))} placeholder="Confirm your password" className={`w-full p-4 pr-12 rounded-xl bg-platinum text-oxford-blue font-body border-2 transition-all duration-300 focus:outline-none ${errors.confirmPassword ? 'border-red-400 focus:border-red-500' : 'border-silver-lake focus:border-yinmn-blue hover:border-yinmn-blue'}`}/>
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-oxford-blue hover:text-yinmn-blue transition-colors">{showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
                </div>
                {errors.confirmPassword && <p className="text-red-400 text-sm mt-2">{errors.confirmPassword}</p>}
              </div>
            )}
            
            <button onClick={handleSubmit} disabled={isSubmitting} className="w-full bg-yinmn-blue text-platinum py-4 rounded-xl text-lg font-semibold font-body hover:bg-silver-lake hover:text-oxford-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'Loading...' : isLogin ? 'Login' : 'Create Account'}
            </button>
          </motion.div>

          {authError && <motion.p variants={itemVariants} className="text-red-400 text-sm mt-4 text-center">{authError}</motion.p>}
          {successMessage && <motion.p variants={itemVariants} className="text-green-400 text-sm mt-4 text-center">{successMessage}</motion.p>}
          
          <motion.div variants={itemVariants} className="mt-6 p-4 bg-rich-black rounded-xl">
            <p className="text-silver-lake text-sm font-body mb-2">Ready to join as:</p>
            <p className="text-platinum font-semibold">@{userData.username}</p>
            <p className="text-silver-lake text-sm">{userData.schoolName} • {userData.class}</p>
            <p className="text-silver-lake text-sm">{userData.subjects.join(', ')}</p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;