
const notEmptyBody = (req, res, next) => {
    if (!req.body.username || !req.body.password || typeof req.body.username != 'string' || typeof req.body.password != 'string') {
        return res.status(400).json({message: 'No username/password' })
    }
    next()
}

module.exports = notEmptyBody