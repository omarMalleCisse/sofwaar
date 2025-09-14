import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from '../Hook/useAuth';

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    
    setError("");
    setLoading(true);
    
    try {
      const result = await login(form.email, form.password);
      if (!result.success) {
        setError(result.error || "Erreur lors de la connexion");
      }
    } catch (err) {
      setError("Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#070620] py-16 px-4">
      <div className="relative z-10 w-full max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-900">
        <h2 className="text-center text-3xl font-bold text-white mb-6 drop-shadow-lg">Connexion</h2>
        {error && <div className="text-center text-red-400 font-semibold mb-4">{error}</div>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-blue-100 mb-1">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-lg border border-blue-300 bg-[#070620] px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition" placeholder="Votre email" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-blue-100 mb-1">Mot de passe</label>
              <input id="password" name="password" type="password" required value={form.password} onChange={handleChange} className="w-full rounded-lg border border-blue-300 bg-[#070620] px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition" placeholder="Votre mot de passe" />
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold shadow hover:from-blue-900 hover:to-blue-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-blue-100">Pas de compte ? </span>
          <Link
            to="create-user"
            className="inline-block ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow hover:from-blue-800 hover:to-blue-900 transition"
          >
            S'inscrire
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-800 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default Login;
