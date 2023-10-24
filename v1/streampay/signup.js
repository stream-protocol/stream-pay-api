const Sequelize = require('sequelize');
const db = require('../config/database');

const Signup = db.define('signup', {
  signupId: {
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
  registrationTimestamp: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  // Add more fields as needed for sign-up history
});

// Define associations
Signup.belongsTo(User, { foreignKey: 'userId' });

// Synchronize the model with the database
Signup.sync();

module.exports = Signup;
