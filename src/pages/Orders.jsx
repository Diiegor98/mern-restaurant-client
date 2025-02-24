//Componentes propios
import NavBar from "../components/Navbar/Navbar";
import Cart from "../components/orderComponents/cart/Cart";

//React Bootstrap
import { Button, Container } from "react-bootstrap";

//React Router Dom
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="d-flex flex-column justify-content-start align-items-center">
      <NavBar />
      <Container
        className="w-100 vh-100 pt-5 d-flex flex-column"
        style={{ maxWidth: "900px" }}
      >
        <h2 className="fs-2 text-start text-warning">Mi orden</h2>
        <Link className="text-start mt-3" to="/home">
          <Button variant="outline-warning">
            <i className="bi bi-arrow-left pe-2"></i>Seguir comprando
          </Button>
        </Link>
        <div>
          <Cart />
        </div>
      </Container>
    </div>
  );
};

export default Orders;
