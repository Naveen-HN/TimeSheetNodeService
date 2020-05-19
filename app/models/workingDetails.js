const mongoose = require('mongoose');

const workingDetailsSchema = new mongoose.Schema({
  employeeID: String,
  totalWeekWorkHours: Number,
  totalWeekBillableHours: Number,
  totalWeekTimeOffHours: Number,
  comments: String,
  status: Boolean,
});

module.exports = mongoose.model('workingDetails', workingDetailsSchema);
