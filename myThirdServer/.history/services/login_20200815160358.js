const model = require('../models/users')

async function login(name, password) {
    let result = await model.findOne({ name, password })
    let data = { status: 'success' }
    if (!result) {
        // data.status = 'failed'
        // data.message = '密码不对'
        rediect()
    }

    return data
}

async function rediect(ctx, next) {
    ctx.rediect('/users')
}

module.exports = {
    login
}