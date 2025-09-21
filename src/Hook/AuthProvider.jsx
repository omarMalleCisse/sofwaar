import { useState, useEffect, useCallback } from 'react';
const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "https://softapi-production-1253.up.railway.app";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const logout = useCallback(() => {
    try {
      // Suppression du token
      localStorage.removeItem('token');
      
      // Réinitialisation de l'état
      setUser(null);
      setIsAdmin(false);
      
      // Redirection
      navigate('/login');
      
    } catch (error) {
      'Erreur lors de la déconnexion:'
    }
  }, [navigate]);

  const checkTokenValidity = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
  const response = await fetch(`${API_URL}/users/connect`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setIsAdmin(userData.role === 'admin');
      } else {
        logout();
      }
    } catch (error) {
      logout();
    }
    setLoading(false);
  }, [logout]);

  const login = useCallback(async (email, password) => {
    try {
  const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          username: email,
          password: password
        })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token);
        await checkTokenValidity();
        navigate('/admin');
        return { success: true };
      }
      const errorData = await response.json().catch(() => ({}));
      return { 
        success: false, 
        error: errorData.detail || 'Identifiants invalides' 
      };
    } catch (error) {
      return { success: false, error: 'Erreur de connexion' };
    }
  }, [checkTokenValidity, navigate]);

  useEffect(() => {
    checkTokenValidity();
  }, [checkTokenValidity]);

  const value = {
    user,
    isAdmin,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
