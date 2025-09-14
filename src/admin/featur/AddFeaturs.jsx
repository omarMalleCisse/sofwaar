import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../Hook/usFetch";

const AddFeaturs = () => {
  const [title, setTitle] = useState("");
  const [alt, setAlt] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { refetch } = useFetch("http://localhost:8000/features/");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("alt", alt);
    formData.append("text", text);
    if (image) formData.append("image", image);
    try {
      const response = await fetch("http://localhost:8000/features/", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setSuccess("Feature ajoutée avec succès !");
        setTimeout(() => {
          setSuccess("");
          navigate(-1);
        }, 1200);
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data.detail || "Erreur lors de l'ajout");
      }
    } catch (err) {
      setError("Erreur réseau");
    }
    setLoading(false);
  };
console.log(error)
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070620] py-16 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-900">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Ajouter une Feature</h2>
        {error && <div className="text-red-400 bg-red-200 p-3 rounded mb-4 text-center animate-pulse">{error}</div>}
        {success && <div className="text-green-400 bg-green-200 p-3 rounded mb-4 text-center animate-bounce">{success}</div>}
        <div className="mb-4">
          <label className="block text-blue-100 mb-2">Titre</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2 rounded bg-blue-950/40 text-white border border-blue-900 focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label className="block text-blue-100 mb-2">Alt</label>
          <input type="text" value={alt} onChange={e => setAlt(e.target.value)} className="w-full px-3 py-2 rounded bg-blue-950/40 text-white border border-blue-900 focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label className="block text-blue-100 mb-2">Texte</label>
          <textarea value={text} onChange={e => setText(e.target.value)} className="w-full px-3 py-2 rounded bg-blue-950/40 text-white border border-blue-900 focus:outline-none" required />
        </div>
        <div className="mb-6">
          <label className="block text-blue-100 mb-2">Image</label>
          <div className="flex flex-col items-center">
            <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-700 rounded-xl bg-blue-950/30 hover:bg-blue-950/50 transition-colors">
              {image ? (
                <img src={URL.createObjectURL(image)} alt="aperçu" className="h-20 object-contain mb-2" />
              ) : (
                <>
                  <svg className="w-8 h-8 text-blue-400 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                  <span className="text-blue-200 text-sm">Cliquez pour sélectionner une image</span>
                </>
              )}
              <input id="image-upload" type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} className="hidden" />
            </label>
            {image && (
              <button type="button" className="mt-2 text-xs text-red-400 hover:underline" onClick={() => setImage(null)}>
                Supprimer l'image
              </button>
            )}
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl shadow transition-colors" disabled={loading}>
          {loading ? "Ajout en cours..." : "Ajouter"}
        </button>
        <button type="button" className="w-full mt-3 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl shadow transition-colors" onClick={() => navigate(-1)}>
          Annuler
        </button>
      </form>
    </div>
  );
};

export default AddFeaturs;
