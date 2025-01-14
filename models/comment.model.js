const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')
const user = require('./user.model')

const Comment = sequelize.define(
    'Comment',
    {
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        parentcommentid : {
            type : DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Comments',
                key: 'id'
            }
        }
    }
)


module.exports = Comment
