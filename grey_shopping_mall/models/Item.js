const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    description: {type: String},
    size: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String}
})