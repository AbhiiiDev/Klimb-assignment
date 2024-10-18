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

const getUser=async(req,res)=>{
    const {id}=req.params;

    try {
        const user=await User.findById(id);
        if(!user)
        {
            return res.status(404).json({message:"user can not be found"});
        }

        return res.status(200).json({user})
    } catch {
       return res.status(400).json({message:"Internal server error"}); 
    }
}


const updateUser=async(req,res)=>{
const {id}=req.params;
const updatedData=req.body;

try{
const updatedUser=await User.findByIdAndUpdate(id,updatedData,{
    new:true,
    runValidators:true,
});

if(!updatedUser){
    return res.status(404).json({message:"user not found"});
}

res.status(200).json({
    message:"user updated successfully",
    updatedUser,
})
}
catch(error){

}
}

module.exports={createUser,getAllUser,getUser,updateUser}