//React
import { useState } from "react";

//React Bootstrap
import { Form, FormGroup, Button, Modal } from "react-bootstrap";

//Funcion para actualizar la orden
import { updateOrderFetch } from "../../../api/order/updateOrderFetch";

function UpdateOrderButton({ order, menu }) {
  //Maneja el estado para mostrar el modal
  const [show, setShow] = useState(false);

  //Estado para manejar las validaciones de los inputs
  const [validated, setValidated] = useState(false);

  //Estado del form
  const [formData, setFormData] = useState({
    status: order.status,
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
      const res = await updateOrderFetch(order._id, formData);
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
          <Modal.Title>Editar Orden</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {menu.map((m) => (
              <p key={m._id}>
                {m.name} x{m.quantity}
              </p>
            ))}
          </div>
          <Form
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
            className="d-flex flex-column gap-2"
          >
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
                <option value="true">Realizado</option>
                <option value="false">Pendiente</option>
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

export default UpdateOrderButton;
