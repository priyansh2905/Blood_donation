const CryptoJs = require ("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv  = require("dotenv")
dotenv.config();

//Register User
const registerUser = async (req,res) =>{
     const newUser = User({
        name : req.body.name,
        email:req.body.email,
        password:CryptoJs.AES.encrypt(
            req.body.password,
            process.env.PASS,
        ).toString()
     });

     try{
        const user = await newUser.save();
        res.status(201).json(user);
     }catch(error){
        res.status(500).json(error);
     }
};


//Login User
const loginUser =async(req,res) =>{
    try{
       const user  =await User.findOne({email:req.body.email});
       if(!user){
        return  res.status(401).json("user not registered");
       }

       const hashedPassword = CryptoJs.AES.decrypt(
        user.password,
        process.env.PASS
       );

      const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
      
      if(originalPassword !== req.body.password){
        return  res.status(500).json("Wrong password")
      }

     const {password, ...info} = user._doc;
     const accessToken = jwt.sign(
        {id:user._id , role:user.role},
        process.env.JWT_SEC,
        {expiresIn:"10d"}
     );

     res.status(200).json({...info , accessToken});
    }catch(error){
      console.log("Login Error: ", error);
     res.status(500).json("error caught during login")
    }
};


module.exports={loginUser , registerUser}