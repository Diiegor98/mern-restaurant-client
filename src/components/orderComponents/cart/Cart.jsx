//React
import { useContext } from "react";

//React Bootstrap
import { Row, Col, Container, Button } from "react-bootstrap";

//Contexto global de logueo y del carrito
import { useCart } from "../../../context/CartContext";
import { AuthContext } from "../../../context/AuthContext";

//Funcion para crear una orden
import { createOrderFetch } from "../../../api/order/createOrderFetch";

//Assets
import emptycart from "../../../assets/empty-cart.png";

import Swal from "sweetalert2";

const Cart = () => {
  //Funciones y utilidades de los contextos globales
  const {
    cartItems,
    removeFromCart,
    clearCart,
    getCartTotal,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const { user } = useContext(AuthContext);

  //Funcion auxiliar para redondear sin decimales el precio
  const totalPrice = getCartTotal().toFixed(0);

  const onBuy = () => {
    createOrderFetch(cartItems, totalPrice, user);
    Swal.fire({
      position: "center",
      title: "Compra realizada con éxito",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    clearCart();
  };

  return (
    <div className="mt-5">
      {cartItems.length === 0 ? (
        <>
          <img src={emptycart} alt="Carrito vacio" style={{ width: "280px" }} />
          <p className="text-warning fs-4">El carrito está vacío</p>
        </>
      ) : (
        <>
          <Container>
            <Row className="mb-3 text-warning">
              <Col>Nombre</Col>
              <Col>Precio</Col>
              <Col xs={4}>Cantidad</Col>
              <Col></Col>
            </Row>
            {cartItems.map((item) => (
              <Row className="mb-3 text-light" key={item._id}>
                <Col>{item.name}</Col>
                <Col>${item.price}</Col>
                <Col xs={4}>
                  <Button
                    size="sm"
                    variant="outline-warning"
                    className="py-0 px-2"
                    onClick={() => decreaseQuantity(item._id)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline-warning"
                    className="py-0 px-2"
                    onClick={() => increaseQuantity(item._id)}
                  >
                    +
                  </Button>{" "}
                </Col>
                <Col>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </Col>
              </Row>
            ))}
          </Container>
          <div>
            <hr />
            <h3 className="text-light">
              Total: <span className="text-light">${totalPrice}</span>
            </h3>
          </div>
          <div>
            <Button className="me-4" variant="danger" onClick={clearCart}>
              Vaciar carrito
            </Button>
            <Button variant="warning" onClick={onBuy}>
              Finalizar compra
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
