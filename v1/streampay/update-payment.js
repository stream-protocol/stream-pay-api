const Payment = require('../models/payment.model');

// Update Payment Details
exports.updatePayment = async (req, res) => {
  try {
    const { paymentId } = req.params;
    const { amount, currency, merchantWalletAddress, customerWalletAddress } = req.body;

    // Validate input data
    if (!paymentId) {
      return res.status(400).json({ error: 'Missing paymentId parameter' });
    }

    // Find the payment in the database
    const payment = await Payment.findOne({ where: { paymentId } });

    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    // Check if the payment has already been processed
    if (payment.paymentStatus === 'success') {
      return res.status(400).json({ message: 'Payment has already been processed and cannot be updated' });
    }

    // Update payment details
    payment.amount = amount || payment.amount;
    payment.currency = currency || payment.currency;
    payment.merchantWalletAddress = merchantWalletAddress || payment.merchantWalletAddress;
    payment.customerWalletAddress = customerWalletAddress || payment.customerWalletAddress;

    // Save the updated payment record
    await payment.save();

    res.json({ message: 'Payment details updated successfully', ...payment.toJSON() });
  } catch (error) {
    console.error('Error updating payment details:', error);
    res.status(500).json({ error: 'Failed to update payment details' });
  }
};
