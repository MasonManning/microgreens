var mongoose = require('mongoose')
var Schema =  mongoose.Schema
var microgreenSchema = new Schema({
    number: Number,
    seed: String,
    seedQty: Number,
    soilType: String,
    soilQty: Number,
    stage: String,
    notes: String,
    date: Date
})
var microgreen = mongoose.model('MicroGreen', microgreenSchema)
module.exports = microgreen