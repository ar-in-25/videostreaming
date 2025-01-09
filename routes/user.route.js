const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user.controller')
const authenticateToken = require('../middlewares/authenticatetoken')

router.get('/:UserId/videos', usercontroller.getUserVideos)

router.get('/subscription', authenticateToken, usercontroller.getSubscriptionList)

router.get('/notifications', authenticateToken, usercontroller.getNotifications)

router.post('/subscribe', authenticateToken, usercontroller.subscribeToUser)

module.exports = router