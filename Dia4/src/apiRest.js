const app = require ("./app")
require("./database")

app.listen(app.get("port"), function (){

    console.log("Server listen of port " + app.get("port"))
})