const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const User = sequelize.define(
    'User',
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull : false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull:false
        },
        ipAddress: {
            type: DataTypes.STRING,
            allowNull : false
        }
    }
)


module.exports = User
