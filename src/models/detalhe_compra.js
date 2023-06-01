const Sequelize = require('sequelize');
const database = require('../db.js');

const detalheCompra = database.define('detalhe_compra', {
    sequencialDetalheCompra:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    fornecedor:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    precoUnitario:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

// produto e estoque tem quer ser feito associação 1 para 1


module.exports = detalheCompra;