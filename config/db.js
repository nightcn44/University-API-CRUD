const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
