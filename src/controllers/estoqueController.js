const Produto = require('./models/produto');
const Estoque = require('./models/estoque');

// Criar um novo estoque com um produto associado
Estoque.create({
  nome: 'Nome do estoque',
  filial: 'Nome da filial',
  Produto: {
    nome: '10',
    descricao: 'Descricao do produto',
  },
}, {
  include: [Produto],
})
.then((estoque) => {
    console.log('Estoque criado:', estoque.toJSON());
    console.log('Produto associado:', estoque.Estoque.toJSON());
  })
  .catch((error) => {
    console.error('Erro ao criar o estoque:', error);
  });