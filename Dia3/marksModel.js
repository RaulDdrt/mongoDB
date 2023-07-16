const mongoose = require("mongoose")

const markSchema = new mongoose.Schema({
    id: {type: Object, required: true},
    date: {type: Number, required: true},
    mark: {type: Number, required: true},
    student_first_name: { type: String, required: true},
    student_last_name: { type: String, required: true},
    group_name: { type: String, required: true},
    subject_name: {type: String, required: true},
    teachers: {type: [], required: false}

})

module.exports = mongoose.model("Marks" , markSchema, "Marks",)