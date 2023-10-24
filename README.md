# StreamPay API Documentation

StreamPay is a web3 payment gateway that integrates with the Solana blockchain. This API allows you to process payments, retrieve payment details, manage webhooks, and more.

## Table of Contents

- [StreamPay API Documentation](#streampay-api-documentation)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Processing Payments](#processing-payments)
    - [Retrieving Payment Details](#retrieving-payment-details)
    - [Webhook Configuration](#webhook-configuration)
    - [Listing Payments](#listing-payments)
    - [Refunding Payments](#refunding-payments)
  - [Configuration](#configuration)
  - [Contributing](#contributing)
  - [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- A Solana blockchain network or RPC URL configured.

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/stream-protocol/streampay-api.git
   cd streampay-api
   ```

2. Install the dependencies:

   ```shell
   npm install
   ```

3. Configure your Solana network and API settings (see [Configuration](#configuration)).

4. Start the server:

   ```shell
   npm start
   ```

## Usage

### Processing Payments

To process a payment, make a `POST` request to `/process-payment` with the payment details in the request body.

```http
POST /process-payment
Content-Type: application/json

{
  "paymentId": "unique_payment_id",
  "amount": 100,
  "currency": "USD",
  "merchantWalletAddress": "merchant_wallet_address",
  "customerWalletAddress": "customer_wallet_address"
}
```

### Retrieving Payment Details

To retrieve payment details, make a `GET` request to `/payment/{paymentId}` where `{paymentId}` is the unique ID of the payment.

```http
GET /payment/{paymentId}
```

### Webhook Configuration

To configure webhooks for receiving real-time payment notifications, make a `POST` request to `/webhooks`.

```http
POST /webhooks
Content-Type: application/json

{
  "url": "https://yourwebhookurl.com",
  "events": ["payment_success", "payment_failure"]
}
```

### Listing Payments

To list payments with optional filtering based on merchant ID, start date, and end date, make a `GET` request to `/payments`.

```http
GET /payments?merchantId=your_merchant_id&startDate=2023-01-01&endDate=2023-12-31
```

### Refunding Payments

To initiate a refund for a previously processed payment, make a `POST` request to `/refund-payment` with the payment ID in the request body.

```http
POST /refund-payment
Content-Type: application/json

{
  "paymentId": "payment_to_refund_id"
}
```

## Configuration

Configure your Solana network and API settings in the `config.js` file.

```javascript
module.exports = {
  solanaRpcUrl: 'https://api.mainnet.solana.com', // Replace with your Solana network URL
  alchemyRpcUrl: 'https://solana-mainnet.g.alchemy.com/v2/e_k2llhrt6iS-TxTwKFyfru1iDgeH1eF', // Replace with your Alchemy RPC URL
  // Other configuration settings
};
```

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md) to contribute to this project.

## License

© 2023 Stream Protocol / Stream Payments Ltd.
