const express = require('express')
const Budget = require('../models/budget')
const router = express.Router()



//Index
router.get('/', async (req, res) => {
    try {
        let parsedBudget = []
        const allBudgets = await Budget.find()
        allBudgets.map((oneBudget) => {
            parsedBudget.push(
                {
                    key: oneBudget._id,
                    month: oneBudget.month,
                    unpaid: oneBudget.unpaid
                }
            )
        })
        console.log("hello from budget index route")
        res.json(parsedBudget.reverse())
    } catch (err) {
        res.send("index route error", err)
    }

})

//Show
router.get('/:id', async (req, res) => {
    try {
        let expenses = []
        let incomes = []
        let totalIncome = 0
        const oneBudget = await Budget.findById(req.params.id)

        //Parsing expenses data so that frontend can put it in the stupid magic table
        oneBudget.bills.map((oneBill, index) => {
            let isPaid = "Not Paid"
            if (oneBill.paid) {
                isPaid = "Paid"
            }
            expenses.push(
                {
                    _id: index,
                    billName: oneBill.billName,
                    howMuch: oneBill.howMuch,
                    dueDate: oneBill.dueDate.toLocaleDateString(),
                    paid: isPaid
                }
            )
        })

        //Parsing the incomes data in the same way for the stupid magic table
        oneBudget.incomes.map((oneIncome) => {
            totalIncome += oneIncome.amount
            incomes.push(
                {
                    _id: oneIncome._id,
                    source: oneIncome.source,
                    amount: oneIncome.amount
                }
            )
        })

        console.log('hello from budget show route', oneBudget)

        res.json({ allData: oneBudget, expenses: expenses, incomes: incomes, totalIncome: totalIncome })
        //res.json({month: oneBudget.month, expenses: expenses})


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
            incomes: [],
            tithe: 0,
            bills: [
                {
                    billName: "Rent",
                    howMuch: 1150,
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
                },
                // {
                //     billName: "Internet",
                //     howMuch: 84.99,
                //     dueDate: new Date(`${selectedMonth} 11, ${currentYear}`),
                //     paidDate: null,
                //     paid: false
                // },
                // {
                //     billName: "Trash",
                //     howMuch: 36.50,
                //     dueDate: new Date(`${selectedMonth} 2, ${currentYear}`),
                //     paidDate: null,
                //     paid: false
                // },
                // {
                //     billName: "Insurance",
                //     howMuch: 22.91,
                //     dueDate: new Date(`${selectedMonth} 11, ${currentYear}`),
                //     paidDate: null,
                //     paid: false
                // },
            ]
        }

        function calculateUnpaid() {
            let total = 0
            data.bills.map((item) => {
                total += item.howMuch
            })
            return parseFloat(total).toFixed(3)
        }

        data.unpaid = calculateUnpaid()

        console.log("data created!", data)
        Budget.create(data)
        res.json({
            status: 200,
            item: req.body,
            message: `Created successfully`
        })
    } catch (err) {
        res.send("Create route error", err)
    }
})

//Add income
router.put('/new-income/:id', async (req, res) => {
    console.log("hello from the new income route this is my body", req.body)
    try {
        const item = await Budget.findById(req.params.id)

        //determine tithe

        let totalIncome = 0
        item.incomes.map((oneItem) => {
            totalIncome += oneItem.amount
        })
        const tithe = 0.1 * (req.body.amount + totalIncome)
        item.tithe = parseInt(tithe)
        item.incomes.push(req.body)
        const updatedItem = await Budget.findByIdAndUpdate(req.params.id, item, { new: true })



        res.json(updatedItem)
    } catch (err) {
        console.log('omg how do I fix this from the add income route', err)
    }
})

//New Expense
router.put('/new-expense/:id', async (req, res) => {

    function calculateUnpaid(data) {
        let total = 0
        data.bills.map((item) => {
            if (!item.paid) {
                total += item.howMuch
            }

        })
        return parseFloat(total).toFixed(3)
    }

    try {
        console.log('add expense route')
        const item = await Budget.findById(req.params.id)
        item.bills.push(req.body)

        const nonPaid = calculateUnpaid(item)
        item.unpaid = nonPaid


        const updatedItem = await Budget.findByIdAndUpdate(req.params.id, item, { new: true })
        res.json(item)
    } catch (err) {
        console.log('update budget route encountered a fatal decapitationlike error', err)
    }
})


//Update Unpaid
router.put('/update-unpaid/:id', async (req, res) => {
    try {
        const allData = req.body
        function calculateUnpaid(data) {
            console.log('thedata', data)
            // let total = req.body.howMuch
            let total = 0
            data.bills.map((item) => {
                if (!item.paid) {
                    total += item.howMuch
                }

            })
            return parseInt(total)
        }

        const nonPaid = calculateUnpaid(allData)
        allData.unpaid = nonPaid
        const updatedItem = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log("hello ffrom update unpaid route")
        res.json({
            status: 200,
            item: updatedItem,
            message: `Updated Unpaid Successfully`
        })
    } catch (err) {
        res.status(400).json({
            message: "Something went horrendoulsy awry when fetching budget data"
        })
    }
})

//Edit Expense
router.put('/edit-expense/:id', async (req, res) => {
    try {
        const allData = req.body
        console.log('this is the data before', allData)
        function calculateUnpaid(data) {
            console.log('thedata', data)
            // let total = req.body.howMuch
            let total = 0
            data.bills.map((item) => {
                if (!item.paid) {
                    total += item.howMuch
                }

            })
            return parseInt(total)
        }

        const nonPaid = calculateUnpaid(allData)
        allData.unpaid = nonPaid
        console.log('this is the data now', allData)
        const updatedItem = await Budget.findByIdAndUpdate(req.params.id, allData, { new :true})
        res.json(updatedItem)
    } catch(err) {
        console.log('you really should think twice before editing expenses', err)
    }
})


module.exports = router
