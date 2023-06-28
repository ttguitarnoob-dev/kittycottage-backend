const express = require('express')
const app = express()
const methodOverride = require
('method-override')
const mongoose = require('mongoose')

//Configuration
const PORT = 8000


//Middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}))

//Home Route
app.get('/', (req, res) => {
    console.log("hitting home route")
    res.send("Hello from home route")
})

//Index
app.get('/items', (req, res) => {
    console.log('items route')
    res.send("hello from the index route")
})

//StartServer
app.listen(PORT, () => console.log('App listening on port ', PORT))