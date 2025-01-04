const multerErrorHandler = function(err, req, res, next) {
    // {
    //     "name": "MulterError",
    //     "message": "File too large",
    //     "code": "LIMIT_FILE_SIZE",
    //     "field": "video",
    //     "storageErrors": []
    // }
    if(err && err.message){
        return res.status(400).json({message : err.message})
    }
}

module.exports = multerErrorHandler