import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';  // Import sequelize from db.js

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'agency', 'customer'),
    allowNull: false
  },
  resetToken: {
    type: DataTypes.STRING,
    allowNull: true
  },
  resetTokenExpiration: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

// Export the User model to be used in other files
export default User;
