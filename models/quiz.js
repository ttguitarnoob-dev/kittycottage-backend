const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true, default: "New Quiz"
    },

    date: {
        type: Date,
    },

    Subject: {
        type: String,
        require: true, default: "General Learning"
    },

    Score: {
        type: Number,
        require: true, default: 0
    },

    Questions: [
        {
            question: {
                type: String,
            },

            answer: {
                type: String,
                require: true, default: "a"
            },

            choice: {
                type: String
            },

            choices: [
                {
                    a: String,
                    b: String,
                    c: String,
                    d: String
                },

                
            ],

            correct: Boolean


        }

    ]
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}})

const Quiz = mongoose.model("quiz", quizSchema)
module.exports = Quiz
console.log('Quiz model loaded')