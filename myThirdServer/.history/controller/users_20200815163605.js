const services = require('../services/users')
const connect = require('../models/connection/connection')
const model = require('../models/users')

connect.initConnection()

async function init(ctx, next) {
    let users = await model.find({})
    ctx.state = {
        users
    }
    await ctx.render('users', ctx.state)
}

async function checkName(ctx, next) {
    const { name } = ctx.request.body

    let data = await services.checkName(name)
    ctx.response.body = data
}

async function regist(ctx, next) {
    const { name, password } = ctx.request.body

    let data = { status: 'success' }

    //检查姓名是否
    let result = await services.checkName(name)
    if (result.flag) {
        if (services.checkPassword(password)) {
            let flag = services.regist(name, password)
            if (flag) {

            }

        } else {
            data.status = 'failed'
            data.message = '密码不符合要求'
        }
    } else {
        data.status = 'failed'
        data.message = result.message
    }
    ctx.response.body = data
}

module.exports = {
    init,
    checkName,
    regist
}