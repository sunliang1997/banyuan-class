const { checkName: testName } = require('../common/utils')

function checkName(name) {

    //正则检查
    if (testName(name)) {

    }
}

module.exports = {
    checkName
}