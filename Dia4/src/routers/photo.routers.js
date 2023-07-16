const {Router} = require("express")
const photoRouters = Router()
const photoCtrl = require("../controller/photoController")

photoRouters.get("/photo", photoCtrl.getPhotos);
photoRouters.post("/photo" , photoCtrl.postPhoto)
photoRouters.put("/photo" , photoCtrl.editPhoto)
photoRouters.delete("/photo" , photoCtrl.deletePhoto)
photoRouters.delete("/photo" , photoCtrl.deleteAllPhotos)

module.exports = photoRouters