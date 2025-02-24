import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './database/db.js';
import userRoutes from './routes/userRoutes.js';
import packageRoutes from './routes/PackagesRoute.js';
import bookingRoutes from './routes/bookingRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to TheXplorer Backend! ');
});

// Routes
app.use('/users', userRoutes);
app.use('/packages', packageRoutes); // Package Routes
app.use('/bookings', bookingRoutes); // Booking Routes

const startServer = async () => {
  try {
    await connectDB();  // Ensure DB is connected
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(' Unable to start the server:', error);
  }
};

startServer();
