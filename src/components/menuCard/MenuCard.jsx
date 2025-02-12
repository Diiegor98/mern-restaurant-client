import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./menuCard.module.css";
import { CardBody, CardTitle, Badge, CardText } from "react-bootstrap";

const MenuCard = ({ menu }) => {
  const { name, status, price, detail, category, image } = menu;

  return (
    <Card className={`${styles.card}`}>
      <Card.Img
        className={`${styles.card__img}`}
        variant="top"
        src={`http://localhost:3977/${image}`}
      />
      <CardBody
        className={`${styles.card__body} d-flex flex-column justify-content-between`}
      >
        <div>
          <CardTitle className={`${styles.card__title}`}>
            {name}
            <CardText className={`${styles.card__category}`}>
              {category}
            </CardText>
          </CardTitle>
          <Badge bg={status ? "success" : "danger"}>
            {status ? "Disponible" : "No disponible"}
          </Badge>
        </div>
        <CardText className={`${styles.card__detail}`}>{detail}</CardText>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <CardText className={`${styles.card__price}`}>${price}</CardText>
            <Button
              className={`${styles.card__button}`}
              disabled={!status}
              variant={!status ? "secondary" : null}
            >
              Comprar
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default MenuCard;
