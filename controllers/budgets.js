const express = require('express')
const Budget = require('../models/budget')
const router = express.Router()

//Index
router.get('/', async (req, res) => {
    try {
        let parsedBudget = []
        const allBudgets = await Budget.find()
        allBudgets.map((oneBudget) =>{
            console.log("OMG", oneBudget.month, oneBudget.unpaid, oneBudget._id)
            parsedBudget.push(
                {
                    key: oneBudget._id,
                    month: oneBudget.month,
                    unpaid: oneBudget.unpaid
                }
            )
        })
        // console.log('hello from index route', allBudgets)
        console.log("apaprps", parsedBudget)
        res.json(parsedBudget)
    } catch(err) {
        res.send("index route error", err)
    }
    
})


//Create Route
router.post('/', async (req, res) => {
    try {
        console.log('hitting create route yayaya', req.body.month)
        let data = {
            month: req.body.month,
            unpaid: 0,
            bills: [
                {
                    billName: "Rent",
                    howMuch: 1600,
                    dueDate: `${req.body.month} 1`,
                    paidDate: null,
                    paid: false
                },
                {
                    billName: "Car",
                    howMuch: 422,
                    dueDate: `${req.body.month} 4`,
                    paidDate: null,
                    paid: false
                }
            ]
        }

        function calculateUnpaid(){
            let total = 0
            data.bills.map((item) => {
                total += item.howMuch
            })
            return total
        }

        data.unpaid = calculateUnpaid()

        console.log("data created!", data)
        Budget.create(data)
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