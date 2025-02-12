import { useEffect, useState } from "react";
import { getMenusFetch } from "../../api/menu/getMenusFetch";
import MenuTab from "./MenuTab";

const MenuTabContainer = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenusFetch()
      .then((data) => setMenus(data))
      .catch((error) => console.log(error));
  }, [menus]);

  return (
    <div className="d-flex flex-column bg-light">
      {menus.map((menu) => (
        <MenuTab key={menu._id} menu={menu} />
      ))}
    </div>
  );
};

export default MenuTabContainer;
