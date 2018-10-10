const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

module.exports = sequelize.define('game', {
  id: { type: Sequelize.STRING, primaryKey: true },
  score: Sequelize.INTEGER,
  name: Sequelize.STRING
})
