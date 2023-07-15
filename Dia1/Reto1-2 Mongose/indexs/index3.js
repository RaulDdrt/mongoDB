const mongoose = require("mongoose")
const { boolean } = require("webidl-conversions")

const CreedentialsSchema = new mongoose.Schema({
    adress: String,
    phone: Number,
    email: String
})

module.exports = mongoose.model("Credentials" , CreedentialsSchema, "Users2")