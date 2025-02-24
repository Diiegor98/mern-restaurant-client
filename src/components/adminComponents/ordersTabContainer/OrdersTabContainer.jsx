//React
import { useEffect, useState } from "react";

//Componente de cada orden
import OrderTab from "./OrderTab";

//Funcion para obtener todos las ordenes
import { getOrdersFetch } from "../../../api/order/getOrdersFetch"


const OrdersTabContainer = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersFetch()
      .then((data) => setOrders(data))
      .catch((error) => console.log(error));
  }, [orders]);

  return (
    <div className="d-flex flex-column mt-2 p-2">
      {orders.map((order) => (
        <OrderTab key={order._id} order={order} />
      ))}
    </div>
  );
};

export default OrdersTabContainer;
