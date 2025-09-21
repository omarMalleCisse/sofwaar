import React, { useState, useEffect } from 'react';
const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "https://softapi-production-1253.up.railway.app";
import { Link } from 'react-router-dom';
import TableGenerique from '../../Components/TableGenerique';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
  const response = await fetch(`${API_URL}/register/`, {
        headers: {
          'Accept': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des contacts');
      }

      const data = await response.json();
      setContacts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      key: 'email',
      label: 'Email',
      className: 'text-white'
    },
    {
      key: 'telephone',
      label: 'Téléphone',
      className: 'text-white'
    },
    {
      key: 'info',
      label: 'Message',
      className: 'text-white'
    }
  ];

  const renderActions = (item) => (
    <Link 
      to={`/admin/contacts/${item.id}`}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      Voir détails
    </Link>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  } 

  if (error) {
    return (
      <div className="text-red-500 bg-red-100 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl text-white font-bold mb-6 text-center">Messages des client</h1>
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-900">
        <TableGenerique
          data={contacts}
          columns={columns}
          renderActions={renderActions}
          loading={loading}
          errors={error}
        />
      </div>
    </div>
  );
};

export default ContactList;
