import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <div className="mx-2 d-flex flex-column align-items-center">
        <h3>
          Home - Bienvenido <span className="text-primary">{user.name}</span>
        </h3>
        <button className="btn btn-danger w-50 mt-3" onClick={logout}>
          Cerrar Sesion
        </button>
      </div>
    </>
  );
};

export default Home;
