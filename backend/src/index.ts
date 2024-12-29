import express from 'express';
import { createConnection } from 'typeorm';
import itemRoutes from './routes/itemRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

createConnection().then(() => {
  app.use('/api/items', itemRoutes);
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => console.log(err));