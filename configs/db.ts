import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL not found in environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URL);

    console.log(" MongoDB Connected Successfully");
  } catch (error: any) {
    console.error(" MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
