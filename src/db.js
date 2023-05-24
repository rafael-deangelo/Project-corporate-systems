const Sequelize = require('sequelize');
const sequelize = new Sequelize('exemplo', 'rafael', 'rafael', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
});

module.exports = sequelize;
