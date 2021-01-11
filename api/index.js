//Definir quais pacotes a API vai importar
const express = require('express');
const bodyParser = require('body-parser');

//Pegar todas as rotas da API
const routes = require('./routes');

//Criar o core da API
const app = express();

//Configurar express para utilizar requisições e respostas apenas em JSON (por padrão o express espera em html)
app.use(express.json())

//Configurar o express para usar as rotas criadas
app.use(routes);

//Indicar as funções dos pacotes que serão utilizadas na API
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Rodar a aplicação na porta setada
app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${3000}`)
  });