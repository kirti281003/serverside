const express=require("express");
const app=express();
const port=3000;
const mongoose=require("mongoose");
const {MONGOURI}=require('./keys');
mongoose.connect(MONGOURI);
mongoose.connection.on('connected',()=>{
    console.log("Database functional");
})
mongoose.connection.on('error',(err)=>{
    console.log(err);
})

app.listen(port,function(){
    console.log("Port 3000");
});