import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,        // Database name from .env
  process.env.DB_USER,        // Database user from .env
  process.env.DB_PASSWORD,    // Database password from .env
  {
    host: process.env.DB_HOST, // Database host from .env
    dialect: 'postgres',      // Database dialect (PostgreSQL)
    logging: false,           // Disable query logging
  }
);

// Function to test and connect to the database
const connectDB = async () => {
  try {
    await sequelize.authenticate(); // Check connection
    await sequelize.sync({ alter: true }); // Sync models with the database
    console.log('Database connected successfully...');
  } catch (e) {
    console.error('Failed to connect to the database:', e);
  }
};

// Export sequelize instance and connectDB function
export { sequelize, connectDB };
