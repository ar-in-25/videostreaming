const comment = require('../models/comment.model')
const user = require('../models/user.model')
const video = require('../models/video.model')
const sequelize = require('../models/sequelize')
const report = require('../models/report.model')
const fs = require('fs')

exports.deleteCommentById = async (req, res, next) => {
    const deletedComment = await comment.destroy({
        where: {
            id: req.params.id
        }
    })
    //1 on deleted , 0 on error
    if (deletedComment) {
        return res.status(200).json({ message: 'Deleted comment' })
    } else {
        return res.status(400).json({ message: 'Comment does not exist , young lady' })
    }
}

exports.deleteVideoById = async (req, res, next) => {
    const toBeDeletedVideo = await video.findOne({
        where : {
            id : req.params.id
        }
    })
    const deletedVideo = await video.destroy({
        where: {
            id: req.params.id
        }
    })

    //1 on deleted , 0 on error
    if (deletedVideo) {
        deleteVideoFile(toBeDeletedVideo)
        return res.status(200).json({ message: 'Deleted video' })
    } else {
        return res.status(400).json({ message: 'This video does not exist , young lady' })
    }

}

exports.deleteUserById = async (req, res, next) => {
    const userDetails = await user.findOne({
        where : {
            id : req.params.id
        }
    })

    if(!userDetails){
        return res.status(400).json({ message: 'This user does not exist , young lady' })
    }

    const allVideos = await video.findAll({
        where : {
            UserId : req.params.id
        }
    })

    allVideos.forEach(async video => {
        //remove video and thumbnail from fs
        deleteVideoFile(video)
    })

    const deletedUser = await user.destroy({
        where: {
            id: req.params.id
        }
    })
    
    if (deletedUser) {
        //save the bastard IP
        fs.appendFile('./public/bastards.txt', JSON.stringify(userDetails.toJSON()), (err) => {})
        return res.status(200).json({ message: 'Deleted user' })
    }

}

//delete thumbnail and video
//on fail write the names of file in './public/failed.txt'
deleteVideoFile = async (toBeDeletedVideo) => {
     //delete thumbnail
     fs.unlink('./public/thumbnails/'+toBeDeletedVideo.id + '.jpg', (err) => {
        if(err){
        fs.appendFile('./public/failed.txt', `delete /thumbnails/${toBeDeletedVideo.id}`, (err)=> {} )
        }
     })
     //delete video
     fs.unlink('./public/videos/'+ toBeDeletedVideo.videoname, (err) => {
        if(err){
        fs.appendFile('./public/failed.txt', `delete /video/${toBeDeletedVideo.videoname}` , (err)=>{})
        }
     })
}

exports.getAllReportedVideos = async (req, res, next) => {
    let r = await video.findAll({
        attributes : [ 'id', [sequelize.fn('COUNT', sequelize.col('Reports.id')), 'reportCount'] ],
        group : ['Video.id'],
        include : {
            model : report,
            attributes : []
        },
        // having: sequelize.literal('COUNT(Reports.id) > 0')
    })
    return res.status(200).json(r)
}