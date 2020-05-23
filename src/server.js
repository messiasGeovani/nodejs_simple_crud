// dotenv config
require('dotenv').config()

// mongoose config
const mongoose = require('mongoose')

// express module
const { App } = require('./App');

// port config
const port = process.env.PORT || 8080

// database connection config
mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {
    console.log('Database connected.')
})
.catch((err) => {
    console.log(`Database connection error: ${err}`)
})

// starting the server
App.listen(port, () => console.log(`Server running at ${port}`))