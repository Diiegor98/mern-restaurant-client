//React
import { useState } from "react";

//React Bootstrap
import { Form, FormGroup, Button, Modal } from "react-bootstrap";

//Funcion para actualizar el usuario
import { updateUserFetch } from "../../../api/user/updateUserFetch";

function UpdateUserButton({ user }) {
  //Maneja el estado para mostrar el modal
  const [show, setShow] = useState(false);

  //Estado para manejar las validaciones de los inputs
  const [validated, setValidated] = useState(false);

  //Estado del form
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
  });

  //Cuando cierro el modal
  const handleClose = () => {
    setValidated(false);
    setShow(false);
  };

  //Cuando abro el modal
  const handleShow = () => {
    setShow(true);
  };

  //Cuando cambia el valor de los inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "status") {
      if (value === "true") {
        setFormData({ ...formData, status: true });
      } else {
        setFormData({ ...formData, status: false });
      }
    }
  };

  //Cuando envió el formulario del modal
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el envío por defecto

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      console.log(formData);
      const res = await updateUserFetch(user._id, formData);
      console.log(res.msg);
      setValidated(true);
      handleClose(); // Cierra el modal si la operación fue exitosa
    } catch (error) {
      console.log(error.msg);
    }
  };

  return (
    <>
      <Button size="sm" onClick={handleShow}>
        <i className="bi bi-pencil-square"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
            className="d-flex flex-column gap-2"
          >
            <FormGroup>
              <Form.Control
                name="name"
                type="text"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleInputChange}
                disabled
                required
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Ingresar un nombre
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                disabled
                required
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Ingresar un email
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup>
              <Form.Select
                name="role"
                onChange={handleInputChange}
                value={formData.role}
                required
              >
                <option value="" disabled>
                  Rol
                </option>
                <option value="cliente">Cliente</option>
                <option value="admin">Administrador</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Seleccionar un rol
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup>
              <Form.Select
                name="status"
                onChange={handleInputChange}
                value={formData.status}
                required
              >
                <option value="" disabled>
                  Estado
                </option>
                <option value="true">Activo</option>
                <option value="false">No activo</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Seleccionar un estado
              </Form.Control.Feedback>
            </FormGroup>

            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="warning">
              Editar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateUserButton;
