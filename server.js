const express = require('express')
const app = express()
const cors = require('cors')
const methodOverride = require
    ('method-override')


//Controllers
todoController = require('./controllers/todos')
budgetController = require('./controllers/budgets')
journalController = require('./controllers/journals')
countdownController = require('./controllers/countdowns')
quizController = require('./controllers/quizzes')
kizziJournalController = require('./controllers/kizzijournals')
invoiceController = require('./controllers/invoices')
rentController = require('./controllers/rents')
majesticController = require('./controllers/majestics')
priceController = require('./controllers/prices')
customerController = require('./controllers/customers')



//DB Connection
const mongoose = require('mongoose')
const URI = require("./uri")
mongoose.connect(URI)
.then(console.log('mongo connected at', URI))


//Configuration
const PORT = 8000
const acceptList = ["http://10.24.24.225:3000", "http://10.24.24.236:3000", "http://localhost:3000","https://boarddash.ttguitarnoob.cloud", "https://majestic-monuments.ttguitarnoob.cloud", "https://hazelnet.ttguitarnoob.cloud", "https://invoice.ttguitarnoob.cloud", "https://rent.ttguitarnoob.cloud", "https://majesticmonuments.org"]
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

app.use(express.json())

app.use('/todos', todoController)
app.use('/budgets', budgetController)
app.use('/journals', journalController)
app.use('/countdowns', countdownController)
app.use('/quizzes', quizController)
app.use('/kizzi-journals', kizziJournalController)
app.use('/invoices', invoiceController)
app.use('/rents', rentController)
app.use('/majestics', majesticController)
app.use('/prices', priceController)
app.use('/customers', customerController)
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))

//Home Route
app.get('/', (req, res) => {
    console.log("hitting home route")
    res.send("Hello from home route")
})



//StartServer
app.listen(PORT, () => console.log('App listening on port ', PORT))