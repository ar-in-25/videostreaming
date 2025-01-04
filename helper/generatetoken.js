const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config()

//pass object not a string
function generateToken(username){
    return jwt.sign(username, process.env.TOKEN_SECRET)
}

module.exports = generateToken