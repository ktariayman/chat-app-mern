const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const colors = require("colors");
require("dotenv").config();
const auth = require("./routes/auth");
const friendsInvitations = require("./routes/friendsInvitations");
const socketServer  = require("./socketServer");
const PORT = process.env.PORT || process.env.API_PORT;
connectDB()

// middleware
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth' ,auth)
app.use('/api/friend-invitation',friendsInvitations)

// server
const server = http.createServer(app);
socketServer.registerSocketServer(server);
server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });