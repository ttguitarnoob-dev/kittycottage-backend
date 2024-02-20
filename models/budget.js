const mongoose = require('mongoose')

console.log("Budget model loaded")

const budgetSchema = new mongoose.Schema({

    month: {
        type: String,
        require: true, default: "January"
    },

    unpaid: {
        type: Number,
        require: true, default: 0
    },

    tithe: {
        type: Number,
        require: true, default: 0
    },



    bills: [
        {
            billName: {
                type: String,
                require: true, default: "Tacos"
            },

            howMuch: {
                type: Number,
                require: true, default: 34.11
            },

            dueDate: {
                type: Date,
                require: true, default: Date.now()
            },
            
            paidDate: Date,
            
            paid: {
                type: Boolean,
                require: true, default: false
            }
        }
    ],

    incomes: [
        {
            source: {
                type: String,
                require: true, default: "Parts People"
            },
            amount: {
                type: Number,
                require: true, default: 500
            }
        }
    ],



}, {timestamps: { createdAt: "created_at", updatedAt: "updated_at" }})

const Budget = mongoose.model("budget", budgetSchema)
module.exports = Budget