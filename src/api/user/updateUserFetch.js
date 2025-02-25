const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const updateUserFetch = async (id, formData) => {
  try {
    const response = await fetch(`${BACKEND_URL}/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Indica que envías JSON
      },
      body: JSON.stringify(formData), // Enviamos el FormData con los datos
    });

    const data = await response.json();
    if (response.ok) {
      return data; // Devuelve el mensaje de éxito
    } else {
      throw new Error(data.msg || "Error al actualizar");
    }
  } catch (error) {
    console.error("Error al actualizar el menú:", error);
    throw error;
  }
};
