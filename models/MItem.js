const mongoose = require('mongoose');

const MSchema = new mongoose.Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    description: {type: String},
    size: {type: String, required: true},
    price: {type: Number, required: true},
    link: {type: String},
    image: {type: String}
}, {timestamps: true})

const MItem = mongoose.model('Men Cologne Item', MSchema)

module.exports = MItem;
