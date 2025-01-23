import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  

interface Item {  
    id: number;  
    name: string;  
    price: number;  
    remaining: number;  
}  

const ItemList: React.FC = () => {  
    const [items, setItems] = useState<Item[]>([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState<string | null>(null);  

    useEffect(() => {  
        const fetchItems = async () => {  
            try {  
                const response = await axios.get('/api/items');  
                setItems(response.data);  
            } catch (err) {  
                setError('Error fetching items');  
            } finally {  
                setLoading(false);  
            }  
        };  

        fetchItems();  
    }, []);  

    const addToCart = (itemId: number) => {   
    };  

    if (loading) return <div>Loading...</div>;  
    if (error) return <div>{error}</div>;  

    return (  
        <div>  
            <h1>Items</h1>  
            <ul>  
                {items.map((item) => (  
                    <li key={item.id}>  
                        {item.name} - ${item.price} (Remaining: {item.remaining})  
                        <button onClick={() => addToCart(item.id)}>Add to Cart</button>  
                    </li>  
                ))}  
            </ul>  
            <Link to="/cart">Go to Cart</Link>  
        </div>  
    );  
};  

export default ItemList;  