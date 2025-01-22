const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs')

function generateFast(oldpath, newpath) {
    // ffmpeg.setFfmpegPath('C:\\Users\\aayus\\Downloads\\ffmpeg-master-latest-win64-gpl\\bin\\ffmpeg.exe')
    ffmpeg(`public/videos/${oldpath}`)
        .outputOptions([
            '-movflags +faststart', // Optimize for web streaming
            '-c copy' //copy everything
        ])
        .save(`public/videos/${newpath}`)
        .on('end', () => {
            fs.unlink(`public/videos/${oldpath}`, (err) => {
                if (err) {
                    fs.appendFile('./public/failed.txt', `delete /video/${oldpath}`, (err) => { })
                }
            })
        })
        .on('error', (err) => {
            console.error('Error generating fast:', err);
        });

}

module.exports = generateFast