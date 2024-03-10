const mongoose = require('mongoose');

const SSchema = new mongoose.Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    description: {type: String},
    size: {type: String, required: true},
    price: {type: Number, required: true},
    link: {type: String},
    image: {type: String},
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}, {timestamps: true})

const SItem = mongoose.model('Special Item', SSchema)

module.exports = SItem;
