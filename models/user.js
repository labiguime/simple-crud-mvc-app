const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  gender: {
    type: Sequelize.STRING
  }
});

module.exports = User;
