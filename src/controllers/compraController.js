const Compra = require('../models/compra');
const { TituloAPagar } = require('../models/tituloApagar');

exports.criarCompra = (req, res) => {
  const CompraData = req.body;

  Compra.create(CompraData)
    .then((novaCompra) => {
      console.log('Ato de Compra criado:', novaCompra);

      TituloAPagar.create({
        id: novaCompra.id,
        valor: 100.0, 
        dataVencimento: new Date(), 
        statusPagamento: 'Pendente', 
      })
        .then((novoTituloAPagar) => {
          console.log('Título a Pagar criado:', novoTituloAPagar);
          res.status(200).json({ message: 'Ato de Compra e Título a Pagar criados com sucesso', Compra: novaCompra, TituloAPagar: novoTituloAPagar });
        })
        .catch((error) => {
          console.error('Erro ao criar Título a Pagar:', error);
          res.status(500).json({ error: 'Erro ao criar Título a Pagar' });
        });
    })
    .catch((error) => {
      console.error('Erro ao criar Ato de Compra:', error);
      res.status(500).json({ error: 'Erro ao criar Ato de Compra' });
    });
};