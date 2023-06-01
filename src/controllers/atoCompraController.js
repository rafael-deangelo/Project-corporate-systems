const AtoDeCompra = require('../models/atoDeCompra');

exports.criarAtoDeCompra = (req, res) => {
    const atoDeCompraData = req.body; 
  
    AtoDeCompra.create(atoDeCompraData)
      .then((atoDeCompra) => {
        console.log('Ato de Compra criado:', atoDeCompra);
        res.status(200).json({ message: 'Ato de Compra criado com sucesso', atoDeCompra });
      })
      .catch((error) => {
        console.error('Erro ao criar Ato de Compra:', error);
        res.status(500).json({ error: 'Erro ao criar Ato de Compra' });
      });
  };
  

//   {
//     "data": "2023-05-20",
//     "compra": {
//       "sequencial": 1,
//       "data": "2023-05-20",
//       "nome_comprador": "Nome do Comprador",
//       "nf_entrada": "NF123456"
//     },
//     "movimento": {
//       "tipo": "Entrada",
//       "quantidade": 10,
//       "precoUnitario": 10.99
//     },
//     "titulo": {
//       "sequencial": 1,
//       "valor": 109.9,
//       "dataVencimento": "2023-06-20"
//     }
//   }
  