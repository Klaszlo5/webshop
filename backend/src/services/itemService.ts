import { getRepository } from 'typeorm';
import { Item } from '../models/item';

export const getItems = async () => {
    const itemRepository = getRepository(Item);
    return itemRepository.find();
};

export const createOrder = async (orderItems: Array<{ id: number, quantity: number }>) => {
    const itemRepository = getRepository(Item);
    const orderResponse: Array<{ id: number, quantity: number, status: string }> = [];

    for (const { id, quantity } of orderItems) {
        const item = await itemRepository.findOne(id);
        if (item && item.remaining >= quantity) {
            item.remaining -= quantity;
            await itemRepository.save(item);
            orderResponse.push({ id, quantity, status: 'Success' });
        } else {
            orderResponse.push({ id, quantity, status: 'Out of stock' });
        }
    }
    return orderResponse;
};