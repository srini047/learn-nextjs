import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose
      .connect(process.env.MONGODB_URL!)
      const connection = mongoose.connection;

      connection.on('connected', () => {
        console.log('Connected to MongoDB...');
      })

      connection.on('error', (err: any) => {
        console.log("MongoDB connection error. Please make sure that MongoDB is running... " + err);
      });
  } catch (error) {
    console.log(error);
  }
}
