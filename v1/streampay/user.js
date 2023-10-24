const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  userId: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Ensure that the email is in a valid format
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Add more fields as needed for user data (e.g., firstName, lastName, etc.)
});

// Synchronize the model with the database
User.sync();

module.exports = User;
