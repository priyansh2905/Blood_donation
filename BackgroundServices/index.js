const express = require("express");
const app = express();

const dotenv = require("dotenv");
const dbConnection = require("./utils/db");
dotenv.config();

//Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Background Services is running on ${PORT}`);
  dbConnection();
});
