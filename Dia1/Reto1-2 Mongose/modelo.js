const mongoose = require("mongoose")
const User = require("./indexs/index")


mongoose.connect("mongodb+srv://rauldiazdrt:mymongo123@rauld.nhvo4lb.mongodb.net/" ,
                {useNewUrlParser: false, useUnifiedTopology: false})

let userDocument = new User({
    login: "Max Power",
    password: "1234"

})

userDocument.save()
    .then(() => {
        console.log("Documento guardado");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log("Error: " + err)
});