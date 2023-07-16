const mongoose = require("mongoose")
const newMark = require("./marksModel")


mongoose.connect("mongodb+srv://rauldiazdrt:mymongo123@rauld.nhvo4lb.mongodb.net/" ,
                {useNewUrlParser: false, useUnifiedTopology: false
})


let markDocument = new newMark({
    id: 10,
    date: 1993,
    mark: 9,
    student_first_name: "raul",
    student_last_name: "diaz",
    group_name: "tarde",
    subject_name: "SQL",
    teachers: ["erika", "juan"]
})

markDocument.save()
    .then(() => {
        console.log("Documento guardado");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log("Error: " + err)
});
