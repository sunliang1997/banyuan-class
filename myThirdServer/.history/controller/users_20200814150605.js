async function init(ctx, next) {
    await ctx.render('users')
}

module.exports = {
    init
}