const Payment = require('../models/payment.model');

// Process Payment
exports.processPayment = async (req, res) => {
  try {
    const { paymentId, amount, currency, merchantWalletAddress, customerWalletAddress } = req.body;

    // Validate input data
    if (!paymentId || !amount || !currency || !merchantWalletAddress || !customerWalletAddress) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Simulate processing payment
    const payment = {
      paymentId,
      amount,
      currency,
      merchantWalletAddress,
      customerWalletAddress,
      paymentStatus: 'success',
      transactionId: 'transaction_id',
      timestamp: new Date().toISOString(),
    };

    // Create the payment record in the database
    const createdPayment = await Payment.create(payment);

    res.json({
      message: 'Payment processed successfully',
      ...createdPayment.toJSON(),
    });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
};
