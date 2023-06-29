const Produto = require('../models/produto');
const Estoque = require('../models/estoque');

exports.criarProduto = async (req, res) => {
  try {
    const { id, nome, descricao, estoqueId } = req.body;

    const novoProduto = await Produto.create({
      id,
      nome,
      descricao,
      estoqueId
    });

    const estoque = await Estoque.findByPk(estoqueId);
    if (!estoque) {
      throw new Error('Estoque não encontrado');
    }

    await novoProduto.setEstoque(estoque);

    console.log('Produto criado:', novoProduto.toJSON());

    res.status(201).json(novoProduto);
  } catch (error) {
    console.error('Erro ao criar o produto:', error);
    res.status(500).json({ error: 'Erro ao criar o produto' });
  }
};




exports.buscarProdutos = (req, res) => {
  Produto.findAll()
    .then((produtos) => {
      console.log("Produtos encontrados:", produtos);
      res.status(200).json({ produtos });
    })
    .catch((error) => {
      console.error("Erro ao buscar produtos:", error);
      res.status(500).json({ error: "Erro ao buscar produtos" });
    });
};

exports.buscarProdutoPorId = (req, res) => {
  const produtoId = req.params.id;

  Produto.findByPk(produtoId)
    .then((produto) => {
      if (!produto) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }

      console.log("Produto encontrado:", produto.toJSON());
      res.status(200).json({ produto });
    })
    .catch((error) => {
      console.error("Erro ao buscar produto:", error);
      res.status(500).json({ error: "Erro ao buscar produto" });
    });
};

exports.atualizarProduto = (req, res) => {
  const produtoId = req.params.id; // Obtenha o ID do produto dos parâmetros da requisição
  const { nome, descricao } = req.body; // Obtenha os dados atualizados do corpo da requisição

  Produto.findByPk(produtoId)
    .then((produto) => {
      if (!produto) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }

      return produto.update({
        nome: nome || produto.nome,
        descricao: descricao || produto.filial,
      });
    })
    .then((produtoAtualizado) => {
      console.log("Produto atualizado:", produtoAtualizado.toJSON());
      res
        .status(200)
        .json({
          message: "Produto atualizado com sucesso",
          produto: produtoAtualizado,
        });
    })
    .catch((error) => {
      console.error("Erro ao atualizar produto:", error);
      res.status(500).json({ error: "Erro ao atualizar produto" });
    });
};

exports.excluirProduto = (req, res) => {
  const produtoId = req.params.id; // Obtenha o ID do produto dos parâmetros da requisição

  Produto.destroy({ where: { id: produtoId } })
    .then((result) => {
      if (result === 0) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }

      console.log("Produto excluído:", result);
      res.status(200).json({ message: "Produto excluído com sucesso" });
    })
    .catch((error) => {
      console.error("Erro ao excluir produto:", error);
      res.status(500).json({ error: "Erro ao excluir produto" });
    });
};




