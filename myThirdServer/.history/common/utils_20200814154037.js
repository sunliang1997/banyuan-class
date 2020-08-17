
/**
 * 
 * @param {正则要求检查姓名} name 
 */
function checkName(name) {
    let partten = /[a-zA-Z0-9_-]{4,16}/
    return partten.test(name)
}

module.exports = {
    checkName
}