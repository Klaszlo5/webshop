import 'reflect-metadata';  
import express from 'express';  
import { createConnection } from 'typeorm';  
import cors from 'cors';  
import { Item } from './entity/Item';  

const app = express();  
app.use(cors());  
app.use(express.json());  

createConnection().then(connection => {  
    const itemRepository = connection.getRepository(Item);  
    
    // Fetch all items  
    app.get('/api/items', async (req, res) => {  
        try {  
            const items = await itemRepository.find();  
            res.json(items);  
        } catch (error) {  
            res.status(500).json({ message: 'Error fetching items' });  
        }  
    });  

    // Order an item  
    app.post('/api/order', async (req, res) => {  
        const { itemId, quantity } = req.body;  
        try {  
            const item = await itemRepository.findOne(itemId);  
            if (!item || item.remaining < quantity) {  
                return res.status(400).json({ message: 'Not enough items in stock' });  
            }  
            item.remaining -= quantity;  
            await itemRepository.save(item);  
            res.json({ message: 'Order placed successfully' });  
        } catch (error) {  
            res.status(500).json({ message: 'Error processing order' });  
        }  
    });  

    app.listen(4000, () => {  
        console.log('Server running on http://localhost:4000');  
    });  
}).catch(error => console.log(error));  