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

//Show
router.get('/:id', async (req, res) => {
    try {
        const oneCountdown = await Countdown.findById(req.params.id)
        console.log('id?', req.params.id)
        res.json(oneCountdown)
    } catch (err) {
        console.log('something broke when fetching one', err)
    }
})


//Create Route
router.post('/', async (req, res) => {

    // res.send("Hello from journal post route")
    try {
        console.log('hitting create route yayaya', req.body)
        // data = req.body
        console.log('received date', req.body.date)
        // const dt = new Date(req.body.date).getTime();
        // console.log('changed date', dt)
        // data.date = dt
        Countdown.create(req.body)
        res.json({
            status: 200,
            item: req.body,
            message: `Created successfully`
        })
    } catch (err) {
        res.status(err).send("bad things")
    }
})


module.exports = router