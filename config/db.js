const mongoose = require('mongoose');

require('dotenv').config();

// check if MONGO_URI is missing in .env file
if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is missing in .env');
  process.exit(1);
}

// connect to MongoDB and log a success message
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;