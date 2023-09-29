const mongoose = require('mongoose')

const kizziJournalSchema = new mongoose.Schema({

    entry: {
        type: String,
        require: true, default: "New Countdown"
    },

    date: {
        type: String,
        require: true, default: "12/25/2024"
    }
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}})

const KizziJournal = mongoose.model("kizzijournal", kizziJournalSchema)
module.exports = KizziJournal
console.log('Kizzi Journal model loaded')