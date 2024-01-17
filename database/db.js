import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

export const Connection = async () => {
    const URL = `${MONGODB_URI}`;
    try{
        await mongoose.connect(URL);
        console.log("DataBase connected successfully");
    }
    catch(error){
        console.log("Error while connecting to DataBase",error.message);
    }
}
