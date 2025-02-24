import Booking from '../model/Booking.js';
import Package from '../model/Package.js';
import User from '../model/User.js';

// Create a booking
export const createBooking = async (req, res) => {
  const { customerId, packageId, startDate, endDate } = req.body;

  try {
    const packageDetails = await Package.findByPk(packageId);
    if (!packageDetails) {
      return res.status(404).json({ message: 'Package not found' });
    }

    const customerDetails = await User.findByPk(customerId);
    if (!customerDetails) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    const newBooking = await Booking.create({
      customerId,
      packageId,
      startDate,
      endDate,
    });

    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

// Get all bookings (for admin and agency)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

// Get bookings by customer
export const getBookingsByCustomer = async (req, res) => {
  const { customerId } = req.params;
  try {
    const bookings = await Booking.findAll({
      where: { customerId },
    });

    if (!bookings) {
      return res.status(404).json({ message: 'No bookings found for this customer' });
    }
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings for customer', error });
  }
};

// Get booking by ID (✅ Fixed the missing function)
export const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching booking', error });
  }
};

// Update booking (for customers and agencies)
export const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { startDate, endDate } = req.body;

  try {
    const bookingToUpdate = await Booking.findByPk(id);
    if (!bookingToUpdate) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const updatedBooking = await bookingToUpdate.update({
      startDate,
      endDate,
    });

    res.status(200).json({ message: 'Booking updated successfully', booking: updatedBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking', error });
  }
};

// Delete booking (for admins)
export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const bookingToDelete = await Booking.findByPk(id);
    if (!bookingToDelete) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    await bookingToDelete.destroy();
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting booking', error });
  }
};

// Get bookings for a specific agency
export const getBookingsByAgency = async (req, res) => {
  const { agencyId } = req.params;

  try {
    const bookings = await Booking.findAll({
      where: { '$Package.agencyId$': agencyId },
      include: {
        model: Package,
        attributes: ['name', 'description', 'price'],
      },
    });

    if (!bookings.length) {
      return res.status(404).json({ message: 'No bookings found for this agency' });
    }

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings for agency', error });
  }
};
