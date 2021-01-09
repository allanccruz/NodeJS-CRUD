const express = require('express');

const routes = express.Router();

const userController = require('../controllers/userController')

routes.post('/user/create', userController.createUser)

routes.get('/user/list', userController.getAllUsers)

module.exports = routes;