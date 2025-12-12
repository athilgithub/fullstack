const express = require('express');
const mongoose = require('mongoose');
const app = express();
const env = require('dotenv');
env.config();
const port =  process.env.PORT;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('database connected successfully');
}).catch((err)=>{
    console.log('database connection failed', err);
})

const userSchema = mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    name: {type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
});

const user = mongoose.model("users",userSchema);

app.get('/getuser', async (req,res)=>{
     try{
       const users =await user.find()
       res.status(200).json({message:"all user fetch successfully",users});
     }catch(err){
       res.status(400).json({message:"error to fetch users",err})     
    }
})

app.get('/getuser/:id', async (req,res)=>{
     try{
        const id = Number(req.params.id);
        console.log(id);
       const userid =await user.findOne({id});
       console.log(userid);
       if(!userid){
        res.status(404).json({message:"user not found"});
       }
       res.status(200).json({message:" user fetch successfully",userid});
     }catch(err){
       res.status(400).json({message:"error to fetch users",err})     
    }
})

app.post('/adduser',async (req,res)=>{
    try{
   const newUser = new user({
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    })

    await newUser.save();
    res.status(201).json({message:"user added successfully"});
}catch(err){
    res.status(400).json({message:"error to add new user",err})
}
})

app.put('/updateuser/:id', async (req,res)=>{
    try{
      const updateUser = await user.findByIdAndUpdate(
        req.params.id,
        {
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
        },
        {new:true}
      );
      if(!updateUser){
        res.status(404).json({message:"user id ot found"})
      }
      res.status(201).json({message:"user updated successfully",updateUser});
    }catch(err){
        res.status(400).json({message:"error to update user",err})
    }
})

app.delete('/deleteuser/:id',async function(req,res){
    try{
     const deleteUser = await user.findByIdAndUpdate(req.params.id,{new:true});
     if(!deleteUser){
        res.status(404).json({message:"user not found"});
     }
     res.status(201).json({message:"user deleted successfully",deleteUser});
    }catch(err){
        res.status(400).json({message:"error to delete user",err})
    }
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})