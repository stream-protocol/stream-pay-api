// app.js

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'StreamPay API',
      version: '1.0.0',
      description: 'A simple payment processing API',
      contact: {
        name: 'StreamPay Support',
        email: 'support@streampay.com',
      },
      servers: ['http://localhost:3000'],
    },
  },
  apis: ['app.js', './routes/*.js'], // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
