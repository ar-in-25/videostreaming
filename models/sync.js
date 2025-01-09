const sequelize = require('./sequelize')
const user = require('./user.model')
const video = require('./video.model')
const subscription = require('./subscription.model')
const comment  = require('./comment.model')
const report = require('./report.model')
const notification = require('./notification.model')

user.hasMany(video, { onDelete : 'CASCADE'})
video.belongsTo(user)

user.hasMany(subscription, {foreignKey : 'subscriber_id'})
user.hasMany(subscription, {foreignKey : 'subscribedto_id'})
subscription.belongsTo(user, {as : 'subscriber', foreignKey : 'subscriber_id'})
subscription.belongsTo(user, {as : 'subscribedto', foreignKey : 'subscribedto_id'})

user.hasMany(comment) //gets list of comments with foreign key UserId in coment table
comment.belongsTo(user) //get one user whose id match userid in comment table
video.hasMany(comment, {onDelete : 'CASCADE'})
comment.belongsTo(video)
comment.hasMany(comment, {as:'subcomment',foreignKey : 'parentcommentid', onDelete : 'CASCADE'})

video.hasMany(report, {onDelete : 'CASCADE'})
report.belongsTo(video)

user.hasMany(notification, {onDelete : 'CASCADE'})
notification.belongsTo(user)
notification.belongsTo(comment)

syncer = async () => { await sequelize.sync({}) }




module.exports = syncer