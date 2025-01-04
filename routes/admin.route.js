const express = require('express')
const router = express.Router()
const admincontroller = require('../controllers/admin.controller')
const authenticateToken = require('../middlewares/authenticatetoken')
const isadmin = require('../middlewares/isAdmin')

router.delete('/video/:id', authenticateToken, isadmin, admincontroller.deleteVideoById)

router.delete('/user/:id',authenticateToken, isadmin, admincontroller.deleteUserById)

router.delete('/comment/:id',authenticateToken, isadmin, admincontroller.deleteCommentById)

router.get('/report',authenticateToken, isadmin, admincontroller.getAllReportedVideos)

module.exports = router