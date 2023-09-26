import StatusCodes from 'http-status-codes';
import user from './../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import 'dotenv/config.js';


export const registerController = async (req , res)=> {
     
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password , salt);


    try{
         const data = await user.create({
             username:req.body.username,
             email: req.body.email,
             password: hash
         });
         res.status(StatusCodes.CREATED).json({success:true ,"message":'registered succesfully'});
    }catch(err){
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success:false , "message":"registration failed"});
    }
}

export const loginController =async (req , res) => {
    try {
           const email = await req.body.email;
           const User = await user.findOne({email});

           if(!User){
              res.status(StatusCodes.NOT_FOUND).json({success:false ,"message":"email not found"});
           }

           const password = await bcrypt.compareSync(req.body.password , User.password);

           if(!password){
               res.status(StatusCodes.NOT_FOUND).json({success: false,"message":"Password incorrect "});
           }
           const token = jwt.sign({user:User._id , name : User.username} , process.env.JWT_KEY ,{expiresIn:'5d'} );

           res.status(StatusCodes.OK).json({success:true , message:"logged in" , user:token});
    } catch (err){
        console.log(err.message);
    }
}