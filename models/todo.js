const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    item: {
        type: String,
        require: true, default: "Pet your husband"
    },
    
    completed: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo