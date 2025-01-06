const express = require('express')
const router = express.Router()
const videocontroller = require('../controllers/video.controller')
const upload = require('../helper/multer-main')
const authenticatetoken = require('../middlewares/authenticatetoken')
const multererrorhandler = require('../middlewares/multerErrorHandler')


router.get("/page/:number", videocontroller.getVideos)

router.post("/upload",authenticatetoken, upload.single('video'), multererrorhandler,  videocontroller.postVideos)

router.get("/:videoId", videocontroller.streamVideo)

router.get("/detail/:videoId", videocontroller.getVideoDetail)

router.get("/thumbnail/:id", videocontroller.getThumbnail)

router.post("/report", videocontroller.reportVideo)


module.exports = router
