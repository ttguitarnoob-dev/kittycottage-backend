const express = require('express')
const Journal = require('../models/journal')
const router = express.Router()





//Index
router.get('/', async (req, res) => {
    // res.send("Hello from journal index route")
    try {
        const allJournals = await Journal.find()
        console.log('hello from index route', allJournals)
        res.json(allJournals)
    } catch (err) {
        res.send("index route error", err)
    }

})

//Show
router.get('/:id', async (req, res) => {
    try {
        const oneJournal = await Journal.findById(req.params.id)
        console.log('id?', req.params.id)
        res.json(oneJournal)
    } catch (err) {
        console.log('something broke when fetching one', err)
    }
})




//Create Route
router.post('/', async (req, res) => {

    // res.send("Hello from journal post route")
    try {
        console.log('hitting create route yayaya', req.body)
        Journal.create(req.body)
        res.json({
            status: 200,
            item: data,
            message: `Created successfully`
        })
    } catch (err) {
        res.send("Create route error", err)
    }
})


module.exports = router