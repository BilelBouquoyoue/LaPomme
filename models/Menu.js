const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    type: {
        type: String
    },
    pic: {
        type: String
    },
    description: {
        type: String
    },
    hide: {
        type: Number
    }
});

module.exports = Menu = mongoose.model('menu', MenuSchema);