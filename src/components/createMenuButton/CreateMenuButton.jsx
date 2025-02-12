import { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createMenuFetch } from "../../api/menu/createMenuFetch";

function CreateMenuButton() {
  //Maneja el estado para mostrar el modal
  const [show, setShow] = useState(false);

  //Estado para manejar las validaciones de los inputs
  const [validated, setValidated] = useState(false);

  //Estado del form
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: 0,
    detail: "",
    image: null,
  });

  //Cuando cierro el modal
  const handleClose = () => {
    setValidated(false);
    setShow(false);
    setFormData({
      name: "",
      category: "",
      price: 0,
      detail: "",
      image: null,
    });
  };

  //Cuando abro el modal
  const handleShow = () => setShow(true);

  //Cuando cambia el valor de los inputs
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value, // Guarda el archivo en `image`
    });
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
      const res = await createMenuFetch(formData);
      console.log(res.msg);
      setValidated(true);
      handleClose(); // Cierra el modal si la operación fue exitosa
    } catch (error) {
      console.log(error.msg);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Crear nuevo menú
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear menú</Modal.Title>
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
              <Form.Control
                name="image"
                type="file"
                accept="image/*"
                required
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Seleccionar una imagen
              </Form.Control.Feedback>
            </FormGroup>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              Crear
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateMenuButton;
