const Sequelize = require('sequelize')

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_ADDRESS,
    dialect: 'mysql'
  }
)
