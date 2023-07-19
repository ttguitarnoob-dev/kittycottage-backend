const express = require('express')
const Countdown = require('../models/countdown')
const router = express.Router()





//Index
router.get('/', async (req, res) => {
    // res.send("Hello from journal index route")
    try {
        const allCountdowns = await Countdown.find()
        console.log('hello from index route', allCountdowns)
        res.json(allCountdowns)
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
        const dt = new Date(req.body.date).getTime();
        data.date = dt
        Countdown.create(data)
        res.json({
            status: 200,
            item: data,
            message: `Created successfully`
        })
    } catch (err) {
        res.status(err).send("bad things")
    }
})


module.exports = router