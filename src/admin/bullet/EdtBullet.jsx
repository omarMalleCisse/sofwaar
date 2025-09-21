import React, { useState } from "react";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "https://softapi-production-1253.up.railway.app";
import { useParams, useNavigate } from "react-router-dom";

const EdtBullet = () => {
  const params = useParams();
  const bulletId = params.bulletId || params.id;
  const [alt, setAlt] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchBullet = async () => {
      setFetching(true);
      setError("");
      try {
  const response = await fetch(`${API_URL}/bulletpoints/${bulletId}`);
        if (response.ok) {
          const data = await response.json();
          setAlt(data.alt || "");
          setTitle(data.title || "");
          setText(data.text || "");
          if (data.image) {
            setCurrentImageUrl(`${API_URL}/bulletpoints/image/${data.image}`);
          }
        } else {
          setError("Impossible de charger le bullet point");
        }
      } catch (err) {
        setError("Erreur réseau lors du chargement");
      }
      setFetching(false);
    };
    fetchBullet();
  }, [bulletId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    const formData = new FormData();
    if (alt) formData.append("alt", alt);
    if (image) formData.append("image", image);
    if (title) formData.append("title", title);
    if (text) formData.append("text", text);
    try {
  const response = await fetch(`${API_URL}/bulletpoints/${bulletId}`, {
        method: "PATCH",
        body: formData,
      });
      if (response.ok) {
        setSuccess("Bullet point modifié avec succès !");
        setTimeout(() => {
          setSuccess("");
          navigate(-1);
        }, 1200);
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data.detail || "Erreur lors de la modification");
      }
    } catch (err) {
      setError("Erreur réseau");
    }
    setLoading(false);
  };
   
  if (fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#070620] py-16 px-4">
        <div className="text-white text-xl">Chargement...</div>
      </div>
    );
   
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070620] py-16 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-900">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Éditer un Bullet Point</h2>
        {error && <div className="text-red-400 bg-red-200 p-3 rounded mb-4 text-center animate-pulse">{error}</div>}
        {success && <div className="text-green-400 bg-green-200 p-3 rounded mb-4 text-center animate-bounce">{success}</div>}
        <div className="mb-4">
          <label className="block text-blue-100 mb-2">Alt</label>
          <input type="text" value={alt} onChange={e => setAlt(e.target.value)} className="w-full px-3 py-2 rounded bg-blue-950/40 text-white border border-blue-900 focus:outline-none" placeholder="Texte alternatif" />
        </div>
        <div className="mb-4">
          <label className="block text-blue-100 mb-2">Titre</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2 rounded bg-blue-950/40 text-white border border-blue-900 focus:outline-none" placeholder="Titre du bullet point" />
        </div>
        <div className="mb-4">
          <label className="block text-blue-100 mb-2">Texte</label>
          <textarea value={text} onChange={e => setText(e.target.value)} className="w-full px-3 py-2 rounded bg-blue-950/40 text-white border border-blue-900 focus:outline-none" placeholder="Texte du bullet point" />
        </div>
        <div className="mb-6">
          <label className="block text-blue-100 mb-2">Image</label>
          <div className="flex flex-col items-center">
            {currentImageUrl && !image && (
              <div className="mb-2 flex flex-col items-center">
                <img src={currentImageUrl} alt="image actuelle" className="h-20 object-contain mb-1 rounded" />
                <span className="text-blue-300 text-xs">Image actuelle</span>
              </div>
            )}
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
          {loading ? "Modification en cours..." : "Modifier"}
        </button>
        <button type="button" className="w-full mt-3 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl shadow transition-colors" onClick={() => navigate(-1)}>
          Annuler
        </button>
      </form>
    </div>
  );
};

export default EdtBullet;
