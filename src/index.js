const express = require('express');
const app = express();
const port = 3000;
//const auth = require ('./auth.js');
const clienteController = require('./controllers/clienteController');
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
