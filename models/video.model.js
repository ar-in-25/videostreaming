const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const Video = sequelize.define(
    'Video',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull : true
        },
        videoname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        views: {
            type : DataTypes.NUMBER,
            allowNull : false
        },
        ipAddress : {
            type: DataTypes.STRING,
            allowNull : false
        }
    }
)

module.exports = Video
