const mongoose = require("mongoose")
const { boolean } = require("webidl-conversions")

const UserSchema = new mongoose.Schema({
    login: String,
    password: String,

})

const ProfileSchema = new mongoose.Schema({
    name : String,
    surname: String,
    dateOfBirth: String,
    Comments: String,
    rol : String
})

const CreedentialsSchema = new mongoose.Schema({
    adress: String,
    phone: Number,
    email: String
})

module.exports = mongoose.model("Usuario" , UserSchema, "Users2",)
// module.exports = mongoose.model("Perfil" , ProfileSchema, "Users2")
// module.exports = mongoose.model("Credentials" , CreedentialsSchema, "Users2")