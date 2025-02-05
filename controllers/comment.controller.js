const comment = require('../models/comment.model')
const user = require('../models/user.model')
const notification = require('../models/notification.model')
const video = require('../models/video.model')


exports.getCommentForVideo = async (req, res, next) => {
    let data = await comment.findAll({
        where: {
            VideoId: req.params.videoId,
            parentcommentId: null
        },
        order: [['createdAt', 'DESC']],
        attributes: [
            'comment', 'UserId', 'id', 'VideoId'
        ],
        include: [{
            model: user,
            attributes: ['username']
        },
        {
            model: comment,
            as: 'subcomment',
            attributes: [
                'comment', 'UserId', 'id', 'VideoId', 'parentcommentid', 'createdAt'
            ],  
            include: {
                model: user,
                attributes: ['username']
            }
        }
        ]
    })
    return res.status(200).json(data)
}

exports.postCommentForVideo = async (req, res, next) => {
    //check if video exist
    let videoObject = await video.findOne({
        where: {
            id: req.params.videoId
        }
    })
    //if video exist , create comment
    if (videoObject) {
        let createdComment = await comment.create({ comment: req.body.comment, UserId: req.user.id, VideoId: req.params.videoId })
        //if comment is created, add a notification
        if (createdComment) {
            //if comment is not from video uploader , add notification
            //adding notification for video owner
            if(req.user.id != videoObject.UserId) {
                let createdNotification = await notification.create({ viewed: false, CommentId: createdComment.id, UserId: videoObject.UserId , VideoId : videoObject.id})
            }
            return res.status(200).json({ message: "Added comment" })
        }else{
            return res.status(500).json({ message: "Can't add comment" })
        }
        
    } else {
        return res.status(404).json({ message: "This video doesn't exist, young lady." })
    }
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
    //check if comment exist
    let parentComment = await comment.findOne({
        where: {
            id: req.body.id
        }
    })
    //if exist , create sub comment
    if (parentComment) {
        let createdComment = await comment.create({ comment: req.body.comment, UserId: req.user.id, VideoId: req.body.VideoId, parentcommentid: req.body.parentcommentid })
        if (createdComment) {
            //dont create notification for reply to your own comment
            if(req.user.id != parentComment.UserId) {
                //creating notification for the original comment owner
                const pattern =  /@([^\s@]+)/g; // This matches any word starting with '@' followed by non-space characters
                const matches = [...req.body.comment.matchAll(pattern)].map(match => match[1]);
                //if there is an @username
                if(matches.length > 0){
                    //find the user
                    let taggedUser = await user.findOne({
                        where : {
                            username : matches[0]
                        }
                    })
                    //if there is that user, create notification for him
                    if(taggedUser){
                        let createdNotification = await notification.create({ viewed: false, CommentId: createdComment.id, UserId: taggedUser.id, VideoId :  req.body.VideoId })
                    }else{
                        //else create notification for parent comment user
                        let createdNotification = await notification.create({ viewed: false, CommentId: createdComment.id, UserId: parentComment.UserId, VideoId :  req.body.VideoId })
                    }
                }else{
                        //else create notification for parent comment user
                        let createdNotification = await notification.create({ viewed: false, CommentId: createdComment.id, UserId: parentComment.UserId, VideoId :  req.body.VideoId })
                }
                
            }
            return res.status(200).json({ message: "Added comment" })
        } else {
            return res.status(500).json({ message: 'Cant add comment' })
        }
    } else {
        res.status(404).json({ message: "The comment doesn't exist, young lady" })
    }


}