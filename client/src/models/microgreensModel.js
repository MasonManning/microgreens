var mongoose = require('mongoose')
var Schema =  mongoose.Schema
var microgreenSchema = new Schema({
    seed: String,
    seedQty: Number,
    soilType: String,
    stage: String,
    notes: String
})
var microgreen = mongoos.model('MicroGreen', microgreenSchema)
module.exports = microgreen