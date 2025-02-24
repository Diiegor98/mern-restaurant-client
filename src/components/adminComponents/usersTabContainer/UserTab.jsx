//React Bootstrap
import { Col, Row, Badge } from "react-bootstrap";

//Componente para actualizar el usuario
import UpdateUserButton from "../updateUserButton/UpdateUserButton";

const UserTab = ({ user }) => {
  const { name, email, role, status } = user;
  return (
    <Row className="d-flex flex-row p-1 my-2 justify-content-center align-items-center flex-nowrap">
      <Col className="text-warning" xs={3}>
        <span>{name}</span>
      </Col>
      <Col className="text-truncate text-light" xs={4}>
        <span>{email}</span>
      </Col>
      <Col
        className="d-flex flex-column justify-content-center align-items-center"
        xs={2}
      >
        <span className="text-light">{role}</span>
        <Badge bg={status ? "success" : "danger"}>
          {status ? "Activo" : "No activo"}
        </Badge>
      </Col>
      <Col xs={2}>
        <UpdateUserButton user={user} />
      </Col>
    </Row>
  );
};

export default UserTab;
