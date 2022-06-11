const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    nomClient: {
        type: String
    },
    adresse: {
        type: String,
    },
    telephone: {
        type: String,
    },
});

module.exports = Client = mongoose.model('client', ClientSchema);