const users = require('./users')
const { login } = require('../services/users')

module.exports = (router) => {
  users(router)
  login(router)
}
