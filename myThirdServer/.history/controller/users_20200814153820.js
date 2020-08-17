const services = require('../services/users')

async function init(ctx, next) {
    await ctx.render('users')
}

async function checkName(ctx, next) {
    const { name } = ctx.request.body
    await services.checkName(name)


}

module.exports = {
    init,
    checkName
}