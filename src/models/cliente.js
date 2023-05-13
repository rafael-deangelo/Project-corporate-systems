const Sequelize = require('sequelize');
const database = require('../db.js');

const Cliente = database.define('cliente', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true,
    }
});

module.exports = Cliente;