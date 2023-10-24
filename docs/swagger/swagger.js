// docs/swagger/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'StreamPay API',
      version: '1.0.0',
      description: 'API for processing payments',
      contact: {
        name: 'StreamPay Support',
        email: 'support@streampayments.org',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/**/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
