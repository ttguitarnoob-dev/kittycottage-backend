const express = require('express')
const app = express()
const methodOverride = require
    ('method-override')

//DB Connection
const mongoose = require('mongoose')
const URI = "mongodb+srv://travisthompsondev:0mHoTOGqKkuskXvy@todo.aznwlke.mongodb.net/test"
mongoose.connect(URI)
.then(console.log('mongo connected'))
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

//Index
app.get('/items', (req, res) => {
    console.log('items route')
    res.send("hello from the index route")
})

//New Item
app.get('/items/new', (req, res) => {
    console.log('new item')
    res.send('Hello from new item route')
})

//Create Route
app.post('/items', (req, res) => {
    console.log('create items')
    Test.create(req.body)
    res.json({
        status: 200,
        message: "created thing"
    })
})

//Delete Route
app.delete('/items/:id', (req, res) => {
    console.log('delete route')
    res.send('hello from delete route')
})

//Edit Route
app.put('/items/:id', (req, res) => {
    console.log('edit route')
    res.send('Hello from the edit route')
})

//StartServer
app.listen(PORT, () => console.log('App listening on port ', PORT))