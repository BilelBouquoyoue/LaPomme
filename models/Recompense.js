const mongoose = require('mongoose');

const RecompenseSchema = new mongoose.Schema({
    telephone: {
        type: String
    },
    recompense: {
        type: String,
    }
});

module.exports = Recompense = mongoose.model('recompense', RecompenseSchema);