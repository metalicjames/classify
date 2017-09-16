var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Key = require('./key');

module.exports = mongoose.model('Datapoint', new Schema({
    filename: {
        type: String,
        required: true,
        unique: true
    },
    labelled: {
        type: Boolean,
        required: true,
        default: false
    },
    label: {
        type: String,
        required: true,
        default: "No label"
    },
    latitude: {
        type: Double,
        required: true
    },
    longitude: {
        type: Double,
        required: true
    },
    keys: [Schema(Key)]
}));
