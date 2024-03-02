const mongoose = require('mongoose');

const FWSchema = new mongoose.Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    description: {type: String},
    size: {type: String, required: true},
    price: {type: Number, required: true},
    link: {type: String},
    image: {type: String}
}, {timestamps: true})

const FWItem = mongoose.model('Fall Winter Item', FWSchema)

module.exports = FWItem;
