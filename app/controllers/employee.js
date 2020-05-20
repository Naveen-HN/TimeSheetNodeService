const employee = require('../models/Employee')
const uuid = require('uuid')
const {
  matchedData
} = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const emailer = require('../middleware/emailer')

//GETS ALL EMPLOYEES
exports.employees_get_all = async (req, res) => {
  try {
    const Employees = await employee.find()
    res.json(Employees)
  } catch (err) {
    res.json({
      message: err
    })
  }
}

//GETS ONE EMPLOYEE
exports.employee_get = async (req, res) => {
  try {
    const Employee = await employee.findById(req.params.employeeID);
    res.json(Employee);
  } catch (err) {
    res.json({
      message: err
    })
  }
}



//CREATES A NEW EMPLOYEE
exports.create_employee = async (req, res) => {
  try {
    const {
      employeeID,
      firstName,
      lastName,
      phoneNumber,
      primaryEmail,
      secondaryEmail,
      emailVerified,
      role,
      password,
      address,
      jobCode,
      jobTitle,
      endClient,
      startDate,
      endDate,
      VendorName,
      projectID,
      projectName,
      managerName,
      approverName,
      createdAt,
      updatedAt
    } = req.body;
    const Employee = new employee({
      employeeID: employeeID,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      primaryEmail: primaryEmail,
      secondaryEmail: secondaryEmail,
      emailVerified: emailVerified,
      role: role,
      password: password,
      address: address,
      jobCode: jobCode,
      jobTitle: jobTitle,
      endClient: endClient,
      startDate: startDate,
      endDate: endDate,
      VendorName: VendorName,
      projectID: projectID,
      projectName: projectName,
      managerName: managerName,
      approverName: approverName,
      createdAt: createdAt,
      updatedAt: updatedAt
    })
    await Employee.save();
    res.json(Employee);
  } catch (err) {
    res.json({
      message: err
    })
  }
}

exports.delete_employee = async (req, res) => {
  try {
    const removedEmployee = await employee.remove({
      _id: req.params.employeeID
    })
    res.json(removedEmployee)
  } catch (err) {
    res.json({
      message: err
    })
  }
}

exports.edit_employee = async (req, res) => {
  try {
    const updatedEmployee = await employee.updateOne({
      _id: req.params.employeeID
    }, {
      $set: {
        firstName: req.body.firstName
      }
    })
    res.json(updatedEmployee)
  } catch (err) {
    res.json({
      message: err
    })
  }
}