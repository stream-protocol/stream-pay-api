# StreamPay API

StreamPay is a web3 payment gateway that integrates seamlessly with the Solana blockchain, allowing merchants to accept payments with ease and security. This document provides an overview of the StreamPay API and how to use it.

## Table of Contents

- [StreamPay API](#streampay-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [API Reference](#api-reference)
    - [StreamPay Payment Processing System](#streampay-payment-processing-system)
      - [Process Payment](#process-payment)
      - [Retrieve Payment Details](#retrieve-payment-details)
      - [List Payments](#list-payments)
      - [Refund Payment](#refund-payment)
      - [Webhook Configuration](#webhook-configuration)
  - [Examples](#examples)
  - [Support](#support)
  - [License](#license)

## Features

- Multi-payment method support (Solana, USDC, EURC, USDT, and Stream Token)
- Web3 integration for Solana blockchain-based payments
- Payment analytics
- Merchant portal based on Medusa admin UI
- Integration with Medusa, StreamPOS, and payment terminals
- Support for webhooks

## Getting Started

Before you can start using the StreamPay API, you need to obtain an API key. Please contact our support team to request an API key.

## API Reference

### StreamPay Payment Processing System

StreamPay offers a versatile payment processing system that allows merchants to accept payments securely and efficiently. Below are the available endpoints and their descriptions.

#### Process Payment

- **Endpoint**: `POST /streampay/process-payment`
- **Description**: Process a payment through StreamPay's system.
- **Parameters**:
  - `paymentId` (string): Unique ID of the payment.
  - `amount` (number): Amount to be paid.
  - `currency` (string): Currency of the payment (STRM, SOL, USDC, EURC, USDT).
  - `merchantWalletAddress` (string): Wallet address of the merchant.
  - `customerWalletAddress` (string): Wallet address of the customer.
- **Returns**: Confirmation of the processed payment.

#### Retrieve Payment Details

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

## Examples

Coming soon...

## Support

For any questions or support, please contact our support team at support@stream-pay.com.

## License

MIT License
