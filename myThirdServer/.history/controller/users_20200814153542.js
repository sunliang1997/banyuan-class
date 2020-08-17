async function init(ctx, next) {
    await ctx.render('users')
}

async function checkName(ctx, next) {

}

module.exports = {
    init
}