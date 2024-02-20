const express = require('express')
const Budget = require('../models/budget')
const router = express.Router()

//Index
router.get('/', async (req, res) => {
    try {
        let parsedBudget = []
        const allBudgets = await Budget.find()
        allBudgets.map((oneBudget) =>{
            parsedBudget.push(
                {
                    key: oneBudget._id,
                    month: oneBudget.month,
                    unpaid: oneBudget.unpaid
                }
            )
        })
        console.log("hello from budget index route")
        res.json(parsedBudget)
    } catch(err) {
        res.send("index route error", err)
    }
    
})

//Show
router.get('/:id', async (req, res) => {
    try {
        let expenses = []
        let incomes = []
        const oneBudget = await Budget.findById(req.params.id)

        //Parsing expenses data so that frontend can put it in the stupid magic table
        oneBudget.bills.map((oneBill, index) => {
            let isPaid = "Not Paid"
            if (oneBill.paid){
                isPaid = "Paid"
            }
            expenses.push(
                {
                    _id: oneBill._id,
                    billName: oneBill.billName,
                    howMuch: oneBill.howMuch,
                    dueDate: oneBill.dueDate.toLocaleDateString(),
                    paid: isPaid
                }
            )
        })

        //Parsing the incomes data in the same way for the stupid magic table
        oneBudget.incomes.map((oneIncome) => {
            incomes.push(
                {
                    key: oneIncome._id,
                    source: oneIncome.source,
                    amount: oneIncome.amount
                }
            )
        })

        console.log('hello from budget show route', oneBudget)
        
        // res.json({allData: oneBudget, expenses: expenses, incomes: incomes})
        res.json({month: oneBudget.month, expenses: expenses})

    } catch (err) {
        console.log('something broke when fetching one', err)
    }
})


//Create Route
router.post('/', async (req, res) => {
    try {
        console.log('hitting create route yayaya', req.body.month)
        const currentYear = new Date().getFullYear()
        const selectedMonth = req.body.month
        
        let data = {
            month: `${req.body.month} ${currentYear}`,
            unpaid: 0,
            bills: [
                {
                    billName: "Rent",
                    howMuch: 1600,
                    dueDate: new Date(`${selectedMonth} 1, ${currentYear}`),
                    paidDate: null,
                    paid: false
                },
                {
                    billName: "Car",
                    howMuch: 422,
                    dueDate: new Date(`${selectedMonth} 4, ${currentYear}`),
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