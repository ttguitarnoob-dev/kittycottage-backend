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
    },

    bible: {
        type: String,
        require: true, default: "I read a good verse and it meant a lot to me."
    },
    
    mood: {
        type: String,
        require: true, default: "I am in a fantastic mood."
    },

    doOver: {
        type: String,
        require: true, default: "I would do things better."
    },

    smile: {
        type: String,
        require: true, default: "I petted a kitty."
    },

    telepathy: {
        type: String,
        require: true, default: "I would be able to hear thoughts."
    },

    interesting: {
        type: String,
        require: true, default: "I thought all the things were interesting."
    },

    principal: {
        type: String,
        require: true, default: "I would make things instantly learnable so that we would all know everything there is to know in one day."
    },

    book: {
        type: String,
        require: true, default: "Things happened in the plot that were crazy."
    },

    learnMore: {
        type: String,
        require: true, default: "I want to learn how to rule the world."
    },

    date: {
        type: String,
        require: true, default: new Date().toDateString
    }

}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const Journal = mongoose.model("journal", journalsSchema)

module.exports = Journal

console.log('Journal model loaded')