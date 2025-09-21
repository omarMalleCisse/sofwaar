const API_URL = import.meta.env.VITE_REACT_APP_API_URL || "https://softapi-production-1253.up.railway.app";
export const handleEdit = async (user) => {
    const newName = prompt('Nouveau nom ?', user.name);
    if (!newName) return;
    try {
  const response = await fetch(`${API_URL}/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName })
      });
      if (response.ok) {
        window.location.reload();
      } else {
        const errorText = await response.text();
        alert('Erreur lors de la modification : ' + errorText);
      }
    } catch {
      alert('Erreur réseau');
    }
  };
