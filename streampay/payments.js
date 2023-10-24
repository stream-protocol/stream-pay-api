// streampay/payments.js

const express = require('express');
const router = express.Router();
const { processPayment, findPaymentById, initiateRefund, listPayments } = require('../controllers/payments.controller');
const { validatePaymentData, validateRefundData } = require('../utils/validator');

/**
 * @swagger
 * /streampay/process-payment:
 *   post:
 *     summary: Process a payment
 *     description: Process a payment and return the payment details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentId:
 *                 type: string
 *               amount:
 *                 type: number
 *               currency:
 *                 type: string
 *               merchantWalletAddress:
 *                 type: string
 *               customerWalletAddress:
 *                 type: string
 *     responses:
 *       200:
 *         description: Payment processed successfully
 *       400:
 *         description: Invalid payment data
 */
router.post('/process-payment', validatePaymentData, (req, res) => {
  try {
    const payment = processPayment(req.body);
    res.json({
      message: 'Payment processed successfully',
      ...payment,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /streampay/payment/{paymentId}:
 *   get:
 *     summary: Retrieve a payment
 *     description: Retrieve the details of a specific payment.
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         description: Unique ID of the payment
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment details retrieved successfully
 *       404:
 *         description: Payment not found
 */
router.get('/payment/:paymentId', (req, res) => {
  try {
    const payment = findPaymentById(req.params.paymentId);
    res.json(payment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

/**
 * @swagger
 * /streampay/refund-payment:
 *   post:
 *     summary: Refund a payment
 *     description: Initiate a refund for a specific payment.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentId:
 *                 type: string
 *               customerSPLTokenWalletAddress:
 *                 type: string
 *     responses:
 *       200:
 *         description: Refund request initiated
 *       400:
 *         description: Invalid refund data or refund window has closed
 */
router.post('/refund-payment', validateRefundData, (req, res) => {
  try {
    const payment = initiateRefund(req.body.paymentId, req.body.customerSPLTokenWalletAddress);
    res.json({
      message: 'Refund request initiated',
      ...payment,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /streampay/payments:
 *   get:
 *     summary: List all payments
 *     description: Retrieve a list of all payments.
 *     responses:
 *       200:
 *         description: List of payments retrieved successfully
 */
router.get('/payments', (req, res) => {
  try {
    const payments = listPayments();
    res.json(payments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
