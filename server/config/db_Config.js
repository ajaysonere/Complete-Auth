import mongoose from "mongoose";
import 'dotenv/config';

const Connection = async() => {
   
   try {
       const con = await mongoose.connect(process.env.MONGO_URL, {
           useNewUrlParser: true
       });

       if(!con){
          console.log('Error Occured while connecting to database');
       }

       console.log("DB Connected");

   } catch (error) {
      console.log(`DB Connection Failed ${error.message}`);
   }
}

export default Connection;
