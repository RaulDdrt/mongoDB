let mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rauldiazdrt:mymongo123@rauld.nhvo4lb.mongodb.net/" ,
                {useNewUrlParser: true, useUnifiedTopology: true
})
.then((db)=>{
    console.log("database connected on " + db.connection.host)
})
.catch((error) =>{
    console.log(error)
})
