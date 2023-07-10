const express = require('express')
const app = express()
const cors = require('cors')
const methodOverride = require
    ('method-override')


//Controllers
todoController = require('./controllers/todos')
budgetController = require('./controllers/budgets')
journalController = require('./controllers/journals')


//DB Connection
const mongoose = require('mongoose')
const URI = require("./uri")
mongoose.connect(URI)
.then(console.log('mongo connected at', URI))
const Test = require('./models/test')
const Todo = require('./models/todo')
const Budget = require('./models/budget')
const Journal = require('./models/journal')


//Configuration
const PORT = 8000
const acceptList = ["http://10.24.24.225:3000", "http://localhost:3000","https://boarddash.ttguitarnoob.cloud"]
const options = {
    origin: function(origin, callback){
        console.log('origin', origin)
        if (acceptList.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback( new Error ("Not allowed by Cors, bro"))
        }
    }
}


//Middleware
app.use(cors(options))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use('/todos', todoController)
app.use('/budgets', budgetController)
app.use('/journals', journalController)

//Home Route
app.get('/', (req, res) => {
    console.log("hitting home route")
    res.send("Hello from home route")
})



//StartServer
app.listen(PORT, () => console.log('App listening on port ', PORT))