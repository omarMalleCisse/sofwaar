import React, { useState, useEffect } from 'react';
const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "https://softapi-production-1253.up.railway.app";
import { useParams, useNavigate } from 'react-router-dom';

const UserDeails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserDetail();
  }, [id]);

  const fetchUserDetail = async () => {
    try {
  const response = await fetch(`${API_URL}/users_single${id}/`, {
        headers: {
          'Accept': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Message non trouvé');
        }
        throw new Error('Erreur lors de la récupération du message');
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-500 bg-red-100 p-4 rounded-lg">
          {error}
        </div>
        <button
          onClick={() => navigate('/admin/contacts')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retour à la liste
        </button>
      </div>
    );
  }

  if (!users) {
    return null;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Détails du message</h1>
        <button
          onClick={() => navigate('/admin/contacts')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retour à la liste
        </button>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-900">
        <div className="grid gap-6">
          <div>
            <h2 className="text-sm font-semibold text-blue-300 mb-1">Email</h2>
            <p className="text-white">{users.email}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-blue-300 mb-1">Nome</h2>
            <p className="text-white whitespace-pre-wrap">{users.name}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-blue-300 mb-1">Adresse</h2>
            <p className="text-white whitespace-pre-wrap">{users.adresse}</p>
          </div>

           <div>
            <h2 className="text-sm font-semibold text-blue-300 mb-1">role</h2>
            <p className="text-white whitespace-pre-wrap">{users.role}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-blue-300 mb-1">Date de réception</h2>
            <p className="text-white">
              {new Date(users.created_at).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeails;