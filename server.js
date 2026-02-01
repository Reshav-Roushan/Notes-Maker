const express = require('express'); //Initial
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/note.model')


connectToDB()
const app = express() //Initial
app.use(express.json())



//Create operation
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

//Read operation
app.get('/notes',async(req,res)=>{
    const notes = await noteModel.find()
    res.json({
        message:"Notes fetch successfully",
        notes
    })
})

//delete operation
app.delete("/notes/:id",async(req,res)=>{
    const noteId = req.params.id

    await noteModel.findOneAndDelete({
        _id : noteId
    })
    res.json({
        message:"Note Deleted"
    })
})

//update operation
app.patch("/notes/:id",async(req,res)=>{
    const noteId = req.params.id
    const {title} = req.body
    
    await noteModel.findOneAndUpdate({
        _id : noteId
    },{
        title: title
    })
    res.json({
        message:"Note updated"
    })
})


//Initial
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})