const { get } = require('lodash')
const { Op } = require('sequelize')

const sequelize = require('./lib/data/sequelize')
const RESPONSE = require('./lib/response')
const { TrashPanda, TrashPandaPrefs } = require('./lib/data')

module.exports.getRandom = async (event) => {
  const usedString = get(event, 'queryStringParameters.used', '')
  const used = usedString.split(',').map(u => +u)

  try {
    const [ trashPandaRecord ] = await TrashPanda.findAll({
      where: {
        [Op.not]: [
          { id: used }
        ]
      },
      order: sequelize.random(),
      limit: 1
    })
    const trashPanda = trashPandaRecord.toJSON()

    const trashPandaPrefs = await TrashPandaPrefs.findAll({
      where: {
        trashPandaId: trashPanda.id
      }
    })

    const prefs = { LIKE: [], LOVE: [], HATE: [] }

    for (const pref of trashPandaPrefs) {
      prefs[pref.pref].push(pref.foodId)
    }

    return RESPONSE.json({ customer: Object.assign({}, trashPanda, { prefs }) })
  } catch (err) {
    console.log('error', err)
    return RESPONSE.error(err)
  }
}
