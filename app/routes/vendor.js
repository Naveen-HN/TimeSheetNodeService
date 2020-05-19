const vendorController = require('../controllers/vendor')
const AuthController = require('../controllers/auth')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const trimRequest = require('trim-request')



router.get('/', vendorController.vendors_get_all);

router.get('/:vendorID', vendorController.vendor_get);

router.post('/', vendorController.create_vendor);

router.delete('/:vendorID', vendorController.delete_vendor);

router.patch('/:vendorID', vendorController.edit_vendor);

module.exports = router