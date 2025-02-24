// models/Package.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

const Package = sequelize.define('Package', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  agencyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Package;
