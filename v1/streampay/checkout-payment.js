const Sequelize = require('sequelize');
const db = require('../config/database');

const CheckoutPayment = db.define('checkout_payment', {
  paymentId: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  payerWalletAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  payeeWalletAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paymentAmount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  memo: {
    type: Sequelize.TEXT,
  },
  // Add more fields as needed
});

CheckoutPayment.sync();

module.exports = CheckoutPayment;
