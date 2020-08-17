const mongoose = require('mongoose')
const { Schema } = mongoose
const usersSchema = new Schema({
    'name': String,
    'password': String
})

const userModel = mongoose.model('students', usersSchema)

module.exports = {
    studentsModel
}

