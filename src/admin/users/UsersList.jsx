import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TableGenerique from '../../Components/TableGenerique';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/users/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des utilisateurs');
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      key: 'name',
      label: 'Nom'
    },
    {
      key: 'email',
      label: 'Email'
    }
  ];

  const renderActions = (item) => (
    <div className="flex gap-2">
      <Link
        to={`/user-Details/${item.id}`}
        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
      >
        Détails
      </Link>
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Gestion des utilisateurs</h1>
        <Link
          to="/admin/users/create"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Créer un utilisateur
        </Link>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-900">
        <TableGenerique
          data={users}
          columns={columns}
          renderActions={renderActions}
          loading={loading}
          errors={error}
        />
      </div>
    </div>
  );
};

export default UsersList;
