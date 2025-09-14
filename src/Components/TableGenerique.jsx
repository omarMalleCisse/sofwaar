import React from "react";

/**
 * Composant TableGenerique
 * @param {Array} data - Données à afficher (tableau d'objets)
 * @param {Array} columns - Colonnes à afficher [{key, label}]
 * @param {boolean} loading - Affiche le loader si true
 * @param {string|ReactNode} errors - Affiche l'erreur si présente
 * @param {function} onAdd - Callback pour le bouton d'ajout
 * @param {function} renderActions - Fonction de rendu pour la colonne Actions (reçoit l'item)
 * @param {string} addLabel - Label du bouton d'ajout
 */
const TableGenerique = ({
  data = [],
  columns = [],
  loading = false,
  errors = null,
  onAdd = null,
  renderActions = null,
  addLabel = "Ajouter",
}) => {
  return (
    <div className="w-full overflow-x-auto">
      {onAdd && (
        <button
          className="mb-4 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 shadow text-xs sm:text-sm"
          onClick={onAdd}
        >
          {addLabel}
        </button>
      )}
      {errors && (
        <div className="text-red-400 bg-red-200 p-5 opacity-80 rounded-2xl w-full max-w-md text-center text-sm sm:text-base mb-4">
          {errors}
        </div>
      )}
      {loading ? (
        <div className="flex items-center justify-center gap-2 text-blue-400 text-base sm:text-lg font-semibold animate-pulse py-4 w-full">
          <svg className="w-5 h-5 animate-spin text-blue-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          Chargement...
        </div>
      ) : (
        <table className="w-full min-w-[600px] border border-gray-700 rounded-lg overflow-hidden shadow-lg bg-[#070620] text-xs sm:text-sm md:text-base">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key} className="px-2 sm:px-4 py-2 border-b border-blue-950 bg-[#070620] text-left whitespace-nowrap text-white">{col.label}</th>
              ))}
              {renderActions && <th className="px-2 sm:px-4 py-2 border-b border-blue-950 bg-[#070620] text-left whitespace-nowrap text-white">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? data.map(item => (
              <tr key={item.id} className="hover:bg-blue-950 transition">
                {columns.map(col => (
                  <td key={col.key} className="px-2 sm:px-4 py-2 border-b border-blue-950 whitespace-nowrap text-white">{item[col.key]}</td>
                ))}
                {renderActions && (
                  <td className="px-2 sm:px-4 py-2 border-b border-blue-950 flex gap-2 whitespace-nowrap">
                    {renderActions(item)}
                  </td>
                )}
              </tr>
            )) : (
              <tr>
                <td colSpan={columns.length + (renderActions ? 1 : 0)} className="text-center py-4 text-white">Aucune donnée</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableGenerique;
