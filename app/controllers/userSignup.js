const user = require('../models/userSignup');
const uuid = require('uuid');
const { matchedData } = require('express-validator');
const utils = require('../middleware/utils');
const db = require('../middleware/db');
const emailer = require('../middleware/emailer');
const routes = require('../routes/userSignup');

//Get all users
exports.users_get_all = async (req, res) => {
  try {
    const Users = await user.find();
    console.log(Users);
    res.json(Users);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

//GETS ONE User
exports.user_get = async (req, res) => {
  try {
    const User = await user.findById(req.params.userID);
    res.json(User);
  } catch {
    res.json({
      message: err,
    });
  }
};

//creating new user
exports.create_User = async (re, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    } = req.body;
    const User = new user({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    await User.save();
    res.json(User);
  } catch (err) {
    res.json({ message: err });
  }
};

//Deleting user
exports.delete_user = async (req, res) => {
  try {
    const removedUser = await user.remove({
      _id: req.params.userID,
    });
    res.json(removedUser);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

//Updating user
exports.edit_user = async (req, res) => {
  try {
    const updatedUser = await employee.updateOne(
      {
        _id: req.params.userID,
      },
      {
        $set: {
          firstName: req.body.firstName,
        },
      }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};
