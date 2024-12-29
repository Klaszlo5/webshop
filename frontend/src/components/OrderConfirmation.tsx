import React from "react";
import { Order } from "../types";

interface Props {
  order: Order;
  onClose: () => void;
}

const OrderConfirmation: React.FC<Props> = ({ order, onClose }) => {
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order! Here are the details:</p>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <div>
        <strong>Total: ${order.total.toFixed(2)}</strong>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default OrderConfirmation;