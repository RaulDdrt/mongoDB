const mongoose = require("mongoose")
const Profile = require("./indexs/index2");


mongoose.connect("mongodb+srv://rauldiazdrt:mymongo123@rauld.nhvo4lb.mongodb.net/" ,
                {useNewUrlParser: false, useUnifiedTopology: false})

let perfilDocument = new Profile({
    name: "pedro",
    surname: "diaz",
    dateOfBirth: "15/01/1993",
    Comments: "Un perro genial",
    rol: "teacher"
})

perfilDocument.save()
    .then(() => {
        console.log("Documento guardado");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log("Error: " + err)
});