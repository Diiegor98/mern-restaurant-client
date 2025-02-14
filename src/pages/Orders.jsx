import NavBar from "../components/Navbar/Navbar";
import { Image } from "react-bootstrap";
import headerImg from "../assets/header.jpg";
import { createOrderFetch } from "../api/order/createOrderFetch";

const Orders = () => {
  return (
    <div className="admin__container // d-flex flex-column justify-content-start align-items-start">
      <NavBar />
      <div className="home__header-imgcontainer // w-100">
        <Image
          className="home__header-img"
          src={headerImg}
          alt="Cabecera"
          fluid
        />
      </div>
      <div className="admin__tabscontainer // bg-light w-100 vh-100 pt-3">
        <h2 className="orders__title // fs-2">Mi orden</h2>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Orders;

import { useCart } from "../context/CartContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    getCartTotal,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const { user } = useContext(AuthContext);
  const totalPrice = getCartTotal().toFixed(2);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              {item.name} - ${item.price} x{" "}
              <button onClick={() => increaseQuantity(item._id)}>+</button>{" "}
              {item.quantity}{" "}
              <button onClick={() => decreaseQuantity(item._id)}>-</button>
              <button onClick={() => removeFromCart(item._id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <h3>Total: ${totalPrice}</h3> {/* Mostrar el total */}
      </div>
      {cartItems.length > 0 && (
        <div>
          <button onClick={clearCart}>Vaciar carrito</button>
          <button
            onClick={() => {
              createOrderFetch(cartItems, totalPrice, user);
            }}
          >
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
};
