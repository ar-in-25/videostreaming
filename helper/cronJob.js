const cron = require('node-cron');
const { Op } = require('sequelize');
const Video = require('../models/video.model');
const fs = require('fs')

// Schedule a job to run every day
cron.schedule('0 0 * * *', async () => {
  try {
    const now = new Date();
    const cutoff = new Date(now.getTime() - 120 * 24 * 60 * 60 * 1000); // 120 days

      const allVideo = await Video.findAll({
          where: {
              createdAt: {
                  [Op.lt]: cutoff, // Find posts created before the cutoff i.e. older than 30 days
              }
          }
      })

      allVideo.map(x => x.toJSON()).forEach(async x => {
        let t = await Video.destroy({
            where : {
                id : x.id
            }
        })
        //delete video and thumbnail
        fs.unlink('./public/thumbnails/'+x.id + '.jpg', (err) => {})
        fs.unlink('./public/videos/'+ x.videoname, (err) => {})
      })



    console.log(`post(s) deleted that were older than 120 days.`);
  } catch (error) {
    console.error('Error deleting posts:', error);
  }
});
