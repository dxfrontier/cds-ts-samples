// This is an automatically generated file. Please do not change its contents manually!
const cds = require('@sap/cds')
const csn = cds.entities('AdminService')
// service
const AdminService = { name: 'AdminService' }
module.exports = AdminService
module.exports.AdminService = AdminService
// UserActivityLog
module.exports.UserActivityLog = { is_singular: true, __proto__: csn.UserActivityLog }
module.exports.UserActivityLog_ = csn.UserActivityLog
// Promotions
module.exports.Promotion = { is_singular: true, __proto__: csn.Promotions }
module.exports.Promotions = csn.Promotions
// Users
module.exports.User = { is_singular: true, __proto__: csn.Users }
module.exports.Users = csn.Users
// events
// actions
module.exports.sendMail = 'sendMail'
// enums
