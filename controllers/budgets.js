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





module.exports = router