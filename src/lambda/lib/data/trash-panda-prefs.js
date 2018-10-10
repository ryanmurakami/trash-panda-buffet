const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

module.exports = sequelize.define('trashPandaPrefs', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  trashPandaId: Sequelize.INTEGER,
  foodId: Sequelize.INTEGER,
  pref: Sequelize.STRING
})
