const BACKEND_URL_IMAGE = import.meta.env.VITE_BACKEND_URL_IMAGE;

//React Bootstrap
import { Button, Col, Row, Badge } from "react-bootstrap";

//Componentes propios
import UpdateMenuButton from "../updateMenuButton/UpdateMenuButton";

//Funcion para eliminar un menu
import { deleteMenuFetch } from "../../../api/menu/deleteMenuFetch";

//Libreria de alertas
import Swal from "sweetalert2";

const MenuTab = ({ menu }) => {
  const { image, name, category, price, status, _id } = menu;

  
  //Cuando eliminamos el menú con librería de alertas
  const onDeleteMenu = () => {
    Swal.fire({
      title: "¿Desea eliminar el menú?",
      text: "Una vez eliminado no se podrá recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMenuFetch(_id);
        Swal.fire({
          title: "Menú eliminado!",
          text: "El menú se eliminó correctamente",
          icon: "success",
        });
      }
    });
  };

  return (
    <Row className="d-flex flex-row p-1 my-2 justify-content-center align-items-center">
      <Col>
        <img
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
          src={`${BACKEND_URL_IMAGE}/${image}`}
          alt={name}
        />
      </Col>
      <Col xs={4} className="d-flex flex-column align-items-center">
        <span className="text-warning text-truncate">{name}</span>
        <span className="text-light">{category}</span>
        <Badge bg={status ? "success" : "danger"}>
          {status ? "Disponible" : "No disponible"}
        </Badge>
      </Col>
      <Col>
        <span className="text-light">${price}</span>
      </Col>
      <Col className="d-flex flex-row gap-2">
        <UpdateMenuButton menu={menu} />
        <Button size="sm" variant="danger" onClick={onDeleteMenu}>
          <i className="bi bi-trash-fill"></i>
        </Button>
      </Col>
    </Row>
  );
};

export default MenuTab;
