const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const deleteMenuFetch = async (id) => {
  try {
    const url = `${BACKEND_URL}/menu/${id}`;

    const params = {
      method: "DELETE",
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};
