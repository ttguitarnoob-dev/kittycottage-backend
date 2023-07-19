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
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}})

const Todo = mongoose.model("todo", todoSchema)
module.exports = Todo
console.log('Todo model loaded')