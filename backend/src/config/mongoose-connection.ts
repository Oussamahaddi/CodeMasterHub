import mongoose from "mongoose";

export const connectionToDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    console.log('connected to MongoDb');
  } catch (error) {
    throw new Error('Failed to connect to MongoDb')
  }
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err : Error) => console.log(`connection err ${err}`))
}