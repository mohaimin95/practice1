const router = require("express").Router();
const auth = require("../middlewares/auth");
router.use(auth)
//GET Request
//Callback (req,res)=>{}
router.get("/",(req,res)=>{
    res.send({message:"Success",userDetails:req.user});
});

//GET Request
//query req.query

router.get("/filter",(req,res)=>{
    res.send({message:"Success ",query:req.query});
});
//GET Request
//params req.params

router.get("/:id",(req,res)=>{
    res.send({message:"Success "+req.params.id});
});

//POST Request
//body req.body

router.post("/",(req,res)=>{
    res.send({message:"Success ",body:req.body});
});

//PUT Request
//body req.body


router.put("/:id",(req,res)=>{
    res.send({message:"Success ",body:req.body});
});


module.exports = router;