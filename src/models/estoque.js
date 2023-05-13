const Sequelize = require('sequelize');
const database = require('../db.js');

const Estoque = database.define('estoque', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    filial:{
        type: Sequelize.STRING,
        allowNull: true,
    }
});

module.exports = Estoque;