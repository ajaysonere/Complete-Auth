import express from "express";
import cors from 'cors';
import 'dotenv/config';
import authRouter from "./router/authRouter.js";
import Connection from "./config/db_Config.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());


app.use(authRouter);

app.listen(process.env.PORT , ()=>{
    Connection();
    console.log(`server is running at http://localhost:${process.env.PORT}`);
})
