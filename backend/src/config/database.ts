import { createConnection } from 'typeorm';

const connectDatabase = async () => {
  try {
    await createConnection();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database', error);
    process.exit(1);
  }
};

export default connectDatabase;