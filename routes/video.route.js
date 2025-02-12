const express = require('express')
const router = express.Router()
const videocontroller = require('../controllers/video.controller')
const upload = require('../helper/multer-main')
const authenticatetoken = require('../middlewares/authenticatetoken')
const multererrorhandler = require('../middlewares/multerErrorHandler')


router.get("/page/:number", videocontroller.getVideos)

router.get("/detail/:videoId", videocontroller.getVideoDetail)

router.get("/thumbnail/:id", videocontroller.getThumbnail)

router.get("/trending", videocontroller.currentViewedVideos)

router.get("/:videoId", videocontroller.streamVideo)

router.post("/report", videocontroller.reportVideo)

router.post("/search", videocontroller.searchVideo)

router.post("/upload",authenticatetoken, upload.single('video'), multererrorhandler,  videocontroller.postVideos)

router.post("/action",authenticatetoken, videocontroller.likedislikeVideo)


module.exports = router
