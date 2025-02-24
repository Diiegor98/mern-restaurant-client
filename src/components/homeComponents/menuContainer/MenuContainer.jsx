import MenuCard from "../menuCard/MenuCard";

const MenuContainer = ({ menus }) => {
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center gap-4 p-4 flex-md-row flex-wrap">
      {!menus.length == 0 ? (
        menus.map((menu) => <MenuCard key={menu._id} menu={menu} />)
      ) : (
        <p className="text-warning">No se encontraron menus</p>
      )}
    </div>
  );
};

export default MenuContainer;
