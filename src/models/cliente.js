const Sequelize = require('sequelize');
const database = require('../db.js');
const Compra = require('./compra.js');

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

Cliente.hasMany(Compra); // Compra pertence a um Cliente

module.exports = Cliente;