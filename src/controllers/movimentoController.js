const Movimento = require('../models/movimento');
const Produto = require('../models/produto');
const Deposito = require('../models/estoque');


exports.criarMovimento = (req, res) => {
  const { id, data, tipo, quantidade, precoUnitario, produtoId, estoqueId } = req.body;

  Movimento.create({
    id,
    data,
    tipo,
    quantidade,
    precoUnitario,
    produtoId,
    estoqueId,
  })
    .then((movimento) => {
      console.log('Movimento criado:', movimento.toJSON());
      return Movimento.findByPk(movimento.id, {
        include: [Produto, Deposito],
      });
    })
    .then((movimentoCompleto) => {
      console.log('Movimento completo:', movimentoCompleto.toJSON());
      res.status(200).json({ movimentoCompleto });
    })
    .catch((error) => {
      console.error('Erro ao criar o movimento:', error);
      res.status(500).json({ error: 'Erro ao criar o movimento' });
    });
};

exports.buscarMovimentos = (req, res) => {
  Movimento.findAll()
    .then((movimentos) => {
      console.log('Movimentos encontrados:', movimentos);
      res.status(200).json({ movimentos });
    })
    .catch((error) => {
      console.error('Erro ao listar movimentos:', error);
      res.status(500).json({ error: 'Erro ao listar movimentos' });
    });
};

exports.buscarMovimentoPorId = (req, res) => {
  const movimentoId = req.params.id;

  Movimento.findByPk(movimentoId)
    .then((movimento) => {
      if (!movimento) {
        return res.status(404).json({ error: 'Movimento não encontrado' });
      }

      console.log('Movimento encontrado:', movimento);
      res.status(200).json({ movimento });
    })
    .catch((error) => {
      console.error('Erro ao buscar movimento:', error);
      res.status(500).json({ error: 'Erro ao buscar movimento' });
    });
};

exports.atualizarMovimento = (req, res) => {
  const movimentoId = req.params.id; // Obtenha o ID do movimento dos parâmetros da requisição
  const { data, tipo, quantidade, precoUnitario, produtoId, depositoId } = req.body;

  Movimento.findByPk(movimentoId)
    .then((movimento) => {
      if (!movimento) {
        return res.status(404).json({ error: 'Movimento não encontrado' });
      }

      return movimento.update({
        data,
        tipo,
        quantidade,
        precoUnitario,
        produtoId,
        estoqueId,
      });
    })
    .then((movimentoAtualizado) => {
      console.log('Movimento atualizado:', movimentoAtualizado);
      res.status(200).json({ movimentoAtualizado });
    })
    .catch((error) => {
      console.error('Erro ao atualizar movimento:', error);
      res.status(500).json({ error: 'Erro ao atualizar movimento' });
    });
};

exports.excluirMovimento = (req, res) => {
  const movimentoId = req.params.id; // Obtenha o ID do movimento dos parâmetros da requisição

  Movimento.findByPk(movimentoId)
    .then((movimento) => {
      if (!movimento) {
        return res.status(404).json({ error: 'Movimento não encontrado' });
      }

      return movimento.destroy();
    })
    .then(() => {
      console.log('Movimento excluído com sucesso');
      res.status(204).end();
    })
    .catch((error) => {
      console.error('Erro ao excluir movimento:', error);
      res.status(500).json({ error: 'Erro ao excluir movimento' });
    });
};

// EXEMPLO DE JSON{
//   "data": "2023-05-18T10:30:00Z",
//   "tipo": "Entrada",
//   "quantidade": 5,
//   "precoUnitario": 10.99,
//   "produtoId": 1,
//   "depositoId": 1
// }