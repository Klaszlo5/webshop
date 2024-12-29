import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Item } from '../models/item';

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await getRepository(Item).find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
};