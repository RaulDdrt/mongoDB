const mongoose = require("mongoose")
const newMark = require("./marksModel")
const newTeacher = require("./teachersModel")
const teachersModel = require("./teachersModel")


mongoose.connect("mongodb+srv://rauldiazdrt:mymongo123@rauld.nhvo4lb.mongodb.net/" ,
                {useNewUrlParser: false, useUnifiedTopology: false
})


let teacherSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String,
})

let markSchema = new mongoose.Schema({
    id: Number,
    date: Number,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [teacherSchema]
})



// newMark.aggregate([{$project: {"Date": "$date",
//                             student_first_name: "pedro",
//                         }}])
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

// newMark.aggregate([{$match:{subject_name: "MongoDB",}},{
//                     $group: {_id: null, notaMedia: {$avg: "$mark"}},
// }])
// .then((result) =>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

// newMark.countDocuments({})
// .then((alumnos)=>{
//     console.log("Hay " + alumnos + " alumnos en el bootcamp")
// })
// .catch((error) =>{
//     console.log(error)
// })

// newMark.find({}, "student_first_name , student_last_name")
// .then((alumnos)=>{
//     alumnos.forEach(alumno=>{
//         console.log(alumno.student_first_name, alumno.student_last_name)
//     })
// })
// .catch((error)=>{
//     console.log(error)
// })

// newMark.aggregate([{$group: {
//                             _id: "$group_name",
//                             alumnos: { $sum: 1 }
// }},
// {
//                             $sort: {
//                             _id: -1
// }}])
// .then((result)=>{
//     result.forEach((grupo)=>{
//         console.log(grupo._id, grupo.alumnos)
//     })
// })
// .catch((error) =>{
//     console.log(error)
// })

newMark.aggregate([{$group: {
                    _id: "$subject_name",
                    media: { $avg: "$mark" }
}
},
                {
                $match: {
                media: { $gt: 5 }
}
},
                {
                $sort: {
                media: -1
}
},
                {
                $limit: 5
}])
.then((result)=>{
    result.forEach(subject =>{
        console.log(subject._id)
    })
})
.catch((error) =>{
    console.log(error)
})
