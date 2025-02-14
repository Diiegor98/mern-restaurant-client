export const getOrdersFetch = async () => {
    try {
      const url = `http://localhost:3977/api/v1/orders`;
      const response = await fetch(url);
      const result = await response.json();
  
      if (response.status !== 200) throw response;
  
      return result;
    } catch (error) {
      throw error;
    }
  };
  