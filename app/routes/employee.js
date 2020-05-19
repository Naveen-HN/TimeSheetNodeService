const EmployeeController = require('../controllers/employee')
//const validate = require('../controllers/users.validate')
const AuthController = require('../controllers/auth')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const trimRequest = require('trim-request')

//Get all Employees

router.get('/', EmployeeController.employees_get_all);

//Get one employee
router.get('/:employeeID', EmployeeController.employee_get);

//Create employee
router.post('/', EmployeeController.create_employee);

//Delete Employee
router.delete('/:employeeID', EmployeeController.delete_employee);

//Edit Employee
router.patch('/:employeeID', EmployeeController.edit_employee);


module.exports = router