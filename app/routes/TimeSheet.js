const TimeSheetController = require('../controllers/TimeSheet.js');
//const validate = require('../controllers/users.validate')
const AuthController = require('../controllers/auth');
const express = require('express');
const router = express.Router();
require('../../config/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {
  session: false,
});
const trimRequest = require('trim-request');

//Get all timesheets
router.get('/', TimeSheetController.timeSheet_get_all);

//create timesheet
router.post('/', TimeSheetController.create_timesheet);

//Delete timesheet
router.delete('/:employeeID', TimeSheetController.delete_timesheet);

//Edit timesheet
router.patch('/:employeeID', TimeSheetController.edit_timesheet);

module.exports = router;
