const express = require('express');
const router = express.Router();

// Import the webhook controller
const webhookController = require('../controllers/webhook.controller');

// Configure Webhooks
router.post('/webhooks', webhookController.configureWebhook);

module.exports = router;
