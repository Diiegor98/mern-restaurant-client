export const updateMenuFetch = async (id, formData) => {
    try {
      const response = await fetch(`http://localhost:3977/api/v1/menu/${id}`, {
        method: 'PUT',
        body: formData, // Enviamos el FormData con los datos
      });
  
      const data = await response.json();
      if (response.ok) {
        return data; // Devuelve el mensaje de éxito
      } else {
        throw new Error(data.msg || 'Error al actualizar');
      }
    } catch (error) {
      console.error("Error al actualizar el menú:", error);
      throw error;
    }
  };
  