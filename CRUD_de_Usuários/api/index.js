//Definir quais pacotes a API vai importar
const express = require('express');
const bodyParser = require('body-parser');

//Criar o core da API
const app = express();

//Indicar as funções dos pacotes que serão utilizadas na API
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Referenciar as rotas na api
require('./controllers/userController.js')(app);

//Rodar a aplicação na porta setada
app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${3000}`)
  });