const users = require('./users')
const login = require('./login')


module.exports = (router) => {
  router.get('/welcome', async (ctx, next) => {
    await ctx.render('index')
  })

  users(router)
  login(router)
}
