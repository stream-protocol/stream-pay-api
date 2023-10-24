// v1/data/payments.js

// Sample initial payment data
const payments = [
  {
    paymentId: '1',
    amount: 100,
    currency: 'USD',
    merchantWalletAddress: 'merchant_wallet_1',
    customerWalletAddress: 'customer_wallet_1',
    paymentStatus: 'success',
    transactionId: 'transaction_id_1',
    timestamp: '2023-10-25T12:00:00Z',
  },
  {
    paymentId: '2',
    amount: 75,
    currency: 'EUR',
    merchantWalletAddress: 'merchant_wallet_2',
    customerWalletAddress: 'customer_wallet_2',
    paymentStatus: 'success',
    transactionId: 'transaction_id_2',
    timestamp: '2023-10-25T12:30:00Z',
  },
  // Add more payment objects here
  {
    paymentId: '3',
    amount: 50,
    currency: 'GBP',
    merchantWalletAddress: 'merchant_wallet_3',
    customerWalletAddress: 'customer_wallet_3',
    paymentStatus: 'success',
    transactionId: 'transaction_id_3',
    timestamp: '2023-10-25T13:00:00Z',
  },
  {
    paymentId: '4',
    amount: 120,
    currency: 'USD',
    merchantWalletAddress: 'merchant_wallet_4',
    customerWalletAddress: 'customer_wallet_4',
    paymentStatus: 'pending',
    transactionId: 'transaction_id_4',
    timestamp: '2023-10-25T13:30:00Z',
  },
  // Add more payment objects as needed
];

module.exports = payments;
