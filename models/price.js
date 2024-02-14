const mongoose = require('mongoose')

const priceSchema = new mongoose.Schema({

    smallHeadstone: {
        type: Number,
        require: true, default: 50
    },

    bigHeadstone: {
        type: Number,
        require: true, default: 150
    },


    bronze: {
        type: Number,
        require: true, default: 50
    },

    bench: {
        type: Number,
        require: true, default: 50
    },

    relettering: {
        type: Number,
        require: true, default: 50
    },

    normalPicture: {
        type: Number,
        require: true, default: 100
    },

    fancyPicture: {
        type: Number,
        require: true, default: 300
    },

    flowers: {
        type: Number,
        require: true, default: 25
    },


}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const Price = mongoose.model("price", priceSchema)
module.exports = Price
console.log('Price model loaded')