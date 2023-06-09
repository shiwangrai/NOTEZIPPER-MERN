const express=require("express");
const notes=require("./data/notes");
const dotenv=require('dotenv');
const mongoose = require('mongoose');
//const connectDB = require("./config/db");

const app=express();
dotenv.config();
mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true

    }).then(()=>console.log("Jai Shree Ram Connected to MongoDB "))
   .catch((err)=>console.error(err))
//connectDB();

app.get("/",(req,res)=>{
    res.send("API  is running..")
});

app.get("/api/notes",(req,res)=>{
    res.json(notes);
});

app.get('/api/notes/:id/',(req,res)=>{
    const note=notes.find((n)=>n._id === req.params.id);
    res.send(note);
    
    console.log(req.params);
})

 PORT = process.env.PORT || 5000;//stored pord in .env file if port will not find it will run in 5000 port
app.listen(PORT, console.log(`Server listen at post ${PORT}`));