const Sequelize = require('sequelize');
const db = require('../config/database');

const PaymentStream = db.define('payment_stream', {
  streamId: {
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
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.DATE,
  },
  // Add more fields as needed
});

PaymentStream.sync();

module.exports = PaymentStream;
