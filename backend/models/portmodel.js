const mongoose = require('mongoose');

//mongodb génère automatiquement l'ID
//ici on génère un modèle pour stocker correctement les ports dans la base de données.
const capitainerie = mongoose.Schema({
    city: {
        type: String, //type
        required: true //obligatoire
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
        required: false //non obligatoire.
    },
    price: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Port', capitainerie); //exportation du Schema