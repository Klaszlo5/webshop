import { Request, Response } from "express";
import { itemService } from "../services/itemService";

export const getAllItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await itemService.getAllItems();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Failed to fetch items. Please try again later." });
  }
};

export const getItemById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const item = await itemService.getItemById(parseInt(id));

    if (!item) {
      res.status(404).json({ error: "Item not found" });
      return;
    }

    res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ error: "Failed to fetch the item. Please try again later." });
  }
};

export const createItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, remaining } = req.body;

    if (!name || price === undefined || remaining === undefined) {
      res.status(400).json({ error: "Missing required fields: name, price, remaining" });
      return;
    }

    const newItem = await itemService.createItem({ name, price, remaining });
    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ error: "Failed to create item. Please try again later." });
  }
};

export const updateItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, price, remaining } = req.body;

    const updatedItem = await itemService.updateItem(parseInt(id), { name, price, remaining });

    if (!updatedItem) {
      res.status(404).json({ error: "Item not found" });
      return;
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ error: "Failed to update item. Please try again later." });
  }
};

export const deleteItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const success = await itemService.deleteItem(parseInt(id));

    if (!success) {
      res.status(404).json({ error: "Item not found" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ error: "Failed to delete item. Please try again later." });
  }
};
