const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    telephone: {
        type: String
    },
    total: {
        type: Number,
    }
});

module.exports = Score = mongoose.model('score', ScoreSchema);