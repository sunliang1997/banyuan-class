const { checkName: testName } = require('../common/utils')

function checkName(name) {

    //正则检查
    if (testName(name)) {
        //用户名重复检查
    }
}

module.exports = {
    checkName
}