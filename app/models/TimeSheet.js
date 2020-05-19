const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const mongoosePaginate = require('mongoose-paginate-v2');

const TimeSheetSchema = new mongoose.Schema({
  employeeID: {
    type: String,
    required: true,
  },
  jobTitle: String,
  endClient: String,
  approver: String,
  startDate: {
    type: Date,
    default: new Date().getTime(),
  },
  endDate: {
    type: Date,
    default: new Date().getTime(),
  },
  projectId: Number,
  createdAt: {
    type: Date,
    default: new Date().getTime(),
  },
  updatedAt: {
    type: Date,
    default: new Date().getTime(),
  },
});
module.exports = mongoose.model('TimeSheet', TimeSheetSchema);
