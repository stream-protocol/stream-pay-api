const Sequelize = require('sequelize');
const db = require('../config/database');

const LatestTransaction = db.define('latest_transaction', {
  latestId: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: 'users',
      key: 'userId',
    },
  },
  transactionId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: 'transactions',
      key: 'transactionId',
    },
  },
  // Add more fields for latest transaction details
});

// Define associations
LatestTransaction.belongsTo(User, { foreignKey: 'userId' });
LatestTransaction.belongsTo(Transaction, { foreignKey: 'transactionId' });

// Synchronize the model with the database
LatestTransaction.sync();

module.exports = LatestTransaction;
