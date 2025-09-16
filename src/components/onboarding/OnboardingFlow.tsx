import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomePage from './WelcomePage';
import UsernamePage from './UsernamePage';
import SchoolInfoPage from './SchoolInfoPage';
import SubjectChoicePage from './SubjectChoicePage';
import AuthPage from './AuthPage';

interface OnboardingData {
  username: string;
  schoolName: string;
  class: string;
  subjects: string[];
}

const OnboardingFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    username: '',
    schoolName: '',
    class: '',
    subjects: []
  });

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const updateData = (data: Partial<OnboardingData>) => {
    setOnboardingData(prev => ({ ...prev, ...data }));
  };

  // The 'completeOnboarding' function has been removed as it's no longer needed.
  // AuthPage now communicates directly with Supabase.

  const pageVariants = {
    initial: { opacity: 0, x: 300 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -300 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.6
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rich-black to-oxford-blue">
      {/* Progress Indicator */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-10">
        { /* ... progress indicator JSX remains the same ... */ }
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial="initial"
            animate="in" 
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-[calc(100vh-8rem)]"
          >
            {currentStep === 1 && (
              <WelcomePage onNext={nextStep} />
            )}
            {currentStep === 2 && (
              <UsernamePage 
                onNext={nextStep}
                onUpdateData={updateData}
                username={onboardingData.username}
              />
            )}
            {currentStep === 3 && (
              <SchoolInfoPage 
                onNext={nextStep}
                onUpdateData={updateData}
                data={onboardingData}
              />
            )}
            {currentStep === 4 && (
              <SubjectChoicePage 
                onNext={nextStep}
                onUpdateData={updateData}
                selectedSubjects={onboardingData.subjects}
              />
            )}
            {currentStep === 5 && (
              <AuthPage 
                // The onComplete prop has been removed
                userData={onboardingData}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OnboardingFlow;