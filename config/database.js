const Sequelize = require('sequelize');

// Replace the following with your database connection details
const databaseName = 'your_database_name';
const username = 'your_database_username';
const password = 'your_database_password';
const host = 'localhost'; // Change to your database host
const dialect = 'postgres'; // Change to your database dialect (e.g., 'mysql', 'sqlite', 'mssql', etc.)

// Create a Sequelize instance
const sequelize = new Sequelize(databaseName, username, password, {
  host,
  dialect,
  logging: false, // Set to true to enable SQL query logging (useful for debugging)
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
