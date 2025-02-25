//Función para registrar al usuario en la DB

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const registerFetch = async (data) => {
  //Data viene desde el formulario de registro
  try {
    const url = `${BACKEND_URL}/auth/register`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), //Mandamos la data en formato JSON
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  } catch (error) {
    throw error;
  }
};
