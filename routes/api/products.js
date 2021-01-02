const express=require("express");
let middlewareForValidate=require("../../middleWares/validateLog");
let {myModel,validate}=require("../../Model/myModel");
let auth=require("../../middleWares/auth");
let admin=require("../../middleWares/adminAuth");


let router=express.Router();

//get all data
router.get("/",async (req,res)=>{
   
    let logger=await myModel;
    
    
    return res.send(logger);
});

router.post("/", auth, async (req,res)=>{
    
    let logger=new myModel();
    logger.id=req.body.id;
    logger.prName = req.user.prName;
    logger.prCategory=req.body.prCategory;
    logger.prPrice=req.body.prPrice;
    logger.prDetails=req.prDetails;
    logger.prImage=req.body.prImage;

     await logger.save();
    return res.send(logger);
});

module.exports=router;