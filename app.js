const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
app.use(cors());

app.get("/",(req,res,next)=>{
    res.send({message:"Running !"});
});

app.listen(PORT,err=>{
    if(err) throw err;
    else {
        console.log("Conected to ",PORT);
    }
});