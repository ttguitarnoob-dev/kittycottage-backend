const express = require('express')
const Budget = require('../models/budget')
const router = express.Router()

//Index
router.get('/', async (req, res) => {
    try {
        const allBudgets = await Budget.find()
        console.log('hello from index route', allBudgets)
        res.json(allBudgets)
    } catch(err) {
        res.send("index route error", err)
    }
    
})


//Create Route
router.post('/', async (req, res) => {
    try {
        console.log('hitting create route yayaya', req.body)
        Budget.create(req.body)
        res.json({
            status: 200,
            item: req.body,
            message: `Created successfully`
        }) 
    } catch(err){
        res.send("Create route error", err)
    }
})


//Update
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await Budget.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedItem)
    } catch (err) {
        res.status(400).json({
            message: "Something went horrendoulsy awry when fetching budget data"
        })
    }
    

})


module.exports = router