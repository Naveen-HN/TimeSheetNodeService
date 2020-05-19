const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Number,
    default: new Date().getTime(),
  },
  loginAttempts: {
    type: Number,
    default: 0,
    select: false,
  },
  blockExpires: {
    type: Date,
    default: Date.now,
    select: false,
  },
});
module.exports = mongoose.model('userSignup', UserSchema);
