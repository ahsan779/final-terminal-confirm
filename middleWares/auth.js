let jwt=require("jsonwebtoken");
let config=require("config");
let {myUserSchema}=require("../Model/userModel")
const { func } = require("@hapi/joi");

async  function auth(req,res,next) {
   
}

module.exports=auth;