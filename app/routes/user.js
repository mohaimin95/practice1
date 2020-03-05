const router = require("express").Router();

//GET Request
//Callback (req,res)=>{}
router.get("/login",(req,res)=>{
    res.send({message:"Success"});
});

router.get("/register",(req,res)=>{
    res.send({message:"Success"});
});

module.exports = router;