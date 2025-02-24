//React
import { useContext } from "react";

//React Bootstrap
import { Container, Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";

//Contexto global de Auth
import { AuthContext } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

function NavBar() {
  //Datos del usuario para mostrar en la nav y función para desloguearse
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useCart();

  return (
    <Navbar expand="lg" className="w-100 p-3 bg-dark">
      <Container>
        <Navbar.Brand className="fw-bold text-warning" href="/home">
          HAMBURDEV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/orders">
              Carrito{" "}
              <Badge bg="warning" text="dark">
                {cartItems.length}
              </Badge>{" "}
            </Nav.Link>
            {user.role === "admin" ? (
              <Nav.Link href="/admin">Admin</Nav.Link>
            ) : null}

            <NavDropdown title="Perfil" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <span className="fw-bold text-warning">Nombre:</span>{" "}
                {user.name}
              </NavDropdown.Item>
              <NavDropdown.Item>
                <span className="fw-bold text-warning">Email:</span>{" "}
                {user.email}
              </NavDropdown.Item>
              <NavDropdown.Item>
                <span className="fw-bold text-warning">Rol:</span> {user.role}
              </NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>
              <NavDropdown.Item
                className="fw-bold text-danger"
                onClick={logout}
              >
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
