import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserProfile: (userData: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from localStorage on initial render
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would make an API call to verify credentials
    // For demo purposes, we'll simulate a successful login
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Check if user is registered in localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const foundUser = users.find((u: any) => u.email === email);
      
      if (foundUser && foundUser.password === password) {
        // Don't store password in user state
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        setIsAuthenticated(true);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // In a real app, this would make an API call to register the user
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Check if email is already registered
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.some((u: any) => u.email === email)) {
        return false;
      }
      
      // Create new user
      const newUser = {
        id: Date.now(),
        name,
        email,
        password
      };
      
      // Save user to "database" (localStorage)
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Login the user (without storing password in state)
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUserProfile = (userData: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    
    // Also update the user in the "database" (localStorage)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map((u: any) => 
      u.id === user.id ? { ...u, ...userData } : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <UserContext.Provider value={{
      user,
      isAuthenticated,
      login,
      register,
      logout,
      updateUserProfile
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};