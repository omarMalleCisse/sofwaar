 export const handleEdit = async (user) => {
    const newName = prompt('Nouveau nom ?', user.name);
    if (!newName) return;
    try {
      const response = await fetch(`http://localhost:8000/users/${user.id}`, {
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
