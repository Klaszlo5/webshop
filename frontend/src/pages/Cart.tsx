import React, { useEffect, useState } from 'react';  
import { Link } from 'react-router-dom';  

interface CartItem {  
    id: number;  
    quantity: number;  
}  

const Cart: React.FC = () => {  
    const [cartItems, setCartItems] = useState<CartItem[]>([]);  
    const [total, setTotal] = useState(0);  

    useEffect(() => {  
        const items = JSON.parse(localStorage.getItem('cart') || '[]');  
        setCartItems(items);  
        calculateTotal(items);  
    }, []);  

    const calculateTotal = (items: CartItem[]) => {  
        setTotal(  
            items.reduce((acc, item) => {  
                const price = 20;
                return acc + price * item.quantity;  
            }, 0)  
        );  
    };  

    const placeOrder = () => {   
        localStorage.removeItem('cart');  
    };  

    return (  
        <div>  
            <h1>Your Cart</h1>  
            <ul>  
                {cartItems.map((item) => (  
                    <li key={item.id}>  
                        Item ID: {item.id}, Quantity: {item.quantity}  
                    </li>  
                ))}  
            </ul>  
            <h2>Total: ${total}</h2>  
            <button onClick={placeOrder}>Place Order</button>  
            <Link to="/">Continue Shopping</Link>  
        </div>  
    );  
};  

export default Cart;  