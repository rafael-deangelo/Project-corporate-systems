const Sequelize = require('sequelize');
const database = require('../db.js');
const Compra = require('./compra.js');
const Movimento = require('./movimento.js');
const Titulo = require('./titulo.js');

const AtoDeCompra = database.define('ato_de_compra', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

AtoDeCompra.belongsTo(Compra); // Um ato de compra pertence a uma compra
AtoDeCompra.belongsTo(Movimento); // Um ato de compra pertence a um movimento
AtoDeCompra.belongsTo(Titulo); // Um ato de compra pertence a um título

module.exports = AtoDeCompra;
