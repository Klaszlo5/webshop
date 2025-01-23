import { Router } from 'express';  
import { getRepository } from 'typeorm';  
import { Item } from '../models/Item';  

const router = Router();  
 
router.get('/', async (req, res) => {  
    try {  
        const items = await getRepository(Item).find();  
        res.json(items);  
    } catch (error) {  
        res.status(500).json({ message: 'Error fetching items' });  
    }  
});  

router.post('/purchase', async (req, res) => {  
    const { itemId, quantity } = req.body;  

    try {  
        const itemRepo = getRepository(Item);  
        const item = await itemRepo.findOne(itemId);  

        if (!item) {  
            return res.status(404).json({ message: 'Item not found' });  
        }  

        if (item.remaining < quantity) {  
            return res.status(400).json({ message: 'Not enough items in stock' });  
        }  

        item.remaining -= quantity;  
        await itemRepo.save(item);  

        res.status(200).json({ message: 'Purchase successful', item });  
    } catch (error) {  
        res.status(500).json({ message: 'Error processing purchase', error });  
    }  
});  

export default router; 