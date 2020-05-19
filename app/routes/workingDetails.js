const workingDetailController = require('../controllers/workingDetails');
const AuthController = require('../controllers/auth');
const express = require('express');
const router = express.Router();
require('../../config/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {
  session: false,
});
const trimRequest = require('trim-request');

router.get('/', workingDetailController.workingDetails_get_all);

router.get('/:employeeID', workingDetailController.workingDetails_get);

router.post('/', workingDetailController.create_workingDetails);

router.delete('/:employeeID', workingDetailController.delete_workingDetail);

router.patch('/:employeeID', workingDetailController.edit_workingDetail);

module.exports = router;
