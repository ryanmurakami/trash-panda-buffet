const RESPONSE = require('./lib/response')
const { Food } = require('./lib/data')

module.exports.getAll = async () => {
  try {
    const result = await Food.findAll()

    return RESPONSE.json({ foodItems: result })
  } catch (err) {
    console.log('error', err)
    return RESPONSE.error(err)
  }
}
