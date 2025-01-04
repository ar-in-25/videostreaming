const sequelize = require('./sequelize')
const { DataTypes } = require('sequelize')

const Report = sequelize.define(
    'Report',
    {
        ipAddress: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

module.exports = Report
