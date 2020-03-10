const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/practise",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
},(err)=>{
    if(err) throw err;
    else console.log("DB Connected")
});
const userRoute = require("./app/routes/user");
const cartRoute = require("./app/routes/cart");
const employeeRoute = require("./app/routes/employee");
app.use(cors({
    origin:['http://localhost:4200'],
}));
app.use(express.json());
app.get("/",(req,res,next)=>{
    res.send({message:"Running !"});
});
//controllers
app.use("/user",userRoute);
app.use("/cart",cartRoute);
app.use("/employee",employeeRoute);

//end of controllers
app.listen(PORT,err=>{
    if(err) throw err;
    else {
        console.log("Conected to ",PORT);
    }
});