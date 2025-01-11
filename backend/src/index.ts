import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';
import dotenv from 'dotenv';

import { Item } from './models/Item';

dotenv.config();

const app = express();

app.use(cors()); 
app.use(express.json());

const startServer = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true, 
      logging: true,
      entities: [Item],
    });

    console.log('Connected to the database!');

   
    app.get('/api/items', async (req: Request, res: Response) => {
      try {
        const items = await Item.find();
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching items from the database.' });
      }
    });

    app.post('/api/order', async (req: Request, res: Response) => {
      const { itemId, quantity } = req.body;

      try {
        const item = await Item.findOne(itemId);

        if (!item) {
          return res.status(404).json({ error: 'Item not found' });
        }

        if (item.remaining < quantity) {
          return res.status(400).json({ error: 'Not enough stock available' });
        }

        item.remaining -= quantity;

        await item.save();

        res.status(200).json({
          message: 'Order placed successfully!',
          item,
          quantity,
          total: item.price * quantity,
        });
      } catch (error) {
        res.status(500).json({ error: 'Error processing the order.' });
      }
    });

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process with failure code
  }
};

startServer();
