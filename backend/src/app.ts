import express from 'express';  
import { createConnection } from 'typeorm';  
import itemRoutes from './routes/itemRoutes';  
import dotenv from 'dotenv';  

dotenv.config();  

const app = express();  
app.use(express.json());  

app.use('/api/items', itemRoutes);  

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;  

createConnection()  
    .then(() => {  
        app.listen(PORT, () => {  
            console.log(`Server is running on port ${PORT}`);  
        });  
    })  
    .catch(err => {  
        console.error('Database connection error:', err);  
    });  