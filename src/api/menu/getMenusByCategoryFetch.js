const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getMenusByCategoryFetch = async (category) => {
  try {
    const url = `${BACKEND_URL}/menu/${category}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error al obtener los menús");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la petición:", error);
    return [];
    
  }
};
