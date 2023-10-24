const Sequelize = require('sequelize');
const db = require('../config/database');

const Gateway = db.define('gateway', {
  gatewayId: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.TEXT,
  },
  // Add more fields as needed for gateway configuration
});

// Synchronize the model with the database
Gateway.sync();

module.exports = Gateway;
