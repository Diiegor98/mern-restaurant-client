const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getOrdersFetch = async () => {
    try {
      const url = `${BACKEND_URL}/orders`;
      const response = await fetch(url);
      const result = await response.json();
  
      if (response.status !== 200) throw response;
  
      return result;
    } catch (error) {
      throw error;
    }
  };
  