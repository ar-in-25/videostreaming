const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comment.controller')
const authenticateToken = require('../middlewares/authenticatetoken')

router.get('/video/:videoId', commentController.getCommentForVideo)

router.post('/video/:videoId',authenticateToken, commentController.postCommentForVideo)

// router.get('/:commentId', commentController.getSubcommentForComment)

router.post('/:commentId',authenticateToken, commentController.postSubcommentForComment)


module.exports = router