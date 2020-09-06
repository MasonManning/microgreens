var mongoose = require('mongoose')
var Schema =  mongoose.Schema
var microgreenSchema = new Schema({
    seed: String,
    seedQty: Number,
    soilType: String,
    stage: String,
    notes: String
})
var microgreen = mongoose.model('MicroGreen', microgreenSchema)
module.exports = microgreen