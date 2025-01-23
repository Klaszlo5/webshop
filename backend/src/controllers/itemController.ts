import { Request, Response } from 'express';
import { getItems, createOrder } from '../services/itemService';

export const getItemsController = async (req: Request, res: Response) => {
    try {
        const items = await getItems();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching items' });
    }
};

export const createOrderController = async (req: Request, res: Response) => {
    const { items } = req.body; // Order items and quantities
    try {
        const orderResponse = await createOrder(items);
        res.status(200).json(orderResponse);
    } catch (err) {
        res.status(500).json({ message: 'Error placing order' });
    }
};