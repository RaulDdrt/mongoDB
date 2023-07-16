const mongoose = require("mongoose")
const newTeacher = require("./teachersModel")


mongoose.connect("mongodb+srv://rauldiazdrt:mymongo123@rauld.nhvo4lb.mongodb.net/" ,
                {useNewUrlParser: true, useUnifiedTopology: true
})

let teacherSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String,
})

// let teacherDocument = new newTeacher({
//     teacher_first_name: "juan",
//     teacher_last_name: "gomez"
// })

// teacherDocument.save()
//     .then(() => {
//         console.log("Documento guardado");
//         mongoose.disconnect();
//     })
//     .catch((err) => {
//         console.log("Error: " + err)
// });

// newTeacher.find({}, "teacher_first_name , teacher_last_name")
// .then((profes)=>{
//     profes.forEach(profe=>{
//         console.log(profe.teacher_first_name, profe.teacher_last_name)
//     })
// })
// .catch((error)=>{
//     console.log(error)
// })

newTeacher.countDocuments({})
.then((teachers)=>{
    console.log("Hay " + teachers + " profesores en el bootcamp")
})
.catch((error) =>{
    console.log(error)
})

