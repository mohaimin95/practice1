const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

const userRoute = require("./app/routes/user");
const cartRoute = require("./app/routes/cart");

app.use(cors());
app.use(express.json());
app.get("/",(req,res,next)=>{
    res.send({message:"Running !"});
});
//controllers
app.use("/user",userRoute);
app.use("/cart",cartRoute);

//end of controllers
app.listen(PORT,err=>{
    if(err) throw err;
    else {
        console.log("Conected to ",PORT);
    }
});