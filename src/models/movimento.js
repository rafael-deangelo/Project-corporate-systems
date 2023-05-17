// COMO FAZER ABAIXO, ELE VAI CRIAR AUTOMATICAMENTE
// https://medium.com/@eth3rnit3/sequelize-relationships-ultimate-guide-f26801a75554
// https://sequelize.org/docs/v6/core-concepts/assocs/


const Sequelize = require('sequelize');
const database = require('../db.js');

const Movimento = database.define('movimento', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    data:{
        type: Sequelize.DATE,
        allowNull: false
    },
    tipo:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }, 
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    precoUnitario: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
        
});

// 1 MOVIMENTO possui 1 PRODUTO e 1 MOVIMENTO possui 1 ESTOQUE


module.exports = Movimento;