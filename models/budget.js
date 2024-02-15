const mongoose = require('mongoose')

console.log("Budget model loaded")

const budgetSchema = new mongoose.Schema({

    month: [
        {
            chosenMonth: {
                type: String,
                require: true, default: "June"
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
                    paidDate: {
                        type: String,
                        require: true, default: Date.now()
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
            ]
        }
    ]
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const Budget = mongoose.model("budget", budgetSchema)
module.exports = Budget