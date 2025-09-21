const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "https://softapi-production-1253.up.railway.app";
/**
 * Fonction générique pour supprimer un élément via une route API DELETE
 * @param {string} url - URL complète de la route DELETE (ex: 'http://localhost:8000/branding/1')
 * @param {string} confirmMsg - Message de confirmation (ex: 'Supprimer ce branding ?')
 */
/**
 * Fonction générique pour supprimer un élément via une route API DELETE
 * @param {string} url - URL complète de la route DELETE (ex: 'http://localhost:8000/branding/1')
 * @param {string} confirmMsg - Message de confirmation (ex: 'Supprimer ce branding ?')
 * @param {string} successMsg - Message de succès (optionnel)
 */
// Version sans prompt, avec gestion du message stylisé via callback (React)
// onSuccess et onError sont des callbacks pour afficher un message personnalisé dans le composant parent
export const handleDelete = async (url, { onSuccess, onError } = {}) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE'
    });
    if (response.ok) {
      if (onSuccess) onSuccess();
       window.location.reload(); // Laisser le parent gérer le rafraîchissement
    } else {
      if (onError) onError('Erreur lors de la suppression');
    }
  } catch {
    if (onError) onError('Erreur réseau');
  }
};