//Importar o objeto do usuário do database que está conectado ao mongoose
const mongoose = require('../database');

//Definir os campos que terão dentro do banco de dados para um usuário
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        //Propriedade que faz com que só seja possivel ter uma cópia de email no banco de dados, evitando que usuários sejam criados com o mesmo email:
        unique: true,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
        //Para quando buscar o usuário no banco de dados a informação da senha não venha no array de usuários:
        select: false,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

//Definir o objeto do usuário para ser exportado
const User = mongoose.model('User', UserSchema);

module.exports = User;

 