class PopulateData {
  constructor (serverless) {
    this.serverless = serverless
    this.hooks = {
      'before:package:createDeploymentArtifacts': this.populateData,
      'aws:info:displayStackOutputs': this.populateData,
      'after:aws:deploy:deploy:updateStack': this.populateData
    }
  }

  populateData () {
    console.log('serverless', this.serverless)
  }
}

module.exports = PopulateData
