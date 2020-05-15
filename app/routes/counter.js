const CounterController = require('../controllers/counter')
const AuthController = require('../controllers/auth')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const trimRequest = require('trim-request')


router.get('/', CounterController.counters_get_all);

router.get('/:_id', CounterController.counter_get);

router.post('/', CounterController.create_counter);

router.delete('/:_id', CounterController.delete_counter);

router.patch('/:_id', CounterController.edit_counter);


module.exports = router