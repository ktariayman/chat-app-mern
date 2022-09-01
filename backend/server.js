const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const colors = require("colors");
require("dotenv").config();

const auth = require("./routes/auth");

const PORT = process.env.PORT || process.env.API_PORT;
connectDB()

// middleware
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth' ,auth)

// server
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });