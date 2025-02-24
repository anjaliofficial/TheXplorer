// controllers/PackageController.js
import Package from '../model/Package.js';
import User from '../model/User.js'; // Import User model

// Create package with image URL passed from middleware
export const createPackage = async (req, res) => {
  const { agencyId, name, description, price, duration } = req.body;
  const imageUrl = req.file?.path;  // The image URL from Cloudinary (stored in req.file)

  try {
    const user = await User.findByPk(agencyId); // Finding the agency as a user
    if (!user || user.role !== 'agency') return res.status(404).json({ message: 'Agency not found' });

    const newPackage = await Package.create({
      agencyId,
      name,
      description,
      price,
      duration,
      imageUrl,
    });

    res.status(201).json({ message: 'Package created successfully', package: newPackage });
  } catch (error) {
    res.status(500).json({ message: 'Error creating package', error });
  }
};

// Get all packages (for customers)
export const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.findAll();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching packages', error });
  }
};
// controllers/BookingController.js

// Get booking by ID
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

// Update package
export const updatePackage = async (req, res) => {
  const { id } = req.params;
  const { agencyId, name, description, price, duration } = req.body;
  const imageUrl = req.file?.path;  // Image URL from Cloudinary

  try {
    const packageToUpdate = await Package.findByPk(id);
    if (!packageToUpdate) {
      return res.status(404).json({ message: 'Package not found' });
    }

    const user = await User.findByPk(agencyId);
    if (!user || user.role !== 'agency') return res.status(404).json({ message: 'Agency not found' });

    const updatedPackage = await packageToUpdate.update({
      agencyId,
      name,
      description,
      price,
      duration,
      imageUrl,
    });

    res.status(200).json({ message: 'Package updated successfully', package: updatedPackage });
  } catch (error) {
    res.status(500).json({ message: 'Error updating package', error });
  }
};

// Delete package
export const deletePackage = async (req, res) => {
  const { id } = req.params;
  try {
    const packageToDelete = await Package.findByPk(id);
    if (!packageToDelete) {
      return res.status(404).json({ message: 'Package not found' });
    }

    await packageToDelete.destroy();
    res.status(200).json({ message: 'Package deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting package', error });
  }
};
