//Imports React
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Pages
import RegisterForm from "../pages/RegisterForm";
import LoginForm from "../pages/LoginForm";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Orders from "../pages/Orders";

//Context
import { AuthContext } from "../context/AuthContext";

//Configuración de las rutas
const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<LoginForm />} />

      {/* Si está logueado se muestra el contenido de la web */}
      {user ? (
        <>
          <Route path="/home" element={<Home />} />

          {/* Si el rol del usuario es admin se puede dirigir a la ruta, sino redirige al home*/}
          {user.role === "admin" ? (
            <Route path="/admin" element={<Admin />} />
          ) : (
            <Route path="/admin" element={<Navigate to="/home" />} />
          )}
          <Route path="/orders" element={<Orders />} />
        </>
      ) : null}
    </Routes>
  );
};

export default AppRouter;
