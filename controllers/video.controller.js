const videos = require('../models/video.model')
const user = require('../models/user.model')
const fs = require('fs')
const path = require('path')
const generateThumbnail = require('../helper/generateThumbnail')
const report = require('../models/report.model')
const tempvideo = require('../models/tempvideo.model')
const comment = require('../models/comment.model')

exports.getVideos = async (req, res, next) => {
    const offsetBy = 0 + (8*req.params.number)
    const limitBy = 8
    try {
        let allVideos = await videos.findAndCountAll({
            attributes: ['id', 'title', 'description', 'views', 'createdAt', 'UserId' ],
            order: [['createdAt', 'DESC']],
            offset: offsetBy,
            limit: limitBy,
            include: [{ model: user, attributes: ['username'] }, {model : tempvideo, attributes : ['createdAt']}, {model : comment, attributes : ['id'] }]
        })
        return res.status(200).send(allVideos)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

exports.postVideos = async (req, res, next) => {
    let videoTitle = req.body.title ?? ""
    let videoDescription = req.body.description ?? ""

    if (!req.file) {
        return res.status(400).json({ message: "Video file is required" })
    } else if (videoTitle.length == 0) {
        return res.status(400).json({ message: 'Title is required.' })
    } else {
        try {
            let addedVideo = await videos.create({ title: videoTitle, description: videoDescription, videoname: req.file.filename, views: 0, UserId: req.user.id, ipAddress: req.clientIpAddressFound })
            if(req.body.temporary == 'true'){
                let addedTempvideo = await tempvideo.create({VideoId : addedVideo.id})
            }
            generateThumbnail(req.file.filename, addedVideo.id)
            return res.status(200).json({ message: "Upload completed" })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}

let videoDataCache = {}
exports.streamVideo = async (req, res, next) => {

    //check if video exists
    let video = await videos.findOne({ where: { id: req.params.videoId } })
    if (!video) {
        return res.status(400).json({ message: "Video doesn't exist" })
    }

    //continue with streaming
    let videoName = video.videoname
    let videoPath = `public/videos/${videoName}`

    let videoSize
    if (videoDataCache[videoName]) {
        videoSize = videoDataCache[videoName]
    } else {
        videoSize = fs.statSync(videoPath).size
        videoDataCache[videoName] = videoSize
    }

    let videoRange = req.headers.range
    let chunkSize = 1400 * 1024 //1000 kb chunk size
    if (videoRange) {
        const parts = videoRange.replace(/bytes=/, "").split("-");
        const startByte = parseInt(parts[0], 10);
        // const endByte = parts[1]
        //     ? parseInt(parts[1], 10)
        //     : videoSize-1;
        const endByte = Math.min(startByte + chunkSize, videoSize - 1)
        if (endByte - startByte < chunkSize) {
            chunkSize = (endByte - startByte) + 1
        }
        // const chunkSize = (endByte-startByte) + 1;
        const file = fs.createReadStream(videoPath, { start: startByte, end: endByte });
        const head = {
            'Content-Range': `bytes ${startByte}-${endByte}/${videoSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        let head = {
            'Content-length': videoSize,
            'Content-type': 'video/mp4'
        }
        res.writeHead(200, head)
        fs.createReadStream(videoPath).pipe(res)
    }
}

exports.getThumbnail = async (req, res, next) => {
    return res.sendFile((path.join(__dirname, "../public/thumbnails/")) + req.params.id + '.jpg')
}

//use only with streaming video api because views counter is attached to this
//can't use with streamvideo because it makes a request for every forward in video
exports.getVideoDetail = async (req, res, next) => {
    let videoDetail = await videos.findOne({
        where: {
            id: req.params.videoId
        },
        attributes: ['id', 'title', 'description', 'views', 'createdAt', 'UserId'],
        include: {
            model: user,
            attributes: ['username']
        }
    })

    if (videoDetail) {
        //incrementing view by 1 on video
        await videoDetail.increment('views', { by: 1 });
        return res.status(200).json(videoDetail)
    } else {
        return res.status(400).json({ message: "Video doesn't exist" })
    }
}


exports.reportVideo = async (req, res, next) => {
    // user.create({username : 'a',password:'b',isAdmin:false, ipAddress : 123})
    // let a = await user.findAll({})
    // console.log(a.map(x=>x.toJSON()))
    // videos.create({ title: 'ad', description: 'asda', videoname: 'adsa', views:0, UserId:1, ipAddress : 123})

    let reportedVideo = await videos.findByPk(req.body.id)
    if (reportedVideo) {
        let addedReport = await report.create({ ipAddress: req.clientIpAddressFound, VideoId: req.body.id })
        return res.status(200).json({ message: "Report added successfully" })
    } else {
        return res.status(400).json({ message: "Video doesn't exist, young lady" })
    }
}

