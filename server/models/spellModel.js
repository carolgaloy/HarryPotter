const mongoose = require('mongoose');

const spellSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    spell: {
        type: String,
        required: true,
        unique: true
    },
    pronunciation: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    associated: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('spell', spellSchema);