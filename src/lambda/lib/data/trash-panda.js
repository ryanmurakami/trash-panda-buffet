const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

module.exports = sequelize.define('trashPanda', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  img: Sequelize.STRING,
  name: Sequelize.STRING
})
