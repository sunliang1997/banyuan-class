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
    login
}