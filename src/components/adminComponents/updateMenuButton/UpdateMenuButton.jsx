//React
import { useState } from "react";

//React Bootstrap
import { Form, FormGroup, Button, Modal } from "react-bootstrap";

//Funcion para actualizar el menu
import { updateMenuFetch } from "../../../api/menu/updateMenuFetch";

function UpdateMenuButton({ menu }) {
  //Maneja el estado para mostrar el modal
  const [show, setShow] = useState(false);

  //Estado para manejar las validaciones de los inputs
  const [validated, setValidated] = useState(false);

  //Estado del form
  const [formData, setFormData] = useState({
    name: menu.name,
    category: menu.category,
    price: menu.price,
    detail: menu.detail,
    status: menu.status,
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
    const { name, value, type, files } = event.target;

    if (name === "status") {
      setFormData({ ...formData, status: value === "true" });
      return;
    }

    if (type === "file") {
      setFormData({ ...formData, image: files[0] }); // Guarda la imagen como archivo
    } else {
      setFormData({ ...formData, [name]: value }); // Para otros campos
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

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("detail", formData.detail);
    formDataToSend.append("status", formData.status);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
  }

    try {
      const res = await updateMenuFetch(menu._id, formDataToSend);
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
          <Modal.Title>Editar menú</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
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
                required
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Ingresar un nombre
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup>
              <Form.Select
                name="category"
                onChange={handleInputChange}
                value={formData.category}
                required
              >
                <option value="" disabled>
                  Categoría
                </option>
                <option value="Clasica">Clasica</option>
                <option value="Vegetariana">Vegetariana</option>
                <option value="BBQ">BBQ</option>
                <option value="Gourmet">Gourmet</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Seleccionar una categoría
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup>
              <Form.Control
                name="price"
                type="number"
                placeholder="Precio"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Establecer un precio
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup>
              <Form.Control
                name="detail"
                type="text"
                placeholder="Descripcion"
                value={formData.detail}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Establecer una descripción
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
                <option value="true">Disponible</option>
                <option value="false">No disponible</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Seleccionar un estado
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup>
              <Form.Control
                name="image"
                type="file"
                accept="image/*"
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Seleccionar una imagen
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

export default UpdateMenuButton;
