const express = require('express');
const app = express();
const port = 3000;

const clienteController = require('./controllers/clienteController');
const estoqueController = require('./controllers/estoqueController');
const movimentoController = require('./controllers/movimentoController');
const produtoController = require('./controllers/produtoController');
const compraController = require('./controllers/compraController');
const tituloAPagarController = require('../controllers/tituloAPagarController');

require('dotenv').config();



(async () => {
    const database = require('./db.js');
    const Cliente = require('./models/cliente.js');
    const Estoque = require('./models/estoque.js');
    const Movimento = require('./models/movimento.js');
    const Produto = require('./models/produto.js');

    try{
        const res = await database.sync({alter:true});
        console.log(res);
    }
    catch(error){
        console.log(error)
    }
    
})();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Aplicativo online.')
}
);

app.post('/criaCliente', clienteController.criarCliente); 
app.get('/clientes', clienteController.buscarClientes); 
app.get('/clientes/:id', clienteController.buscarClientePorId); 
app.put('/clientes/:id', clienteController.atualizarCliente); 
app.delete('/clientes/:id', clienteController.excluirCliente); 

app.post('/criaEstoque', estoqueController.criarEstoque); 
app.get('/estoques', estoqueController.buscarEstoques); 
app.get('/estoques/:id', estoqueController.buscarEstoquePorId); 
app.put('/estoques/:id', estoqueController.atualizarEstoque); 
app.delete('/estoques/:id', estoqueController.excluirEstoque); 

app.post('/criaMovimento', movimentoController.criarMovimento); 
app.get('/movimentos', movimentoController.buscarMovimentos); 
app.get('/movimentos/:id', movimentoController.buscarMovimentoPorId); 
app.put('/movimentos/:id', movimentoController.atualizarMovimento); 
app.delete('/movimentos/:id', movimentoController.excluirMovimento); 

app.post('/criaProduto', produtoController.criarProduto); 
app.get('/produtos', produtoController.buscarProdutos); 
app.get('/produtos/:id', produtoController.buscarProdutoPorId); 
app.put('/produtos/:id', produtoController.atualizarProduto); 
app.delete('/produtos/:id', produtoController.excluirProduto); 

app.post('/comprar', compraController.criarCompra); 

app.put('/titulos/:id/pagar', tituloAPagarController.atualizarStatusEPagar);

app.listen(port, () => {
    console.log(`Servidor de pé na porta ${port}`)
});


