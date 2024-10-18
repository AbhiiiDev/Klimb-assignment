const User=require('../models/User');

const createUser=async(req,res)=>{
const {firstName,lastName,phone,email,role,location,department}=req.body;

try {
    const newUser=new User({firstName,lastName,phone,email,role,location,department});
    await newUser.save();
    res.status(201).json({user:newUser,message:"User created successfully"});
} catch (error) {
    res.status(400).json({message:error.message})
}
}


const getAllUser=async(req,res)=>{
try {
const users=await User.find();
return res.status(200).json({users:users,message:"user fetched successfully"});
} catch (error) {
    return res.status(400).json({message:"can't find any users"});
}
}

module.exports={createUser,getAllUser}