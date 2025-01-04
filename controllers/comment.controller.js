const comment = require('../models/comment.model')
const user = require('../models/user.model')
const sequelize = require('../models/sequelize')

exports.getCommentForVideo = async (req, res, next) => {
    // const videoId = req.params.videoId
    let data = await comment.findAll({
        where : {
            VideoId : req.params.videoId,
            parentcommentId  : null
        },
        attributes : [
            'comment', 'UserId', 'id', 'VideoId'
        ],
        include : [{
            model : user,
            attributes : ['username']
        },
        {
            model : comment,
            as : 'subcomment',
            attributes : [
                'comment', 'UserId', 'id', 'VideoId', 'parentcommentid'
            ],
            include : {
                model : user,
                attributes:['username']
            }
        }
        ]
    })
    return res.status(200).json(data)
}

exports.postCommentForVideo = async (req, res, next) => {
    // req.body.comment
    let commented = await comment.create({comment : req.body.comment, UserId : req.user.id , VideoId : req.body.VideoId })
    return res.status(200).json({message : "Added comment"})
}

// exports.getSubcommentForComment = async (req, res, next) => {
//     let data = await comment.findAll({
//         where : {
//             id : req.params.commentId,
//         },
//         include : {
//             model : comment,
//             as : 'subcomment'
//         }
//     })
//     return res.status(200).json(data)
// }

exports.postSubcommentForComment = async (req, res, next) => {
    let commented = await comment.create({comment : req.body.comment, UserId : req.user.id , VideoId : req.body.VideoId ,  parentcommentid: req.body.id})
    return res.status(200).json({message : "Added comment"})
}