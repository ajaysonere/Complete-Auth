import mongoose from "mongoose";

const user = new mongoose.Schema({
    username: {type:String ,required:true },
    email : {type:String , required:true , unique : true},
    password : {type:String , required:true},
    quote:{type:String}
});

export default mongoose.model('user',user);