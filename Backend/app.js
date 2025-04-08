const express = require('express');
const app = express();
const cors = require('cors');

module.exports = app;

//CORS
app.use(cors());

//JSON
app.use(express.json());

//ROUTES
