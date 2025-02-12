import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function NavBar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar expand="lg" className={`${styles.navbar} w-100 p-3`}>
      <Container>
        <Navbar.Brand className={`${styles.brand} fw-bold`} href="/home">
          HAMBURDEV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/orders">Carrito</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <NavDropdown title="Perfil" id="basic-nav-dropdown">
              <NavDropdown.Item>Nombre: {user.name}</NavDropdown.Item>
              <NavDropdown.Item>Email: {user.email}</NavDropdown.Item>
              <NavDropdown.Item>Rol: {user.role}</NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>
              <NavDropdown.Item className="text-danger" onClick={logout}>
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
