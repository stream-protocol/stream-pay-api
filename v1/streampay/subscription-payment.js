const Sequelize = require('sequelize');
const db = require('../config/database');

const SubscriptionPayment = db.define('subscription_payment', {
  paymentId: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  subscriberWalletAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  subscriptionPlan: {
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
  paymentStatus: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'pending', // Payment status (e.g., 'pending', 'completed', 'failed')
  },
});

// Synchronize the model with the database
SubscriptionPayment.sync();

module.exports = SubscriptionPayment;
