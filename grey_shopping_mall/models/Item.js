const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    manufacturer: {type: String, required: true},
    price: {type: Number, required: true},
    cartridge: {type: String},
    action: {type: String},
    origin: {type: String, required: true},
    year: {type: Number},
    image: {type: String}
})