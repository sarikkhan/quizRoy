const express = require("express");
const morgan = require("morgan");
const { config } = require("dotenv");
const router = require("./Router/routes");
const app = express();
const mongoose = require("mongoose");
//router;

app.use(morgan("tiny"));
app.use(express.json());
config();

app.use("/api", router);
app.get("/", async (req, res, next) => {
  try {
    res.status(200).json({ message: "get answer " });
  } catch (err) {
    res.json({ message: "error occured" });
  }
});
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database err ", err);
  });
app.listen(process.env.PORT, () => {
  console.log(`we are here bro ${process.env.PORT}`);
});
