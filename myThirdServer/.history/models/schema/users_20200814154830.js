const mongoose = require('mongoose')
const { Schema } = mongoose
const studentSchema = new Schema({
    'name': String,
    'password': String
})

const studentsModel = mongoose.model('students', studentSchema)

module.exports = {
    studentsModel
}

