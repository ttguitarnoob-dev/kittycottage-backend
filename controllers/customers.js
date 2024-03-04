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
        const oneCustomer = await Customer.findById(req.params.id)
        console.log('id?', req.params.id)
        res.json(oneCustomer)
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

const dataaa = {
    _id: '65dfcc46040aa356279db4ec',
    name: 'Jimbob Thornton',
    email: 'jimbob@coolman.net',
    phone: '495-394-3943',
    customerNotes: 'I am cool man',
    jobs: [
      {
        services: [Array],
        totalPrice: 50,
        location: 'dfdf',
        date: '2024-03-19',
        jobNotes: 'sdsd'
      }
    ],
    created_at: '2024-02-29T00:13:58.551Z',
    updated_at: '2024-02-29T00:13:58.551Z',
    __v: 0
  }

//Update
router.put('/:id', async (req, res) => {
    console.log("This is the customer put route", req.params.id)
    const updatedItem = await Customer.findByIdAndUpdate(req.params.id, req.body, { new :true})
    res.json(updatedItem)
})


module.exports = router