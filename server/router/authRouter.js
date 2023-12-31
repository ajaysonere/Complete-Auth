import express from 'express';
import { registerController , loginController } from '../controller/authController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const authRouter = express.Router();

authRouter.get("/" , (req ,res)=>{
    res.send('This is Home Page')
});

authRouter.post("/auth/register" , registerController);

authRouter.post("/auth/login", loginController);
authRouter.get("/get-data" ,verifyToken , (req , res) => {
    res.status(200).json({success:true , message:"data is fetched successully"});
})

export default authRouter;