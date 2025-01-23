import { createConnection } from 'typeorm';  
import { Item } from './models/Item';  

export const connectDB = async () => {  
    await createConnection({  
        type: 'postgres',  
        host: process.env.DB_HOST,  
        port: parseInt(process.env.DB_PORT || '5432'),  
        username: process.env.DB_USER,  
        password: process.env.DB_PASSWORD,  
        database: process.env.DB_NAME,  
        entities: [Item],  
        synchronize: true,  // Set to false in production  
    });  
};  