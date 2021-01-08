const express = require('express');

const User = require('../models/User');

const router = express.Router();

//Definir uma rota de cadastro de usuário e criar um objeto de usuário toda vez que a rota for chamada
router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        //Teste para conferir se o email digitado pelo novo usuário já não existe no banco de dados
        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'E-mail already registered' });
        }

        
        const user = await User.create(req.body);

        //Para não retornar a senha do usuário quando ele for criado:
        user.password = undefined;

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

//Repassa o router para o app com o prefixo '/user'. Assim, a rota /user/register vai chamar a função de registro criada acima
module.exports = (app) => app.use('/user', router);

router.get('/', async (req, res) => {

})