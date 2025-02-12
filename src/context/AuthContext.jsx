import { useState, createContext, useEffect } from "react";
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

  //Login
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

  if (loading) return <p>Cargando</p>;

  const data = {
    user,
    setUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
