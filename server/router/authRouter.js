import express from 'express';
import { registerController , loginController } from '../controller/authController.js';

const authRouter = express.Router();

authRouter.get("/" , (req ,res)=>{
    res.send('This is Home Page')
});

authRouter.post("/auth/register" , registerController);

authRouter.post("/auth/login", loginController);

export default authRouter;