const mongoose = require('mongoose');

//mongodb génère automatiquement l'ID
const capitainerie = mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    name: {
        type : String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    horaire: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Port', capitainerie);