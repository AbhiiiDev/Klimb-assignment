const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
firstName:String,
lastName:String,
phone:String,
email:{type:String, unique:true},
role:String,
location:String,
department:String,
})

const User=mongoose.model('User',UserSchema);

module.exports=User;