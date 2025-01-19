import { Router } from 'express';  
import { getRepository } from 'typeorm';  
import { Item } from '../entities/Item';  

const router = Router();  

router.get('/', async (req, res) => {  
  try {  
    const items = await getRepository(Item).find();  
    res.json(items);  
  } catch (error) {  
    res.status(500).json({ message: 'Error fetching items' });  
  }  
});  


export default router;  