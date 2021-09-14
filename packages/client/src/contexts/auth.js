import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import * as auth from '../services/auth';

const AuthContext = createContext({ temp: true });

const AuthProvier = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const signIn = async () => {
    const response = await auth.signIn();
    setUser(response.user);
  };

  const signOut = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvier, useAuth };
