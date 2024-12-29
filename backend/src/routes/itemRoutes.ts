import { Router } from 'express';
import { fetchItems, placeOrder } from '../services/itemService';

const router = Router();

// GET /api/items
router.get('/', async (req, res) => {
  try {
    const items = await fetchItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/items/order
router.post('/order', async (req, res) => {
  const { itemId, quantity } = req.body;

  try {
    const response = await placeOrder(itemId, quantity);
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message }); // Bad request for order issues
  }
});

export default router;