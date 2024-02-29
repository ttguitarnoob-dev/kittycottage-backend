const mongoose = require('mongoose')

const priceSchema = new mongoose.Schema({

    smallHeadstone: [
        {
            name: {
                type: String,
                require: true, default: "Small Headstone"
            },
            price: {
                type: Number,
                require: true, default: 50
            }
        }
    ],

    bigHeadstone: [
        {
            name: {
                type: String,
                require: true, default: "Big Headstone"
            },
            price: {
                type: Number,
                require: true, default: 150
            }
        }
    ],


    bronze: [
        {
            name: {
                type: String,
                require: true, default: "Bronze Plaque"
            },
            price: {
                type: Number,
                require: true, default: 50
            }
        }
    ],

    bench: [
        {
            name: {
                type: String,
                require: true, default: "Bench"
            },
            price: {
                type: Number,
                require: true, default: 50
            }
        }
    ],

    relettering: [
        {
            name: {
                type: String,
                require: true, default: "Relettering"
            },
            price: {
                type: Number,
                require: true, default: 50
            }
        }
    ],

    normalPicture: [
        {
            name: {
                type: String,
                require: true, default: "Normal Picture"
            },
            price: {
                type: Number,
                require: true, default: 100
            }
        }
    ],

    fancyPicture: [
        {
            name: {
                type: String,
                require: true, default: "Fancy Picture"
            },
            price: {
                type: Number,
                require: true, default: 300
            }
        }
    ],

    flowers: [
        {
            name: {
                type: String,
                require: true, default: "Flowers"
            },
            price: {
                type: Number,
                require: true, default: 25
            }
        }
    ],


}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const Price = mongoose.model("price", priceSchema)
module.exports = Price
console.log('Price model loaded')