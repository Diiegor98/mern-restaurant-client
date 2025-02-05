import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import { getMenusFetch } from "../api/getMenusFetch";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenusFetch()
      .then((data) => setMenus(data))
      .catch((error) => console.log(error));
  },[]);

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
      
      {menus.map((menu) => (
        <MenuCard key={menu._id} menu={menu} />

      ))}
    </>
  );
};

export default Home;
