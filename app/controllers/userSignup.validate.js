const { validationResult } = require('../middleware/utils');
const validator = require('validator');
const { check } = require('express-validator');

exports.userSignup_get_all = [
  check('userID')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('primaryEmail')
    .exists()
    .withMessage('IS_EMPTY')
    .isEmail()
    .withMessage('EMAIL_IS_NOT_VALID'),
  check('password')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isLength({
      min: 5,
    })
    .withMessage('PASSWORD_TOO_SHORT_MIN_5'),
  check('role')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  isIn(['user', admin]).withMessage('USER_NOT_IN_KNOWN_ROLE'),
  check('phoneNumber')
    .exists()
    .withMessage('MISSING')
    .exists()
    .withMessage('IS_EMPTY')
    .trim(),
  (req, res, next) => {
    validationResult(req, res, next);
  },
];

exports.user_get = [
  check('userID')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('ID_IS_EMPTY'),
  (req, res, next) => {
    validationResult(req, res, next);
  },
];

exports.delete_user = [
  check('userID')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('ID_IS_EMPTY'),
  (req, res, next) => {
    validationResult(req, res, next);
  },
];

exports.edit_user = [
  check('userID')
    .exists()
    .withMessage('MISSING ID')
    .not()
    .isEmpty()
    .withMessage('ID is missing'),
  (req, res, next) => {
    validationResult(req, res, next);
  },
];
