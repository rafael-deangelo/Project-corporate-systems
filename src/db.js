const Sequelize = require('sequelize');
const sequelize = new Sequelize('exemplo', 'rafael', 'rafael', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

// Testar a conexão
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar-se ao banco de dados:', err);
  });

module.exports = sequelize;
