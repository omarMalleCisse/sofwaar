
const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "https://softapi-production-1253.up.railway.app";
// Fonction pour ajouter un nouvel utilisateur
export const handleAddUser = async () => {
  const name = prompt('Nom de l\'utilisateur ?');
  const email = prompt('Email de l\'utilisateur ?');
  if (!name || !email) return;
  try {
  const response = await fetch(`${API_URL}/users/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    if (response.ok) {
      window.location.reload();
    } else {
      const errorText = await response.text();
      alert('Erreur lors de l\'ajout : ' + errorText);
    }
  } catch {
    alert('Erreur réseau');
  }
};
