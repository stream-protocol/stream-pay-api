// controllers/payments.controller.js

const payments = [];

const processPayment = (paymentData) => {
  // Validate paymentData
  const { paymentId, amount, currency, merchantWalletAddress, customerWalletAddress } = paymentData;

  // Simulate processing payment
  const payment = {
    paymentId,
    amount,
    currency,
    merchantWalletAddress,
    customerWalletAddress,
    paymentStatus: 'success',
    transactionId: 'transaction_id_' + new Date().getTime(),
    timestamp: new Date().toISOString(),
  };

  payments.push(payment);
  return payment;
};

const findPaymentById = (paymentId) => {
  const payment = payments.find((p) => p.paymentId === paymentId);

  if (!payment) {
    throw new Error('Payment not found');
  }

  return payment;
};

const initiateRefund = (paymentId, customerSPLTokenWalletAddress) => {
  // Validate input data
  if (!paymentId || !customerSPLTokenWalletAddress) {
    throw new Error('Invalid refund data');
  }

  // Simulate refunding payment
  const payment = payments.find((p) => p.paymentId === paymentId);

  if (!payment) {
    throw new Error('Payment not found');
  }

  // Add your logic for refunding payment here

  return payment;
};

const listPayments = () => {
  return payments;
};

module.exports = {
  processPayment,
  findPaymentById,
  initiateRefund,
  listPayments,
};
