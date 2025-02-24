//React
import { useState } from "react";

//React Router DOM
import { Link, useNavigate } from "react-router-dom";

//React Bootstrap
import { Button, Card, Form, Alert } from "react-bootstrap";

//Función para registrar al usuario en la DB
import { registerFetch } from "../api/auth/registerFetch";

const RegisterForm = () => {
  // Navigate para redireccionar al login luego de crear el usuario
  const navigate = useNavigate();

  //Estado del formulario de registro
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //Validación del formulario
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(false);
  //Mensaje de error
  const [error, setError] = useState("");

  //Handler de cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Handler de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);

    try {
      const res = await registerFetch(formData);
      setSuccess(res.msg);
      setTimeout(() => {
        navigate("/login");
      }, "2000");
    } catch (error) {
      setError(error.msg);
      setSuccess(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="bg-dark border border-warning">
        <Card.Title className="text-warning my-4">
          <p className="m-0 font-weight-bold fs-2">HAMBURDEV</p>
        </Card.Title>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="m-3 d-flex flex-column gap-3"
        >
          <Card.Title className="text-warning fs-5">Registrate</Card.Title>
          <Form.Group>
            <Form.Control
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar su nombre
            </Form.Control.Feedback>
          </Form.Group>
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
              Debe ingresar su ncontraseña
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="warning" type="submit">
            Enviar
          </Button>
          {error ? <Alert variant="danger">{error}</Alert> : null}
          {success && <p className="alert alert-success">{success}</p>}
          <p>
            ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterForm;
