Certainly, here's an updated README.md for your StreamPay API project, including the new "Process Payment" endpoint:

```markdown
# StreamPay API

StreamPay is a web3 payment gateway that seamlessly integrates with the Solana blockchain, enabling merchants to accept payments securely and efficiently. This API documentation provides an overview of the StreamPay API and its features.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Process Payment](#process-payment)
  - [Retrieve Payment Details](#retrieve-payment-details)
  - [List Payments](#list-payments)
  - [Refund Payment](#refund-payment)
  - [Webhook Configuration](#webhook-configuration)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/your-username/streampay-api.git
   ```

2. Navigate to the project directory:

   ```shell
   cd streampay-api
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

### Configuration

Before using the StreamPay API, you need to configure it with the appropriate settings, including Solana network endpoints and API keys.

1. Create a `.env` file in the project root:

   ```shell
   touch .env
   ```

2. Add the following configuration values to the `.env` file:

   ```dotenv
   # Solana RPC endpoint (e.g., testnet, mainnet, or devnet)
   SOLANA_RPC_URL=<Solana_RPC_URL>

   # Alchemy RPC endpoint (optional)
   ALCHEMY_RPC_URL=<Alchemy_RPC_URL>
   ```

3. Save the `.env` file.

## Usage

### Process Payment

To initiate a payment through the StreamPay API, use the `POST /streampay/process-payment` endpoint. Provide the required parameters in the request body, including `paymentId`, `amount`, `currency`, `merchantWalletAddress`, and `customerWalletAddress`.

Example Request:

```http
POST /streampay/process-payment
Content-Type: application/json

{
  "paymentId": "123456789",
  "amount": 100.00,
  "currency": "STRM",
  "merchantWalletAddress": "merchant_wallet_address",
  "customerWalletAddress": "customer_wallet_address"
}
```

Example Response:

```json
{
  "message": "Payment processed successfully",
  "paymentId": "123456789",
  "amount": 100.00,
  "currency": "STRM",
  "merchantWalletAddress": "merchant_wallet_address",
  "customerWalletAddress": "customer_wallet_address",
  "transactionSignature": "transaction_signature"
}
```

For detailed API reference, see the [API Reference](#api-reference) section below.

### Retrieve Payment Details

- **Endpoint**: `GET /streampay/payment/:paymentId`
- **Description**: Retrieve details of a specific payment.
- **Parameters**:
  - `paymentId` (string): Unique ID of the payment.
- **Returns**: Payment details including payment status, transaction ID, and more.

#### List Payments

- **Endpoint**: `GET /streampay/payments`
- **Description**: Retrieve a list of recent payments processed through StreamPay.
- **Parameters**:
  - `merchantId` (string): ID of the merchant to filter payments.
  - `startDate` (string, optional): Start date for filtering payments (format: YYYY-MM-DD).
  - `endDate` (string, optional): End date for filtering payments (format: YYYY-MM-DD).
- **Returns**: A list of payment records, including payment amount, currency, and timestamp.

#### Refund Payment

- **Endpoint**: `POST /streampay/refund-payment`
- **Description**: Initiate a refund for a previously processed payment.
- **Parameters**:
  - `paymentId` (string): Unique ID of the payment to be refunded.
- **Returns**: Confirmation of the refund request.

#### Webhook Configuration

- **Endpoint**: `POST /streampay/webhooks`
- **Description**: Configure webhooks for receiving real-time payment notifications.
- **Parameters**:
  - `url` (string): The URL where webhook notifications will be sent.
  - `events` (array of strings): List of payment events to trigger webhooks (e.g., "payment_success," "payment_failure").
- **Returns**: Webhook configuration details, including a unique webhook ID.

Please refer to the respective endpoints for more detailed documentation on how to use them effectively. StreamPay is committed to providing a seamless payment processing experience for your business.

## API Reference

For detailed information about API endpoints, request and response formats, and more, refer to the [API Reference](api-reference.md) documentation.


## Test: Access Swagger UI

Open a web browser and navigate to <http://localhost:3000/api-docs> (or the URL where server is running). You should see StreamPay API documentation generated using Swagger UI.

````
curl -X POST -H "Content-Type: application/json" -d '{
  "paymentId": "123456",
  "amount": 10,
  "currency": "USDC",
  "merchantWalletAddress": "your_merchant_wallet_address",
  "customerWalletAddress": "6sXT9zFDFgJMmXPHMiZM8maSx6KFosVbLkC4Ho9GezHz"
}' <http://localhost:3000/streampay/process-payment>
````

## Contributing

Contributions to this project are welcome! To contribute, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

[MIT License](LICENSE).
