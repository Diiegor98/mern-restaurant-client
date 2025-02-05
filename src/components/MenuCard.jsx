const MenuCard = ({ menu }) => {
  const { name, status, price, detail, category, image } = menu;

  return (
    <div>
      <p>Nombre: {name}</p>
      <p>Estado {status}</p>
      <p>Precio {price}</p>
      <p>Detalle {detail}</p>
      <p>Categoria {category}</p>
      <img src={`http://localhost:3977/${image}`} alt={detail} />
    </div>
  );
};

export default MenuCard;
