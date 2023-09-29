const express = require('express')
const KizziJournal = require('../models/kizzijournal')
const router = express.Router()





//Index
router.get('/', async (req, res) => {
    // res.send("Hello from journal index route")
    try {
        const allKizziJournals = await KizziJournal.find()
        console.log('hello from index route', allKizziJournals)
        res.json(allKizziJournals)
    } catch (err) {
        res.send("index route error", err)
    }

})

//Show
router.get('/:id', async (req, res) => {
    try {
        const oneKizziJournal = await KizziJournal.findById(req.params.id)
        console.log('id?', req.params.id)
        res.json(oneKizziJournal)
    } catch (err) {
        console.log('something broke when fetching one', err)
    }
})


//Create Route
router.post('/', async (req, res) => {

    // res.send("Hello from journal post route")
    try {
        console.log('hitting create route yayaya', req.body)
        KizziJournal.create(req.body)
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
        const oneKizziJournal = await KizziJournal.findByIdAndDelete(req.params.id)
        console.log("you're useless", oneKizziJournal)
        res.json(oneKizziJournal)
       
        
    } catch (err) {
        console.log('somethign broke when deleting', err)
    }
})


module.exports = router