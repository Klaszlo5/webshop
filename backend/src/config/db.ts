import { createConnection } from 'typeorm';

export const connection = createConnection({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [
    __dirname + '/../models/*.ts'
  ],
  synchronize: true,
});