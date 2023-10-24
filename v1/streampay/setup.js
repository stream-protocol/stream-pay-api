const Sequelize = require('sequelize');
const db = require('../config/database');

const Setup = db.define('setup', {
  setupId: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  setupName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Add more fields for setup details
});

// Synchronize the model with the database
Setup.sync();

module.exports = Setup;
