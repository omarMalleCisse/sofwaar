import React, { useState } from "react";
import { useFetch } from "../../Hook/usFetch";
import { handleDelete } from "../../fonctions/handleDelete";
import { useNavigate } from "react-router-dom";
import TableGenerique from "../../Components/TableGenerique";

export const ProduitsRealisation = () => {
  const { loading, data, errors, refetch} = useFetch("http://localhost:8000/realisations");
  const navigate = useNavigate();
   const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
  
  const handleDeleteRealisation = (realisation) => {
        handleDelete(`http://localhost:8000/realisations/${realisation.id}`, {
          onSuccess: () => {
            setSuccess("feature supprimé avec succès !");
            setTimeout(() => {
              setSuccess("");
              refetch()
            }, 1200);
          },
          onError: (msg) => {
            setError(msg);
            setTimeout(() => setError(""), 2000);
          }
        });
      };
  return (
    <div className="min-h-screen bg-[#070620] py-1.5 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
      <h1 className="text-4xl font-bold mt-3.5 text-white mb-1 text-center drop-shadow-lg">Gestion des Réalisations</h1>
      <p className="text-blue-100 text-center mb-2">Bienvenue sur la page de gestion des réalisations.</p>
      {success && <div className="text-green-400 bg-green-200 p-3 rounded mb-4 text-center animate-bounce">{success}</div>}
      {error && <div className="text-red-400 bg-red-200 p-3 rounded mb-4 text-center animate-pulse">{error}</div>}
      <div className="flex flex-col items-center justify-center mt-6 bg-[#070620] text-blue-50">
        <TableGenerique
          data={(data || []).map(realisation => ({
            ...realisation,
            image: realisation.lien
              ? <a href={realisation.lien} target="_blank" rel="noopener noreferrer">
                  <img src={`http://localhost:8000/branding/image/${realisation.image}`} alt={realisation.titre} style={{maxWidth: 80, maxHeight: 80}} />
                </a>
              : <img src={`http://localhost:8000/branding/image/${realisation.image}`} alt={realisation.titre} style={{maxWidth: 80, maxHeight: 80}} />
          }))}
          columns={[ 
            { key: "id", label: "ID" },
            { key: "titre", label: "Titre" },
            { key: "description", label: "Description" },
            { key: "image", label: "Image" },
            { key: "lien", label: "Lien" },
            { key: "create_time", label: "Créé le" },
            { key: "update_time", label: "Modifié le" },
          ]}
          loading={loading}
          errors={errors && errors.toString()}
          onAdd={() => navigate('/add-realisation')}
          addLabel="Ajouter une Réalisation"
          renderActions={realisation => (
            <>
              <button
                className="bg-blue-700 hover:bg-blue-700 text-white font-semibold py-1 px-2 sm:px-3 rounded transition-colors duration-200 shadow text-xs sm:text-sm"
                onClick={() => navigate(`/edit-realisation/${realisation.id}`)}
              >
                Éditer
              </button>
              <button
                className="bg-red-800 hover:bg-red-700 text-white font-semibold py-1 px-2 sm:px-3 rounded transition-colors duration-200 shadow text-xs sm:text-sm"
                onClick={() => handleDeleteRealisation(realisation)}
              >
                Supprimer
              </button>
              <button
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-1 px-2 sm:px-3 rounded transition-colors duration-200 shadow text-xs sm:text-sm"
                onClick={() => navigate(`/realisation/${realisation.id}`)}
              >
                Détails
              </button>
            </>
          )}
        />
      </div>
    </div>
  );
};

export default ProduitsRealisation;
