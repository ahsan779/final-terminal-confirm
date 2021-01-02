const mongoose=require("mongoose");
const Joi = require("@hapi/joi");

var schema=mongoose.Schema({
    "id": String,
    "prName": String,
    "prCategory": String,
    "prPrice":Number,
    "prDetails":String,
    
    "prImage":String
});

var myModel=mongoose.model("product",schema);




module.exports.myModel=myModel;

