const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    pages: {
        type: Number
    },
    description: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('book', bookSchema);