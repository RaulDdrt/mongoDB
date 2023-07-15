const mongoose = require("mongoose")
const { boolean } = require("webidl-conversions")

const ProfileSchema = new mongoose.Schema({
    name : String,
    surname: String,
    dateOfBirth: String,
    Comments: String,
    rol : String
})

// module.exports = mongoose.model("Usuario" , UserSchema, "Users2",)
module.exports = mongoose.model("Perfil" , ProfileSchema, "Users2")
// module.exports = mongoose.model("Credentials" , CreedentialsSchema, "Users2")