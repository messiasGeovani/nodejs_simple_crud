const express = require('express');

const routes = express.Router();

routes.get('/', async (req, res) => {
    return res.send("Hello World");
    
});

module.exports = routes;