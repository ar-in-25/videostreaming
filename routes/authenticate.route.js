const express = require('express')
const router = express.Router()
const authenticatecontroller = require('../controllers/authenticate.controller')
const notEmptyBody = require('../middlewares/notemptybody')

router.post('/login', notEmptyBody, authenticatecontroller.loginUser)

router.post('/register', notEmptyBody, authenticatecontroller.registerUser)

module.exports = router