const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
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
    duration: {
        type: Number
    },
    description: {
        type: String,
        required: true
    },
    imdb: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    soundtrack: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model('movie', movieSchema);