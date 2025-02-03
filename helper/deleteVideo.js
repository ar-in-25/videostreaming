const fs = require('fs')

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

module.exports = deleteVideoFile