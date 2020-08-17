const mongoose = require('mongoose')
const { Schema } = mongoose
const usersSchema = new Schema({
    'name': String,
    'password': String
})

const studentsModel = mongoose.model('students', studentSchema)

module.exports = {
    studentsModel
}

