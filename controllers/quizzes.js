const express = require('express')
const Quiz = require('../models/quiz')
const router = express.Router()





//Index
router.get('/', async (req, res) => {
    try {
        const allQuizzes = await Quiz.find()
        console.log('hello from index route', allQuizzes)
        res.json(allQuizzes)
    } catch (err) {
        res.send("index route error", err)
    }

})

//Show
router.get('/:id', async (req, res) => {
    res.send("hello from show route", req.body)
    // try {
    //     const oneCountdown = await Countdown.findById(req.params.id)
    //     console.log('id?', req.params.id)
    //     res.json(oneCountdown)
    // } catch (err) {
    //     console.log('something broke when fetching one', err)
    // }
})


//Create Route
router.post('/', async (req, res) => {

    // res.status(200).send(`Hello from post route`)
    // res.json(req.body)
    try {
        console.log('hitting create route yayaya', req.body)
        // data = req.body
        // const dt = new Date(req.body.date).getTime();
        // console.log('changed date', dt)
        // data.date = dt
        Quiz.create(req.body)
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
    res.send('hello from delete route')
    // try {
    //     console.log('hello from delete route', req.params.id)
    //     const oneCountdown = await Countdown.findByIdAndDelete(req.params.id)
    //     console.log("you're useless", oneCountdown)
    //     res.json(oneCountdown)
       
        
    // } catch (err) {
    //     console.log('somethign broke when deleting', err)
    // }
})

//Update
router.put('/:id', async (req, res) => {
    res.send('hello from update route')
})


module.exports = router