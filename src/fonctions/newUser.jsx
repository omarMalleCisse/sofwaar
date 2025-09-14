
// Fonction pour ajouter un nouvel utilisateur
export const handleAddUser = async () => {
  const name = prompt('Nom de l\'utilisateur ?');
  const email = prompt('Email de l\'utilisateur ?');
  if (!name || !email) return;
  try {
    const response = await fetch('http://localhost:8000/users/', {
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
