const mongoose = require('mongoose')
const { Schema } = mongoose
const userSchema = new Schema({
    'name': String,
    'password': String
})

const usersModel = mongoose.model('students', userSchema)

module.exports = {
    studentsModel
}

