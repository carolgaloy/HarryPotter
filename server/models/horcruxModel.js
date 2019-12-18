const mongoose = require('mongoose');

const horcruxSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true
    },
    death: {
        type: String,
        required: true
    },
    deathdate: {
        type: String,
        required: true
    },
    hiding: {
        type: String,
        required: true
    },
    destroyedby: {
        type: String,
        required: true
    },
    destroyedwith: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('horcrux', horcruxSchema);