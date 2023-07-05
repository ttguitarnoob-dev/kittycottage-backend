const express = require('express')
const Todo = require('../models/todo')
const router = express.Router()





//Index
router.get('/', async (req, res) => {
    try {
        const allTodos = await Todo.find()
        console.log('hello from index route', allTodos)
        res.json(allTodos)
    } catch(err) {
        res.send("index route error", err)
    }
    
})

//Show Route
router.get('/:id', (req, res) => {
    console.log('show route', req.body)
    res.send("hellow from show route")
})

//New Item
router.get('/items/new', (req, res) => {
    console.log('new item')
    res.send('Hello from new item route')
})

//Create Route
router.post('/', async (req, res) => {
    try {
        console.log('hitting create route yayaya', req.body)
        Todo.create(req.body)
        res.json({
            status: 200,
            item: req.body,
            message: `Created successfully`
        }) 
    } catch(err){
        res.send("Create route error", err)
    }
})

//Delete Route
router.delete('/:id', async (req, res) => {
    const oneTask = await Todo.findByIdAndDelete(req.params.id)
    console.log("die, task", oneTask)
    res.json(oneTask)
})

//Edit Route
router.put('/items/:id', (req, res) => {
    console.log('edit route')
    res.send('Hello from the edit route')
})

module.exports = router