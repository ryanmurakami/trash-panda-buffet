const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

module.exports = sequelize.define('food', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  name: Sequelize.STRING,
  img: Sequelize.STRING
})
