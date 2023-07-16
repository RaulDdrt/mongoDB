const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    teacher_first_name: { type: String, required: true},
    teacher_last_name: { type: String, required: true}

})

module.exports = mongoose.model("Teachers" , teacherSchema, "Teachers",)



