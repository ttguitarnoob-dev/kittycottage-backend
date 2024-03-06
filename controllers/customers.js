const express = require('express')
const Customer = require('../models/customer')
const router = express.Router()





//Index
router.get('/', async (req, res) => {
    // res.send("Hello from journal index route")
    try {
        const allCustomers = await Customer.find()
        console.log('hello from index route', allCustomers)
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
                    jobNotes: oneJob.jobNotes
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
        console.log('hitting create route for customers yayaya', req.body)
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


module.exports = router