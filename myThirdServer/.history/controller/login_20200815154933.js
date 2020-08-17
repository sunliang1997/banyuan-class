const { checkName: checkLoginName } = require('../common/utils')
const services = require('../services/login')

async function login(ctx, next) {
    await ctx.render('login')
}

async function check(ctx, next) {
    const { name, password } = ctx.request.body

    let data = {}
    //检查姓名和密码是否满足要求
    let nameResult = await checkLoginName(name)
    if (nameResult) {
        let passwordResult = await services.checkPassword(password)
        if (passwordResult) {
            let loginResult = await services.login(name, password)

            if (loginResult.status === 'success') {
                data.status = 'success'
            }
        } else {
            data.status = 'failed'
            data.message = '密码不符合要求'
        }
    } else {
        data.status = 'failed'
        data.message = '用户名不符合要求'

    }

    ctx.response.body = data
}

module.exports = {
    login,
    check
}