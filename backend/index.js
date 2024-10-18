const express=require('express');
require('dotenv').config();

const cors=require('cors');

const PORT=process.env.PORT;
const UserRoutes=require('./routes/UserRoute')

const {connectDB}=require('./configs/db');
const app=express();

app.use(cors());

app.get('/health',(req,res)=>{
res.send('server working fine')
})


app.use(express.json());

app.use('/api/v1',UserRoutes);


connectDB();
app.listen(PORT,()=>{
    console.log(`server listening on port:${PORT}`);
})