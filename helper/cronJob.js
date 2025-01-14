const cron = require('node-cron');
const { Op } = require('sequelize');
const Video = require('../models/video.model'); // Adjust the path
const Tempvideo = require('../models/tempvideo.model')
const fs = require('fs')

// Schedule a job to run every hour (you can change the schedule)
cron.schedule('0 * * * *', async () => {
  try {
    const now = new Date();
    const cutoff = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago
    // const cutoff = new Date(now.getTime() - 2 * 60 * 1000); 

    //temp video get all where created at is op. lt 
    //for each all video id destroy
    // Delete posts that were created more than 24 hours ago
    // const result = await Video.destroy({
    //   where: {

    //     createdAt: {
    //       [Op.lt]: cutoff, // Find posts created before the cutoff
    //     },
    //   },
    // });

      const allTempVideo = await Tempvideo.findAll({
          where: {
              createdAt: {
                  [Op.lt]: cutoff, // Find posts created before the cutoff
              }
          },
          include : {
            model : Video,
            attributes : ['id','videoname']
          }
      })

    //   console.log(allTempVideo.map(x => x.toJSON()))

      allTempVideo.map(x => x.toJSON()).forEach(async x => {
        let t = await Video.destroy({
            where : {
                id : x.VideoId
            }
        })
        //delete video and thumbnail
        fs.unlink('./public/thumbnails/'+x.Video.id + '.jpg', (err) => {})
        fs.unlink('./public/videos/'+ x.Video.videoname, (err) => {})
      })



    console.log(`post(s) deleted that were older than 24 hours.`);
  } catch (error) {
    console.error('Error deleting posts:', error);
  }
});
