const ffmpeg = require('fluent-ffmpeg');
const generateFast = require('./generateFast')

function generateThumbnail(path, filename, newFileName) {
  // ffmpeg.setFfmpegPath('C:\\Users\\aayus\\Downloads\\ffmpeg-master-latest-win64-gpl\\bin\\ffmpeg.exe')
  // Generate the thumbnail
  ffmpeg(`public/videos/${path}`)
    .outputOptions([
      '-ss 00:00:01', // Seek to 1 second into the video for the thumbnail
      '-vframes 1', // Capture one frame
      '-q:v 25', // Set output quality (lower is better)
      '-vf scale=300:-1' // Scale while maintaining aspect ratio
    ])
    .save(`public/thumbnails/${filename}.jpg`)

    .on('end', () => {
      console.log('Thumbnail generated successfully.');
      generateFast(path, newFileName)
    })
    .on('error', (err) => {
      console.error('Error generating thumbnail:', err);
    });

}

module.exports = generateThumbnail