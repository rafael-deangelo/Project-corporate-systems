const TituloAPagar = require('../models/tituloAPagar');
const Cliente = require('../models/cliente');

exports.atualizarStatusEPagar = (req, res) => {
  const tituloId = req.params.id; // ID do título a pagar a ser atualizado

  TituloAPagar.findByPk(tituloId, { include: [Cliente] })
    .then((titulo) => {
      if (titulo) {
        // Atualize o status do título para "pago"
        titulo.update({ statusPagamento: 'pago' })
          .then((updatedTitulo) => {
            // Retorne uma resposta de sucesso ou faça qualquer processamento adicional necessário
            res.status(200).json({ message: 'Status do título atualizado.' });
          })
          .catch((error) => {
            // Lida com erros na atualização do título
            console.error('Erro ao atualizar o status do título:', error);
            res.status(500).json({ error: 'Erro ao atualizar o status do título.' });
          });
      } else {
        // Lida com o caso em que o título não é encontrado
        res.status(404).json({ error: 'Título a pagar não encontrado.' });
      }
    })
    .catch((error) => {
      // Lida com erros na consulta do título
      console.error('Erro ao consultar o título a pagar:', error);
      res.status(500).json({ error: 'Erro ao consultar o título a pagar.' });
    });
};
