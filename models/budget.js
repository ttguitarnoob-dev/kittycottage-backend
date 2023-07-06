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
    },

    purchases: {
        type: String,
        require: true, default: "Coffee"
    },

    purchaseAmount: {
        type: String,
        require: true, default: "6.25"
    },

    purchaseDate: {
        type: String,
        require: true, default: "Today"
    }
})

const Budget = mongoose.model("budget", budgetSchema)
module.exports = Budget