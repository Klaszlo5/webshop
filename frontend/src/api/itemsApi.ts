import axios from 'axios';
import { Item } from '../types/Item';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/items';

export const fetchItems = async (): Promise<Item[]> => {
    const response = await axios.get<Item[]>(API_URL);
    return response.data;
};

export const purchaseItems = async (itemId: number, quantity: number): Promise<void> => {
    await axios.post(`${API_URL}/purchase`, { itemId, quantity });
};