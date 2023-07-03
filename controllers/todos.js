const express = require('express')







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
    Test.create(req.body)
    res.json({
        status: 200,
        item: req.body,
        message: `Created successfully`
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