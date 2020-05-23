const express = require('express');

const productController = require('../controllers/productController')

const routes = express.Router();

routes.post('/', productController.store);

module.exports = routes;