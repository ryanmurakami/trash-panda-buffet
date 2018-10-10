const { get } = require('lodash')

const RESPONSE = require('./lib/response')
const { Action } = require('./lib/data')

module.exports.save = (event, _, callback) => {
  const AWSXRay = require('aws-xray-sdk')
  const AWS = AWSXRay.captureAWS(require('aws-sdk'))

  AWS.config.update({ region: process.env.AWS_REGION })

  const kinesis = new AWS.Kinesis()

  const data = {
    foodItemId: get(event, 'queryStringParameters.foodItemId'),
    gameId: get(event, 'queryStringParameters.gameId'),
    trashPandaId: get(event, 'queryStringParameters.trashPandaId')
  }
  const params = {
    Data: JSON.stringify(data),
    PartitionKey: process.env.PARTITION_KEY,
    StreamName: process.env.STREAM_NAME
  }

  kinesis.putRecord(params, (err, data) => {
    if (err) callback(err)
    else callback(null, RESPONSE.json({ success: true }))
  })
}

module.exports.process = async (event) => {
  try {
    const records = get(event, 'Records', [])
    const actionIds = []

    for (const record of records) {
      const stringData = Buffer.from(get(record, 'kinesis.data'), 'base64').toString()
      const data = JSON.parse(stringData || '{}')

      if (data) {
        const res = await Action.create({
          foodItemId: data.foodItemId,
          gameId: data.gameId,
          trashPandaId: data.trashPandaId
        })
        actionIds.push(get(res, 'dataValues'))
      }
    }

    console.log('processed', actionIds)
  } catch (err) {
    console.log('error', err)
  }
}
