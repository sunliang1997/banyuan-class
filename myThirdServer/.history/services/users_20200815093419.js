const { checkName: testName, checkPassword: testPassword } = require('../common/utils')
const model = require('../models/users')


async function checkName(name) {

    let data = { flag: true }
    //正则检查
    if (testName(name)) {
        //用户名重复检查    
        let result = await model.findOne({ name })
        if (result) {
            data.flag = false
            data.message = '用户名重复'
        }

    } else {
        data.flag = false
        data.message = '用户名不符合标准'
    }
    return data
}

async function checkPassword(password) {
    return testPassword(password)
}

async function regist(name, password) {
    await model.insertOne({ name, password })
}

async function login(name, password) {
    let result = await model.findOne({ name, password })
    let data = { status: 'success' }
    if (!result) {
        data.status = 'failed'
        data.message = '密码不对'
    }

    return data
}

module.exports = {
    checkName,
    checkPassword,
    regist,
    login
}