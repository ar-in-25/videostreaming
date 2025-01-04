const sequelize = require('./sequelize')
const { DataTypes, Model } = require('sequelize')
const user = require('./user.model')

const Subscription = sequelize.define(
    'Subscription',
    {
        subscriber_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : {
                model : user,
                key : 'id'
            }
        },
        subscribedto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references : {
                model : user,
                key : 'id'
            }
        }
    }
)


module.exports = Subscription
