//React
import { useEffect, useState } from "react";

//Componente de cada menu
import MenuTab from "./MenuTab";

//Funcion para obtener todos los menus
import { getMenusFetch } from "../../../api/menu/getMenusFetch";


const MenuTabContainer = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenusFetch()
      .then((data) => setMenus(data))
      .catch((error) => console.log(error));
  }, [menus]);

  return (
    <div className="d-flex flex-column mt-2 p-2">
      {menus.map((menu) => (
        <MenuTab key={menu._id} menu={menu} />
      ))}
    </div>
  );
};

export default MenuTabContainer;
