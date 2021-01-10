//Importar o objeto do usuário do database que está conectado ao mongoose
const mongoose = require('../database');

//Importar a biblioteca pra encriptar a senha do usuário
const bcrypt = require('bcryptjs');

//Definir a estrutura do objeto de usuário, os campos que terão dentro dele e as suas configurações 
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
        //Para quando precisar buscar um ou mais usuários no banco de dados a informação da senha não venha junto:
        select: false,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

//Antes de salvar o usuário, executa a função de encriptar a senha
UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

//Definir o objeto do usuário para ser exportado
const User = mongoose.model('User', UserSchema);

module.exports = User;