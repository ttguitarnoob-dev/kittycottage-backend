const mongoose = require('mongoose')

console.log("Invoice model loaded")

const invoiceSchema = new mongoose.Schema({

    client: {
        type: String,
        require: true, default: "Default Client"
    },

    job: {
        type: String,
        require: true, default: "Default Job"
    },

    tasks: {
        type: String,
        require: true, default: "Tasks were completed."
    },
    rate: {
        type: Number,
        require: true, default: 60
    },
    hours: {
        type: Number,
        require: true, default: 1
    },
    paid: {
        type: Boolean,
        require: true, default: false
    },
    total: {
        type: Number,
        require: true, default: 0
    }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const Invoice = mongoose.model("invoice", invoiceSchema)
module.exports = Invoice