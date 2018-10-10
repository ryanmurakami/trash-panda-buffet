const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

module.exports = sequelize.define('action', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  foodItemId: Sequelize.INTEGER,
  gameId: Sequelize.STRING,
  trashPandaId: Sequelize.INTEGER
})
