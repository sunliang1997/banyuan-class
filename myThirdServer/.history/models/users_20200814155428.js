const { usersModel } = require('./schema/users')

async function insertOne(data) {
    const userModel = new usersModel(data)
    await userModel.save()
}


async function find(query) {
    return usersModel.find(query)
}

async function findOne(query) {
    return usersModel.findOne(query)
}

module.exports = {
    insertOne,
    find,
    findOne
}


