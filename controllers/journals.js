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


//Create Route
router.post('/', async (req, res) => {

    // res.send("Hello from journal post route")
    try {
        console.log('hitting create route yayaya', req.body)
        data = req.body
        data.date = new Date().toDateString
        Journal.create(data)
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