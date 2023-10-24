const Payment = require('../models/payment.model');

// Cancel Payment
exports.cancelPayment = async (req, res) => {
  try {
    const { paymentId } = req.params;

    // Validate input data
    if (!paymentId) {
      return res.status(400).json({ error: 'Missing paymentId parameter' });
    }

    // Find the payment in the database
    const payment = await Payment.findOne({ where: { paymentId } });

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    // Check if the payment can be canceled (e.g., if it's not already canceled or processed)
    if (payment.paymentStatus === 'canceled') {
      return res.status(400).json({ message: 'Payment has already been canceled' });
    }

    // Implement your cancelation logic here
    // For example, you might update the payment status to 'canceled'

    // Update the payment status to 'canceled'
    payment.paymentStatus = 'canceled';
    await payment.save();

    res.json({ message: 'Payment canceled successfully', ...payment.toJSON() });
  } catch (error) {
    console.error('Error canceling payment:', error);
    res.status(500).json({ error: 'Failed to cancel payment' });
  }
};
