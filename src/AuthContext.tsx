import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from './components/SupabaseClient'; // Double-check this import path is correct

// Define a type for our profile data
interface Profile {
  username: string;
  grade: string;
  level: number;
  xp: number;
}

interface AuthContextType {
  session: Session | null;
  profile: Profile | null;
}

// Create a context with a default value
const AuthContext = createContext<AuthContextType>({ session: null, profile: null });

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // The onAuthStateChange listener is the single source of truth.
    // It fires once on initial load, and again whenever the auth state changes.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);

      if (session) {
        // If a session exists, fetch the user's profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setProfile(profileData as Profile | null);
      } else {
        // If no session, clear the profile
        setProfile(null);
      }
      
      // The initial check is complete, so we can stop loading
      setLoading(false);
    });

    // Clean up the subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  const value = {
    session,
    profile,
  };

  // Render children only after the initial loading is complete
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// The hook remains the same
export const useAuth = () => {
  return useContext(AuthContext);
};