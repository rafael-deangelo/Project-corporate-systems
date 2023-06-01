// 1 MOVIMENTO possui 1 PRODUTO e 1 MOVIMENTO possui 1 DEPÓSITO
// COMO FAZER ABAIXO, ELE VAI CRIAR AUTOMATICAMENTE
// https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554
// https://sequelize.org/docs/v6/core-concepts/assocs/
// PROXIMA AULA PROFESSOR VAI CONTINUAR

const Sequelize = require('sequelize');
const database = require('../db.js');
const Movimento = require('./movimento.js');
const detalheCompra = require('./detalhe_compra.js');

const Produto = database.define('produto', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: true,
    }
});

// produto e estoque tem quer ser feito associação 1 para 1
Produto.hasMany(Movimento);
Produto.hasMany(detalheCompra);


module.exports = Produto;