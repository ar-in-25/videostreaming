const videos = require('../models/video.model')
const user = require('../models/user.model')
const fs = require('fs')
const path = require('path')
const generateThumbnail = require('../helper/generateThumbnail')
const report = require('../models/report.model')
const comment = require('../models/comment.model')
const mime = require('mime-types')
const subscription = require('../models/subscription.model')
const sequelize = require('../models/sequelize')
const likedislike = require('../models/likedislike.model')


exports.getVideos = async (req, res, next) => {
    const offsetBy = 0 + (12 * req.params.number)
    const limitBy = 12
    try {
        let allVideos = await videos.findAndCountAll({
            attributes: ['id', 'title', 'description', 'views', 'createdAt', 'UserId'],
            order: [['createdAt', 'DESC']],
            offset: offsetBy,
            limit: limitBy,
            include: [{ model: user, attributes: ['username'] }, { model: comment, attributes: ['id'] }],
            distinct: true
        })
        return res.status(200).send(allVideos)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

trendingVideoCache = undefined
exports.currentViewedVideos = async (req, res, next) => {
    try {
        if (trendingVideoCache) {
            // console.log(trendingVideoCache)
        }
        if (trendingVideoCache && trendingVideoCache.time + 300000 > Date.now()) {
            return res.status(200).json(trendingVideoCache.cache)
        }

        let allVideos = await videos.findAll({
            attributes: ['id', 'title', 'description', 'views', 'updatedAt', 'UserId'],
            order: [['updatedAt', 'DESC']],
            offset: 0,
            limit: 8,
            include: [{ model: user, attributes: ['username'] }, { model: comment, attributes: ['id'] }],
            distinct: true
        })
        trendingVideoCache = { cache: allVideos, time: Date.now() }
        return res.status(200).json(allVideos)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}


exports.postVideos = async (req, res, next) => {

    let videoTitle = req.body.title ?? ""
    let videoDescription = req.body.description ?? ""
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const newFileName = uniqueSuffix + "-" + req.file.originalname

    if (!req.file) {
        return res.status(400).json({ message: "Video file is required" })
    } else if (videoTitle.length == 0) {
        return res.status(400).json({ message: 'Title is required.' })
    } else {
        try {
            let addedVideo = await videos.create({ title: videoTitle, description: videoDescription, videoname: newFileName, views: 0, UserId: req.user.id, ipAddress: req.clientIpAddressFound })
            generateThumbnail(req.file.filename, addedVideo.id, newFileName)
            return res.status(200).json({ message: "Upload completed" })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}

let videoDataCache = {}
let videoCache = {}
exports.streamVideo = async (req, res, next) => {
    try {
        //check if video exists
        let video
        if (videoCache[req.params.videoId]) {
            video = videoCache[req.params.videoId]
        } else {
            video = await videos.findOne({ where: { id: req.params.videoId } })
            videoCache[req.params.videoId] = video
        }

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

        //eg : 'video/mp4' , 'video/webm'
        const mimeType = mime.lookup(videoPath)

        let videoRange = req.headers.range
        let chunkSize = 1024 * 1024 //2000 kb chunk size
        if (videoRange) {
            const parts = videoRange.replace(/bytes=/, "").split("-");
            const startByte = parseInt(parts[0], 10);
            // const endByte = parts[1] ? parseInt(parts[1], 10) : videoSize-1;
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
                'Content-Type': mimeType,
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
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

exports.getThumbnail = async (req, res, next) => {
    return res.sendFile((path.join(__dirname, "../public/thumbnails/")) + req.params.id + '.jpg')
}

//use only with streaming video api because views counter is attached to this
//can't use with streamvideo because it makes a request for every forward in video
uniqueviewers = {}
exports.getVideoDetail = async (req, res, next) => {
    let videoDetail = await videos.findOne({
        where: {
            id: req.params.videoId
        },
        attributes: ['id', 'title', 'description', 'views', 'createdAt', 'UserId', 'videoname'],
        include: {
            model: user,
            attributes: ['username'],
        }
    })

    if (!videoDetail) {
        return res.status(400).json({ message: "Video doesn't exist" })
    }

    //subscriber count
    let totalsubscribers = await subscription.findAndCountAll({
        where: {
            subscribedto_id: videoDetail.toJSON().UserId
        }
    })

    //likes and dislikes
    let likesdislikes = await likedislike.findAll({
        where: {
            VideoId: req.params.videoId
        },
        attributes: ['UserId', 'action']
    })

    let token = req.clientIpAddressFound + '-' + req.params.videoId
    if(uniqueviewers[token] == undefined || uniqueviewers[token].date != new Date().getDate()){
        //incrementing view by 1 on video
        await videoDetail.increment('views', { by: 1 });
        uniqueviewers[token] = {date : new Date().getDate()}
    }
    
    return res.status(200).json({ videoDetail: videoDetail, sub: totalsubscribers.count, action: likesdislikes })

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

cacheVideoName = undefined
exports.searchVideo = async (req, res, next) => {
    if (cacheVideoName == undefined || cacheVideoName[1] + 300000 < Date.now()) {
        let list = await videos.findAll({
            attributes: ['id', 'title']
        })
        cacheVideoName = [list, Date.now()]
    }
    let names = cacheVideoName[0].map(x => x.toJSON()).filter(x => x.title.toLowerCase().includes(req.body.title.toLowerCase()))
    return res.status(200).json(names)

}

exports.likedislikeVideo = async (req, res, next) => {
    if (req.body.action != 'like' && req.body.action != 'dislike') {
        return res.status(400).json({ message: 'Wrong payload' })
    }
    // find if like/dislike already exist
    let oldAction = await likedislike.findOne({
        where: {
            UserId: req.user.id,
            VideoId: req.body.VideoId
        }
    })

    let generatedAction

    if (oldAction) {
        if (oldAction.action == req.body.action) {
            await oldAction.destroy()
        } else {
            await oldAction.destroy()
            generatedAction = await likedislike.create({ action: req.body.action, UserId: req.user.id, VideoId: req.body.VideoId })
        }
    } else {
        generatedAction = await likedislike.create({ action: req.body.action, UserId: req.user.id, VideoId: req.body.VideoId })
    }

    return res.status(200).json({ message: 'Completed' })

}

exports.downloadVideo = async (req, res, next) => {
    const id = req.params.id
    let video = await videos.findOne({
        where : {
            id : id
        }
    })

    return res.sendFile((path.join(__dirname, "../public/videos/")) + video.videoname)
}