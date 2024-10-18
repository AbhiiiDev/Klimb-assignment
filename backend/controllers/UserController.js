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

module.exports={createUser}