const Produto = require('./models/produto');
const Estoque = require('./models/estoque');

// RAFA Criar um novo produto com um estoque associado
Produto.create({
  nome: 'Nome do Produto',
  descricao: 'Descrição do Produto',
  Estoque: {
    quantidade: 10,
    nome: 'Nome do Estoque',
    filial: 'Filial do Estoque',
  },
}, {
  include: [Estoque],
})
  .then((produto) => {
    console.log('Produto criado:', produto.toJSON());
    console.log('Estoque associado:', produto.Estoque.toJSON());
  })
  .catch((error) => {
    console.error('Erro ao criar o produto:', error);
  });

// Buscar um produto existente e seu estoque associado
Produto.findOne({
  where: { id: 1 },
  include: [Estoque],
})
  .then((produto) => {
    console.log('Produto encontrado:', produto.toJSON());
    console.log('Estoque associado:', produto.Estoque.toJSON());
  })
  .catch((error) => {
    console.error('Erro ao buscar o produto:', error);
  });
