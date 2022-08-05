const mongoose = require('mongoose');

const TransactionsEnCoursSchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    menu: [{
        menu_id: {
            type: String,
        },
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        amount: {
            type: Number,
        },
    }],
    total: {
        type: Number,
    },
    lat: {
        type: Number,
    },
    long: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
    adresse: {
        type: String,
    },
    telephone: {
        type: String,
    },
    nomClient: {
        type: String,
    },
    remarque: {
        type: String,
    }
});

module.exports = TransactionsEnCours = mongoose.model('transactionsEnCours', TransactionsEnCoursSchema);