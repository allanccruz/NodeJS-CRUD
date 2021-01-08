//Definir o pacote que o Node utiliza pra se conectar com o MongoDB 
const mongoose = require('mongoose');

//Fazer a conexão com o banco de dados
mongoose.connect('mongodb://localhost/noderest', 
{useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;