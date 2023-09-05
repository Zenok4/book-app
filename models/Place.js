const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    address: String,
    photo: [String],
    description: String,
    perks: [String],
    extraInfo: String,
    chechIn: Number,
    checkOut: Number,
    maxGuest: Number,
})

const PlaceModel = mongoose.model('Place', placeSchema)

module.exports = PlaceModel