const Sequelize = require('sequelize');
const database = require('../db.js');

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

module.exports = Produto;