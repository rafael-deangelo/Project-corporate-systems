const Sequelize = require('sequelize');
const database = require('../db.js');
const detalheCompra = require('./detalhe_compra.js');

const Compra = database.define('compra', {
    sequencial:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    data:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    nome_comprador:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nf_entrada:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// produto e estoque tem quer ser feito associação 1 para 1

Compra.hasMany(detalheCompra);
module.exports = Compra;