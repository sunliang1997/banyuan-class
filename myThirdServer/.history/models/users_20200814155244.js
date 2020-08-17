const { usersModel } = require('./schema/users')

async function insertOne(data) {
    const userModel = new usersModel(data)
    await userModel.save()
}


async function find(query) {
    return studentsModel.find(query)
}

module.exports = {
    insertOne,
    find
}


