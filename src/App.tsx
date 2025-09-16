import React from 'react';
import { useAuth } from './AuthContext';
import Dashboard from './Dashboard';
import OnboardingFlow from './components/onboarding/OnboardingFlow';

function App() {
  const { session } = useAuth();

  // This is the core logic:
  // If a user session exists, show the Dashboard.
  // Otherwise, show the OnboardingFlow/login page.
  return (
    <>
      {session ? <Dashboard /> : <OnboardingFlow />}
    </>
  );
}

export default App;