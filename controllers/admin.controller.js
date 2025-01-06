const comment = require('../models/comment.model')
const user = require('../models/user.model')
const video = require('../models/video.model')
const sequelize = require('../models/sequelize')
const report = require('../models/report.model')

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
    const deletedVideo = await video.destroy({
        where: {
            id: req.params.id
        }
    })
    //1 on deleted , 0 on error
    if (deletedVideo) {
        return res.status(200).json({ message: 'Deleted video' })
    } else {
        return res.status(400).json({ message: 'This video does not exist , young lady' })
    }

}

exports.deleteUserById = async (req, res, next) => {

    const deletedUser = await user.destroy({
        where: {
            id: req.params.id
        }
    })
    //1 on deleted , 0 on error
    if (deletedUser) {
        return res.status(200).json({ message: 'Deleted user' })
    } else {
        return res.status(400).json({ message: 'This user does not exist , young lady' })
    }

}

exports.getAllReportedVideos = async (req, res, next) => {
    let r = await video.findAll({
        attributes : [ 'id', [sequelize.fn('COUNT', sequelize.col('Reports.id')), 'reportCount'] ],
        include : {
            model : report,
            attributes : []
        },
        // having: sequelize.literal('COUNT(Reports.id) > 0')
    })
    return res.status(200).json(r)
}