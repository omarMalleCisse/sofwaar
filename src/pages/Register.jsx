import React, { useState } from "react";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "https://softapi-production-1253.up.railway.app";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", telephone: "", adresse: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.telephone || !form.adresse) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    setError("");
    try {
      const formData = new FormData();
      formData.append('user_id', 1); // à adapter selon votre logique utilisateur
      formData.append('info', form.name);
      formData.append('email', form.email);
      formData.append('telephone', form.telephone);
      formData.append('adresse', form.adresse);

  const response = await fetch(`${API_URL}/register/`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Erreur lors de l'inscription");
      }
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#070620] py-16 px-4">
      <div className="relative z-10 w-full max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-900">
        <h2 className="text-center text-3xl font-bold text-white mb-6 drop-shadow-lg">Inscription</h2>
        {error && <div className="text-center text-red-400 font-semibold mb-4">{error}</div>}
        {success ? (
          <div className="text-center text-green-400 font-semibold py-8">Inscription réussie !</div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-blue-100 mb-1">Nom</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full rounded-lg border border-blue-300 bg-[#070620] px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition" placeholder="Votre nom" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-blue-100 mb-1">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded-lg border border-blue-300 bg-[#070620] px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition" placeholder="Votre email" />
              </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-blue-100 mb-1">Mot de passe</label>
              <input id="password" name="password" type="password" required value={form.password} onChange={handleChange} className="w-full rounded-lg border border-blue-300 bg-[#070620] px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition" placeholder="Votre mot de passe" />
            </div>
            <div>
              <label htmlFor="telephone" className="block text-sm font-semibold text-blue-100 mb-1">Téléphone</label>
              <input id="telephone" name="telephone" type="text" required value={form.telephone} onChange={handleChange} className="w-full rounded-lg border border-blue-300 bg-[#070620] px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition" placeholder="Votre téléphone" />
            </div>
            <div>
              <label htmlFor="adresse" className="block text-sm font-semibold text-blue-100 mb-1">Adresse</label>
              <input id="adresse" name="adresse" type="text" required value={form.adresse} onChange={handleChange} className="w-full rounded-lg border border-blue-300 bg-[#070620] px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition" placeholder="Votre adresse" />
            </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold shadow hover:from-blue-900 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!form.name || !form.email || !form.password || !form.telephone || !form.adresse}
            >
              S'inscrire
            </button>
          </form>
        )}
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-800 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default Register;
