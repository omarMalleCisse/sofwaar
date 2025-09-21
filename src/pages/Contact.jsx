import React, { useState } from "react";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "https://softapi-production-1253.up.railway.app";
import { useAuth } from "../Hook/useAuth";

const Contact = () => {
  const [form, setForm] = useState({
    info: "",
    email: "",
    telephone: "",
    adresse: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("user_id", user?.id || 1); // Utilise l'ID de l'utilisateur connecté ou 1 par défaut
      formData.append("info", form.info);
      formData.append("email", form.email);
      formData.append("telephone", form.telephone);
      formData.append("adresse", form.adresse);

  const response = await fetch(`${API_URL}/register/`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
        credentials: 'include', // Pour envoyer les cookies si nécessaire
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ info: "", email: "", telephone: "", adresse: "" });
      } else {
        const data = await response.json();
        setError(data.detail || "Une erreur est survenue");
      }
    } catch (err) {
      setError("Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#070620] py-16 px-4">
      <div className="relative z-10 w-full max-w-lg mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-900">
        <h2 className="text-center text-4xl font-bold text-white mb-2 drop-shadow-lg">Contactez-nous</h2>
        <p className="text-center text-base text-blue-100 mb-8">Nous serons ravis de répondre à vos questions !</p>
        
        {error && (
          <div className="text-red-400 bg-red-100/10 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {success ? (
          <div className="text-center text-green-400 font-semibold py-8">
            Merci pour votre message ! Nous vous contacterons bientôt.
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-blue-100 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-300 bg-[#070620] px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
                  placeholder="Votre email"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-blue-100 mb-1">Téléphone</label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  required
                  value={form.telephone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-300 bg-[#070620] px-4 py-2 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div>
                <label htmlFor="adresse" className="block text-sm font-semibold text-blue-100 mb-1">Adresse</label>
                <input
                  id="adresse"
                  name="adresse"
                  type="text"
                  required
                  value={form.adresse}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-300 bg-[#070620] px-4 py-2 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
                  placeholder="Votre adresse"
                />
              </div>
              <div>
                <label htmlFor="info" className="block text-sm font-semibold text-blue-100 mb-1">Message</label>
                <textarea
                  id="info"
                  name="info"
                  rows={4}
                  value={form.info}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-300 bg-[#070620] px-4 py-2 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition"
                  placeholder="Votre message"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold shadow hover:from-blue-900 hover:to-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
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

export default Contact;