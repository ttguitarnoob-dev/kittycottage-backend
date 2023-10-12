const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true, default: "New Quiz"
    },

    date: {
        type: Date,
    },

    subject: {
        type: String,
        require: true, default: "General Learning"
    },

    score: {
        type: Number,
        require: true, default: 0
    },

    questions: [
        {
            question: {
                type: String,
                require: true, default: "This is a question"
            },

            answer: {
                type: Number,
                require: true, default: 0
            },

            choice: {
                type: Number,
                require: true, default: 0
            },

            choices: {
                a: String,
                b: String,
                c: String,
                d: String
            },

            correct: Boolean,
    


        }

    ]
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}})

const Quiz = mongoose.model("quiz", quizSchema)
module.exports = Quiz
console.log('Quiz model loaded')