const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const loginFetch = async (data) => {
    //Data viene desde el formulario de login
    try {
      const url = `${BACKEND_URL}/auth/login`;
  
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
  