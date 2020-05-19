const {
    validationResult
} = require('../middleware/utils');
const {
    check
} = require('express-validator');

exports.employees_get_all = [
    check('employeeID')
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
        min: 5
    })
    .withMessage('PASSWORD_TOO_SHORT_MIN_5'),
    check('role')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isIn(['user', 'admin'])
    .withMessage('USER_NOT_IN_KNOWN_ROLE'),
    check('phoneNumber')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .trim(),
    (req, res, next) => {
        validationResult(req, res, next)
    }
]

exports.employee_get = [
    check('employeeID')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('ID_IS_EMPTY'),
    (req, res, next) => {
        validationResult(req, res, next)
    }
]


exports.delete_employee = [
    check('employeeID')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('ID_IS_EMPTY'),
    (req, res, next) => {
        validationResult(req, res, next)
    }
]

exports.edit_employee = [
    check('employeeID')
    .exists()
    .withMessage('MISSING ID')
    .not()
    .isEmpty()
    .withMessage('ID is missing'),
    (req, res, next) => {
        validationResult(req, res, next)
    }
]