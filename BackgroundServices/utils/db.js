const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// DB
const DB = process.env.DB;

const dbConnection = async () => {
  try {
    await mongoose.connect(DB).then(() => {
      console.log("MongoDB connection successful");
    });
  } catch (error) {
    console.log(error);
    setTimeout(dbConnection, 5000);
  }
};

module.exports = dbConnection;
