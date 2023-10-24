const Sequelize = require('sequelize');
const db = require('../config/database');

const UserSettings = db.define('user_settings', {
  settingId: {
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
  theme: {
    type: Sequelize.STRING,
    defaultValue: 'light',
  },
  language: {
    type: Sequelize.STRING,
    defaultValue: 'en',
  },
  // Add more settings as needed
});

// Define associations
UserSettings.belongsTo(User, { foreignKey: 'userId' });

// Synchronize the model with the database
UserSettings.sync();

module.exports = UserSettings;
