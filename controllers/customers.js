const express = require('express')
const Customer = require('../models/customer')
const Invoice = require('../models/invoice')
const router = express.Router()





//Index
router.get('/', async (req, res) => {
    // res.send("Hello from journal index route")
    try {
        const allCustomers = await Customer.find()
        console.log('hello from customer index route')
        res.json(allCustomers)
    } catch (err) {
        res.send("index route error", err)
    }

})

//Show
router.get('/:id', async (req, res) => {
    try {
        const jobs = []
        const oneCustomer = await Customer.findById(req.params.id)
        oneCustomer.jobs.map((oneJob, index) => {
            
            jobs.push(
                {
                    key: index,
                    location: oneJob.location,
                    date: oneJob.date,
                    services: oneJob.services,
                    totalPrice: oneJob.totalPrice,
                    jobNotes: oneJob.jobNotes,
                    paid: oneJob.paid
                }
            )
        })
        // console.log("hopefully has key", jobs)
        res.json({oneCustomer: oneCustomer, jobs: jobs})
    } catch (err) {
        console.log('something broke when fetching one', err)
    }
})


//Create Route
router.post('/', async (req, res) => {

    
    try {
        console.log('hitting create route for customers yayaya')
        Customer.create(req.body)
        res.json({
            status: 200,
            item: req.body,
            message: `Created successfully`
        })
    } catch (err) {
        res.status(err).send("bad things")
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    try {
        console.log('hello from delete route', req.params.id)
        const oneCustomer = await Customer.findByIdAndDelete(req.params.id)
        console.log("you're useless", oneCustomer)
        res.json(oneCustomer)
       
        
    } catch (err) {
        console.log('somethign broke when deleting', err)
    }
})



//Update
router.put('/:id', async (req, res) => {
    console.log("This is the customer put route", req.params.id)
    const updatedItem = await Customer.findByIdAndUpdate(req.params.id, req.body, { new :true})
    res.json(updatedItem)
})


//Add invoice ID

router.put('/invoice-id/:id', async (req, res) => {
    const clientData = await Customer.findById(req.params.id)
    clientData.jobs[req.body.jobIndex]['invoiceID'] = req.body.invoiceID
    console.log('adding invoice id')
    const updateCustomer = await Customer.findByIdAndUpdate(req.params.id, clientData, { new :true})
    res.json(updateCustomer)
})

//Update Paid
router.put('/update-paid/:id', async (req, res) => {
    let customerData = await Customer.findById(req.params.id)
    const invoiceID = customerData.jobs[req.body.jobIndex].invoiceID
    let invoiceData = await Invoice.findById(invoiceID)
    if (customerData.jobs[req.body.jobIndex].paid) {
        console.log('setting paid to false')
        customerData.jobs[req.body.jobIndex].paid = false
        invoiceData.paid = false
    } else {
        console.log('setting paid to true')
        customerData.jobs[req.body.jobIndex].paid = true
        invoiceData.paid = true
    }
    console.log('invoice paid?', invoiceData.paid)
    const updateCustomer = await Customer.findByIdAndUpdate(req.params.id, customerData, { new :true})
    const updateInvoice = await Invoice.findByIdAndUpdate(invoiceID, invoiceData, { new :true})
    console.log('both invoices should be updated')
    res.json({customer: updateCustomer, invoice: updateInvoice})
})



module.exports = router