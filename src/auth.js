const jwt = require('jsonwebtoken')
require('dotenv')


 async function autentica(user){
    if(user.name == 'admin' && user.password == 'admin'){
        id = 123
        const token = jwt.sign({id}, 
                    process.env.SECRET, 
                    {expiresIn: 300}
                );
        user.id = id;
        user.auth = true;
        user.token = token;
    }
    else{
        user.id = '';
        user.auth = false;
        user.token = '';
    }
    return user;
}

async function verificaToken(req, res, next){
    const token = req.headers['x-access-token'];
    if(!token)
        return res.status(401).json({
            auth: false,
            message: 'Token não informado'
        });
        jwt.verify(token, process.env.SECRET, (err) =>{
            if(err){
                return res.status(401).json({
                    auth: false,
                    message: 'Autenticação do token falhou'
                });
            }
            next();
        }); 
}
module.exports={
    autentica, 
    verificaToken
}