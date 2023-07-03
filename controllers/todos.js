const express = require('express')
const Todo = require('../models/todo')
const router = express.Router()





//Index
router.get('/', (req, res) => {
    console.log('items route')
    res.send("hello from the index route")
})

//Show Route
router.get('/items/:id', (req, res) => {
    console.log('show route')
    res.send("hellow from show route")
})

//New Item
router.get('/items/new', (req, res) => {
    console.log('new item')
    res.send('Hello from new item route')
})

//Create Route
router.post('/', (req, res) => {
    console.log('hitting create route yayaya', req.body)
    Todo.create(req.body)
    res.json({
        status: 200,
        item: req.body,
        message: `Created successfully`
    })
})

//Delete Route
router.delete('/items/:id', (req, res) => {
    console.log('delete route')
    res.send('hello from delete route')
})

//Edit Route
router.put('/items/:id', (req, res) => {
    console.log('edit route')
    res.send('Hello from the edit route')
})

module.exports = router