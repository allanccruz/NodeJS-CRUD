const express = require('express');

const User = require('../models/User');

const router = express.Router();

//Definir uma rota de cadastro de usuário
router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }
});

//Repassa o router para o app com o prefixo '/auth'. Assim, a rota /auth/register vai chamar a função de registro que criada acima
module.exports = (app) => app.use('/auth', router);