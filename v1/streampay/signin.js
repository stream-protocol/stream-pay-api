const Sequelize = require('sequelize');
const db = require('../config/database');

const Signin = db.define('signin', {
  signinId: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: 'users',
      key: 'userId',
    },
  },
  loginTimestamp: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  // Add more fields as needed for sign-in history
});

// Define associations
Signin.belongsTo(User, { foreignKey: 'userId' });

// Synchronize the model with the database
Signin.sync();

module.exports = Signin;
