const mongoose = require('mongoose')

const countdownSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true, default: "New Countdown"
    },

    deadline: {
        type: String,
        require: true, default: "12/25/2024"
    }
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}})

const Countdown = mongoose.model("todo", countdownSchema)
module.exports = Countdown