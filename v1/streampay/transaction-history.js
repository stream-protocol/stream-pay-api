const Sequelize = require('sequelize');
const db = require('../config/database');

const TransactionHistory = db.define('transaction_history', {
  historyId: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  transactionId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: 'transactions',
      key: 'transactionId',
    },
  },
  timestamp: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  // Add more history details as needed
});

// Define associations
TransactionHistory.belongsTo(Transaction, { foreignKey: 'transactionId' });

// Synchronize the model with the database
TransactionHistory.sync();

module.exports = TransactionHistory;
