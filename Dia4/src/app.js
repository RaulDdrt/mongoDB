const express = require("express")
const cors = require("cors")
const photoRouters = require("./routers/photo.routers")
const errorHandling = require("./error/errorHandling")

const app = express()

app.set("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json())
app.use(photoRouters);
app.use(function(req, res, next){
    res.status(418).json({message: "I'm a teapot, cant do coffee"})
})

app.use(errorHandling)

module.exports = app