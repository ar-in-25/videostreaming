const user = require('../models/user.model') 
const video = require('../models/video.model')
const subscription  = require('../models/subscription.model')
const notification = require('../models/notification.model')
const comment = require('../models/comment.model')
const deleteVideoFile = require('../helper/deleteVideo')

exports.getUser = async (req, res, next) => {
    let foundUser = await user.findOne({
        where : {
            id : req.params.id
        },
        attributes : ['id','username']
    })
    if(foundUser){
        return res.status(200).json(foundUser)
    }else{
        return res.status(404).json({message :"This user doesn't exist, young lady"})
    }
}

exports.getUserVideos = async (req, res, next) => {
    // let foundUser = await user.findOne({ where: { username: req.user.username } })
    // let data = await foundUser.getVideos()
    let data = await video.findAll({
        where: { UserId: req.params.UserId },
        attributes : ['id','title','description','views','createdAt','UserId'],
        include : [{
            model : user,
            attributes : ['username']
        },
        {model : comment, attributes : ['id'] }]
    })
    // let finalData = data.map(x => x.toJSON())
    return res.status(200).json(data)
}


//'as' tell which model to display
//it cant tell b/w 2 foreign key without it , check sync.js for association
exports.getSubscriptionList = async (req, res, next) => {
        let list = await subscription.findAll({
            where : {
                subscriber_id : req.user.id
            },
            include : {
                model : user,
                as : 'subscribedto',
                attributes : ['id','username'],
                include : {
                    model  : video,
                    limit : 5,
                    attributes : ['id','title','description','views','createdAt','UserId']
                }
            },
        })
        // let finalList = list.map(x => x.toJSON())
        return res.status(200).json(list)
}

exports.subscribeToUser = async (req, res, next) => {
    //check user subscribing to himself
    if(req.user.id == req.body.UserId){
        return res.status(400).json({message : "Can't subscribe to yourself, idiot!"})
    }
    //else check if user exist
    let userExist = await user.findOne({
        where : {
            id : req.body.UserId
        }
    })
    if(!userExist){
        return res.status(404).json({message : "The user doesn't exist, young lady"})
    }
    //else check if already subscribed , then unsubscribe
    let alreadySubscribed = await subscription.findOne({
        where : {
            subscriber_id : req.user.id,
            subscribedto_id : req.body.UserId
        }
    })
    if(alreadySubscribed){
        let unsubscribeDone = await alreadySubscribed.destroy()
        if(unsubscribeDone){
            return res.status(200).json({message : "Unsubscribed"})
        }else{
            return res.status(500).json({message : "Unsubscribe failed"})
        }
    } else {
        let subscribed = subscription.create({subscriber_id: req.user.id, subscribedto_id : req.body.UserId})
        if(subscribed){
            return res.status(200).json({message : "Subscribed"})
        }else{
            return res.status(400).json({message : "Subscription failed"})
        }
    }
    
}

exports.getNotifications = async (req, res, next) => {
    const offsetBy = 0 + (8*req.body.page)
    const limitBy = 8
    let allnotifications = await notification.findAndCountAll({
        where:{
            UserId : req.user.id,
        },
        attributes : ['id','createdAt','viewed'],
        order: [['createdAt', 'DESC']],
        offset: offsetBy,
        limit: limitBy,
        include : {
            model : comment,
            attributes : ['comment', 'VideoId'],
            include: {
                model : user,
                attributes : ['username']
            }
        }
    })
    if(notification){
        return res.status(200).json(allnotifications)
    }else{
        return res.status(400).json("Some error occured")
    }
}

exports.readNotifications = async (req, res, next) => {
    let setAsRead = await notification.update(
        {viewed : true},
        {
            where : {
                UserId : req.user.id
            }

        }
    )
    if(setAsRead){
        res.status(200).json({message : "Done"})
    }else{
        res.status(500).json({message : "Failed"})
    }
}

exports.amISubscribed = async (req, res, next) => {
    let amI = await subscription.findOne({
        where : {
            subscriber_id : req.user.id,
            subscribedto_id : req.params.userid
        }
    })
    if(amI){
        return res.status(200).json({message : "yes"})
    }else{
        return res.status(200).json({message : "no"})
    }
}

cacheUserName = undefined
exports.findUserByName = async (req, res, next) => {
    if(cacheUserName == undefined || cacheUserName[1] + 300000 < Date.now()){
        let list = await user.findAll({
            attributes : ['id','username']
        })
        cacheUserName = [list, Date.now()]
    }
    let names = cacheUserName[0].map(x => x.toJSON()).filter(x => x.username.toLowerCase().includes(req.body.name.toLowerCase()))
    return res.status(200).json(names)
  
}

exports.deleteVideoById = async (req, res, next) => {
    const toBeDeletedVideo = await video.findOne({
        where : {
            id : req.params.id
        }
    })
    
    if(toBeDeletedVideo && toBeDeletedVideo.UserId != req.user.id){
        return res.status(400).json({message : "Hacker spotted!"})
    }

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

//delete thumbnail and video
//on fail write the names of file in './public/failed.txt'
// deleteVideoFile = async (toBeDeletedVideo) => {
//      //delete thumbnail
//      fs.unlink('./public/thumbnails/'+toBeDeletedVideo.id + '.jpg', (err) => {
//         if(err){
//         fs.appendFile('./public/failed.txt', `delete /thumbnails/${toBeDeletedVideo.id}`, (err)=> {} )
//         }
//      })
//      //delete video
//      fs.unlink('./public/videos/'+ toBeDeletedVideo.videoname, (err) => {
//         if(err){
//         fs.appendFile('./public/failed.txt', `delete /video/${toBeDeletedVideo.videoname}` , (err)=>{})
//         }
//      })
// }