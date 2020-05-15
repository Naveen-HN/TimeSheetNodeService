const ProjectController = require('../controllers/projects')
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


router.get('/', ProjectController.projects_get_all);

router.get('/:projectID', ProjectController.project_get);

router.post('/', ProjectController.create_project);

router.delete('/:projectID', ProjectController.delete_project);

router.patch('/:projectID', ProjectController.edit_project);


module.exports = router