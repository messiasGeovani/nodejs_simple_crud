const express = require('express');

const postProducts = require('../Controller/productController');
const routes = express.Router();

routes.post('/', postProducts.store);

module.exports = routes;