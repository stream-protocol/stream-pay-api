const express = require('express');
const router = express.Router();

// Import the payment controller
const paymentController = require('../controllers/payment.controller');

// Process Payment
router.post('/process-payment', paymentController.processPayment);

// Retrieve Payment Details
router.get('/payment/:paymentId', paymentController.getPaymentDetails);

// List Payments
router.get('/payments', paymentController.listPayments);

// Refund Payment
router.post('/refund-payment', paymentController.refundPayment);

// Webhook Configuration
router.post('/webhooks', paymentController.configureWebhook);

module.exports = router;
