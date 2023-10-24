const Sequelize = require('sequelize');
const db = require('../config/database');

const PaymentType = db.define('payment_type', {
  typeId: {
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
  // Add more fields as needed
});

// Synchronize the model with the database
PaymentType.sync();

module.exports = PaymentType;
