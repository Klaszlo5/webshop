// src/components/Cart.tsx
import React from 'react';

// Define a type for Cart Item Props
interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  onRemove: (id: number) => void;
}

const Cart: React.FC<CartItemProps> = ({ id, name, price, quantity, onRemove }) => {
  return (
    <div>
      <span>{name} - ${price.toFixed(2)} x {quantity}</span>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default Cart;