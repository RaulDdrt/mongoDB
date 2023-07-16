const photoModel = require("../model/model")


function getPhotos(req, res){
    if(req.query.id == null){
        photoModel.find({})
        .then( (photo) =>
        {
            console.log(photo)
            res.send(photo)
        })
        .catch( (err) =>{
            console.log(err)
            process.exit(-1)
        })
    }else{
        photoModel.findById(req.query.id)
        .then( (photo) =>{
            console.log(photo)
            res.send(photo)
        })
        .catch( (err) =>{
            console.log(err)
            process.exit(-1)
        })
    }
}

function postPhoto(req, res){
    console.log(req.body)

    let newPhoto = new photoModel({userName: req.body.userName,
                                        photoUrl: req.body.photoUrl,
                                        photoTitle: req.body.photoTitle,
                                        descripction: req.body.descripction})
    newPhoto.save()
    .then( (newPhoto) =>{
        console.log("Foto guardada correctamente")
        console.log(newPhoto)
        res.send(newPhoto)
    })
    .catch( (err) =>{
        console.log(err)
        process.exit(-1)
    })
    
}

function editPhoto(req, res){
    console.log(req.body);

    photoModel.findOneAndUpdate({photoTitle: req.body.photoTitle},
                                    {userName: req.body.userName,
                                        photoUrl: req.body.photoUrl,
                                        photoTitle: req.body.photoTitle,
                                        description: req.body.description})
    .then ( (updatedPhoto) =>{
        console.log("Libro editado correctamente")
        console.log(updatedPhoto);
        res.send(updatedPhoto);
    })
    .catch( (err) =>{
        console.log(err)
        process.exit(-1)
    })
}

function deletePhoto(req, res){
    console.log(req.body);

    photoModel.deleteOne({userName: req.body.userName, photoTitle: req.body.photoTitle},
                            {userName: req.body.userName,
                                photoUrl: req.body.photoUrl,
                                photoTitle: req.body.photoTitle,
                                description: req.body.description
                            })
    .then((deletedBook) =>{
        console.log("Libro borrado correctamente")
        console.log(deletedBook)
        res.send(deletedBook)
    })
    .catch( (err) =>{
        console.log(err);
        process.exit(-1)
    })
}

function deleteAllPhotos(req, res){
    console.log(req.body);

    photoModel.deleteMany({userName: req.body.userName},
                            {userName: req.body.userName
                            })
    .then((deletedBook) =>{
        console.log("Todas las fotos del usuario se han borrado")
        console.log(deletedBook)
        res.send(deletedBook)
    })
    .catch( (err) =>{
        console.log(err);
        process.exit(-1)
    })
}




module.exports = { getPhotos, postPhoto, editPhoto, deletePhoto, deleteAllPhotos }
