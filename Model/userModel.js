const mongoose=require("mongoose");
var bcrypt = require('bcryptjs');



//for registration
var userSchema=mongoose.Schema({
   "Name":String,
   "Email":String,
   "Password":String,
    "role":{
       type:String,
       default: "admin",
   },
});
userSchema.methods.generateHashedPassword = async function(){
      let salt=await bcrypt.genSalt(10);
      this.Password=await bcrypt.hash(this.Password,salt);
};
var myUserSchema=mongoose.model("User",userSchema);
module.exports.myUserSchema=myUserSchema;
