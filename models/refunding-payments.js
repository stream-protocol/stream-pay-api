const Payment = require('../models/Payment'); // Import the Payment model

// Refund Payment
exports.refundPayment = async (req, res) => {
  try {
    const { paymentId } = req.body;

    // Find the payment record by paymentId
    const payment = await Payment.findOne({ where: { paymentId } });

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    // Perform the refund logic here
    // For example, update the paymentStatus to 'refunded'
    payment.paymentStatus = 'refunded';
    await payment.save();

    res.json({ message: 'Refund request initiated', ...payment.toJSON() });
  } catch (error) {
    console.error('Error refunding payment:', error);
    res.status(500).json({ error: 'Refund failed' });
  }
};
