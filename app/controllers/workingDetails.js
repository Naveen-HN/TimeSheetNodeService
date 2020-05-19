const workDetails = require('../models/workingDetails');
const uuid = require('uuid/v4');
const { matchedData } = require('express-validator');
const utils = require('../middleware/utils');
const db = require('../middleware/db');
const emailer = require('../middleware/emailer');

exports.workingDetails_get_all = async (req, res) => {
  try {
    const workingDetails = await workDetails.find();
    res.json(workingDetails);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.workingDetails_get = async (req, res) => {
  try {
    const workingDetail = await vendor.findById(req.params.employeeID);
    res.json(workingDetail);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.create_workingDetails = async (req, res) => {
  try {
    const {
      totalWeekWorkHours,
      totalWeekBillableHours,
      totalWeekTimeOffHours,
      comments,
      status,
    } = req.body;
    const workingDetail = new workingDetail({
      employeeID: employeeID,
      totalWeekWorkHours: totalWeekWorkHours,
      totalWeekBillableHours: totalWeekBillableHours,
      totalWeekTimeOffHours: totalWeekTimeOffHours,
      comments: comments,
      status: status,
    });
    await workingDetail.save();
    res.json(workingDetail);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.delete_workingDetail = async (req, res) => {
  try {
    const removedworkingDetail = await workingDetail.remove({
      _id: req.params.employeeID,
    });
    res.json(removedworkingDetail);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.edit_workingDetail = async (req, res) => {
  try {
    const updatedworkingDetail = await workingDetail.updateOne(
      {
        _id: req.params.employeeID,
      },
      {
        $set: {
          firstName: req.body.firstName,
        },
      }
    );
    res.json(updatedworkingDetail);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};
