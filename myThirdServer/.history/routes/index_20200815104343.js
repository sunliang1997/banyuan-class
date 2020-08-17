const users = require('./users')
const login = require('./login')


module.exports = (router) => {
  users(router)
  login(router)
}
