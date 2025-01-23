import { getRepository } from 'typeorm';  
import { Item } from '../models/Item';  

export const getAllItems = async () => {  
    const itemRepo = getRepository(Item);  
    return await itemRepo.find();  
};  

export const purchaseItem = async (itemId: number, quantity: number) => {  
    const itemRepo = getRepository(Item);  
    const item = await itemRepo.findOne(itemId);  

    if (!item) {  
        throw new Error('Item not found');  
    }  

    if (item.remaining < quantity) {  
        throw new Error('Not enough items in stock');  
    }  

    item.remaining -= quantity;  
    await itemRepo.save(item);  
    return item;  
};  