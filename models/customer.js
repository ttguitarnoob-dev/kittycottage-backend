const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true, default: "Interested Customer"
    },

    email: {
        type: String,
        require: true, default: "example@email.com"
    },

    phone: {
        type: String,
        require: true, default: "phonenumber"
    },

    customerNotes: {
        type: String,
        require: true, default: "Customer notes here."
    },



    jobs: [
        {
            location: {
                type: String,
                require: true, default: "Default Cemetary"
            },

            date: {
                type: Date,
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

            totalPrice: {
                type: Number,
                require: true, default: 0
            },

            jobNotes: {
                type: String,
                require: true, default: "Job notes here."
            }


        }
    ]


}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const Customer = mongoose.model("customer", customerSchema)
module.exports = Customer
console.log('Customer model loaded')