
import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('devpath-user');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    setIsLoading(false);
  }, []);

  // Sign in function
  const signIn = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, you would validate credentials with an API
    // For demo purposes, we're using a simple validation
    if (email && password) {
      const newUser = {
        id: crypto.randomUUID(),
        name: email.split('@')[0],
        email
      };
      
      setUser(newUser);
      localStorage.setItem('devpath-user', JSON.stringify(newUser));
      return Promise.resolve();
    }
    
    return Promise.reject(new Error('Invalid credentials'));
  };

  // Sign up function
  const signUp = async (email: string, password: string, name: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, you would register with an API
    // For demo purposes, we're creating a user locally
    if (email && password && name) {
      const newUser = {
        id: crypto.randomUUID(),
        name,
        email
      };
      
      setUser(newUser);
      localStorage.setItem('devpath-user', JSON.stringify(newUser));
      return Promise.resolve();
    }
    
    return Promise.reject(new Error('Invalid information'));
  };

  // Sign out function
  const signOut = () => {
    setUser(null);
    localStorage.removeItem('devpath-user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
