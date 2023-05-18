const Cliente = require("../models/cliente.js");

exports.criarCliente = (req, res) => {
  const clienteData = req.body; // Obtenha os dados do cliente do corpo da requisição

  Cliente.create(clienteData)
    .then((cliente) => {
      console.log('Cliente criado:', cliente);
      res.status(200).json({ message: 'Cliente criado com sucesso', cliente });
    })
    .catch((error) => {
      console.error('Erro ao criar cliente:', error);
      res.status(500).json({ error: 'Erro ao criar cliente' });
    });
};

exports.buscarClientes = (req, res) => {
  Cliente.findAll()
    .then((clientes) => {
      console.log('Clientes encontrados:', clientes);
      res.status(200).json({ message: 'Clientes encontrados com sucesso', clientes });
    })
    .catch((error) => {
      console.error('Erro ao ler clientes:', error);
      res.status(500).json({ error: 'Erro ao ler clientes' });
    });
};

exports.buscarClientePorId = (req, res) => {
  const clienteId = req.params.id; // Obtenha o ID do cliente dos parâmetros da requisição

  Cliente.findByPk(clienteId)
    .then((cliente) => {
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      console.log('Cliente encontrado:', cliente);
      res.status(200).json({ message: 'Cliente encontrado com sucesso', cliente });
    })
    .catch((error) => {
      console.error('Erro ao buscar cliente:', error);
      res.status(500).json({ error: 'Erro ao buscar cliente' });
    });
};

exports.atualizarCliente = (req, res) => {
  const clienteId = req.params.id; // Obtenha o ID do cliente dos parâmetros da requisição
  const novoNome = req.body.nome; // Obtenha o novo nome do cliente do corpo da requisição

  Cliente.update({ nome: novoNome }, { where: { id: clienteId } })
    .then((result) => {
      if (result[0] === 0) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      console.log('Cliente atualizado:', result);
      res.status(200).json({ message: 'Cliente atualizado com sucesso', result });
    })
    .catch((error) => {
      console.error('Erro ao atualizar cliente:', error);
      res.status(500).json({ error: 'Erro ao atualizar cliente' });
    });
};

exports.excluirCliente = (req, res) => {
  const clienteId = req.params.id; // Obtenha o ID do cliente dos parâmetros da requisição

  Cliente.destroy({ where: { id: clienteId } })
    .then((result) => {
      if (result === 0) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      console.log('Cliente excluído:', result);
      res.status(200).json({ message: 'Cliente excluído com sucesso', result });
    })
    .catch((error) => {
      console.error('Erro ao excluir cliente:', error);
      res.status(500).json({ error: 'Erro ao excluir cliente' });
    });
};

