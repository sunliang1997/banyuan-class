const mongoose = require('mongoose')
const { Schema } = mongoose
const userSchema = new Schema({
    'name': String,
    'password': String
})

const usersModel = mongoose.model('users', userSchema)

module.exports = {
    usersModel
}

