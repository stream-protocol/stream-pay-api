const express = require('express');
const solanaWeb3 = require('@solana/web3.js');

const app = express();
app.use(express.json());

// Configuration for different Solana networks
const NETWORKS = {
  mainnet: 'https://api.mainnet.solana.com',
  testnet: 'https://api.testnet.solana.com',
  devnet: 'http://localhost:8899', // Replace with your devnet RPC URL
};

// You can add more configurations for different networks as needed

// Configuration for Alchemy RPC
const ALCHEMY_RPC_URL = 'https://solana-mainnet.g.alchemy.com/v2/e_k2llhrt6iS-TxTwKFyfru1iDgeH1eF';

// You can add more RPC URLs for different providers like Alchemy

// Select the desired Solana network
const selectedNetwork = 'testnet'; // Change this to 'mainnet', 'testnet', or 'devnet' as needed

const SOLANA_RPC_URL = NETWORKS[selectedNetwork];

const connection = new solanaWeb3.Connection(SOLANA_RPC_URL);

// Define an endpoint to initiate Solana-based payments
app.post('/streampay/process-payment', async (req, res) => {
  try {
    const { paymentId, amount, currency, merchantWalletAddress, customerWalletAddress } = req.body;

    // Construct a Solana payment transaction here
    // For example:
    const transaction = new solanaWeb3.Transaction().add(
      solanaWeb3.SystemProgram.transfer({
        fromPubkey: merchantWalletAddress,
        toPubkey: customerWalletAddress,
        lamports: amount * 1000000, // Convert to lamports (Solana's smallest unit)
      })
    );

    // Sign and send the transaction
    const signature = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, []);

    // Handle payment confirmation and response to the client
    const paymentConfirmation = {
      message: 'Payment processed successfully',
      paymentId,
      amount,
      currency,
      merchantWalletAddress,
      customerWalletAddress,
      transactionSignature: signature,
    };

    res.json(paymentConfirmation);
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} with ${selectedNetwork} network`);
});
