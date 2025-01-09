const sequelize = require('./sequelize')
const { DataTypes} = require('sequelize')

const Notification = sequelize.define(
    'Notification',
    {
        viewed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }
)


module.exports = Notification
