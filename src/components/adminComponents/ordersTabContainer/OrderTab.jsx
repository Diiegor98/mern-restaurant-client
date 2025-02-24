//React Bootstrap
import { Col, Row, Badge } from "react-bootstrap";

//Componente para actualizarla orden
import UpdateOrderButton from "../updateOrderButton/UpdateOrderButton";

const OrderTab = ({ order }) => {
  const { date, menu, price, status, user } = order;

  return (
    <Row className="d-flex flex-row p-1 my-2 justify-content-center align-items-center flex-nowrap">
      <Col className="text-warning">
        <span>{user}</span>
      </Col>

      <Col className="text-light">
        <span>${price}</span>
      </Col>
      <Col className="d-flex flex-column align-items-center justify-content-center">
        <span className="text-light">{date}</span>
        <Badge bg={status ? "success" : "danger"}>
          {status ? "Realizado" : "Pendiente"}
        </Badge>
      </Col>
      <Col>
        <UpdateOrderButton order={order} menu={menu} />
      </Col>
    </Row>
  );
};

export default OrderTab;
