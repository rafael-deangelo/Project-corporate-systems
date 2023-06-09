const Estoque = require('../models/estoque');

exports.criarEstoque = (req, res) => {
  const { id, nome, filial } = req.body;

  Estoque.create({
    id: id,
    nome: nome,
    filial: filial
  })
    .then((estoque) => {
      console.log('Estoque criado:', estoque.toJSON());
      res.status(200).json({ message: 'Estoque criado com sucesso', estoque });
    })
    .catch((error) => {
      console.error('Erro ao criar o estoque:', error);
      res.status(500).json({ error: 'Erro ao criar o estoque' });
    });
};

exports.buscarEstoques = (req, res) => {
  Estoque.findAll()
    .then((estoques) => {
      console.log('Estoques encontrados:', estoques);
      res.status(200).json({ estoques });
    })
    .catch((error) => {
      console.error('Erro ao buscar estoques:', error);
      res.status(500).json({ error: 'Erro ao buscar estoques' });
    });
};

exports.buscarEstoquePorId = (req, res) => {
  const estoqueId = req.params.id;

  Estoque.findByPk(estoqueId)
    .then((estoque) => {
      if (!estoque) {
        return res.status(404).json({ error: 'Estoque não encontrado' });
      }

      console.log('Estoque encontrado:', estoque.toJSON());
      res.status(200).json({ estoque });
    })
    .catch((error) => {
      console.error('Erro ao buscar estoque:', error);
      res.status(500).json({ error: 'Erro ao buscar estoque' });
    });
};

exports.atualizarEstoque = (req, res) => {
  const estoqueId = req.params.id; // Obtenha o ID do estoque dos parâmetros da requisição
  const { id, nome, filial } = req.body; // Obtenha os dados atualizados do corpo da requisição

  Estoque.findByPk(estoqueId)
    .then((estoque) => {
      if (!estoque) {
        return res.status(404).json({ error: 'Estoque não encontrado' });
      }

      estoque.id = id || estoque.id;
      estoque.nome = nome || estoque.nome;
      estoque.filial = filial || estoque.filial;

      return estoque.save();
    })
    .then((estoqueAtualizado) => {
      console.log('Estoque atualizado:', estoqueAtualizado.toJSON());
      res.status(200).json({ message: 'Estoque atualizado com sucesso', estoque: estoqueAtualizado });
    })
    .catch((error) => {
      console.error('Erro ao atualizar estoque:', error);
      res.status(500).json({ error: 'Erro ao atualizar estoque' });
    });
};


exports.excluirEstoque = (req, res) => {
  const estoqueId = req.params.id; // Obtenha o ID do estoque dos parâmetros da requisição

  Estoque.destroy({ where: { id: estoqueId } })
    .then((result) => {
      if (result === 0) {
        return res.status(404).json({ error: 'Estoque não encontrado' });
      }

      console.log('Estoque excluído:', result);
      res.status(200).json({ message: 'Estoque excluído com sucesso' });
    })
    .catch((error) => {
      console.error('Erro ao excluir estoque:', error);
      res.status(500).json({ error: 'Erro ao excluir estoque' });
    });
};
