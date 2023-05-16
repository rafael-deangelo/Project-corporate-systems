const Movimento = require('./models/movimento');
const Produto = require('./models/produto');
const Deposito = require('./models/deposito');

// Criar um novo movimento associado a um produto e a um depósito
Movimento.create({
  id: 1,
  data: new Date(),
  tipo: 'Entrada',
  quantidade: 5,
  precoUnitario: 10.99,
  produtoId: 1, // ID do produto associado
  depositoId: 1, // ID do depósito associado
})
  .then((movimento) => {
    console.log('Movimento criado:', movimento.toJSON());
    return Movimento.findByPk(movimento.id, {
      include: [Produto, Deposito],
    });
  })
  .then((movimentoCompleto) => {
    console.log('Movimento completo:', movimentoCompleto.toJSON());
  })
  .catch((error) => {
    console.error('Erro ao criar o movimento:', error);
  });
