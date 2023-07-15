const mongoose = require("mongoose")
const Credentials = require("./indexs/index3");


mongoose.connect("mongodb+srv://rauldiazdrt:mymongo123@rauld.nhvo4lb.mongodb.net/" ,
                {useNewUrlParser: false, useUnifiedTopology: false})

let perfilDocument = new Credentials({
    adress: "pedro",
    phone: 123456789,
    email: "soy@guay.com",
})

perfilDocument.save()
    .then(() => {
        console.log("Documento guardado");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log("Error: " + err)
});