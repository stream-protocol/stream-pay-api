const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('your_database_name', 'your_database_user', 'your_database_password', {
  host: 'localhost', // or your database host
  dialect: 'postgres', // Use 'postgres' for PostgreSQL
});

// Define the Payment model
const Payment = sequelize.define('Payment', {
  paymentId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: 'Unique ID of the payment',
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    comment: 'Amount to be paid',
    validate: {
      min: 0, // Ensure the amount is not negative
    },
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Currency of the payment (STRM, SOL, USDC, EURC, USDT)',
  },
  merchantWalletAddress: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Wallet address of the merchant',
  },
  customerWalletAddress: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Wallet address of the customer',
  },
  paymentStatus: {
    type: DataTypes.STRING,
    defaultValue: 'success',
    comment: 'Payment status (success, pending, refunded, etc.)',
  },
  transactionId: {
    type: DataTypes.STRING,
    comment: 'Transaction ID associated with the payment',
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    comment: 'Timestamp when the payment was processed',
  },
}, {
  tableName: 'payments', // Specify the table name explicitly
});

// Create the table in the database
(async () => {
  try {
    await sequelize.sync(); // Create the table if it doesn't exist
    console.log('Payment table synced successfully.');
  } catch (error) {
    console.error('Error syncing Payment table:', error);
  }
})();

module.exports = Payment;
