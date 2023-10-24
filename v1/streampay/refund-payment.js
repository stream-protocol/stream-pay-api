const Payment = require('../models/payment.model');

// Refund Payment
exports.refundPayment = async (req, res) => {
  try {
    const { paymentId } = req.body;

    // Validate input data
    if (!paymentId) {
      return res.status(400).json({ error: 'Missing paymentId field' });
    }

    // Find the payment in the database
    const payment = await Payment.findOne({ where: { paymentId } });

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    // Check if the payment has already been refunded
    if (payment.paymentStatus === 'refunded') {
      return res.status(400).json({ message: 'Payment has already been refunded' });
    }

    // Implement your refund logic here
    // For example, you might interact with a payment gateway or update the payment status

    // Simulate a refund by updating the payment status and transaction ID
    payment.paymentStatus = 'refunded';
    payment.transactionId = 'new_transaction_id';
    await payment.save();

    res.json({ message: 'Refund request initiated', ...payment.toJSON() });
  } catch (error) {
    console.error('Error refunding payment:', error);
    res.status(500).json({ error: 'Refund request failed' });
  }
};
