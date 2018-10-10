const RESPONSE = require('./lib/response')
const {
  Action,
  Food,
  Game,
  TrashPanda,
  TrashPandaPrefs
} = require('./lib/data')
const {
  foodItems,
  trashPandas,
  trashPandaPrefs
} = require('./lib/data/static')

module.exports.populate = async () => {
  try {
    await Action.sync()
    await Game.sync()

    await Food.sync({ force: true })
    await Food.bulkCreate(foodItems)
    console.log('Wrote food items to the database')

    await TrashPanda.sync({ force: true })
    await TrashPanda.bulkCreate(trashPandas)
    console.log('Wrote trash pandas to the database')

    await TrashPandaPrefs.sync({ force: true })
    await TrashPandaPrefs.bulkCreate(trashPandaPrefs)
    console.log('Wrote trash panda preferences to the database')

    return RESPONSE.json({ success: true })
  } catch (err) {
    console.log('error', err)
    return RESPONSE.error(err)
  }
}
