const solanaWeb3 = require('@solana/web3.js');
const Payment = require('../models/payment.model');

// Process Payment
exports.processPayment = async (req, res) => {
  try {
    const { paymentId, amount, currency, merchantWalletAddress, customerWalletAddress } = req.body;

    // Validate input data
    if (!paymentId || !amount || !currency || !merchantWalletAddress || !customerWalletAddress) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Construct a Solana payment transaction
    const transaction = new solanaWeb3.Transaction().add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey: merchantWalletAddress,
        toPubkey: customerWalletAddress,
        lamports: amount * 1000000, // Convert to lamports (Solana's smallest unit)
      })
    );

    // Sign and send the transaction
    const signature = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, []);

    // Create the payment record in the database
    const payment = await Payment.create({
      paymentId,
      amount,
      currency,
      merchantWalletAddress,
      customerWalletAddress,
      transactionSignature: signature,
    });

    res.json({ message: 'Payment processed successfully', payment });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
};
