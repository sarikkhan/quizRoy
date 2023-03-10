const express = require("express");
const morgan = require("morgan");
const { config } = require("dotenv");
const router = require("./Router/routes");
const app = express();
config();

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

app.listen(process.env.PORT, () => {
  console.log(`we are here bro ${process.env.PORT}`);
});
