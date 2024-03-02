const mongoose = require('mongoose');

const SSSchema = new mongoose.Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    description: {type: String},
    size: {type: String, required: true},
    price: {type: Number, required: true},
    link: {type: String},
    image: {type: String}
}, {timestamps: true})


const SSItem = mongoose.model('Spring Summer Item', SSSchema)


module.exports = SSItem;