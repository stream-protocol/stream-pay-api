module.exports = {
  // Server configuration
  PORT: process.env.PORT || 3000,

  // Database configuration
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://localhost/streampay',

  // StreamPay API settings
  STREAMPAY_API_KEY: process.env.STREAMPAY_API_KEY || 'your-api-key',

  // Solana network configuration
  SOLANA_RPC_ENDPOINT: process.env.SOLANA_RPC_ENDPOINT || 'https://api.testnet.solana.com',
  
  // Alchemy "Solana" network configuration
  ALCHEMY_RPC_ENDPOINT: process.env.ALCHEMY_RPC_ENDPOINT || 'https://solana-mainnet.g.alchemy.com/v2/e_k2llhrt6iS-TxTwKFyfru1iDgeH1eF',
  
  // Other configuration options
  // ...
};
