const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const Likedislike = sequelize.define(
    'Likedislike',
    {
        action: {
            type: DataTypes.ENUM('like', 'dislike'),
            allowNull: false
        }
    }
)

module.exports = Likedislike
