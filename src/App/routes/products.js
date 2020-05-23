const express = require('express');

const productController = require('../Controller/productController');
const routes = express.Router();

routes.post('/', productController.store);
routes.get('/', productController.index);
routes.get('/single', productController.Show);
routes.delete('/single', productController.remove);
routes.put('/single', productController.putProducts);

module.exports = routes;