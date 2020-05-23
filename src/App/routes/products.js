const express = require('express');

const productController = require('../Controller/productController');
const routes = express.Router();

routes.post('/', productController.store);
routes.get('/', productController.index);
routes.get('/single', productController.Show)

module.exports = routes;