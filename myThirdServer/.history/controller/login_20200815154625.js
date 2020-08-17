async function login(ctx, next) {
    await ctx.render('login')
}

async function check(ctx, next) {

}

module.exports = {
    login,
    check
}