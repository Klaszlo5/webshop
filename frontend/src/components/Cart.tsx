import React from 'react';  

const Cart: React.FC<{ cart: any[]; placeOrder: () => void }> = ({ cart, placeOrder }) => {  
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);  

    return (  
        <div>  
            <h2>Cart</h2>  
            {cart.map(item => (  
                <div key={item.id}>  
                    <h3>{item.name}</h3>  
                    <p>Quantity: {item.quantity}</p>  
                </div>  
            ))}  
            <h3>Total: ${total.toFixed(2)}</h3>  
            <button onClick={placeOrder}>Place Order</button>  
        </div>  
    );  
};  

export default Cart;  