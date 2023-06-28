const Sequelize = require("sequelize");
const database = require("../db.js");

const Compra = database.define("compra", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  sequencial: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  nf_entrada: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Compra;
