import mongoose from "mongoose";

export const connectionToDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    console.log('connected to MongoDb');
  } catch (error) {
    
  }
}