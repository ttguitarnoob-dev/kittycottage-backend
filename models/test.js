const mongoose = require('mongoose')

const testsSchema = new mongoose.Schema({
   
    fullName: {
        type: String,
        require: true, default: "Bernard"
    },
    age: Number,
    ugly: {
        type: Boolean,
        default: true
    }
    

}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}})

const Test = mongoose.model("Test", testsSchema)

module.exports = Test

