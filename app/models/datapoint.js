var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
}));
