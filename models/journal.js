const mongoose = require('mongoose')

const journalsSchema = new mongoose.Schema({
   
    hilow: {
        type: String,
        require: true, default: "I had a high and a low today."
    },
    learn: {
        type: String,
        require: true, default: "I learned things."
    },
    fail: {
        type: String,
        require: true, default: "I failed a thing."
    },

    failTeach: {
        type: String,
        require: true, default: "Failing taught me things."
    },

    failImprove: {
        type: String,
        require: true, default: "Failing will help me improve things."
    }

}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}})

const Journal = mongoose.model("journal", journalsSchema)

module.exports = Journal