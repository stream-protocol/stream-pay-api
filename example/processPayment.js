async function processPayment(paymentData) {
  try {
    const { amount, cryptocurrency, merchantId, customerId } = paymentData;

    // Fetch the current fee rate for the selected cryptocurrency
    const feeRate = await getFeeRateForCryptocurrency(cryptocurrency);

    // Calculate the transaction fee
    const transactionFee = amount * feeRate;

    // Deduct the fee from the payment amount
    const totalAmount = amount - transactionFee;

    // Create and send the payment transaction for the selected cryptocurrency
    const transaction = createPaymentTransaction(merchantId, customerId, totalAmount, cryptocurrency);

    // Sign and send the transaction to the blockchain
    const signature = await sendPaymentTransaction(transaction);

    // Return success response with the transaction signature
    return { success: true, transactionSignature: signature };
  } catch (error) {
    console.error('Payment processing error:', error);
    return { success: false, error: 'Payment processing failed' };
  }
}
