
uploaderlist = {}
function blocker(req, res, next){
    //add if not present
    //reset if next day
    if(uploaderlist[req.clientIpAddressFound] == undefined || uploaderlist[req.clientIpAddressFound].date != new Date().getDate()){
        uploaderlist[req.clientIpAddressFound] = {
            date : new Date().getDate(),
            count : 0
        }
    }

    //if uploaded 2 videos , error on 3rd
    if(uploaderlist[req.clientIpAddressFound] != undefined && uploaderlist[req.clientIpAddressFound].count >= 1){
        return res.status(500).json({message : 'Cannot upload more videos'})
    }

    //increment on upload
    uploaderlist[req.clientIpAddressFound].count += 1
    next()

}

module.exports = blocker