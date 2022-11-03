const express=require("express");
const app=express();
const port=4000;
const mongoose=require("mongoose");
const {MONGOURI}=require('./keys');



mongoose.model("User");
mongoose.connect(MONGOURI);

mongoose.connection.on('connected',()=>{
    console.log("Database functional");
})
mongoose.connection.on('error',(err)=>{
    console.log(err);
})

require('./models/user');
require('./models/post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(port,function(){
    console.log("Port 4000");
});