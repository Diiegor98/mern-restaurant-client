const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const createMenuFetch = async (data) => {
  try {
    const url = `${BACKEND_URL}/menu`;

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("detail", data.detail);

    if (data.image) {
      formData.append("image", data.image);
    }

    const response = await fetch(url, {
      method: "POST",
      body: formData, // No agregar Content-Type, lo maneja solo
    });

    const result = await response.json();
    if (response.status !== 200) throw result;

    return result;
  } catch (error) {
    console.error("❌ Error al enviar el formulario:", error);
  }
};