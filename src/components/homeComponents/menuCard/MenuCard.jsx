const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//React Bootstrap
import {
  CardBody,
  CardTitle,
  Badge,
  CardText,
  Button,
  Card,
} from "react-bootstrap";

//Contexto global del carrito
import { useCart } from "../../../context/CartContext";

const MenuCard = ({ menu }) => {
  const { name, status, price, detail, category, image } = menu;

  //Hook para agregar productos al carrito
  const { addToCart } = useCart();

  return (
    <Card border="warning" style={{ width: "280px", height: "580px" }}>
      <Card.Img
        className="w-100" style={{height: "300px", objectFit: "cover"}}
        variant="top"
        src={`${BACKEND_URL}/${image}`}
      />
      <CardBody className="d-flex flex-column gap-4 justify-content-between">
        <div>
          <CardTitle className="text-warning fs-2">{name}</CardTitle>
          <div className="d-flex justify-content-around align-items-center border-warning">
            <CardText className="m-0">{category}</CardText>
            <Badge bg={status ? "success" : "danger"}>
              {status ? "Disponible" : "No disponible"}
            </Badge>
          </div>
        </div>
        <CardText className="text-warning">{detail}</CardText>
        <div className="d-flex justify-content-between align-items-center">
          <CardText className="m-0 fs-3">${price}</CardText>
          <Button
            disabled={!status}
            variant={status ? "warning" : null}
            onClick={() => {
              addToCart(menu);
            }}
          >
            Comprar
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default MenuCard;
