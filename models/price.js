const mongoose = require('mongoose')

const priceSchema = new mongoose.Schema({
    name: String,
    price: Number

}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const Price = mongoose.model("price", priceSchema)
module.exports = Price
console.log('Price model loaded')