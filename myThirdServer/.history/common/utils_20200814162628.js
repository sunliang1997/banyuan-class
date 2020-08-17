
/**
 * 正则检查姓名
 */
function checkName(name) {
    let partten = /[a-zA-Z0-9_-]{4,16}/
    return partten.test(name)
}

function checkPassword(password) {
    let partten = /[\w]{8,15}/
    return partten.test(name)
}
module.exports = {
    checkName
}