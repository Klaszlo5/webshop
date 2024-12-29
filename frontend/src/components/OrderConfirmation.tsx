// src/components/OrderConfirmationPage.tsx
import React from 'react';

interface OrderDetails {
  orderId: string;
  items: { name: string; quantity: number; price: number }[];
  totalAmount: number;
}

const OrderConfirmationPage: React.FC = () => {
  // Example order details (these would typically be retrieved from a backend or global state)
  const order: OrderDetails = {
    orderId: '123456',
    items: [
      { name: 'Product 1', quantity: 1, price: 29.99 },
      { name: 'Product 2', quantity: 2, price: 49.99 },
    ],
    totalAmount: 129.97,
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Thank you for your order!</h1>
      <h2>Order Confirmation</h2>
      <p>Your order ID: <strong>{order.orderId}</strong></p>
      <h3>Order Summary</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {order.items.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <h2>Total Amount: ${order.totalAmount.toFixed(2)}</h2>
      <button onClick={() => window.location.href = '/'} style={{ padding: '10px 20px', marginTop: '20px' }}>
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderConfirmationPage;