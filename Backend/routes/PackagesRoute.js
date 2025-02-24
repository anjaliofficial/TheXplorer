// routes/bookingRoutes.js
import express from 'express';
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
  getBookingsByAgency,  // Only if you've added this in BookingController.js
} from '../controller/BookingController.js';  // Correct import path to BookingController

const router = express.Router();

// Booking Routes
router.post('/booking', createBooking);  // Create a new booking (customer)
router.get('/bookings', getAllBookings);  // Get all bookings (admin)
router.get('/booking/:id', getBookingById);  // Get booking by ID (customer/admin)
router.put('/booking/:id', updateBooking);  // Update booking (customer/agency)
router.delete('/booking/:id', deleteBooking);  // Delete booking (admin)
router.get('/bookings/agency/:agencyId', getBookingsByAgency);  // Get bookings by agency (if implemented)

export default router;
