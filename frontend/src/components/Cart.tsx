import React from "react";
import { CartItem } from "../types";

interface Props {
  cart: CartItem[];
  onRemoveItem: (itemId: number) => void; // Function to remove item from cart
  onPlaceOrder: () => void; // Function to place order
}

const Cart: React.FC<Props> = ({ cart, onRemoveItem, onPlaceOrder }) => {
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div>Total: ${totalAmount.toFixed(2)}</div>
      {cart.length > 0 && <button onClick={onPlaceOrder}>Place Order</button>}
    </div>
  );
};

export default Cart;