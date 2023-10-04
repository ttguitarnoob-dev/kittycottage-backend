const express = require('express')
const Invoice = require('../models/invoice')
const router = express.Router()





//Index
router.get('/', async (req, res) => {
    // res.send("Hello from journal index route")
    try {
        const allInvoices = await Invoice.find()
        console.log('hello from index route', allInvoices)
        res.json(allInvoices)
    } catch (err) {
        res.send("index route error", err)
    }

})

//Show
router.get('/:id', async (req, res) => {
    try {
        const oneInvoice = await Invoice.findById(req.params.id)
        console.log('id?', req.params.id)
        res.json(oneInvoice)
    } catch (err) {
        console.log('something broke when fetching one', err)
    }
})


//Create Route
router.post('/', async (req, res) => {

    // res.send("Hello from journal post route")
    try {
        console.log('hitting create route yayaya', req.body)
        Invoice.create(req.body)
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
        const oneInvoice = await Invoice.findByIdAndDelete(req.params.id)
        console.log("you're useless", oneInvoice)
        res.json(oneInvoice)
       
        
    } catch (err) {
        console.log('somethign broke when deleting', err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await Invoice.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedItem)
    } catch (err) {
        res.status(400).json({
            message: "Something went horrendoulsy awry when fetching duck data"
        })
    }
    

})


module.exports = router