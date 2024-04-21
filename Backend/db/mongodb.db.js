import mongoose from "mongoose";
import { MONGODB_URI, MONGODB_HOST, MONGODB_PASS } from "../config/config.js";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 30000, // 30 seconds
      user: MONGODB_HOST,
      pass: MONGODB_PASS,
    });

    console.log("Successfully connected to MongoDB...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

export { connectToMongoDB };
