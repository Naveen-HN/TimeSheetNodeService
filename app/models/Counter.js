const mongoose = require('mongoose');

const counter = new mongoose.Schema({
    _id: String,
    seq: Number
})

module.exports = mongoose.model('Counter', counter)