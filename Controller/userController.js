const users=require('../Model/userSchema')
const jwt=require('jsonwebtoken')

// register
exports.register=async(req,res)=>{
    console.log("inside register controller function");
    const {username,email,password}=req.body
    try{
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(406).json("account already exists !!!! please login...")
        }else{
            const newUser=new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(200).json(`Register Api failed, Error:${err}`)

    }
}

// login
exports.login=async(req,res)=>{
    console.log("inside login function");
    const{email,password}=req.body
    try{
        const existingUser=await users.findOne({email,password})
        // console.log("the existing user",existingUser);
        if(existingUser){
            const token=jwt.sign({userId:existingUser._id},"supersecretkey12345")
            res.status(200).json({
                existingUser,token
            })
        }else{
            res.status(404).json('incorrect Email / Password')
        }
    }
    catch(err){ 
        res.status(401).json(`login api failed : ${err}`)
    }
}

// getallorders
exports.getAllUsers=async(req,res)=>{
    console.log("inside getUsersorders");
    
    try {
      const result=await users.find()
      res.status(200).json(result)
      console.log(result);
  
  } catch (error) {
      console.log(error);
      res.status(401).json(`Request failed: ${error}`)
  
  }
  }