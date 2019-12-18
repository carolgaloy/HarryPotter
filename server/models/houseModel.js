const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    founder: {
        type: String,
        required: true
    },
    head: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    ghost: {
        type: String,
        required: true
    },
    colors: {
        type: Array,
        required: true
    },
    animal: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('house', houseSchema);