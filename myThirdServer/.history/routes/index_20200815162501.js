const users = require('./users')
const login = require('./login')


module.exports = (router) => {
  router.get('/welcome', (ctx, next) => {
    ctx.render('index')
  })

  users(router)
  login(router)
}
