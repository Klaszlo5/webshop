import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import connectDatabase from './config/database';
import itemRoutes from './routes/itemRoutes';

const app = express();

// Middlewares
app.use(cors());
app.use(json()); 

connectDatabase();

app.use('/api', itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
