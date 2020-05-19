const express = require('express');
const router = express.Router();
const passport = require('passport');
const trimRequest = require('trim-request');
const userController = require('../controllers/userSignup');
const AuthController = require('../middleware/auth');
require('../../config/passport');
const requireAuth = passport.authenticate('jwt', {
  session: false,
});

//Get all users
router.get('/alll', userController.users_get_all);

//Get one user
router.get('/:userID', userController.user_get);

//create users
router.post('/post', userController.create_User);

//Delete user
router.delete('/:userID', userController.delete_user);

//Edit user
router.patch('/:userID', userController.edit_user);

module.exports = router;
