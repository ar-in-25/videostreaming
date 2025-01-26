const ffmpeg = require('fluent-ffmpeg');
const generateFast = require('./generateFast')

function generateThumbnail(path, filename, newFileName) {
  // ffmpeg.setFfmpegPath('C:\\Users\\aayus\\Downloads\\ffmpeg-master-latest-win64-gpl\\bin\\ffmpeg.exe')
  // Generate the thumbnail
  ffmpeg(`public/videos/${path}`)
  .screenshots({
    timestamps: [1], // Capture a thumbnail at 1 second into the video
    filename: `${filename}.jpg`, // Generate a unique filename
    folder: 'public/thumbnails',
    size:"320x180"
  })
    .on('end', () => {
      console.log('Thumbnail generated successfully.');
      generateFast(path, newFileName)
    })
    .on('error', (err) => {
      console.error('Error generating thumbnail:', err);
    });

}

module.exports = generateThumbnail