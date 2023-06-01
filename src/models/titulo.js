const Sequelize = require('sequelize');
const database = require('../db.js');
const Compra = require('./compra.js');

const Titulo = database.define('titulo', {
  sequencial: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  dataVencimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Titulo.belongsTo(Compra); // Um título pertence a uma compra

module.exports = Titulo;
