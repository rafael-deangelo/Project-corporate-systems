const express = require('express');
const app = express();
const port = 3000;
const auth = require ('./auth.js');
const Cliente = require('./models/cliente.js');
require('dotenv').config();



(async () => {
    const database = require('./db.js');
    const Cliente = require('./models/cliente.js');
	const Produto = require('./models/produto.js');
    const Deposito = require('./models/deposito.js');
    await database.sync({alter:true});

    await Produto.create(
            {
                id: 4,
                nome: 'Cadeira de balanço',
                descricao: 'Cadeira de balanço de madeira'
            }
        );
    
    await Cliente.create(
        {
                id: 4,
                cpf: '00750692960',
                nome: 'Luciane Kuritza',
                email: 'lskuritza@gmail.com'
            }
        );

    await Deposito.create(
            {
                id: 4,
                nome: 'DepoCuritiba',
                filial: 'Curitiba/PR'
            }
        );
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
    console.log(`Servido de pé na porta ${port}`)
});

