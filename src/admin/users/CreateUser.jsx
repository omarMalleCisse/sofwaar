import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    adresse: '',
    role: 'user'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form),
        credentials: 'include'
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', password: '', adresse: '', role: 'user' });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.detail || 'Une erreur est survenue');
      }
    } catch (err) {
      setError('Erreur de connexion au serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070620] py-16 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-900">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Créer un compte</h2>
        
        {error && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-100">
            {error}
          </div>
        )}

        {success ? (
          <div className="text-center p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-100">
            Utilisateur créé avec succès! Redirection...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#070620] border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Entrez le nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#070620] border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Entrez l'email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-blue-100 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#070620] border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Entrez votre mot de passe"
              />
            </div>

            <div>
              <label htmlFor="adresse" className="block text-sm font-medium text-blue-100 mb-2">
                Adresse
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                required
                value={form.adresse}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#070620] border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Entrez votre adresse"
              />
            </div>

            <div className="space-y-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold shadow hover:from-blue-900 hover:to-blue-700 transition ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Création en cours...' : 'Créer un compte'}
              </button>
              
              <div className="text-center">
                <span className="text-blue-100">Déjà inscrit ? </span>
                <Link
                  to="/login"
                  className="text-blue-400 hover:text-blue-300 font-semibold ml-1"
                >
                  Se connecter
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateUser;
