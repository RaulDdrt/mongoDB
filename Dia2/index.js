const mongoose = require("mongoose")


const photoShema = new mongoose.Schema({
    userName: String,
    photoUrl: String,
    photoTitle: String,
    description: String

})


module.exports = mongoose.model("Photos" , photoShema, "Photos",)
