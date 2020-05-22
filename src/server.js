// dotenv config
require('dotenv').config()

// express module
const express = require('express')

// port config
const port = process.env.PORT || 8080

// app starting
const app = express()

// starting the server
app.listen(port, () => console.log(`Server running at ${port}`))