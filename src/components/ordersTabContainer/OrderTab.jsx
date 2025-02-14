import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import styles from "./ordertab.module.css";
import UpdateOrderButton from "../updateOrderButton/UpdateOrderButton";

const OrderTab = ({ order }) => {
  const { date, menu, price, status, user } = order;

  return (
    <Card className="d-flex flex-row justify-content-between justify-content-md-around align-items-center p-1 my-2">
      <p className={styles.ordertab__name}>{user}</p>
      <p className={styles.ordertab__category}>{date}</p>
      <p className={styles.ordertab__role}>{price}</p>
      <div>
        {menu.map((m) => {
          return <span key={m._id}>{m.name}</span>;
        })}
      </div>
      <Badge bg={status ? "success" : "danger"}>
        {status ? "Realizado" : "Pendiente"}
      </Badge>
      <div className="d-flex flex-row gap-2">
        <UpdateOrderButton order={order} />
      </div>
    </Card>
  );
};

export default OrderTab;
