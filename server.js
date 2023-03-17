const express = require("express");
const morgan = require("morgan");
const { config } = require("dotenv");
const router = require("./Router/routes");
const app = express();
config();
// const cron = require("node-cron");
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);
// const cronScheduler = require("./config/cron");
const db = require("./config/mongoDb");
const { attachSocketIOhandlers } = require("./socket-handler");
// const mongoose = require("mongoose");
// router;
attachSocketIOhandlers(io);
app.use(morgan("tiny"));
app.use(express.json());

// app.use("/api", router);
const controller=require("./controllers/controller")
app.get("/api", (req, res, next) => {
  controller.home(req, res,io);
});
app.post("/api/insertQuestion",controller.insertQuestions)
app.get("/", async (req, res, next) => {
  try {
    res.status(200).json({ message: "get answer " });
  } catch (err) {
    res.json({ message: "error occured" });
  }
});



app.listen(process.env.PORT, () => {
  console.log(`we are here bro ${process.env.PORT}`);
});
