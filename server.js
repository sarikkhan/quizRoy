const express = require("express");
const morgan = require("morgan");
const { config } = require("dotenv");
const router = require("./Router/routes");
const app = express();
config();
const cron= require('node-cron');
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
const cronScheduler=require("./config/cron");
const db=require("./config/mongoDb");
// const mongoose = require("mongoose");
// router;

app.use(morgan("tiny"));
app.use(express.json());


app.use("/api", router);
app.get("/", async (req, res, next) => {
  try {
    res.status(200).json({ message: "get answer " });
  } catch (err) {
    res.json({ message: "error occured" });
  }
});





cron.schedule('30 21 * * *', () => {
   console.log('Running a job at 09:30 at india timezone');
 }, {
   scheduled: true,
   timezone: "Asia/Kolkata"
 });



app.listen(process.env.PORT, () => {
  console.log(`we are here bro ${process.env.PORT}`);
});
