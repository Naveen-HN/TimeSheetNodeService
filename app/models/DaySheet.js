const mongoose = require('mongoose');

const daySheetSchema = new mongoose.Schema({
    daySheetID: Number,
    billableHours: String,
    day: String,
    date: String,
    notes: String,
    timeOffHour: String,
    totalHours: String,
    workHours: String
})

module.exports = mongoose.model('DaySheet', daySheetSchema)