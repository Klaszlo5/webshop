import { DataSource } from "typeorm";
import { Item } from "../entities/Item";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "webshop",
  synchronize: true, // Automatically synchronize the schema with the database
  logging: false, // Set to `true` for debugging SQL queries
  entities: [Item, Order, OrderItem], // Add your entities here
  migrations: ["src/migrations/*.ts"], // Path to migration files if you use migrations
  subscribers: [], // Add subscribers if needed
});

export const initializeDatabase = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log("Database connection established successfully!");
  } catch (error) {
    console.error("Error during database initialization:", error);
    process.exit(1);
  }
};
