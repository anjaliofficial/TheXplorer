import express from 'express';
import {
  createBooking,
  getAllBookings,
  getBookingById,  // ✅ Fixed Import
  updateBooking,
  deleteBooking,
  getBookingsByCustomer,
} from '../controller/BookingController.js';  // ✅ Ensure path is correct

const router = express.Router();

// Booking Routes
router.post('/booking', createBooking);
router.get('/bookings', getAllBookings);
router.get('/booking/:id', getBookingById);  // ✅ Now correctly linked
router.put('/booking/:id', updateBooking);
router.delete('/booking/:id', deleteBooking);
router.get('/bookings/customer/:customerId', getBookingsByCustomer);

export default router;
