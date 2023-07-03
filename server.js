const express = require('express')
const app = express()

const methodOverride = require
    ('method-override')


//Controller
todoController = require('./controllers/todos')


//DB Connection
const mongoose = require('mongoose')
const URI = require("./uri")
mongoose.connect(URI)
.then(console.log('mongo connected at', URI))
const Test = require('./models/test')
const Todo = require('./models/todo')


//Configuration
const PORT = 8000



//Middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use('/todos', todoController)

//Home Route
app.get('/', (req, res) => {
    console.log("hitting home route")
    res.send("Hello from home route")
})



//StartServer
app.listen(PORT, () => console.log('App listening on port ', PORT))