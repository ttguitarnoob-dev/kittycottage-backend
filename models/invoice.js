const mongoose = require('mongoose')

console.log("Invoice model loaded")

const invoiceSchema = new mongoose.Schema({

    client: {
        type: String,
        require: true, default: "Default Client"
    },
    
    phone: String,
    email: String,
    clientId: String,
    jobIndex: Number,

    job: {
        type: String,
        require: true, default: "Default Job"
    },

    date: Date,

    jobDetails: {
        type: String,
        require: true, default: "Tasks were completed."
    },
    services: [
        {
            serviceName: {
                type: String,
            },

            price: {
                type: Number
            }
        }
    ],
    
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