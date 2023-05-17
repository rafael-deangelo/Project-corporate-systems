const Sequelize = require('sequelize');
const database = require('../db.js');
const Movimento = require('./movimento.js');

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

// produto e estoque tem quer ser feito associação 1 para 1
Estoque.hasMany(Movimento);

module.exports = Estoque;