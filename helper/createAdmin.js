const bcrypt = require('bcryptjs')
const user = require('../models/user.model')

const createAdmin = async () => {
    let hashedPassword = await bcrypt.hash('oojanejana', 1)
    let user2 = await user.create({ username: 'admin', password: hashedPassword, isAdmin: true, ipAddress: 1234 });
}

module.exports = createAdmin