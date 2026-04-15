import mongoose from "mongoose";
import dotenv from 'dotenv';

env.config();

try {

    const connectDb = async() => {
        let connect = await mongoose.connect(process.env.MONGO_URI);

        console.log("Db is connected!");
        
    }

} catch (error) {
    console.log(error.message);
    
}
