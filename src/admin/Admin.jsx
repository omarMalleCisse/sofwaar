import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070620] py-16 px-4">
      <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 border border-blue-900">
        <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">Espace Administration</h1>
        <p className="text-blue-100 text-center mb-8">Bienvenue sur le tableau de bord administrateur.</p>
        {/* Ajoutez ici vos composants ou widgets d'administration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-900/60 rounded-xl p-6 text-white text-center shadow">
            <h2 className="text-2xl font-semibold mb-2">Utilisateurs</h2>
            <p>Gérez les comptes utilisateurs.</p>
          </div>
          <div className="bg-blue-900/60 rounded-xl p-6 text-white text-center shadow">
            <h2 className="text-2xl font-semibold mb-2">Statistiques</h2>
            <p>Consultez les statistiques du site.</p>
          </div>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow mt-4 transition-colors w-full md:w-auto"
            type="button"
            onClick={() => navigate('/admin/branding')}
          >
            Branding
          </button>
            <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow mt-4 transition-colors w-full md:w-auto"
            type="button"
            onClick={() => navigate('/admin/features')}
          >
            features
          </button>
            <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow mt-4 transition-colors w-full md:w-auto"
            type="button"
            onClick={() => navigate('/admin/bulletPoints')}
          >
            bulletPoints
          </button>
            <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow mt-4 transition-colors w-full md:w-auto"
            type="button"
            onClick={() => navigate('/admin/realisation')}
          >
            realisations
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow mt-4 transition-colors w-full md:w-auto"
            type="button"
            onClick={() => navigate('/admin/contacts')}
          >
            Messages de contact
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow mt-4 transition-colors w-full md:w-auto"
            type="button"
            onClick={() => navigate('/admin/users')}
          >
            Gestion Utilisateurs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
