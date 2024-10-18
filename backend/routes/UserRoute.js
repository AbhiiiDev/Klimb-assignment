const express=require('express');
const {createUser, getAllUser}=require('../controllers/UserController')

const router=express.Router();


router.post('/user',createUser);
router.get('/user',getAllUser);

module.exports=router;