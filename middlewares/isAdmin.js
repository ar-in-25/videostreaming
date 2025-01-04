function isAdmin(req, res, next) {
    if(req.user.isAdmin){
        next()
    }else{
        return req.status(400).json({message : 'This does not exist, young lady'})
    }
}

module.exports = isAdmin