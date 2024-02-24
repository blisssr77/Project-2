const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    manufactuerer: {type: String, required: true},
    cartridge: {type: String, required: true},
    action: {type: String},
    origin: {type: String, required: true}
})