import jwt from 'jsonwebtoken';
import "dotenv/config";

export const verifyToken = (req , res , next) =>{
   const token = req.header("Authorization");
   console.log(token);
   const verified =  jwt.verify(token, process.env.JWT_KEY);
   if(verified){
      next();
   }
   return res.status(400).json({success:false , message :"token is invalid"});
}

