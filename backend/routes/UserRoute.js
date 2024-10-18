const express=require('express');
const {createUser, getAllUser,getUser, updateUser}=require('../controllers/UserController')

const router=express.Router();


router.post('/user',createUser);
router.get('/users',getAllUser);
router.get('/user/:id',getUser);
router.put('/user/:id',updateUser);

module.exports=router;