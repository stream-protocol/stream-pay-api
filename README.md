# StreamPay API

StreamPay is a web3 payment gateway that integrates seamlessly with the Solana blockchain, allowing merchants to accept payments with ease and security. This document provides an overview of the StreamPay API and how to use it.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
  - [StreamPay Payment Processing System](#streampay-payment-processing-system)
  - [Checkout Payments](#checkout-payments)
  - [Payment Streams](#payment-streams)
  - [Solana Blockchain Integration](#solana-blockchain-integration)
  - [Additional Features and Improvements](#additional-features-and-improvements)
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

#### Process Payment

- Endpoint: `POST /stream-pay/process-payment`
- Description: Process a payment through StreamPay's system.
- Parameters:
  - `paymentId`: Unique ID of the payment.
  - `amount`: Amount to be paid.
  - `currency`: Currency of the payment (STRM, SOL, USDC, EURC, USDT).
  - `merchantWalletAddress`: Wallet address of the merchant.
  - `customerWalletAddress`: Wallet address of the customer.
- Returns: Confirmation of the processed payment.

#### Collect Fees

- Endpoint: `POST /stream-pay/collect-fees`
- Description: Collect fees for a processed payment.
- Parameters:
  - `paymentId`: Unique ID of the payment.
  - `feeAmount`: Amount of fees to be collected.
- Returns: Confirmation of the collected fees.

### Checkout Payments

#### Initiate Checkout

- Endpoint: `POST /checkout/initiate`
- Description: Initiate a checkout process.
- Parameters:
  - `customerId`: ID of the customer.
  - `cartItems`: List of items in the customer's cart.
- Returns: Checkout details including a unique ID.

#### Complete Checkout

- Endpoint: `POST /checkout/:checkoutId/complete`
- Description: Complete the checkout process.
- Parameters:
  - `checkoutId`: Unique ID of the checkout.
- Returns: Confirmation of the completed checkout.

### Payment Streams

#### Create Payment Stream

- Endpoint: `POST /payment-streams`
- Description: Create a new payment stream.
- Parameters:
  - `customerId`: ID of the customer.
  - `merchantId`: ID of the merchant.
  - `amount`: Amount to be paid in each stream.
  - `frequency`: Frequency of the payment stream.
- Returns: Payment stream details including a unique ID.

#### Update Payment Stream

- Endpoint: `PATCH /payment-streams/:streamId`
- Description: Update a payment stream.
- Parameters:
  - `streamId`: Unique ID of the payment stream.
  - `amount`: New amount to be paid in each stream (optional).
  - `frequency`: New frequency of the payment stream (optional).
- Returns: Updated payment stream details.

#### Cancel Payment Stream

- Endpoint: `POST /payment-streams/:streamId/cancel`
- Description: Cancel a payment stream.
- Parameters:
  - `streamId`: Unique ID of the payment stream.
- Returns: Confirmation of the canceled payment stream.

### Solana Blockchain Integration

#### Transfer Wallet Address

- Endpoint: `POST /solana/transfer-wallet-address`
- Description: Transfer assets between wallet addresses on Solana.
- Parameters:
  - `fromWalletAddress`: Source wallet address.
  - `toWalletAddress`: Destination wallet address.
  - `amount`: Amount of assets to be transferred.
  - `token`: Token to be transferred (e.g., SOL, STRM).
- Returns: Confirmation of the transferred assets.

#### Program ID

- Description: Unique identifier for StreamPay's smart contract on Solana.
- Value: `Your_Solana_Program_ID`

### Additional Features and Improvements

- Support for multiple currencies (SPL Token Standard)
- Support for Solana SPL2022 Standard
- StreamID - Decentralized Identity Verification
- Dynamic Pricing
- Third-party API support (MedusaJS, Circle)

## Examples

Coming soon...

## Support

For any questions or support, please contact our support team at support@stream-pay.com.

## License

MIT License
