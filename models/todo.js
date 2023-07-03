const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    item: {
        type: String,
        require: true, default: "Pet your husband"
    },

    completed: {
        type: Boolean,
        require: true, default: false
    }
})

const Todo = mongoose.model("todo", todoSchema)
module.exports = Todo