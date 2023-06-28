const Sequelize = require('sequelize');
const database = require('../db.js');
const Estoque = require('./estoque.js');
const Movimento = require('./movimento.js');
const Compra = require('./compra.js');

const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

Produto.belongsTo(Estoque, { foreignKey: 'estoqueId' });
Produto.hasMany(Movimento, { foreignKey: 'produtoId' });    //// RAFAEL E KURITZA RESOLVER ESSA PARTE
Produto.hasMany(Compra, { foreignKey: 'produtoId' }); // Compra possui muitos Produtos através da tabela detalheCompra

module.exports = Produto;
