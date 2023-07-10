const mongoose = require('mongoose')

console.log("Budget model loaded")

const budgetSchema = new mongoose.Schema({

    billName: {
        type: String,
        require: true, default: "Tacos"
    },

    howMuch: {
        type: String,
        require: true, default: "34.11"
    },

    dueDate: {
        type: String,
        require: true, default: "Today"
    },
    paidDate: {
        type: String,
        require: true, default: "Tomorrow"
    }
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}})

const Budget = mongoose.model("budget", budgetSchema)
module.exports = Budget