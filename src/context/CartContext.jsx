//React
import { createContext, useContext, useState, useEffect } from "react";

//Libreria de alertas
import Swal from "sweetalert2";

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar en localStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  //Agregar items al carrito
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem._id === item._id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    Swal.fire({
      position: "center",
      title: "Se agregó al carrito",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  //Remover items del carrito
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  //Limpiar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  //Obtener el precio total
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };


  //Aumentar la cantidad de un mismo producto
  const increaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //Reducir la cantidad de un mismo producto
  const decreaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el carrito
export const useCart = () => {
  return useContext(CartContext);
};
