import { AppDataSource } from "../config/database";
import { Item } from "../models/Item";

export const itemService = {
  getAllItems: async (): Promise<Item[]> => {
    const itemRepository = AppDataSource.getRepository(Item);
    return await itemRepository.find();
  },

  getItemById: async (id: number): Promise<Item | null> => {
    const itemRepository = AppDataSource.getRepository(Item);
    return await itemRepository.findOneBy({ id });
  },

  createItem: async (data: Partial<Item>): Promise<Item> => {
    const itemRepository = AppDataSource.getRepository(Item);
    const newItem = itemRepository.create(data);
    return await itemRepository.save(newItem);
  },

  updateItem: async (id: number, data: Partial<Item>): Promise<Item | null> => {
    const itemRepository = AppDataSource.getRepository(Item);
    const item = await itemRepository.findOneBy({ id });

    if (!item) {
      return null;
    }

    Object.assign(item, data);
    return await itemRepository.save(item);
  },

  deleteItem: async (id: number): Promise<boolean> => {
    const itemRepository = AppDataSource.getRepository(Item);
    const item = await itemRepository.findOneBy({ id });

    if (!item) {
      return false;
    }

    await itemRepository.remove(item);
    return true;
  },
};
