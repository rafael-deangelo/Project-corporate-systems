const express = require('express');
const app = express();
const port = 3000;
//const auth = require ('./auth.js');
const clienteController = require('./controllers/clienteController');
const estoqueController = require('./controllers/estoqueController');
const movimentoController = require('./controllers/movimentoController');
const produtoController = require('./controllers/produtoController');
const atoDeCompraController = require('./controllers/atoDeCompraController');

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

app.post('/CriaEstoque', estoqueController.criarEstoque);
app.get('/estoques', estoqueController.buscarEstoques);
app.get('/estoques/:id', estoqueController.buscarEstoquePorId);
app.put('/estoque/:id', estoqueController.atualizarEstoque);
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

app.post('/atoDeCompra', atoDeCompraController.criarAtoDeCompra);

app.listen(port, () => {
    console.log(`Servidor de pé na porta ${port}`)
});



//podemos usar mais pra frente para autenticacao
// app.post('/login', (req,res) => {
//     const user = req.body;
//     auth.autentica(user);
//     res.send(user);
// });

// app.post('/user/save', auth.verificaToken, (req,res) => {
//     console.log('Autenticou')
//     res.send('ok');
// });
