
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getUserFetch = async (token) => {
  try {
    const url = `${BACKEND_URL}/user/me`;

    const params = {
      method: "GET",
      headers: {
        Authorization: token,
      },
    };

    const response = await fetch(url, params);
    const request = await response.json();

    if (response.status !== 200) throw response;

    return request;
  } catch (error) {
    throw error;
  }
};
