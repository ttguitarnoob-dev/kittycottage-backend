const mongoose = require('mongoose')

const testsSchema = new mongoose.Schema({
   
    fullName: {
        type: String,
        require: true, default: "Bernard"
    },
    

}, {timestamps: true})

const Test = mongoose.model("Test", testsSchema)

module.exports = Test