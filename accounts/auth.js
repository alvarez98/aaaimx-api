'use strict'

const jwt = require('jsonwebtoken')

function sign (payload, secret) {
  return jwt.sign(payload, secret, {
    expiresIn: '1h'
  })
}

function verify (token, secret) {
  return jwt.verify(token, secret)
}

module.exports = {
  sign,
  verify
}
