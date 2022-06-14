const mongoose = require('mongoose');

const RecompenseSchema = new mongoose.Schema({
    telephone: {
        type: String
    },
    recompense: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Recompense = mongoose.model('recompense', RecompenseSchema);