const PaymentMethod = require('../models/payment-method.model');

// Retrieve Payment Method
exports.getPaymentMethod = async (req, res) => {
  try {
    const { customerId } = req.params;

    // Validate input data
    if (!customerId) {
      return res.status(400).json({ error: 'Missing customerId parameter' });
    }

    // Find the payment method for the customer in the database
    const paymentMethod = await PaymentMethod.findOne({ where: { customerId } });

    if (!paymentMethod) {
      return res.status(404).json({ message: 'Payment method not found for the customer' });
    }

    res.json({ message: 'Payment method retrieved successfully', ...paymentMethod.toJSON() });
  } catch (error) {
    console.error('Error retrieving payment method:', error);
    res.status(500).json({ error: 'Failed to retrieve payment method' });
  }
};
