const express = require('express');

const productController = require('../Controller/productController');
const routes = express.Router();

routes.post('/', productController.store);
routes.get('/', productController.index);

module.exports = routes;