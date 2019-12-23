const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    family: {
        type: Object,
        required: true
    },
    school: {
        type: String
    },
    house: {
        type: Object
    },
    role: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String
    },
    dateOfDeath: {
        type: String
    },
    specie: {
        type: String
    },
    patronus: {
        type: String
    },
    boggart: {
        type: String
    },
    wand: {
        type: String
    },
    deathEater: {
        type: Boolean,
        required: true
    },
    dumbledoresArmy: {
        type: Boolean,
        required: true
    },
    ministryOfMagic: {
        type: Boolean,
        required: true
    },
    aliases: {
        type: Array
    },
    firstIntroduced: {
        type: Object,
        required: true
    },
    playedBy: {
        type: String
    }
})

module.exports = mongoose.model('character', characterSchema);