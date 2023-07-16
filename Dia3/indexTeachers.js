const mongoose = require("mongoose")
const newTeacher = require("./teachersModel")


mongoose.connect("mongodb+srv://rauldiazdrt:mymongo123@rauld.nhvo4lb.mongodb.net/" ,
                {useNewUrlParser: false, useUnifiedTopology: false
})


let teacherDocument = new newTeacher({
    teacher_first_name: "juan",
    teacher_last_name: "gomez"
})

teacherDocument.save()
    .then(() => {
        console.log("Documento guardado");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log("Error: " + err)
});
