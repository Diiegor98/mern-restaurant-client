export const getMenusByCategoryFetch = async (category) => {
  try {
    const url = `http://localhost:3977/api/v1/menu/${category}`;
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
