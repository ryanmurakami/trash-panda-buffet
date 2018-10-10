function any (body, type) {
  return {
    statusCode: 200,
    body,
    headers: {
      'Content-Type': type
    }
  }
}

function error (err) {
  return {
    statusCode: 500,
    body: JSON.stringify(err),
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

function json (body) {
  return {
    statusCode: 200,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

function notFound (msg) {
  return {
    statusCode: 404,
    body: msg,
    headers: {
      'Content-Type': 'text/plain'
    }
  }
}

function authorized () {
  return {
    principalId: 'user',
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: '*'
        }
      ]
    }
  }
}

function unauthorized () {
  return {
    principalId: 'user',
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Deny',
          Resource: '*'
        }
      ]
    }
  }
}

module.exports = {
  any,
  authorized,
  error,
  json,
  notFound,
  unauthorized
}
