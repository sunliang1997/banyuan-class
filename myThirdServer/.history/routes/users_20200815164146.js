const controller = require('../controller/users')

module.exports = (router) => {
  router.get('/users', controller.init)
  router.post('/users/checkName', controller.checkName)
  router.post('/users/regist', controller.regist)
  router.get('users/login', controller.login)
}
