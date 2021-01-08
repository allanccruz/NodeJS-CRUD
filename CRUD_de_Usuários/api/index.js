//Definir quais pacotes a API vai importar
const express = require('express');
const bodyParser = require('body-parser');

//Criar o core da API
const app = express();

//Indicar as funções dos pacotes que serão utilizadas na API
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Referenciar o controle de autenticação na api
require('.controllers/authController')(app);

app.listen(3000);