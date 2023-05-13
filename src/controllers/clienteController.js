// AQUI SÓ PRECI    SA CHAMAR PORQUE O SEQUELIZE JÁ CRIA OS CRUDS AUTOMATICAMENTE
const Cliente = require("./models/cliente.js");

Cliente.create({
  id: 1,
  cpf: "123456789",
  nome: "AlunosPositivo",
  email: "aluno@positivo.com",
})
  .then((cliente) => {
    console.log("Cliente criado:", cliente);
  })
  .catch((error) => {
    console.error("Erro ao criar cliente:", error);
  });

Cliente.findAll()
  .then((clientes) => {
    console.log("Clientes encontrados:", clientes);
  })
  .catch((error) => {
    console.error("Erro ao ler clientes:", error);
  });

Cliente.findByPk(1)
  .then((cliente) => {
    console.log("Cliente encontrado:", cliente);
  })
  .catch((error) => {
    console.error("Erro ao buscar cliente:", error);
  });

Cliente.update({ nome: "Novo nome" }, { where: { id: 1 } })
  .then((result) => {
    console.log("Cliente atualizado:", result);
  })
  .catch((error) => {
    console.error("Erro ao atualizar cliente:", error);
  });

Cliente.destroy({ where: { id: 1 } })
  .then((result) => {
    console.log("Cliente excluído:", result);
  })
  .catch((error) => {
    console.error("Erro ao excluir cliente:", error);
  });

// // Se fosse chamado em um controller sem a necessidade do sequelize seria:

// const express = require("express");
// const router = express.Router();
// const Cliente = require("../models/cliente");

// // Criar um novo cliente
// router.post("/clientes", (req, res) => {
//   const { id, cpf, nome, email } = req.body;

//   Cliente.create({ id, cpf, nome, email })
//     .then((cliente) => {
//       res.json(cliente);
//     })
//     .catch((error) => {
//       res.status(500).json({ error: "Erro ao criar cliente" });
//     });
// });

// // Ler todos os clientes
// router.get("/clientes", (req, res) => {
//   Cliente.findAll()
//     .then((clientes) => {
//       res.json(clientes);
//     })
//     .catch((error) => {
//       res.status(500).json({ error: "Erro ao ler clientes" });
//     });
// });

// // Atualizar um cliente existente
// router.put("/clientes/:id", (req, res) => {
//   const clienteId = req.params.id;
//   const { nome } = req.body;

//   Cliente.update({ nome }, { where: { id: clienteId } })
//     .then((result) => {
//       if (result[0] === 0) {
//         res.status(404).json({ error: "Cliente não encontrado" });
//       } else {
//         res.json({ message: "Cliente atualizado com sucesso" });
//       }
//     })
//     .catch((error) => {
//       res.status(500).json({ error: "Erro ao atualizar cliente" });
//     });
// });

// // Excluir um cliente existente
// router.delete("/clientes/:id", (req, res) => {
//   const clienteId = req.params.id;

//   Cliente.destroy({ where: { id: clienteId } })
//     .then((result) => {
//       if (result === 0) {
//         res.status(404).json({ error: "Cliente não encontrado" });
//       } else {
//         res.json({ message: "Cliente excluído com sucesso" });
//       }
//     })
//     .catch((error) => {
//       res.status(500).json({ error: "Erro ao excluir cliente" });
//     });
// });

// module.exports = router;
