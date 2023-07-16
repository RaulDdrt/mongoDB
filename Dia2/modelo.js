const mongoose = require("mongoose")
const photoDB = require("./index")


mongoose.connect("mongodb+srv://rauldiazdrt:mymongo123@rauld.nhvo4lb.mongodb.net/" ,
                {useNewUrlParser: false, useUnifiedTopology: false
})


let perfilDocument = new photoDB({
userName: "pedro",
photoUrl: "https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067",
photoTitle: "Gato",
description: "Mi mayor enemigo"

})

perfilDocument.save()
    .then(() => {
        console.log("Documento guardado");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log("Error: " + err)
});

// photoDB.find({ userName: "pedro" })

//   .then(function(photoDB) {
//     console.log("Estas son las fotos del usuario: " + photoDB);
//     mongoose.disconnect();
//   })

//   .catch(function(err) {
//     console.log("Error: " + err);
// });

// photoDB.updateOne({photoTitle: "Gato"}, {description: "Mi mejor amigo", verified: false})

//     .then(function(photoDB) {
//     console.log("Descripcion actualizada correctamente");
//     mongoose.disconnect();
//   })

//     .catch(function(err) {
//     console.log("Error: " + err);
// });

// photoDB.deleteOne({"$and": [{"userName": "pedro"}, {"photoTitle": "Gato"}]})
//     .then(function(data) {
//     console.log("Foto eliminada correctamente");
//     console.log(data)
//     mongoose.disconnect();
//   })

//     .catch(function(err) {
//     console.log("Error: " + err);
// });

// photoDB.deleteMany

// photoDB.deleteMany({ userName: "pedro"})
//     .then(function(data) {
//     console.log("Fotos eliminadas correctamente");
//     console.log(data)
//     mongoose.disconnect();
//   })

//     .catch(function(err) {
//     console.log("Error: " + err);
// });



