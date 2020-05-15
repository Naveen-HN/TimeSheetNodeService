const DaySheetController = require('../controllers/daySheet')
const AuthController = require('../controllers/auth')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const trimRequest = require('trim-request')


router.get('/', DaySheetController.daySheets_get_all);

router.get('/:daySheetID', DaySheetController.daySheet_get);

router.post('/', DaySheetController.create_daySheet);

router.delete('/:daySheetID', DaySheetController.delete_daySheet);

router.patch('/:daySheetID', DaySheetController.edit_daySheet);


module.exports = router