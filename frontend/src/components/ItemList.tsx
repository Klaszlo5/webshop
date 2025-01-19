import React, { useEffect, useState } from 'react';  
import axios from 'axios';  

interface Item {  
    id: number;  
    name: string;  
    price: number;  
    remaining: number;  
}  

const ItemList: React.FC<{ addToCart: (item: Item, quantity: number) => void }> = ({ addToCart }) => {  
    const [items, setItems] = useState<Item[]>([]);  

    useEffect(() => {  
        const fetchItems = async () => {  
            const response = await axios.get('http://localhost:4000/api/items');  
            setItems(response.data);  
        };  
        fetchItems();  
    }, []);  

    return (  
        <div>  
            {items.map(item => (  
                <div key={item.id}>  
                    <h2>{item.name}</h2>  
                    <p>Price: ${item.price}</p>  
                    <p>Remaining: {item.remaining}</p>  
                    <button onClick={() => addToCart(item, 1)}>Add to Cart</button>  
                </div>  
            ))}  
        </div>  
    );  
};  

export default ItemList;  