const express = require("express");

const User = require("../models/User");

module.exports = {
  //Definir uma rota de cadastro de usuário e criar um objeto de usuário toda vez que a rota for chamada
  async createUser(req, res) {
    const { email } = req.body;

    try {
      //Teste para conferir se o email digitado pelo novo usuário já não existe no banco de dados
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: "E-mail already registered" });
      }

      const user = await User.create(req.body);

      //Para não retornar a senha do usuário quando ele for criado:
      user.password = undefined;

      return res.send({ user });
    } catch (err) {
      return res.status(400).send({ error: "Registration failed" });
    }
  },

  //Retonar todos os usuários existentes no banco de dados
  async getAllUsers(req, res) {
    User.find({}, "users", function (error, users) {
      return res.json(users);
    });
  },

  //Retornar um usuário específico pelo seu e-mail usando a query userEmail
  async getUserEmail(req, res) {
    User.findOne(
      { email: req.query.userEmail },
      "users",
      function (error, user) {
        if (user) {
          return res.json(user);
        }
        return res.status(400).send({ error: "User not found" });
      }
    );
  },

  //Deletar um usuário específico usando a query userEmail
  async deleteUser(req, res) {
    await User.deleteOne({ email: req.query.userEmail }).then((userFound) => {
      if (userFound.n === 1) {
        return res.status(200).send("User deleted successfully");
      }
      return res.status(400).send({ error: "User not found" });
    });
  },
};
