const readRegion = require('aws-read-region')

module.exports = () => {
  return readRegion()
    .then(config => config.region)
}
