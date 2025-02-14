import { useEffect, useState } from "react";
import { getOrdersFetch } from "../../api/order/getOrdersFetch";
import OrderTab from "./OrderTab";

const OrdersTabContainer = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersFetch()
      .then((data) => setOrders(data))
      .catch((error) => console.log(error));
  }, [orders]);

  return (
    <div className="d-flex flex-column bg-light">
      {orders.map((order) => (
        <OrderTab key={order._id} order={order} />
      ))}
    </div>
  );
};

export default OrdersTabContainer;
