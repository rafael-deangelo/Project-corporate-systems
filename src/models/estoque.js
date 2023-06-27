const Sequelize = require('sequelize');
const database = require('../db.js');
const Movimento = require('./movimento.js');

const Estoque = database.define('estoque', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    filial: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

Estoque.hasMany(Movimento, {
    foreignKey: 'estoqueId'
});

module.exports = Estoque;
