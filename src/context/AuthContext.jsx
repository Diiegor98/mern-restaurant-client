//React
import { useState, createContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";

//Funcion para obtener la informacion del usuario logueado
import { getUserFetch } from "../api/user/getUserFetch";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Loading
  const [loading, setLoading] = useState(true);

  //Relogin
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      await login(token);
      setLoading(false);
    })();
  }, []);

  //Login y obtenemos todos los datos del usuario excepto la contraseña
  const login = async (token) => {
    try {
      const user = await getUserFetch(token);
      delete user.password;
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  //Logout
  const logout = () => {
    setUser(false);
    localStorage.clear();
  };

  if (loading) return <Spinner className="mt-4" animation="border" variant="warning" />;

  const data = {
    user,
    setUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
