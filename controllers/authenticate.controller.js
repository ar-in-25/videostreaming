const tokengenerator = require('../helper/generatetoken')
const users = require('../models/user.model')
const bcrypt = require('bcryptjs')


exports.loginUser = async (req, res, next) => {
    let user = await users.findOne({ where: { username: req.body.username } })
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' })
    } else if (!(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(400).json({ message: "Wrong password" })
    } else {
        return res.status(200).json({ message: tokengenerator({ id: user.id, username: user.username, isAdmin : user.isAdmin }) })
    }

}

exports.registerUser = async (req, res, next) => {    
    let hashedPassword = await bcrypt.hash(req.body.password, 1)
    try {
        let user = await users.create({username: req.body.username, password: hashedPassword, isAdmin: false, ipAddress : req.clientIpAddressFound});
        return res.status(200).json({ message: "User registered." })
    } catch (err) {
        if (err.name == 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: 'Username already taken. Choose another.' })
        } else {
            return res.status(500).json({ message: 'DB error occured' })
        }
    }

}