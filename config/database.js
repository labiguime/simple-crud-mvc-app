const Sequelize = require('sequelize');

module.exports =  new Sequelize('asn4db', 'root', 'admin', {
  host: '34.68.51.2',
  dialect: 'mysql',
  operatorsAliases: false
});
