const express = require('express'); //Initial
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/note.model')


connectToDB()
const app = express() //Initial
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello world!");
})

app.post('/notes',async (req,res)=>{
    const{title,content} = req.body;
    console.log(title,content)

    await noteModel.create({
        title,content
    })
    res.json({
        message:"Note created sucessfully"
    })
    
})


//Initial
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})