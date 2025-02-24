//React
import { useContext, useState } from "react";

//React Router Dom
import { Link, useNavigate } from "react-router-dom";

//React Bootstrap
import { Card, Button, Form, Alert } from "react-bootstrap";

//Función para hacer el login
import { loginFetch } from "../api/auth/loginFetch";

//Contexto global de Auth
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
  //Redirecciona al Home despues de hacer el login
  const navigate = useNavigate();

  //Funcion del contexto global
  const { login } = useContext(AuthContext);

  //Estado del formulario de login
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Validación del formulario
  const [validated, setValidated] = useState(false);

  //Mensaje de error
  const [error, setError] = useState("");

  //Handler de cambios en el formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Handler de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    //Validación del formulario con bootstrap
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);

    //Login
    try {
      const { access_token } = await loginFetch(formData);
      login(access_token);
      localStorage.setItem("token", access_token);
      navigate("/home");
    } catch (error) {
      setError(error.msg);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="bg-dark border border-warning"
        style={{ width: "300px" }}
      >
        <Card.Title className="text-warning my-4">
          <p className="m-0 font-weight-bold fs-2">HAMBURDEV</p>
        </Card.Title>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="m-3 d-flex flex-column gap-3"
        >
          <Card.Title className="text-warning fs-5">Iniciar sesión</Card.Title>
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar su email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar su contraseña
            </Form.Control.Feedback>
          </Form.Group>
          {error ? <Alert variant="danger">{error}</Alert> : null}
          <Button variant="warning" type="submit">
            Enviar
          </Button>
          <p>
            ¿No tienes una cuenta? <Link to="/">Regístrate</Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
