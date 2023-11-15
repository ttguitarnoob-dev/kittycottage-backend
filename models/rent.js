const mongoose = require('mongoose')

const rentSchema = new mongoose.Schema({

    owes: [
        {
            month: {
                type: String,
                require: true, default: "November"
            },
            amount: {
                type: Number,
                require: true, default: 1600
            }
        }
    ],

    pays: [
        {
            type: Number,
            require: true, default: 0
        }
    ]
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const Rent = mongoose.model("rent", rentSchema)
module.exports = Rent
console.log('Rent model loaded')