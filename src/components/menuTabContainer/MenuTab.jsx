import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import styles from "./menutab.module.css";
import { Button } from "react-bootstrap";
import { deleteMenuFetch } from "../../api/menu/deleteMenuFetch";

const MenuTab = ({ menu }) => {
  const { image, name, category, price, status, _id } = menu;
  return (
    <Card className="d-flex flex-row justify-content-between justify-content-md-around align-items-center p-1 my-2">
      <img
        className={styles.menutab__img}
        src={`http://localhost:3977/${image}`}
        alt={name}
      />
      <div>
        <p className={styles.menutab__name}>{name}</p>
        <p className={styles.menutab__category}>{category}</p>
        <Badge bg={status ? "success" : "danger"}>
          {status ? "Disponible" : "No disponible"}
        </Badge>
      </div>

      <span className={styles.menutab__price}>${price}</span>

      <div className="d-flex flex-row gap-2">
        <Button>
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" onClick={() => deleteMenuFetch(_id)}>
          <i className="bi bi-trash-fill"></i>
        </Button>{" "}
      </div>
    </Card>
  );
};

export default MenuTab;
