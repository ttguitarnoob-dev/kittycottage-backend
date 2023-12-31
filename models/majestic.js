const mongoose = require('mongoose')

const majesticSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true, default: "Customer Name"
    },

    email: {
        type: String,
        require: true, default: "example@email.com"
    },
    phone: {
        type: String,
        require: true, default: "phonenumber"
    },
    location: {
        type: String,
        require: true, default: "Elgin Cemetary"
    },
    help: {
        type: String,
        require: true, default: "please fix my headstone"
    },
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}})

const Majestic = mongoose.model("majestic", majesticSchema)
module.exports = Majestic
console.log('Majestic model loaded')