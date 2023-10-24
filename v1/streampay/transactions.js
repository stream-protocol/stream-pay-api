const Sequelize = require('sequelize');
const db = require('../config/database');

const Transaction = db.define('transaction', {
  transactionId: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  accountId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: 'accounts',
      key: 'accountId',
    },
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  // Add more transaction details as needed
});

// Define associations
Transaction.belongsTo(Account, { foreignKey: 'accountId' });

// Synchronize the model with the database
Transaction.sync();

module.exports = Transaction;
