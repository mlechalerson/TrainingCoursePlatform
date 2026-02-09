import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function Authentication({children}) {
    const [user, setUser] = useState(null);
    const [isAdmin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (username, password) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      console.log("Full API Response:", data);

      if (!response.ok) {
        console.error("Error response:", data);
        const errorMessage = data.message || 'Incorrect email or password';
        return {
          success: false,
          message: errorMessage,
        };
      }

      const { token, id, admin } = data;

      if (token && id) {
        localStorage.setItem('token', token);
        localStorage.setItem('admin', admin);
        localStorage.setItem('userId', id);
        
        setUser({id});
        console.log(user);
        setAdmin(isAdmin);
        
        return { success: true, isAdmin: admin };
      } else {
        return { success: false, message: 'Missing token, id, or role from server' };
      }
    } catch (error) {
      console.error("Login failed:", error);
      
      return {
        success: false,
        message: 'Network error or server is unavailable. Please try again.',
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    localStorage.removeItem('userId');
    setUser(null);
    setAdmin(null);
  };

  return <AuthContext.Provider value={{ user, isAdmin, login, logout, loading }}>{children}</AuthContext.Provider>;
}

export default Authentication