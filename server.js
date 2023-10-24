const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/payment.routes'); 
const webhookRoutes = require('./routes/webhook.routes'); 

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Configure routes without the /routes prefix
app.use('/', paymentRoutes); 
app.use('/', webhookRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
