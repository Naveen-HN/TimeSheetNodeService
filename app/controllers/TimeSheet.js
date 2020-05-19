const models = require('../models/TimeSheet');
const uuid = require('uuid');
const { matchedData } = require('express-validator');
const utils = require('../middleware/utils');
const db = require('../middleware/db');
const emailer = require('../middleware/emailer');

//Get all timesheets
exports.timeSheet_get_all = async (req, res) => {
  try {
    const TimeSheets = await models.find();
    console.log(TimeSheets);
    res.json(TimeSheets);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

//create timesheet
exports.create_timesheet = async (req, res) => {
  try {
    const {
      employeeId,
      selectWeek,
      jobTitle,
      endClient,
      client,
      approver,
      startDate,
      endDate,
    } = req.body;
    const timesheet = new models({
      employeeId: employeeId,
      selectWeek: selectWeek,
      jobTitle: jobTitle,
      endClient: endClient,
      client: client,
      approver: approver,
      startDate: startDate,
      endDate: endDate,
    });
    await timesheet.save();
    res.json(timesheet);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

//delete timesheet
exports.delete_timesheet = async (req, res) => {
  try {
    const removedTimesheet = await timesheet.remove({
      _id: req.params.employeeID,
    });
    res.json(removedTimesheet);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

//update timesheet
exports.edit_timesheet = async (req, res) => {
  try {
    const updatedTimesheet = await timesheet.updateOne(
      {
        _id: req.params.employeeID,
      },
      {
        $set: {
          firstName: req.body.firstName,
        },
      }
    );
    res.json(updatedTimesheet);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};
