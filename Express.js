const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs'); // Install yamljs via npm

const app = express();
const port = process.env.PORT || 3000;

// Serve Swagger UI
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Your API routes go here...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
