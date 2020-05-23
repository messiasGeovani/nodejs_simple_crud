// dotenv config
require('dotenv').config()

// express module
const { App } = require('./App');

// port config
const port = process.env.PORT || 8080


// starting the server
App.listen(port, () => console.log(`Server running at ${port}`))