// models/Booking.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';  // Import sequelize from db.js
import Package from './Package.js';  // Import the Package model

const Booking = sequelize.define('Booking', {
  bookingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  packageId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Package,
      key: 'id',  // Foreign key to the Package model
    },
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Pending',
    allowNull: false,
  },
});

export default Booking;
