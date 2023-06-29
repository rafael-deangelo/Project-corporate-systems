const Sequelize = require("sequelize");
const database = require("../db.js");
const Compra = require('./compra.js');
const Cliente = require('./cliente.js');

const TituloAPagar = database.define("titulo_a_pagar", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  dataVencimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  statusPagamento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

TituloAPagar.belongsTo(Compra, {foreignKey: 'compraId'});
TituloAPagar.belongsTo(Cliente);

module.exports = TituloAPagar;
