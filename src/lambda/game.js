const { get } = require('lodash')
const uuidv1 = require('uuid/v1')

const RESPONSE = require('./lib/response')
const { Game } = require('./lib/data')

module.exports.init = async () => {
  const gameId = uuidv1()

  try {
    await Game.create({
      id: gameId
    })

    return RESPONSE.json({ id: gameId })
  } catch (err) {
    console.log('error', err)
    return RESPONSE.error(err)
  }
}

module.exports.save = async (event) => {
  console.log('the event', event)
  const gameId = get(event, 'pathParameters.id')
  const name = get(event, 'queryStringParameters.name')
  const score = get(event, 'queryStringParameters.score')
  const newGame = {
    id: gameId,
    name,
    score
  }

  try {
    const game = await Game.findByPk(gameId)

    if (!game) {
      return RESPONSE.notFound('Game not found')
    }

    await Game.upsert(newGame)

    return RESPONSE.json(newGame)
  } catch (err) {
    console.log('error', err)
    return RESPONSE.error(err)
  }
}

module.exports.scores = async () => {
  try {
    const result = await Game.findAll({ limit: 10, order: [['score', 'DESC']] })

    return RESPONSE.json({ scores: result })
  } catch (err) {
    console.log('error', err)
    return RESPONSE.error(err)
  }
}

module.exports.verify = async event => {
  const gameId = get(event, 'queryStringParameters.gameId')

  try {
    const game = await Game.findByPk(gameId)

    if (!game) {
      return RESPONSE.unauthorized()
    }

    return RESPONSE.authorized()
  } catch (err) {
    console.log('error', err)
    return RESPONSE.unauthorized()
  }
}
