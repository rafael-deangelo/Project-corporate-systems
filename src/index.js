const express = require('express');
const app = express();
const port = 3000;
//const auth = require ('./auth.js');
const clienteController = require('./controllers/clienteController');
const estoqueController = require('./controllers/estoqueController');
const movimentoController = require('./controllers/movimentoController');
const produtoController = require('./controllers/produtoController');
const compraController = require('./controllers/compraController');

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

app.post('/criaCliente', clienteController.criarCliente); //ok
app.get('/clientes', clienteController.buscarClientes); //ok
app.get('/clientes/:id', clienteController.buscarClientePorId); //ok
app.put('/clientes/:id', clienteController.atualizarCliente); //ok
app.delete('/clientes/:id', clienteController.excluirCliente); //ok

app.post('/criaEstoque', estoqueController.criarEstoque); //ok
app.get('/estoques', estoqueController.buscarEstoques); //ok
app.get('/estoques/:id', estoqueController.buscarEstoquePorId); //ok
app.put('/estoques/:id', estoqueController.atualizarEstoque); //ok
app.delete('/estoques/:id', estoqueController.excluirEstoque); //ok

app.post('/criaMovimento', movimentoController.criarMovimento); //ok
app.get('/movimentos', movimentoController.buscarMovimentos); //ok
app.get('/movimentos/:id', movimentoController.buscarMovimentoPorId); //ok
app.put('/movimentos/:id', movimentoController.atualizarMovimento); //ok
app.delete('/movimentos/:id', movimentoController.excluirMovimento); //ok

app.post('/criaProduto', produtoController.criarProduto); //ok
app.get('/produtos', produtoController.buscarProdutos); //ok
app.get('/produtos/:id', produtoController.buscarProdutoPorId); //ok
app.put('/produtos/:id', produtoController.atualizarProduto); //ok
app.delete('/produtos/:id', produtoController.excluirProduto); //ok

app.post('/comprar', compraController.criarCompra); //ok

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
