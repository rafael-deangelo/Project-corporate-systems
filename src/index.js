const express = require('express');
const app = express();
const port = 3000;
const auth = require ('./auth.js');
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

app.post('/login', (req,res) => {
    const user = req.body;
    auth.autentica(user);
    res.send(user);
});

app.post('/user/save', auth.verificaToken, (req,res) => {
    console.log('Autenticou')
    res.send('ok');
});


app.listen(port, () => {
    console.log(`Servidor de pé na porta ${port}`)
});

