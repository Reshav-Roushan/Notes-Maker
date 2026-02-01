const mongoose = require('mongoose')





function connectToDB(){

    mongoose.connect("mongodb+srv://reshav1995_db_user:rq92OeCFvIrEtwN5@cluster0.xkflqrb.mongodb.net/Feb26")
    .then(()=>{
        console.log("Connected to DB");
        
    })
}

module.exports = connectToDB