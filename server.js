const express = require('express')
const app = express()
const methodOverride = require
    ('method-override')



//DB Connection
const mongoose = require('mongoose')
const URI = require("./uri")
mongoose.connect(URI)
.then(console.log('mongo connected at', URI))
const Test = require('./models/test')


//Configuration
const PORT = 8000


//Middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

//Home Route
app.get('/', (req, res) => {
    console.log("hitting home route")
    res.send("Hello from home route")
})



//StartServer
app.listen(PORT, () => console.log('App listening on port ', PORT))